<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import {
		Menu,
		HelpCircle,
		Laugh,
		CheckSquare,
		Vote,
		Home,
		Brain,
		Paintbrush,
		SunMoon,
		X
	} from 'lucide-svelte';
	import * as Command from '$lib/components/ui/command';
	import { onMount } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';

	import { toggleMode } from 'mode-watcher';

	let open = false;

	function openMenu() {
		open = true;
	}

	function closeMenu() {
		open = false;
	}

	function toggleColorful() {
		window.document.querySelector('html').classList.toggle('colorful');
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.keyCode == 9) {
				e.preventDefault();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function colorAndClose() {
		closeMenu();
		toggleColorful();
	}
	function darkAndClose() {
		closeMenu();
		toggleMode();
	}
</script>

<Menubar.Root
	class="!max-w-none prose prose-a:px-1 prose-a:decoration-2 prose-a:no-underline dark:prose-invert rounded-none border-b border-none lg:px-4 border"
>
	<Menubar.Menu>
		<div class="hidden lg:flex gap-x-2 justify-start mt-2 w-screen">
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
			<Menubar.Item>
				<a class="hover:underline" href="/wyr">Would you rather?</a>
			</Menubar.Item>
			<Menubar.Item class="">
				<a class="hover:underline" href="/facts">Facts</a>
			</Menubar.Item>
			<Menubar.Item class="flex-1 justify-start">
				<a class="hover:underline" href="/nhie">Never have I ever</a>
			</Menubar.Item>
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
		<div class="flex justify-start lg:hidden mt-3 gap-2 w-screen">
			<div class="flex-1 justify-start self-center">
				<Menubar.Item>
					<a class="hover:underline" href="/">Home</a>
				</Menubar.Item>
			</div>
			<Button on:click={toggleMode} size="icon" variant="outline" class="ml-5">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
			</Button>
			<Button size="icon" variant="outline" on:click={openMenu}>
				<Menu />
			</Button>

			<div class="w-5" />
		</div></Menubar.Menu
	>
</Menubar.Root>
<Command.Dialog bind:open>
	<Command.Input placeholder="Search for a game..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Games">
			<a href="/trivia" on:click={closeMenu}>
				<Command.Item>
					<CheckSquare class="mr-2 h-4 w-4" />
					<span>Trivia</span>
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
			<a href="/nhie" on:click={closeMenu}>
				<Command.Item class="flex">
					<X class="mr-2 h-4 w-4" />
					<span class="flex-1">Never have I ever</span>
					<Badge class="dark:bg-sky-300 dark:hover:bg-sky-200 bg-sky-700 hover:bg-sky-800"
						>New</Badge
					>
				</Command.Item>
			</a>
			<a href="/facts" on:click={closeMenu}>
				<Command.Item>
					<Brain class="mr-2 h-4 w-4" />
					<span>Facts</span>
				</Command.Item>
			</a>
			<a href="/wyr" on:click={closeMenu}>
				<Command.Item>
					<HelpCircle class="mr-2 h-4 w-4" />
					<span>Would you rather</span>
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
			<div on:click={colorAndClose}>
				<Command.Item>
					<Paintbrush class="mr-2 h-4 w-4" />
					Toggle colorful mode
				</Command.Item>
			</div>
			<div on:click={darkAndClose}>
				<Command.Item>
					<SunMoon class="mr-2 h-4 w-4" />
					Toggle dark mode
				</Command.Item>
			</div>
		</Command.Group>
	</Command.List>
</Command.Dialog>
