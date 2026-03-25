export function inview(node: HTMLElement, params: { threshold?: number; once?: boolean } = {}) {
	const { threshold = 0.15, once = true } = params;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('in-view');
					node.dispatchEvent(new CustomEvent('inview', { detail: { isIntersecting: true } }));
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('in-view');
					node.dispatchEvent(new CustomEvent('inview', { detail: { isIntersecting: false } }));
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
