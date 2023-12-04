<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from 'lucide-svelte';

	let nhie = 'Loading...';

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	let nhies = [];

	onMount(() => {
		getNhies();
	});

	const getNhies = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/Joshua861/listof/main/never-have-i-ever.txt'
		);
		console.log('Fetched list of nhies!');
		let text = await response.text();
		nhies = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		nhie = nhies.random();
		console.log('Nhie: ' + nhie);
	}
</script>

<svelte:head>
	<title>Never have I ever</title>
</svelte:head>
<h1>Never Have I Ever</h1>

<blockquote class="text-lg">
	{nhie}
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
