<script type="text/javascript">
	import { X, Circle, RefreshCcw } from 'lucide-svelte';
	import { scale } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';

	let moves = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
	let hlTiles = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
	let playerToGo = 1;
	let gameOver = false;

	let draw = false;
	$: draw = !moves.includes('none') && !gameOver;

	if (draw === true) {
		console.log('DRAW');
	}

	function onMove(index) {
		if (gameOver == false) {
			if (playerToGo === 1) {
				moves[index] = 'X';
				playerToGo = 2;
			} else {
				moves[index] = 'O';
				playerToGo = 1;
			}

			const result = checkWin();
			if (result.winner) {
				gameOver = true;
				highlightTiles(result.winningTiles);
			}
		}
	}

	function checkWin() {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			if (moves[a] !== 'none' && moves[a] === moves[b] && moves[a] === moves[c]) {
				return {
					winner: moves[a],
					winningTiles: combination
				};
			}
		}

		return {
			winner: null,
			winningTiles: []
		};
	}

	function highlightTiles(winningTiles) {
		hlTiles = hlTiles.map((tile, index) => (winningTiles.includes(index) ? 'yes' : 'no'));
	}

	function reset() {
		moves = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
		hlTiles = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
		gameOver = false;
		playerToGo = 1;
	}
</script>

<svelte:head>
	<title>Tic tac toe</title>
</svelte:head>

<h1>Tic-Tac-Toe</h1>

<div class="grid grid-cols-3">
	{#each moves as move, i}
		{#if move !== 'none'}
			<div
				class="flex justify-content-center items-center aspect-square border {hlTiles[i] === 'yes'
					? 'dark:bg-green-600 bg-green-400 border-green-400 dark:border-green-600'
					: ''}"
			>
				<div in:scale class="w-full h-full aspect-square flex justify-content-center items-center">
					{#if move === 'X'}
						<X class="w-full h-full" />
					{:else if move === 'O'}
						<Circle class="w-[75%] h-[75%] mx-auto my-auto" />
					{/if}
				</div>
			</div>
		{:else}
			<button class="aspect-square border" on:click={() => onMove(i)} />
		{/if}
	{/each}
</div>

<br />

<Button class="w-full" on:click={reset}>
	<RefreshCcw class="pr-2" />
	Reset</Button
>
