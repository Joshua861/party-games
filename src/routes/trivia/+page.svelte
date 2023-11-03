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

	const getQuestion = async () => {
		let response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
		console.log('Fetched response!');
		let obj = JSON.parse(response);
		let catagory = obj.results.category;
		let diff = obj.results.diffuculty;
		let q = obj.results.question;
		let ca = obj.results.correct_answer;
		let ia = obj.results.incorrect_answers;
	};

	onMount(() => {
		getQuestion();
	});
</script>

<h1>Trivia</h1>

<p class="lead">
	{q}
</p>

<p class="text-sm">
	Catagory: {catagory}
	Difficulty: {diff}
</p>
