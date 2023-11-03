<script type="text/javascript">
	import * as Menubar from '$lib/components/ui/menubar';
	import { Menu } from 'lucide-svelte';
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
		</div>
		<div class="flex justify-start sm:hidden w-screen">
			<div class="flex-1 justify-start">
				<Menubar.Item>
					<a class="hover:underline" href="/">Home</a>
				</Menubar.Item>
			</div>
			<div class="flex-initial mr-0">
				<Menubar.Trigger>
					<Menu />
				</Menubar.Trigger>
				<Menubar.Content>
					<a class="hover:underline" href="/debates">
						<Menubar.Item>Debate Topics</Menubar.Item>
					</a>
					<a class="hover:underline" href="/jokes">
						<Menubar.Item>Jokes</Menubar.Item>
					</a>
					<a class="hover:underline" href="/riddles">
						<Menubar.Item>Riddles</Menubar.Item>
					</a>
				</Menubar.Content>
			</div>
		</div>
	</Menubar.Menu>
</Menubar.Root>
