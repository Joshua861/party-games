<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { art } from './art';
	let livesLost = 0;

	let word: string;
	let words: string[];
	let hidden: string = '';
	let letters1 = 'QWERTYUIOP';
	let letters2 = 'ASDFGHJKL';
	let letters3 = 'ZXCVBNM';
	let angry = false;
	let wrongLetters = [];

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	onMount(() => {
		getWords();
	});

	const getWords = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/bitcoin/bips/master/bip-0039/english.txt'
		);
		console.log('Fetched list of words!');
		let text = await response.text();
		words = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		word = words.random();
		console.log('Word: ' + word);

		hidden = '_'.repeat(word.split('').length);
		livesLost = 0;
		angry = false;
		wrongLetters = [];
	}

	function guess(letter) {
		console.log(letter.toLowerCase());
		if (word.includes(letter.toLowerCase())) {
			console.log('Letter in word');
			let hiddenArray = hidden.split('');
			for (let i = 0; i < word.split('').length; i++) {
				if (word[i] == letter.toLowerCase()) {
					hiddenArray[i] = letter.toLowerCase();
				}
			}
			hidden = hiddenArray.join('');
			console.log(hidden);
		} else {
			angry = true;
			wrongLetters.push(letter);
			console.log(wrongLetters);
			livesLost += 1;
			setTimeout(() => {
				angry = false;
			}, 500);
		}
	}
</script>

<h1>Hangman</h1>

<pre
	class="bg-background w-fit mx-auto font-bold {angry === true
		? 'text-red-500'
		: 'text - foreground'} text-3xl">
{#if livesLost <= 7}
		{art[livesLost]}
	{:else}
		GAME OVER!!!
    <br />
    <Button on:click={refresh}>Restart?</Button>
	{/if}
</pre>

<pre
	class="bg-background w-fit mx-auto font-bold text-foreground text-3xl tracking-[.5em] {angry ===
	true
		? 'text-red-500'
		: 'text - foreground'}">
{hidden}
</pre>

{#each [letters1.split(''), letters2.split(''), letters3.split('')] as letters}
	<div class="flex gap-1 md:gap-3 mx-auto justify-center">
		{#each letters as letter}
			<button
				variant="outline"
				on:click={() => guess(letter)}
				class="px-2 border rounded flex-1 h-16 {angry === true
					? 'text-red-500'
					: 'text - foreground'}"
			>
				{letter}
			</button>
		{/each}
	</div>
	<div class="h-1 md:w-3" />
{/each}
