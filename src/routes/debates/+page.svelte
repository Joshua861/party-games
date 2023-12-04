<script lang="ts">
	import { onMount } from 'svelte';
	import Vote from '../vote.svelte';
	import { red, green } from '../votes.js';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
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

<svelte:head>
	<title>Debates</title>
</svelte:head>

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
<br />
<Popover.Root>
	<Popover.Trigger>
		<Button variant="secondary">?</Button>
	</Popover.Trigger>
	<Popover.Content
		>Your votes are not synced with other people's responses. The idea for the voting thing is that
		you'd pass a phone around and people would press if they agreed or not. At the end you'd have
		the total.</Popover.Content
	>
</Popover.Root>
