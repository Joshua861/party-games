/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
/// <reference lib="esnext" />
/// <reference types="@sveltejs/kit" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';
import { updateOnlineStatus } from './lib/isOnline';

const CACHE = `cache-${version}`;
const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

// Install

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

// Activate

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

// self.addEventListener('fetch', (event) => {
// 	if (event.request.method != 'GET') return;
//
// 	async function respond() {
// 		const url = new URL(event.request.url);
// 		const cache = await caches.open(CACHE);
//
// 		if (ASSETS.includes(url.pathname)) {
// 			const cachedResponse = await cache.match(url.pathname);
// 			if (cachedResponse) {
// 				return cachedResponse;
// 			}
// 		}
//
// 		try {
// 			const response = await fetch(event.request);
// 			const isNotExtension = url.protocol === 'http:';
// 			const isSucess = response.status === 200;
//
// 			if (isNotExtension && isSucess) {
// 				cache.put(event.request, response.clone());
// 			}
//
// 			return response;
// 		} catch {
// 			const cachedResponse = await cache.match(url.pathname);
//
// 			if (cachedResponse) {
// 				return cachedResponse;
// 			}
// 		}
// 	}
//
// 	event.respondWith(respond());
//
// 	return new Response('Not found', { status: 404 });
// });

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	updateOnlineStatus(true);

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			return cache.match(url.pathname);
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch {
			updateOnlineStatus(false);
			return cache.match(event.request);
		}
	}

	event.respondWith(respond());
});
