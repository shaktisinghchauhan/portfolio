<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { profile } from '$lib/data/portfolio';

	let visible = $state(false);
	let terminalLines = $state<string[]>([]);
	let terminalDone = $state(false);

	$effect(() => {
		visible = true;

		const lines = profile.terminalIntro;
		let lineIdx = 0;
		let charIdx = 0;
		terminalLines = [''];

		const typeInterval = setInterval(() => {
			if (lineIdx >= lines.length) {
				terminalDone = true;
				clearInterval(typeInterval);
				return;
			}

			const line = lines[lineIdx];

			if (charIdx < line.length) {
				terminalLines[lineIdx] = line.substring(0, charIdx + 1);
				charIdx++;
			} else {
				lineIdx++;
				charIdx = 0;
				if (lineIdx < lines.length) {
					terminalLines = [...terminalLines, ''];
				}
			}
		}, 35);

		return () => clearInterval(typeInterval);
	});
</script>

<section
	id="hero"
	class="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
>
	<!-- Dot grid background -->
	<div
		class="pointer-events-none absolute inset-0 {$theme === 'dark' ? 'dot-grid' : 'dot-grid-light'}"
	></div>

	<!-- Gradient orbs -->
	<div
		class="pointer-events-none absolute inset-0 {$theme === 'dark' ? 'opacity-30' : 'opacity-15'}"
	>
		<div
			class="animate-gradient absolute -top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-accent-500/40 via-accent-600/20 to-transparent blur-3xl"
		></div>
		<div
			class="animate-gradient absolute -right-1/4 -bottom-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-secondary-500/30 via-accent-500/10 to-transparent blur-3xl"
			style="animation-delay: -5s;"
		></div>
	</div>

	<div class="relative z-10 w-full max-w-4xl">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Left: Text content -->
			<div
				class="transition-all duration-1000 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-8 opacity-0'}"
			>
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs {$theme === 'dark'
						? 'bg-accent-500/10 text-accent-400'
						: 'bg-accent-100 text-accent-700'}"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-accent-500"></span>
					</span>
					Open to opportunities
				</div>

				<h1
					class="mb-2 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl {$theme === 'dark'
						? 'text-white'
						: 'text-zinc-900'}"
				>
					{profile.name.split(' ')[0]}
					<span class="gradient-text block">{profile.name.split(' ').slice(1).join(' ')}</span>
				</h1>

				<p
					class="mb-3 font-mono text-sm font-medium tracking-wide {$theme === 'dark'
						? 'text-zinc-400'
						: 'text-zinc-600'}"
				>
					{profile.title} — {profile.location}
				</p>

				<p
					class="mb-8 max-w-md text-base leading-relaxed {$theme === 'dark'
						? 'text-zinc-500'
						: 'text-zinc-500'}"
				>
					{profile.bio}
				</p>

				<div class="flex flex-wrap gap-3">
					<a
						href="#work"
						class="magnetic-btn inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600"
					>
						View Projects
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
					<a
						href="#contact"
						class="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all {$theme ===
						'dark'
							? 'border-zinc-800 text-zinc-400 hover:border-accent-500/50 hover:text-accent-400'
							: 'border-zinc-200 text-zinc-600 hover:border-accent-500 hover:text-accent-600'}"
					>
						Contact Me
					</a>
				</div>
			</div>

			<!-- Right: Terminal -->
			<div
				class="transition-all delay-300 duration-1000 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-8 opacity-0'}"
			>
				<div
					class="overflow-hidden rounded-xl border {$theme === 'dark'
						? 'border-zinc-800 bg-surface-950'
						: 'border-zinc-200 bg-white'}"
				>
					<!-- Terminal header -->
					<div
						class="flex items-center gap-2 border-b px-4 py-3 {$theme === 'dark'
							? 'border-zinc-800 bg-surface-900'
							: 'border-zinc-100 bg-zinc-50'}"
					>
						<div class="flex gap-1.5">
							<div class="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
						</div>
						<span
							class="ml-2 font-mono text-[10px] {$theme === 'dark'
								? 'text-zinc-600'
								: 'text-zinc-400'}">~/shakti</span
						>
					</div>

					<!-- Terminal body -->
					<div class="p-4 font-mono text-xs leading-6 md:text-sm md:leading-7">
						{#each terminalLines as line, i (i)}
							<div class="flex">
								{#if line.startsWith('>')}
									<span class="text-accent-400">{line}</span>
								{:else if line === 'shakti-singh-chauhan'}
									<span class="font-bold {$theme === 'dark' ? 'text-white' : 'text-zinc-900'}"
										>{line}</span
									>
								{:else if line === 'Senior Software Engineer'}
									<span class="text-secondary-400">{line}</span>
								{:else if line.includes('Open to')}
									<span class="text-accent-300">{line}</span>
								{:else}
									<span class="{$theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}"
										>{line}</span
									>
								{/if}
								{#if i === terminalLines.length - 1 && !terminalDone}
									<span class="cursor-blink ml-0.5 text-accent-400">▊</span>
								{/if}
							</div>
						{/each}
						{#if terminalDone}
							<span class="cursor-blink text-accent-400">▊</span>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1200 duration-700 {visible
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div class="flex flex-col items-center gap-2">
			<span class="font-mono text-[10px] tracking-widest {$theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}"
				>SCROLL</span
			>
			<svg
				class="h-4 w-4 animate-bounce {$theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'}"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7"
				/>
			</svg>
		</div>
	</div>
</section>
