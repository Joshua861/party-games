<script type="ts">
	import Wrapper from '../wrapper.svelte';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { RotateCw } from 'lucide-svelte';
	import { Eye } from 'lucide-svelte';

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

<Wrapper>
	<h1>Jokes</h1>

	<blockquote class="text-lg">
		Q: {q}
		<br /><br />
		{#if show}
			<span class="transition-all">A: {a}</span>
		{/if}
		{#if show == false}
			<Skeleton class="w-[15em] h-[1.75rem]" />
		{/if}
	</blockquote>
	<Separator class="my-4" />
	<div class="flex items-center space-x-2 h-12">
		<div class="p-0 m-0" on:keypress={toggleAnswer} on:click={toggleAnswer}>
			<Button>
				<Eye class="inline mr-3" />

				Show answer</Button
			>
		</div>
		<Separator orientation="vertical" class="!mx-5 !my-0" />
		<div on:click={refresh} on:keypress={refresh}>
			<Button>
				<RotateCw class="inline mr-3" />
				Refresh
			</Button>
		</div>
	</div>
</Wrapper>
