<script>
	import '../app.postcss';
	import Wrapper from './wrapper.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(() => {
		loading = false;
	});
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0A0A0A" />
	<meta name="google-site-verification" content="DyQuk21ziFyRNfxYbKS8jO-laFmZ-g9GZa0qYovhGbc" />
</svelte:head>

<ModeWatcher />
{#if loading}
	<div
		class="w-screen h-screen bg-background content-center grid grid-cols-3 justify-items-center absolute"
	>
		<div />
		<div
			class="inline-block h-32 w-32 animate-spin rounded-full border-[12px] border-solid border-current border-r-transparent align-[-0.125em] dark:text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
			role="status"
		>
			<span class="sr-only">Loading...</span>
		</div>
		<div />
	</div>
{/if}
<Wrapper>
	<slot />
</Wrapper>
