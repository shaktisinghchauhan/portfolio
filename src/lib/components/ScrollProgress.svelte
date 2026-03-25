<script lang="ts">
	let progress = $state(0);

	$effect(() => {
		if (typeof window === 'undefined') return;

		function handleScroll() {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progress = docHeight > 0 ? scrollTop / docHeight : 0;
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="fixed top-0 left-0 right-0 z-[100] h-[2px]">
	<div class="scroll-progress h-full" style="transform: scaleX({progress})"></div>
</div>
