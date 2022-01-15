<script context="module">
	export const load = () => {
		const files = import.meta.glob(`/static/tech-icons/*.{png,svg}`);
		const transformed = Object.keys(files).map((f) => f.replace('/static/', ''));
		return {
			props: {
				paths: transformed
			}
		};
	};
</script>

<script>
	import About from '../components/About.svelte';
	import Bio from '../components/Bio.svelte';
	import Hero from '../components/Hero.svelte';
	import Languages from '../components/Languages.svelte';
	import SectionBreak from '../components/SectionBreak.svelte';

	export let paths;
</script>

<Hero />
<SectionBreak />
<About />
<SectionBreak />
<Bio />
<SectionBreak />
<Languages {paths} />
<SectionBreak />
