<script type="text/javascript">
	let x = false;
	import { X, Circle } from 'lucide-svelte';

	let comp;

	function click(id) {
		console.log('Played in square ' + id);
		x = !x;

		if (x === true) {
			comp = X;
		} else {
			comp = Circle;
		}

		document.getElementById(id).appendChild(comp);
		console.log(comp);
	}
</script>

<h1>Tic-Tac-Toe</h1>

<div class="grid grid-cols-3 rounded">
	<button on:click={() => click(1)} id="1" class="aspect-square border" />
	<button on:click={() => click(2)} id="2" class="aspect-square border" />
	<button on:click={() => click(3)} id="3" class="aspect-square border" />
	<button on:click={() => click(4)} id="4" class="aspect-square border" />
	<button on:click={() => click(5)} id="5" class="aspect-square border" />
	<button on:click={() => click(6)} id="6" class="aspect-square border" />
	<button on:click={() => click(7)} id="7" class="aspect-square border" />
	<button on:click={() => click(8)} id="8" class="aspect-square border" />
	<button on:click={() => click(9)} id="9" class="aspect-square border" />
</div>

{#if x}
	<h2>Player 2 to go.</h2>
{:else}
	<h2>Player 1 to go.</h2>
{/if}
