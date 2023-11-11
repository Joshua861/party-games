<script type="text/javascript">
	import { onMount, afterUpdate } from 'svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Button } from '$lib/components/ui/button';

	let countryCode,
		countryName = '';
	let showAnswer;
	let validCountry;

	onMount(() => {
		randomCountry();
	});

	const randomCountry = async () => {
		showAnswer = false;
		validCountry = false;
		let response = await fetch('https://flagcdn.com/en/codes.json');
		let obj = await response.json();
		console.log(obj);
		let entries = Object.entries(obj);
		while (validCountry === false) {
			let index = Math.floor(Math.random() * entries.length);
			[countryCode, countryName] = entries[index];
			if (countryCode.includes('us-') === false) {
				validCountry = true;
			} else {
				console.log('State flag skipped!');
			}
		}
		console.log(countryCode, countryName);
		imgUrl = 'https://flagcdn.com/256x192/' + countryCode + '.png';
	};

	const toggleAnswer = () => {
		showAnswer = !showAnswer;
	};

	let imgUrl = '';
</script>

<h1>Flags</h1>

<figure>
	<div class="flex justify-center items-center">
		<img src={imgUrl} class="!rounded-none p-5" />
	</div>
	<figcaption class="!text-3xl font-bold dark:text-white text-black">
		{#if showAnswer}
			{countryName}
		{:else}
			<Skeleton class="w-[5em] h-[2.25rem] rounded-full" />
		{/if}
	</figcaption>
</figure>
<p class="sr-only">
	Sorry if you're using a screen reader, theres not really any way for me to make this acessible.
</p>

<Separator />
<br />

<div class="flex gap-5">
	<Button class="flex-1" on:click={toggleAnswer}>
		{showAnswer === false ? 'Show Answer' : 'Hide Answer'}</Button
	>
	<Button class="flex-1" on:click={randomCountry}>Next</Button>
</div>
