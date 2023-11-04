<script type="text/javascript">
	import Navbar from './navbar.svelte';
</script>

<div class="overflow-x-hidden">
	<Navbar />
	<div
		class="px-5 my-5 mx-auto prose prose-img:rounded-xl prose-a:decoration-2 prose-a:underline-offset-4 prose-a:font-bold lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert"
	>
		<slot />

		<br /><br />
	</div>
</div>
