<script type="text/javascript">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import Image from 'svimg/Image.svelte';
	let logos = `ADT.png
AMD.png
Adidas.png
Airbnb.png
Amazon.png
Anker.png
Apple.png
Asos.png
Atari.png
BMW.png
BP.png
Balenciaga.png
BandMBargains.png
BandaiNamco.png
BankOfAmerica.png
Barclays.png
Bing.png
Bitcoin.png
Booking.png
CNBC.png
Capcom.png
Champion.png
Cisco.png
Citroen.png
Coke.png
Costa.png
Crunchyroll.png
Dodge.png
Dolby.png
Dominos.png
DreamWorks.png
Ducati.png
Ebay.png
Eizo.png
Ericsson.png
Facebook.png
Fjallraven.png
Ford.png
Github.png
Givenchy.png
Google.png
Goyard.png
Gucci.png
Honda.png
Huawei.png
IBM.png
Infiniti.png
Intel.png
Jaguar.png
JohnDeere.png
KFC.png
Kappa.png
Koenigsegg.png
LG.png
Lamborghini.png
Lexus.png
Liteon.png
LouisVuitton.png
MTV.png
Maersk.png
Mazda.png
McDonalds.png
MercedesBenz.png
Microsoft.png
Mitsubishi.png
Monster.png
MonsterCable.png
Nandos.png
Napster.png
Nestle.png
Netflix.png
Nike.png
Nintendo.png
Novation.png
Nvidia.png
PapaJohns.png
Patagonia.png
Peugeot.png
Philips.png
Pioneer.png
PizzaHut.png
Playboy.png
Playstation.png
Porsche.png
Rayban.png
Razer.png
RedBull.png
RioTinto.png
Rossignol.png
SAP.png
Samsung.png
Sanyo.png
Shell.png
Skullcandy.png
Skype.png
Snapchat.png
Sonos.png
Sony.png
Soundcloud.png
Spotify.png
Starbucks.png
Steam.png
Subway.png
Superdry.png
Supreme.png
Tannoy.png
Tesla.png
TheHundreds.png
Timberland.png
Toyota.png
Twitch.png
Twitter.png
Uber.png
Ubisoft.png
Vine.png
Visa.png
Volkswagen.png
Wikipedia.png
Xbox.png
YSL.png
Yamaha.png`.split('\n');

	onMount(() => {
		getLogo();
	});

	let q,
		a,
		name = '';

	let showAnswer = false;

	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};

	const getLogo = async () => {
		showAnswer = false;
		name = logos.random();
		q =
			'https://raw.githubusercontent.com/fuzzysb/Logo-Quiz-Logos/1c873f0dcef5bf36cda22bc820388457fef3b77d/Logos/' +
			name;
		a =
			'https://raw.githubusercontent.com/fuzzysb/Logo-Quiz-Logos/1c873f0dcef5bf36cda22bc820388457fef3b77d/Answers/' +
			name;
	};
</script>

<h1>Logos</h1>

<div
	class="flex justify-center h-[320px] w-full rounded-xl bg-neutral-300 dark:bg-neutral-800 border border-neutral-600"
>
	{#if showAnswer}
		<img src={a} alt="Logo" />
	{:else}
		<img src={q} alt="Logo" />
	{/if}
</div>

<br />

<div class="flex gap-5">
	<Button class="flex-1" on:click={() => (showAnswer = !showAnswer)}>Show answer</Button>
	<Button class="flex-1" on:click={getLogo}>Next logo</Button>
</div>
