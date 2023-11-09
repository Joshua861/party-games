<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from 'lucide-svelte';
	import he from 'he';

	let wyr = 'Loading...';
	let wyrs = [];

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	onMount(() => {
		getWyrs();
	});

	const getWyrs = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/svijaymohan745/Discord.JS-12-CON-Bot/master/messages/wyr/would-you-rather.json'
		);
		console.log('Fetched list of wyrs!');
		let text = await response.json();
		wyrs = text.map(he.decode);
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		wyr = wyrs.random();
		console.log('Wyr: ' + wyr);
	}
</script>

<h1>Would You Rather?</h1>

<blockquote class="text-lg">
	{wyr}
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
