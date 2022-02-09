<script>
	let showPhone = false;
	let showEmail = false;
</script>

<footer class="mb-24">
	<h1 class="text-5xl font-bold mb-10">Contact me</h1>
	<div class="flex flex-col gap-5 md:text-xl">
		<div class="flex gap-3 h-min items-center ">
			<p>Phone:</p>
			{#if showPhone}
				<p>+48 697 863 833</p>
			{:else}
				<button class="underline font-bold" on:click={() => (showPhone = true)}>Reveal</button>
			{/if}
		</div>
		<div class="flex gap-3 h-min items-center">
			<p>Email:</p>
			{#if showEmail}
				<p>brymora.aleksander@gmail.com</p>
			{:else}
				<button class="underline font-bold" on:click={() => (showEmail = true)}>Reveal</button>
			{/if}
		</div>
		<p>
			Github:
			<a class="underline text-red-400" href="https://github.com/aleksanderbrymora">
				github.com/aleksanderbrymora
			</a>
		</p>
		<p>
			LinkedIn:
			<a class="underline text-red-400" href="https://www.linkedin.com/in/aleksanderbrymora/">
				linkedin.com/in/aleksanderbrymora
			</a>
		</p>
		<p>
			Portfolio (recursion joke?):
			<a class="underline text-red-400" href="https://ohaleks.dev"> ohaleks.dev </a>
		</p>
		<p>
			CV -
			<a class="underline text-red-400" href="/CV Aleksander Brymora.pdf" download>download</a>
		</p>
	</div>
</footer>
