<script>
	import clsx from 'clsx';
</script>

<section id="about" class="grid md:grid-cols-3 gap-12">
	<img
		src="profile.jpg"
		alt="My face"
		class={clsx([
			// grid
			'md:col-start-1 md:row-span-2',
			// styling
			'rounded-full aspect-square w-32 mx-auto md:w-full'
		])}
	/>
	<p class="text-3xl md:text-4xl font-bold md:col-start-2 md:col-span-2 leading-normal">
		Hi, I'm Aleks. I create full stack web apps for fun!
	</p>
	<p
		class="md:col-start-2 md:col-span-2 text-xl leading-relaxed font-bold rounded-xl text-justify md:text-left"
	>
		I love using anything programming-related to turn some of my passions into projects for others
		to enjoy. I use many technologies to achieve that and I'm always looking for something better or
		to improve upon.<br />
		I also love <span style="font-family: Cattedrale;">metal music</span>, producing music, 3D
		printing, mechanical keyboards and woodworking.
		<br />
		<a href="/other" class="text-red-600 underline">Learn more about my hobbies here!</a>
	</p>
</section>
