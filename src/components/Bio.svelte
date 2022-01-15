<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import clsx from 'clsx';
	type SelectedPeriod = 'uon' | 'ga' | 'pl';

	interface Period {
		short: SelectedPeriod;
		full: string;
		img: string;
		description: string;
	}

	const periodData: Period[] = [
		{
			short: 'uon',
			full: 'University of Newcastle',
			img: 'uon-logo.gif',
			description: `I attended Computer Systems Engineering at University of Newcastle in Australia in 2019, where I discovered a true passion for programming. At that point I knew I wanted to do more of it, so I made a decision to fast track my career and went to a Sydney based Bootcamp - Software Engineering Immersive at General Assembly.`
		},
		{
			short: 'ga',
			full: 'General Assembly',
			img: 'ga-logo.png',
			description: `It was a big gamble to discontinue my university education, but it paid off in specialised knowledge and a kickstart for more learning. After finishing a 3 month Bootcamp I immediately was offered a job there as an Instructional Associate. I stayed there, helping newcomers to programming, learn all the basics and more.`
		},
		{
			short: 'pl',
			full: 'Poland',
			img: 'poland.gif',
			description: `After 6 months of work for General Assembly I moved back to Poland, where I focused on bettering and honing in my programming skills in the evenings, all while working at various physical jobs at farm and construction during the day. After a year of that I'm committing fully to programming, so if you're hiring - contact is in the corner!`
		}
	];

	let selected: Period = periodData[0];

	const handleClick = (period: Period) => (selected = period);
</script>

<section class="grid xl:grid-cols-2 gap-10 xl:h-[32rem] xl:items-center ">
	<div class="flex justify-between flex-col gap-3 xl:gap-10 h-min">
		{#each periodData as period}
			<div class="flex">
				{#if period.short === selected.short}
					<svg
						transition:fly={{ x: -10 }}
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 absolute left-16"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
				<button
					on:click={() => handleClick(period)}
					class={clsx(
						'text-3xl xl:text-5xl font-bold flex gap-2 items-center h-8 text-zinc-400',
						selected.short === period.short && 'text-white'
					)}
				>
					<p class="text-left">{period.full}</p>
				</button>
			</div>
		{/each}
	</div>

	{#key selected.short}
		<figure
			in:fly={{ x: -10 }}
			class="flex flex-col gap-5 h-[20rem] bg-zinc-100 p-5 rounded-xl shadow-md text-zinc-900"
		>
			<div in:fade class="flex gap-5 items-center">
				<img src={selected.img} class="rounded-md w-32" alt={`${selected.full} logo`} />
				<p class="text-5xl font-extrabold">{selected.full}</p>
			</div>
			<figcaption in:fade={{ delay: 200 }}>{selected.description}</figcaption>
		</figure>
	{/key}
</section>
