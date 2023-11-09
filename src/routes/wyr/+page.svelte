<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from 'lucide-svelte';
	import he from 'he';

	let fact = 'Loading...';

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	let facts = [];

	onMount(() => {
		getFacts();
	});

	const getFacts = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/svijaymohan745/Discord.JS-12-CON-Bot/master/messages/wyr/would-you-rather.json'
		);
		console.log('Fetched list of facts!');
		let text = await response.json();
		facts = text.map(he.decode);
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		fact = facts.random();
		console.log('Fact: ' + fact);
	}
</script>

<h1>Would You Rather?</h1>

<blockquote class="text-lg">
	{fact}
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
