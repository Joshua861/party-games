<script type="text/javascript">
	import { PartyPopper } from 'lucide-svelte';
	import Carousel from 'svelte-carousel';
	import Image from 'svimg/Image.svelte';
	import { browser } from '$app/environment';
</script>

<h1>Party Games <PartyPopper class="inline-block" size="32" /></h1>

{#if browser}
	<Carousel>
		<a href="/trivia"><Image src="/images/trivia.png" alt="Screenshot of the trivia game" /></a>
		<a href="/flags"><Image src="/images/flags.png" alt="Screenshot of the flags game" /></a>
		<a href="/debates"><Image src="/images/debates.png" alt="Screenshot of the debates game" /></a>
		<a href="/jokes"><Image src="/images/jokes.png" alt="Screenshot of the jokes section" /></a>
		<a href="/logos"><Image src="/images/logos.png" alt="Screenshot of the logo game" /></a>
	</Carousel>
{/if}
