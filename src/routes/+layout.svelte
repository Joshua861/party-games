<script>
	import '../app.postcss';
	import Wrapper from './wrapper.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0A0A0A" />
</svelte:head>

<ModeWatcher />
<Wrapper>
	<slot />
</Wrapper>
