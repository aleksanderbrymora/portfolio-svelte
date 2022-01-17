module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.css'],
	dark: 'class',
	theme: {
		extend: {
			gridTemplateColumns: {
				project: '20rem auto'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
