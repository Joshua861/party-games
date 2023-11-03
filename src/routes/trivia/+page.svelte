<script type="ts">
	import Wrapper from '../wrapper.svelte';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { ChevronRight, EyeOff, Eye } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let category = '';
	let difficulty = '';
	let question = '';
	let correct_answer = '';
	let incorrect_answers = [];

	const getQuestion = async () => {
		let response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
		console.log(response);
		obj = JSON.parse(response);
		let results = obj.results[0];

		category = results.category;
		difficulty = results.difficulty;
		question = results.question;
	};

	onMount(() => {
		getQuestion();
	});
</script>

<h1>Trivia</h1>

<p class="lead">
	{question}
</p>

<p class="text-sm">
	Catagory: {category}
</p>
<p class="text-sm">
	Difficulty: {difficulty}
</p>
