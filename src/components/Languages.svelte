<script lang="ts">
	import clsx from 'clsx';
	import sample from 'lodash.sample';
	import sampleSize from 'lodash.samplesize';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let paths: string[];
	let randomImgs: Img[] = [];
	$: allImg = paths.map((p) => ({
		src: p,
		alt: p.replace('tech-icons/', '').replace(/\.\w+/, '')
	}));

	interface Img {
		src: string;
		alt: string;
	}

	const getRandomInRange = (min = 3000, max = 5000) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const newImg = () => {
		const toDelete = sample(randomImgs);
		randomImgs = [...randomImgs.filter((i) => i.src !== toDelete.src)];
		let newImg: Img;
		do {
			newImg = sample(allImg);
		} while (randomImgs.findIndex((i) => i.src === newImg.src) !== -1);
		randomImgs.push(newImg);
	};

	onMount(() => {
		randomImgs = sampleSize(allImg, 25);
		const interval = setInterval(newImg, 500);

		return () => clearInterval(interval);
	});
</script>

<section class="bg-zinc-200 rounded-3xl overflow-hidden relative">
	<div class="p-3 md:p-10 z-20 w-full h-full grid gap-3 md:grid-cols-2">
		<p
			class="text-4xl sm:text-5xl text-zinc-50 font-extrabold bg-zinc-800 h-min p-5 z-20 bg-opacity-95 rounded-xl md:whitespace-nowrap"
		>
			Who am I?
		</p>
		<p class="row-start-2 md:text-lg p-3 md:p-5 bg-zinc-800  rounded-xl bg-opacity-95">
			I love learning, especially from other people. I usually spend my free time on
			(over)researching my new hobbies. <br /> I am inspired by other people's great ideas and unique
			approaches and love working in an environment with people who have those. I do not mind critique
			at all, quite the opposite - I appreciate it.
		</p>
		<p class="row-span-2 md:text-lg p-3 md:p-5 bg-zinc-800  rounded-xl bg-opacity-95">
			Besides programming I love creating music, D&D and woodworking. I have a page about these
			hobbies so if you're curious check it out! <br /> I'm also a huge DIY fan; from electric
			bikes, to simple smart home implementation with Raspberry Pi's or Arduinos, to a bunch of
			speakers I created from old car radios. <br /> I love 3D printing and maybe due to that mechanical
			keyboards are my jam and I have multiple of these which you can of course check out in the hobby
			section (half of them are printed).
		</p>
	</div>
	<div class="absolute h-full w-full left-0 top-0 z-0 opacity-30">
		<div class="relative h-full filter blur-sm">
			{#each randomImgs as i (i.src)}
				<img
					transition:fade
					class={clsx('h-16 absolute z-0')}
					style={`left: ${getRandomInRange(0, 100)}%; top: ${getRandomInRange(0, 100)}%;`}
					src={i.src}
					alt={i.alt}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	section > div {
		grid-template-rows: auto 1fr;
	}
</style>
