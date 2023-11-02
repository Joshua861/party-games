<script type="text/javascript">
	import { red, green, incrementGreen, incrementRed } from './votes.js';
</script>

<div class="my-5 w-full font-bold sm:flex">
	<button
		on:click={incrementGreen}
		class="inline m-2 w-full h-32 text-2xl bg-green-500 rounded-lg transition-all sm:p-5 sm:w-6/12 dark:bg-green-300 hover:bg-green-400 text-green-950 sm:h-fit hover:dark:bg-green-400"
		>Agreed/Yes
		<br /><br />
		<span class="text-5xl">{$green}</span>
	</button>
	<button
		on:click={incrementRed}
		class="inline m-2 w-full h-32 text-2xl bg-red-500 rounded-lg transition-all sm:p-5 sm:w-6/12 dark:bg-red-300 hover:bg-red-400 text-red-950 sm:h-fit hover:dark:bg-red-400"
		>Disagree/No
		<br /><br />
		<span class="text-5xl">{$red}</span>
	</button>
</div>
