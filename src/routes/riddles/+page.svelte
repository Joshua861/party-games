<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { ChevronRight, EyeOff, Eye } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import Papa from 'papaparse';

	let q = '';
	let a = '';
	let show = false;

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	onMount(() => {
		getRiddles();
	});

	let rows = [];

	const getRiddles = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/crawsome/riddles/main/riddles.csv'
		);
		console.log('Fetched list of riddles!');
		const csv = await response.text();

		const parsedData = Papa.parse(csv, { header: true });
		rows = parsedData.data;

		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		let row = rows.random();
		q = row['QUESTIONS'];
		a = row['ANSWERS'];
		console.log('Q: ' + q + '\nA: ' + a);
		show = false;
	}

	function toggleAnswer() {
		show = !show;
	}
</script>

<h1>Riddles</h1>

<blockquote class="text-lg">
	<div on:click={refresh}>
		Q: {q}
	</div>
	<br /><br />
	<div on:click={toggleAnswer}>
		{#if show}
			<span in:fade={{ duration: 200 }} class="transition-all">A: {a}</span>
		{/if}
		{#if show == false}
			<div in:fade={{ duration: 200 }}>
				<Skeleton class="w-[15em] h-[1.75rem]" />
			</div>
		{/if}
	</div>
</blockquote>
<Separator class="my-4" />
<div class="flex items-center space-x-2 h-12">
	<div class="flex-1 p-0 m-0" on:keypress={toggleAnswer} on:click={toggleAnswer}>
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
	<div class="flex-1" on:click={refresh} on:keypress={refresh}>
		<Button class="w-full">
			<ChevronRight class="inline mr-3" />
			Next
		</Button>
	</div>
</div>
