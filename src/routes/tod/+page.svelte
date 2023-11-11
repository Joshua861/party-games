<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from 'lucide-svelte';
	import he from 'he';

	let truths = [];
	let truth = 'Loading...';
	let dares = [];
	let dare = 'Loading...';

	let state: 'none' | 'truth' | 'dare' = 'none';

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	onMount(() => {
		getTods();
	});

	const getTods = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/Joshua861/listof/main/truth-or-dare.json'
		);
		console.log('Fetched list of tods!');
		let text = await response.json();
		truths = text.truth;
		dares = text.dare;
		console.log(truths);
	};

	function getTruth() {
		state = 'truth';
		truth = truths.random();
		console.log(truth);
	}
	function getDare() {
		state = 'dare';
		dare = dares.random();
		console.log(dare);
	}
	function refresh() {
		state = 'none';
	}
</script>

<h1>Truth or Dare?</h1>

{#if state === 'none'}
	<div class="flex gap-5">
		<Button on:click={getTruth} class="flex-1">Truth</Button>
		<Button on:click={getDare} class="flex-1">Dare</Button>
	</div>
{:else if state === 'truth'}
	<blockquote>
		{truth}
	</blockquote>
{:else}
	<blockquote>
		{dare}
	</blockquote>
{/if}

<br />

<div class="flex items-center space-x-2 h-12">
	<div on:click={refresh} on:keypress={refresh}>
		<Button class="w-full">
			<ChevronRight class="inline mr-3" />
			Next
		</Button>
	</div>
</div>
