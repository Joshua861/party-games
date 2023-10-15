<script type="text/javascript">
	import Wrapper from '../wrapper.svelte';
	import { onMount } from 'svelte';
	import Vote from '../vote.svelte';
	import { red, green } from '../votes.js';

	let text;
	let topics = [];
	let chosenTopic = '';

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	onMount(() => {
		getTopics();
	});

	const getTopics = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/Joshua861/debate-topics/main/debate-topics.txt'
		);
		text = await response.text();
		topics = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	const refresh = () => {
		chosenTopic = topics.random();
		red.set(0);
		green.set(0);
	};
</script>

<Wrapper>
	<h1>Debate Topics</h1>

	<blockquote class="lead">
		{chosenTopic}
	</blockquote>

	<button
		class="hover:underline decoration-2 underline-offset-4 dark:hover:text-white hover:text-black"
		on:click={refresh}
	>
		Refresh
	</button>

	<Vote {red} {green} />

	<br /><br />

	<details>
		<summary
			>All topics <span class="text-sm"
				><a
					class="text-neutral-500 font-light no-underline hover:underline hover:font-bold"
					href="https://raw.githubusercontent.com/Joshua861/debate-topics/main/debate-topics.txt"
					>(raw)</a
				></span
			></summary
		>
		{#each topics as topic}
			<li>
				{topic}
			</li>
		{/each}
	</details>

	<ul />
</Wrapper>
