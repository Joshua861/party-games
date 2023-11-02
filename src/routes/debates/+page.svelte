<script lang="ts">
	import Wrapper from '../wrapper.svelte';
	import { onMount } from 'svelte';
	import Vote from '../vote.svelte';
	import { red, green } from '../votes.js';
	import { Button } from '$lib/components/ui/button';
	import { RotateCw } from 'lucide-svelte';

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
			'https://raw.githubusercontent.com/Joshua861/listof/main/debate-topics.txt'
		);
		console.log('Fetched list of debate topics.');
		text = await response.text();
		topics = text.split('\n').filter((topic) => topic.trim() !== '');
		refresh();
	};

	function refresh() {
		console.log('Refreshing...');
		chosenTopic = topics.random();
		red.set(0);
		green.set(0);
		console.log(chosenTopic);
	}
</script>

<Wrapper>
	<h1>Debate Topics</h1>

	<blockquote class="lead">
		{chosenTopic}
	</blockquote>

	<div on:click={refresh}>
		<Button>
			<RotateCw class="inline mr-3" />
			Refresh
		</Button>
	</div>

	<Vote {red} {green} />
</Wrapper>
