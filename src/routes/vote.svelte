<script type="text/javascript">
	import { red, green, incrementGreen, incrementRed } from './votes.js';
</script>

<div class="my-5 w-full sm:flex font-bold">
	<button
		on:click={incrementGreen}
		class="text-2xl text-green-950 sm:p-5 dark:bg-green-300 bg-green-500 w-full sm:w-6/12 inline rounded-lg m-2 h-32 hover:dark:bg-green-400 transition-all hover:bg-green-400 sm:h-fit"
		>Agreed/Yes
		<br /><br />
		<span class="text-5xl">{$green}</span>
	</button>
	<button
		on:click={incrementRed}
		class="text-2xl text-red-950 sm:p-5 dark:bg-red-300 bg-red-500 inline w-full sm:w-6/12 rounded-lg m-2 hover:dark:bg-red-400 transition-all hover:bg-red-400 h-32 sm:h-fit"
		>Disagree/No
		<br /><br />
		<span class="text-5xl">{$red}</span>
	</button>
</div>
