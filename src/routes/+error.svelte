<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>
		{$page.status}: {$page.error.message}
	</title>
</svelte:head>

<img
	src="https://media.tenor.com/nYdAr6rffx0AAAAC/an-emoji-disintegrating-in-pain.gif"
	alt="That one meme of the emoji disintegrating"
/>

<h1 class="text-3xl font-bold">
	{$page.status}: {$page.error.message}!!!!!
</h1>
