<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { profile } from '$lib/data/portfolio';

	let scrolled = $state(false);
	let activeSection = $state('hero');
	let mobileMenuOpen = $state(false);

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'work', label: 'Work' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'contact', label: 'Contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 50;
		const allSections = [{ id: 'hero' }, ...sections];
		const sectionEls = allSections.map((s) => document.getElementById(s.id));
		for (let i = sectionEls.length - 1; i >= 0; i--) {
			const el = sectionEls[i];
			if (el && el.getBoundingClientRect().top <= 200) {
				activeSection = allSections[i].id;
				break;
			}
		}
	}

	function scrollTo(id: string) {
		mobileMenuOpen = false;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {scrolled
		? $theme === 'dark'
			? 'glass-dark shadow-2xl shadow-black/20'
			: 'glass-light shadow-lg'
		: 'bg-transparent'}"
	style="top: 2px;"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
		<!-- Logo + Status -->
		<button onclick={() => scrollTo('hero')} class="flex items-center gap-3">
			<span
				class="font-mono text-sm font-bold tracking-wider {$theme === 'dark'
					? 'text-accent-400'
					: 'text-accent-600'}"
			>
				SC
			</span>
			{#if profile.available}
				<span
					class="flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium {$theme === 'dark'
						? 'bg-accent-500/10 text-accent-400'
						: 'bg-accent-100 text-accent-700'}"
				>
					<span class="relative flex h-1.5 w-1.5">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"
						></span>
						<span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500"></span>
					</span>
					Available
				</span>
			{/if}
		</button>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each sections as section (section.id)}
				<button
					onclick={() => scrollTo(section.id)}
					class="relative rounded-lg px-3 py-1.5 font-mono text-xs tracking-wider transition-all {activeSection ===
					section.id
						? $theme === 'dark'
							? 'text-accent-400 bg-accent-500/10'
							: 'text-accent-600 bg-accent-100'
						: $theme === 'dark'
							? 'text-zinc-500 hover:text-zinc-300'
							: 'text-zinc-500 hover:text-zinc-700'}"
				>
					{section.label}
				</button>
			{/each}

			<div class="mx-2 h-4 w-px {$theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}"></div>

			<button
				onclick={() => theme.toggle()}
				class="rounded-lg p-2 transition-all {$theme === 'dark'
					? 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300'
					: 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700'}"
				aria-label="Toggle theme"
			>
				{#if $theme === 'dark'}
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/></svg
					>
				{:else}
					<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/></svg
					>
				{/if}
			</button>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden {$theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Menu"
		>
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{#if mobileMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div
			class="border-t px-6 pb-4 md:hidden {$theme === 'dark'
				? 'glass-dark border-white/5'
				: 'glass-light border-black/5'}"
		>
			{#each sections as section (section.id)}
				<button
					onclick={() => scrollTo(section.id)}
					class="block w-full py-3 text-left font-mono text-sm {activeSection === section.id
						? $theme === 'dark'
							? 'text-accent-400'
							: 'text-accent-600'
						: $theme === 'dark'
							? 'text-zinc-400'
							: 'text-zinc-600'}"
				>
					{section.label}
				</button>
			{/each}
			<button
				onclick={() => theme.toggle()}
				class="mt-2 font-mono text-sm {$theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}"
			>
				{$theme === 'dark' ? 'Light' : 'Dark'} mode
			</button>
		</div>
	{/if}
</nav>
