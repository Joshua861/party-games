<script lang="ts">
	export let path: string;
	export let credits: boolean;
	export let desc: string;
	export let title: string;

	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import Image from 'svimg/Image.svelte';
</script>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/{path}.png" alt={title} />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center"
		>
			<h2>{title}</h2>
			<p class="mb-8 leading-relaxed">{desc}</p>
			<div class="flex justify-center gap-3">
				<a href="/{path}.png"><Button>Check it out!</Button></a>
				{#if credits}
					<a href="/credits#{path}"><Button variant="secondary">Credits</Button></a>
				{/if}
			</div>
		</div>
	</div>
</section>
