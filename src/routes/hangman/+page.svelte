<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { art } from './art';
	let livesLost = 0;

	let word: string;
	let words: string[];
	let hidden: string = '';
	let letters = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
	let emotion = 'neutral';
	let wrongLetters = [];
	let win = false;

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
		emotion = 'neutral';
		wrongLetters = [];
		win = false;
	}

	function guess(letter) {
		if (livesLost <= 7) {
			console.log(letter.toLowerCase());
			if (word.includes(letter.toLowerCase())) {
				emotion = 'happy';
				setTimeout(() => {
					emotion = 'neutral';
				}, 500);
				console.log('Letter in word');
				let hiddenArray = hidden.split('');
				for (let i = 0; i < word.split('').length; i++) {
					if (word[i] == letter.toLowerCase()) {
						hiddenArray[i] = letter.toLowerCase();
					}
				}
				hidden = hiddenArray.join('');
				console.log(hidden);
				if (hidden == word) {
					win = true;
				}
			} else {
				emotion = 'angry';
				wrongLetters.push(letter);
				console.log(wrongLetters);
				livesLost += 1;
				setTimeout(() => {
					emotion = 'neutral';
				}, 500);
			}
		}
	}
</script>

<svelte:head>
	<title>Hangman</title>
</svelte:head>
<h1>Hangman</h1>

<pre
	class="m-0 bg-background w-fit mx-auto font-bold {emotion === 'angry'
		? 'text-red-500'
		: 'text-foreground'} {emotion === 'happy' ? 'text-green-500' : ''} transition-all text-3xl">
{#if win}
		YOU WIN!!!

    <br />

    <Button on:click={refresh}>Restart?</Button>
	{:else if livesLost <= 7}
		{art[livesLost]}
	{:else}
		GAME OVER!!!

Word: {word}

    <Button on:click={refresh}>Restart?</Button>
	{/if}
</pre>

<pre
	class="bg-background w-fit mx-auto font-bold text-foreground text-3xl tracking-[.5em] {emotion ===
	'angry'
		? 'text-red-500'
		: 'text-foreground'} {emotion === 'happy' ? 'text-green-500' : ''} transition-all">
{hidden}
</pre>

{#each letters as letters}
	<div class="flex gap-1 md:gap-3 mx-auto justify-center">
		{#each letters.split('') as letter}
			<button
				variant="outline"
				on:click={() => guess(letter)}
				class="px-2 border rounded flex-1 h-16 {emotion === 'angry'
					? 'text-red-500'
					: 'text-foreground'}"
			>
				{letter}
			</button>
		{/each}
	</div>
	<div class="h-1 md:h-3" />
{/each}
