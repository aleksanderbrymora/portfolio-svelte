<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const projectPaths = await fetch('/api/projects.json');
		const paths = await projectPaths.json();
		return { props: { paths } };
	};
</script>

<script>
	export let paths;
</script>

<div class="flex flex-col">
	{#each paths as p}
		<a class="my-2 text-xl" href={p.path}>{p.meta.title}</a>
	{/each}
</div>
