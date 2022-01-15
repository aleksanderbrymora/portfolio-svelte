export const removeSelf = (node: HTMLElement, { time }: { time: number }) => {
	setTimeout(() => {
		node.dispatchEvent(new CustomEvent('remove'));
	}, time);
};
