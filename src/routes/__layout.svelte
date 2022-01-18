<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import '../style.css';
	import { page } from '$app/stores';

	const capitalize = (str: string) => {
		const [first, ...rest] = str.split('');
		return [first.toUpperCase(), rest.join('').toLowerCase()].join('');
	};

	$: title = capitalize($page.url.pathname.replace(/\/projects\//, ''));
</script>

<svelte:head><title>{title} | Aleksander Brymora</title></svelte:head>

<Nav />
<div class="container mx-auto px-10">
	<slot />
</div>
