<script lang="ts">
	import { onMount } from 'svelte';
	import Vote from '../vote.svelte';
	import { red, green } from '../votes.js';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';

	let text;
	let topics = [];
	let chosenTopic = 'Loading...';

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

<h1>Debate Topics</h1>

<blockquote class="lead" on:click={refresh}>
	{chosenTopic}
</blockquote>

<Vote {red} {green} />

<div on:click={refresh}>
	<Button>
		<ChevronRight class="inline mr-3" />
		Next
	</Button>
</div>
<br />
<Separator />
<p class="italic text-neutral-500">This is not synced with other peoples responses.</p>
