<script type="text/javascript">
	import { X, Circle, RefreshCcw } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	let moves = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
	let hlTiles = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
	let playerToGo = 1;
	let gameOver = false;

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

<h1>Tic-Tac-Toe</h1>

<div class="grid grid-cols-3 border border-8">
	{#each moves as move, i}
		{#if move !== 'none'}
			<div
				class="aspect-square border border-8 {hlTiles[i] === 'yes'
					? 'dark:bg-green-600 bg-green-400 border-green-400 dark:border-green-600'
					: ''}"
			>
				{#if move === 'X'}
					<X class="w-full h-full" />
				{:else if move === 'O'}
					<Circle class="w-full h-full p-5" />
				{/if}
			</div>
		{:else}
			<button class="aspect-square border border-8" on:click={() => onMove(i)} />
		{/if}
	{/each}
</div>

<br />

<Button class="w-full" on:click={reset}>
	<RefreshCcw class="pr-2" />
	Reset</Button
>
