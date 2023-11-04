<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { Menu, HelpCircle, Laugh, CheckSquare, Vote, Home, SunMoon } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
	import { onMount } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';

	let open = false;

	function openMenu() {
		open = true;
	}

	function closeMenu() {
		open = false;
	}

	function toggleDark() {
		window.document.body.classList.toggle('dark');
	}
	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.keyCode == 9) {
				e.preventDefault();
				open = !open;
			}
		}

		if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
			toggleDark();
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<Menubar.Root
	class="prose prose-a:px-1 prose-a:decoration-2 prose-a:no-underline dark:prose-invert w-[9999em] rounded-none border-b border-none lg:px-4"
>
	<Menubar.Menu>
		<div class="hidden sm:flex">
			<Menubar.Item>
				<a class="hover:underline" href="/">Home</a></Menubar.Item
			>
			<Menubar.Item>
				<a class="hover:underline" href="/debates">Debate Topics</a>
			</Menubar.Item>
			<Menubar.Item>
				<a class="hover:underline" href="/jokes">Jokes</a>
			</Menubar.Item>
			<Menubar.Item>
				<a class="hover:underline" href="/riddles">Riddles</a>
			</Menubar.Item>
			<Menubar.Item>
				<a class="hover:underline" href="/trivia">Trivia</a>
			</Menubar.Item>
			<button class="ml-2" on:click={toggleDark}>
				<SunMoon size="24" />
			</button>
		</div>
		<div class="flex justify-start sm:hidden w-screen mt-3">
			<div class="flex-1 justify-start">
				<Menubar.Item>
					<a class="hover:underline" href="/">Home</a>
				</Menubar.Item>
			</div>
			<div class="flex-initial mr-3">
				<button on:click={toggleDark}>
					<SunMoon size="32" />
				</button>
			</div>

			<div class="flex-initial mr-0">
				<button on:click={openMenu}>
					<Menu size="32" />
				</button>
			</div>

			<div class="w-5" />
		</div>
	</Menubar.Menu>
</Menubar.Root>
<Command.Dialog bind:open>
	<Command.Input placeholder="Search for a game..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Games">
			<a href="/trivia" on:click={closeMenu}>
				<Command.Item class="flex">
					<CheckSquare class="mr-2 h-4 w-4" />
					<span class="flex-1">Trivia</span><Badge
						class="dark:bg-sky-300 dark:hover:bg-sky-200 bg-sky-700 hover:bg-sky-800">New</Badge
					>
				</Command.Item>
			</a>
			<a href="/debates" on:click={closeMenu}>
				<Command.Item>
					<Vote class="mr-2 h-4 w-4" />
					<span>Debate topics</span>
				</Command.Item>
			</a>
			<a href="/jokes" on:click={closeMenu}>
				<Command.Item>
					<Laugh class="mr-2 h-4 w-4" />
					<span>Jokes</span>
				</Command.Item>
			</a>
			<a href="/riddles" on:click={closeMenu}>
				<Command.Item>
					<HelpCircle class="mr-2 h-4 w-4" />
					<span>Riddles</span>
				</Command.Item>
			</a>
		</Command.Group>
		<Command.Group heading="Other">
			<a href="/" on:click={closeMenu}>
				<Command.Item>
					<Home class="mr-2 h-4 w-4" />
					<span>Home</span>
				</Command.Item>
			</a>
		</Command.Group>
	</Command.List>
</Command.Dialog>
