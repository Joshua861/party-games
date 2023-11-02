<script type="ts">
	import Wrapper from '../wrapper.svelte';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { ChevronRight } from 'lucide-svelte';
	import { Eye } from 'lucide-svelte';
	import { EyeOff } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let q = '';
	let a = '';
	let show = false;

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	let jokes = [];

	onMount(() => {
		getJokes();
	});

	const getJokes = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/yesinteractive/dadjokes/master/controllers/jokes.txt'
		);
		console.log('Fetched list of jokes!');
		let text = await response.text();
		jokes = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		let joke = jokes.random();
		q = joke.split('<>')[0];
		a = joke.split('<>')[1];
		console.log('Q: ' + q + '\nA: ' + a);
		show = false;
	}

	function toggleAnswer() {
		show = !show;
	}
</script>

<h1>Jokes</h1>

<blockquote class="text-lg">
	{q}
	<br /><br />
	{#if show}
		<span in:fade={{ duration: 200 }} class="transition-all">{a}</span>
	{/if}
	{#if show == false}
		<div in:fade={{ duration: 200 }}>
			<Skeleton class="w-[15em] h-[1.75rem]" />
		</div>
	{/if}
</blockquote>
<Separator class="my-4" />
<div class="flex items-center space-x-2 h-12">
	<div class="p-0 m-0" on:keypress={toggleAnswer} on:click={toggleAnswer}>
		<Button class="w-full">
			{#if !show}
				<div in:fade={{ duration: 200 }}>
					<Eye class="inline mr-3" />
					Show answer
				</div>
			{/if}
			{#if show}
				<div in:fade={{ duration: 200 }}>
					<EyeOff class="inline mr-3" />
					Hide answer
				</div>
			{/if}
		</Button>
	</div>
	<Separator orientation="vertical" class="!mx-5 !my-0" />
	<div on:click={refresh} on:keypress={refresh}>
		<Button class="w-full">
			<ChevronRight class="inline mr-3" />
			Next
		</Button>
	</div>
</div>
