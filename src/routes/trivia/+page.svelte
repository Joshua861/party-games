<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Check, ChevronRight } from 'lucide-svelte';
	import he from 'he';
	import { get } from 'svelte/store';

	let question = 'Loading...';
	let correct_answer = 'Loading...';
	let incorrect_answers = ['Loading...', 'Loading...', 'Loading...'];
	let answers;
	let correct = 'none';
	let showNext = false;

	$: {
		answers = [correct_answer, ...incorrect_answers];
		shuffleArray(answers);
		answers = answers.map((answer) => ({
			text: answer,
			isCorrect: answer === correct_answer,
			clicked: false
		}));
	}

	const getQuestion = async () => {
		showNext = false;
		correct = 'none';
		question = 'Loading...';
		correct_answer = 'Loading...';
		incorrect_answers = ['Loading...', 'Loading...', 'Loading...'];

		let response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
		let data = await response.json();
		let results = data.results[0];

		question = he.decode(results.question);

		correct_answer = he.decode(results.correct_answer);
		incorrect_answers = results.incorrect_answers.map(he.decode);
	};

	onMount(() => {
		getQuestion();
	});

	function checkAnswer(answer) {
		correct = answer === correct_answer;
		answer.clicked = true;
	}

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	$: if (correct !== 'none') {
		showNext = true;
	}

	let isOnline: boolean;

	onMount(() => {
		isOnline = get(isOnline);
	});

	$: console.log(isOnline);
</script>

<svelte:head>
	<title>Trivia</title>
</svelte:head>

<h1>Trivia</h1>

<p class="text-xl italic">
	{question}
</p>

<div class="grid grid-cols-1 sm:grid-cols-2">
	{#each answers as answer}
		<Button
			on:click={() => checkAnswer(answer.text)}
			class="h-fit inline-block my-1 sm:mx-1 {correct !== 'none' && answer.isCorrect
				? 'dark:bg-lime-300 dark:hover:bg-lime-200 bg-green-600 hover:bg-green-500'
				: ''} {correct !== 'none' && !answer.isCorrect
				? 'dark:hover:bg-red-300 hover:bg-red-600'
				: ''}"
		>
			{#if correct !== 'none' && answer.isCorrect}
				<Check class="absolute" />
			{/if}
			{answer.text}</Button
		>
	{/each}
</div>

<br />

{#if showNext}
	<Button variant="secondary" on:click={getQuestion}>
		<ChevronRight class="pr-2" />
		Next
	</Button>
{/if}

{#if isOnline === false}
	<p class="text-red-500">This game does not work offline.</p>
{/if}
