<script>
	import { page } from '$app/stores';
	import clsx from 'clsx';
	$: path = $page.url.pathname;
</script>

<nav class="flex justify-between items-center py-3 md:mt-10 container mx-auto px-3">
	<a href="/" class="flex items-center">
		<img src="/icons/favicon-32x32.png" alt="Aleksander Brymora logo" />
		<p class="text-red-500 ml-5 text-xl invisible sm:visible font-bold">Aleksander Brymora</p>
	</a>
	<ul class="flex gap-5 md:gap-8 font-bold dark:text-zinc-400">
		<li>
			<a href="/" class={clsx('whitespace-nowrap', path === '/' && 'text-zinc-100')}>Main Page</a>
		</li>
		<li>
			<a
				href="/projects"
				class={clsx('whitespace-nowrap', path.includes('projects') && 'text-zinc-100')}>Projects</a
			>
		</li>
		<li>
			<a href="/other" class={clsx('whitespace-nowrap', path === '/other' && 'text-zinc-100')}
				>Other</a
			>
		</li>
	</ul>
</nav>
