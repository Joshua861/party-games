<script type="text/javascript">
	import { PartyPopper } from 'lucide-svelte';
	import Carousel from 'svelte-carousel';
	import Image from 'svimg/Image.svelte';
	import { browser } from '$app/environment';
</script>

<h1>Party Games <PartyPopper class="inline-block" size="32" /></h1>

{#if browser}
	<Carousel>
		<Image src="/images/trivia.png" alt="Screenshot of the trivia game" />
		<Image src="/images/flags.png" alt="Screenshot of the flags game" />
		<Image src="/images/debates.png" alt="Screenshot of the debates game" />
		<Image src="/images/jokes.png" alt="Screenshot of the jokes section" />
		<Image src="/images/logos.png" alt="Screenshot of the logo guessing game" />
	</Carousel>
{/if}
