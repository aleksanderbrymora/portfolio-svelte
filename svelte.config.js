import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
			// layout: { projects: 'src/routes/projects/__layout.svelte' }
		})
	]
};

export default config;
