<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { ChevronRight, Eye, EyeOff } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

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
			'https://raw.githubusercontent.com/TabulateJarl8/randfacts/master/randfacts/safe.txt'
		);
		console.log('Fetched list of facts!');
		let text = await response.text();
		facts = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		fact = facts.random();
		console.log('Fact: ' + fact);
	}
</script>

<h1>Facts</h1>

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
