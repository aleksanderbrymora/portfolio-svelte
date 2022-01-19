<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const projectPaths = await fetch('/api/projects.json');
		const paths = await projectPaths.json();

		return {
			props: { paths }
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';

	interface Project {
		meta: { title: string; year: number; github?: string; website?: string };
		path: string;
	}

	const capitalize = (str: string) => {
		const [first, ...rest] = str.split('');
		return [first.toUpperCase(), rest.join('').toLowerCase()].join('');
	};

	$: title = capitalize($page.url.pathname.replace(/\/projects\//, ''));
	export let paths: Project[];
</script>

<svelte:head><title>{title} | Aleksander Brymora</title></svelte:head>

<h1 class="text-7xl font-bold mb-16 mt-10">Projects</h1>
<section class="grid gap-16 xl:grid-cols-project items-start">
	<aside class="flex flex-col xl:gap-5 gap-2 xl:sticky h-min top-10">
		{#each paths as p}
			<a
				class={clsx(
					'flex gap-3 items-center justify-between px-3 sm:px-5 py-2',
					$page.url.pathname === p.path && 'text-zinc-800 bg-white rounded-xl '
				)}
				href={p.path}
				aria-selected={$page.url.pathname === p.path}
			>
				<p class={clsx('font-bold text-lg')}>{p.meta.title}</p>
				<div class="flex gap-2 items-center">
					{#if p.meta.github}
						<a
							aria-label="${p.meta.title} github link"
							class="w-8 h-8 grid place-items-center text-zinc-50 bg-zinc-50 rounded-full hover:bg-zinc-200 transition-all"
							href={p.meta.github}
						>
							<svg
								height="32"
								aria-hidden="true"
								viewBox="0 0 16 16"
								version="1.1"
								width="32"
								data-view-component="true"
								class="octicon octicon-mark-github v-align-middle"
							>
								<path
									fill-rule="evenodd"
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								/>
							</svg></a
						>
					{/if}
					{#if p.meta.website}
						<a
							aria-label="${p.meta.title} website link"
							class="w-8 h-8 grid place-items-center text-zinc-50 bg-black rounded-full hover:bg-zinc-700 transition-all"
							href={p.meta.website}
							><svg
								aria-label="an icon for redirecting to linked website"
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
								/>
								<path
									d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
								/>
							</svg></a
						>
					{/if}
				</div>
			</a>
		{/each}
	</aside>

	<slot />
</section>
