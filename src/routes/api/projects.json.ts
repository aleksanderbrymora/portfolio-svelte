export const get = async () => {
	const allPostFiles = import.meta.glob('../projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allProjects = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return {
		body: allProjects
	};
};
