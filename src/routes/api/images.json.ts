export const get = async () => {
	const allImgs = import.meta.glob('/static/tech-icons/*.{svg,png}');
	const paths = Object.keys(allImgs).map((p) => p.replace('/static', ''));
	return {
		body: { paths }
	};
};
