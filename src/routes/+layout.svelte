<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { browser } from '$app/environment';

	let { children } = $props();

	$effect(() => {
		if (browser) {
			document.documentElement.classList.toggle('dark', $theme === 'dark');
			document.documentElement.classList.toggle('light', $theme === 'light');
		}
	});
</script>

<div
	class="noise min-h-screen transition-colors duration-300 {$theme === 'dark'
		? 'bg-surface-950 text-zinc-100'
		: 'bg-light-50 text-zinc-900'}"
>
	{@render children()}
</div>
