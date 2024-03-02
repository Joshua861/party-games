<script type="text/javascript">
	import { fly } from 'svelte/transition';
	import { getOnlineStatus } from './isOnline.ts';

	let online;

	setInterval(() => {
		online = getOnlineStatus();
	}, 500);

	let show = true;

	function hide() {
		show = false;
	}
</script>

{#if show && !online}
	<div
		class="border border-red-300 dark:border-red-900 border-4 absolute left-[50%] translate-x-[-50%] z-10 p-5 dark:bg-red-950 bg-red-200 rounded-xl max-w-[400px] w-11/12 drop-shadow-xl"
		on:click={hide}
		in:fly={{ y: -50 }}
		out:fly={{ y: 50 }}
	>
		You are offline, stuff might randomly break, and some games are completely unplayable. Any page
		you haven't visited before going offline will also not work.
	</div>
{/if}
