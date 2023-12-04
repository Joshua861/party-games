<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from 'lucide-svelte';

	let icebreaker = 'Loading...';

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	let icebreakers = [];

	onMount(() => {
		getIcebreakers();
	});

	const getIcebreakers = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/Joshua861/listof/main/icebreakers.txt'
		);
		console.log('Fetched list of icebreakers!');
		let text = await response.text();
		icebreakers = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		icebreaker = icebreakers.random();
		console.log('Icebreaker: ' + icebreaker);
	}
</script>

<svelte:head>
	<title>Icebreakers</title>
</svelte:head>
<h1>Icebreakers</h1>

<blockquote class="text-lg">
	{icebreaker}
</blockquote>

<br />

<div class="flex items-center space-x-2 h-12">
	<div on:click={refresh} on:keypress={refresh}>
		<Button class="w-full">
			<ChevronRight class="inline mr-3" />
			Next
		</Button>
	</div>
</div>
