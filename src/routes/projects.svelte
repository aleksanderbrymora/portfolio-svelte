<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const projectPaths = await fetch('/api/projects.json');
		const paths = await projectPaths.json();
		return {
			status: 302,
			redirect: paths[0].path
		};
	};
</script>

<!-- this is just a redirect route to the first project in the list -->
