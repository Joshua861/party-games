<script type="text/javascript">
	import { PartyPopper } from 'lucide-svelte';
	import Carousel from 'svelte-carousel';
	import Image from 'svimg/Image.svelte';
	import { browser } from '$app/environment';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
</script>

<h1>Party Games <PartyPopper class="inline-block" size="32" /></h1>

{#if browser}
	<Carousel>
		<a href="/trivia"><Image src="/images/trivia.png" alt="Screenshot of the trivia game" /></a>
		<a href="/flags"><Image src="/images/flags.png" alt="Screenshot of the flags game" /></a>
		<a href="/debates"><Image src="/images/debates.png" alt="Screenshot of the debates game" /></a>
		<a href="/jokes"><Image src="/images/jokes.png" alt="Screenshot of the jokes" /></a>
		<a href="/logos"><Image src="/images/logos.png" alt="Screenshot of the logo game" /></a>
		<a href="/facts"><Image src="/images/facts.png" alt="Screenshot of the facts" /></a>
		<a href="/tod"><Image src="/images/tod.png" alt="Screenshot of the truth or dare" /></a>
		<a href="/nhie"><Image src="/images/nhie.png" alt="Screenshot of the never have I ever" /></a>
		<a href="/wyr"><Image src="/images/wyr.png" alt="Screenshot of would you rather" /></a>
		<a href="/riddles"><Image src="/images/riddles.png" alt="Screenshot of the riddles" /></a>
		<a href="/xo"><Image src="/images/xo.png" alt="Screenshot of the tic tac toe" /></a>
		<a href="/icebreakers"><Image src="/images/icebreakers.png" alt="icebreakers" /></a>
	</Carousel>
{/if}

<p class="lead">Some fun party games that can be played with friends or alone.</p>
<p>
	There are lots of fun games to choose from, to find out more, press the menu button in the top
	right, or press TAB.
</p>

<section>
	<div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Guess the flag</h2>
			<p class="mb-8 leading-relaxed">
				Guess the flags? That sounds easy! (its not (theres so many random islands you've never
				heard of)).
			</p>
			<div class="flex justify-center gap-3">
				<a href="/flags"><Button>Check it out!</Button></a>
				<a href="/credits#flags"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/flags.png" alt="Screenshot of the flags game" />
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/jokes.png" alt="Screenshot of the dad jokes" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center"
		>
			<h2>Dad Jokes</h2>
			<p class="mb-8 leading-relaxed">Awesome dad jokes that are sure to maybe make you laugh!!!</p>
			<div class="flex justify-center gap-3">
				<a href="/jokes"><Button>Check it out!</Button></a>
				<a href="/credits#jokes"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Trivia</h2>
			<p class="mb-8 leading-relaxed">
				Guess as many flags as you can, how many can you get right? Huh? None???? LMAOOOOOOOOO
			</p>
			<div class="flex justify-center gap-3">
				<a href="/trivia"><Button>Check it out!</Button></a>
				<a href="/credits#trivia"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/trivia.png" alt="Screenshot of the trivia game" />
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/debates.png" alt="Screenshot of the debate topics" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center"
		>
			<h2>Debate Topics</h2>
			<p class="mb-8 leading-relaxed">
				A curated list of debate topics to help start a conversation.
			</p>
			<div class="flex justify-center gap-3">
				<a href="/debates"><Button>Check it out!</Button></a>
				<a href="/credits#debates"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Logo Guesser</h2>
			<p class="mb-8 leading-relaxed">
				What logo is it? IDK you need to guess??? Its like literally in the title. GUess!!!
			</p>
			<div class="flex justify-center gap-3">
				<a href="/logos"><Button>Check it out!</Button></a>
				<a href="/credits#logos"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/logos.png" alt="Screenshot of the logo game" />
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/facts.png" alt="Screenshot of the facts!" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center"
		>
			<h2>Facts</h2>
			<p class="mb-8 leading-relaxed">
				Fun, cool AND epic facts. Your brain will be soo full after this! "omg im so full" &lt;-
				your brain
			</p>
			<div class="flex justify-center gap-3">
				<a href="/facts"><Button>Check it out!</Button></a>
				<a href="/credits#facts"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Truth or Dare</h2>
			<p class="mb-8 leading-relaxed">
				You know like where you like, so what it is that it is. In this all that you have to do, and
				mind you this is very simple. Truth or dare!
			</p>
			<div class="flex justify-center gap-3">
				<a href="/tod"><Button>Check it out!</Button></a>
				<a href="/credits#tod"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/tod.png" alt="Screenshot of the truth or dare game" />
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/nhie.png" alt="Screenshot of never have I ever" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center"
		>
			<h2>Never Have I Ever</h2>
			<p class="mb-8 leading-relaxed">
				The game where you get to find out how much more boring your life is than everyone elses.
			</p>
			<div class="flex justify-center gap-3">
				<a href="/nhie"><Button>Check it out!</Button></a>
				<a href="/credits#nhie"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Would you rather</h2>
			<p class="mb-8 leading-relaxed">
				But seriously, would you?? Would you <em>really??</em> Really, seriously? Truly? Fully? And you're
				sure??
			</p>
			<div class="flex justify-center gap-3">
				<a href="/wyr"><Button>Check it out!</Button></a>
				<a href="/credits#wyr"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/wyr.png" alt="Screenshot of the would you rather game" />
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/riddles.png" alt="Screenshot of the riddles" />
		</div>
		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center"
		>
			<h2>Riddles</h2>
			<p class="mb-8 leading-relaxed">These are like well hard so play at your own risk.</p>
			<div class="flex justify-center gap-3">
				<a href="/riddles"><Button>Check it out!</Button></a>
				<a href="/credits#riddles"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 pb-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Icebreakers</h2>
			<p class="mb-8 leading-relaxed">
				God, you must really suck at talking to people. Like... theres got to be a better way to
				start a conversation.
			</p>
			<div class="flex justify-center gap-3">
				<a href="/icebreakers"><Button>Check it out!</Button></a>
				<a href="/credits#icebreakers"><Button variant="secondary">Credits</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/icebreakers.png" alt="Screenshot of the icebreakers" />
		</div>
	</div>
</section>

<Separator />

<section>
	<div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h2>Tic Tac Toe</h2>
			<p class="mb-8 leading-relaxed">
				A great game to practice your art (get it cuz you do nothing but draw????).
			</p>
			<div class="flex justify-center gap-3">
				<a href="/xo"><Button>Check it out!</Button></a>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Image src="/images/flags.png" alt="Screenshot of the flags game" />
		</div>
	</div>
</section>

<Separator />

<footer>
	<h3>Party Games</h3>
	<p class="text-neutral-500">We put the games, in party games.</p>

	<ul>
		<li>
			<a href="https://github.com/Joshua861/">My GitHub</a>
		</li>
		<li>
			<a href="https://github.com/Joshua861/party-games">Source code</a>
		</li>
		<li>
			<a href="mailto:joshrl@proton.me">Contact me</a>
		</li>
	</ul>
</footer>
