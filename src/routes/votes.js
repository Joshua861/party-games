import { writable } from 'svelte/store';

export const red = writable(0);
export const green = writable(0);

export function incrementRed() {
	red.update((n) => n + 1);
}
export function incrementGreen() {
	green.update((n) => n + 1);
}
