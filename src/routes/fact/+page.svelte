<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	let id = $page.url.searchParams.get('id');
	let noID = false;

	$: {
		if (noID) {
			goto('/facts');
		}
	}

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
		if (id) {
			console.log('Refreshing...');
			fact = facts[id];
			console.log('Fact: ' + fact);
			if (!fact) {
				fact = "Something weird happened. Kind of a bruh moment ngl. I'll redirect you in a sec...";
				setTimeout(() => {
					goto('/facts');
				}, 3000);
			}
		} else {
			noID = true;
		}
	}
</script>

<div class="w-full h-[80vh] flex">
	<p class="text-lg my-auto text-4xl sm:w-5/6 mx-auto">
		{fact}
	</p>
</div>

<Button href="/facts" class="no-underline">More facts</Button>
