<script lang="ts">
	import Contact from '../components/Contact.svelte';
	import Nav from '../components/Nav.svelte';
	import '../style.css';
</script>

<Nav />
<div class="container mx-auto px-10">
	<slot />
	<Contact />
</div>
