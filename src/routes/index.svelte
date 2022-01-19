<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const imgs = await fetch('/api/images.json');
		const { paths } = await imgs.json();
		return { props: { paths } };
	};
</script>

<script>
	import About from '../components/About.svelte';
	import Bio from '../components/Bio.svelte';
	import Contact from '../components/Contact.svelte';
	import Hero from '../components/Hero.svelte';
	import Languages from '../components/Languages.svelte';
	import SectionBreak from '../components/SectionBreak.svelte';

	export let paths;
</script>

<svelte:head>
	<title>Aleksander Brymora</title>
</svelte:head>

<Hero />
<SectionBreak />
<About />
<SectionBreak />
<Bio />
<SectionBreak />
<Languages {paths} />
<SectionBreak />
