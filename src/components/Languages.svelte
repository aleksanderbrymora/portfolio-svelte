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

<section class="bg-zinc-200 rounded-3xl h-96 overflow-hidden relative">
	<div class="absolute h-full p-10 z-20 ">
		<p
			class="text-7xl text-zinc-50 font-extrabold bg-zinc-800 w-min  p-5 z-20 bg-opacity-90 rounded-xl"
		>
			What do I use
		</p>
	</div>
	<div class="absolute h-full w-full">
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
