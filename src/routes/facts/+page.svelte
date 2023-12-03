<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Share } from 'lucide-svelte';

	let fact = 'Loading...';

	Array.prototype.randomID = function () {
		return Math.floor(Math.random() * this.length);
	};

	let facts = [];
	let id: number;

	onMount(() => {
		getFacts();
	});

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
		id = facts.randomID();
		fact = facts[id];
		console.log('Fact: ' + fact);
	}

	function share() {
		let copy = 'https://partygames.vercel.app/fact?id=' + id;
		navigator.clipboard.writeText(copy);
	}
</script>

<h1>Facts</h1>

<blockquote class="text-lg">
	{fact}
</blockquote>

<br />

<div class="flex inline-block flex-1 gap-3">
	<div class="flex items-center space-x-2 h-12">
		<div on:click={refresh} on:keypress={refresh}>
			<Button class="w-full">
				<ChevronRight class="inline mr-3" />
				Next
			</Button>
		</div>
	</div>
	<div class="flex items-center space-x-2 h-12">
		<div on:click={share} on:keypress={share}>
			<Button class="w-full">
				<Share class="inline mr-3" />
				Share
			</Button>
		</div>
	</div>
</div>
