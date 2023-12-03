<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';

	let id = $page.url.searchParams.get('id');

	onMount(() => {
		getFacts();
	});

	let fact = 'Loading...';
	let facts = [];

	const getFacts = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/TabulateJarl8/randfacts/master/randfacts/safe.txt'
		);
		console.log('Fetched list of facts!');
		let text = await response.text();
		facts = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		fact = facts[id];
		console.log('Fact: ' + fact);
	}
</script>

<div class="w-full h-[80vh] flex">
	<blockquote class="text-lg my-auto text-4xl">
		{fact}
	</blockquote>
</div>

<Button href="/facts" class="no-underline">More facts</Button>
