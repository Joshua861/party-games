<script type="text/javascript">
	import Navbar from './navbar.svelte';
</script>

<div id="theTop" />
<Navbar class="w-screen" />

<div
	class="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert mx-auto prose-img:rounded-xl my-5 px-5 prose-a:decoration-2 prose-a:underline-offset-4 prose-a:font-bold"
>
	<slot />

	<br /><br />

	<a class="not-prose rounded-xl bg-neutral-200 dark:bg-neutral-800 p-3 h-8 w-8" href="#theTop">↑</a
	>
</div>
