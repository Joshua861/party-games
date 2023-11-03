<script type="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import he from 'he';

	let question = 'Loading...';
	let correct_answer = 'Loading...';
	let incorrect_answers = ['Loading...', 'Loading...', 'Loading...'];
	let answers;
	let correct = 'none';

	$: answers = [correct_answer, ...incorrect_answers];

	$: {
		answers = [correct_answer, ...incorrect_answers];
		shuffleArray(answers);
		answers = answers.map((answer) => ({ text: answer, isCorrect: answer === correct_answer }));
	}

	const getQuestion = async () => {
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
	}

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	$: if (correct !== 'none') {
		setTimeout(getQuestion, 3000);
	}
</script>

<h1>Trivia</h1>

{#if correct !== 'none'}
	{#if correct}
		<p class="text-lime-300 text-2xl font-bold">Nice!</p>
	{:else}
		<p class="text-red-300 text-2xl font-bold">Incorrect</p>
	{/if}
{:else}
	<p class="text-xl italic">
		{question}
	</p>
{/if}

<div class="grid grid-cols-1 sm:grid-cols-2">
	{#each answers as answer, i}
		<Button
			on:click={() => checkAnswer(answer.text)}
			class="inline-block my-1 sm:mx-1 {correct !== 'none' && answer.isCorrect
				? 'bg-lime-400 hover:bg-lime-300'
				: ''}">{answer.text}</Button
		>
	{/each}
</div>
