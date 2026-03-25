<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { projects } from '$lib/data/portfolio';
	import { inview } from '$lib/actions/inview';

	let visible = $state(false);

	function handleMouseMove(e: MouseEvent) {
		const el = e.currentTarget as HTMLElement;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		el.style.setProperty('--mouse-x', `${x}px`);
		el.style.setProperty('--mouse-y', `${y}px`);
	}
</script>

<section id="work" class="px-6 py-24" use:inview oninview={() => (visible = true)}>
	<div class="mx-auto max-w-5xl">
		<h2
			class="mb-12 font-mono text-xs font-medium tracking-widest uppercase transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'} {$theme === 'dark' ? 'text-accent-400' : 'text-accent-600'}"
		>
			Projects
		</h2>

		<!-- Featured projects -->
		<div class="mb-8 grid gap-4 md:grid-cols-2">
			{#each projects.filter((p) => p.featured) as project, i (project.title)}
				<div
					role="article"
					class="card-hover group relative overflow-hidden rounded-2xl p-6 transition-all duration-700 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'} {$theme === 'dark' ? 'glass-dark' : 'glass-light'}"
					style="transition-delay: {200 + i * 150}ms"
					onmousemove={handleMouseMove}
				>
					<!-- Spotlight effect on hover -->
					<div
						class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 {$theme ===
						'dark'
							? 'spotlight'
							: 'spotlight-light'}"
					></div>

					<div class="relative z-10">
						<!-- Impact badge -->
						<div
							class="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold {$theme ===
							'dark'
								? 'bg-accent-500/10 text-accent-400'
								: 'bg-accent-50 text-accent-700'}"
						>
							<svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
							{project.impact}
						</div>

						<h3
							class="mb-1 text-xl font-bold {$theme === 'dark'
								? 'text-white'
								: 'text-zinc-900'}"
						>
							{project.title}
						</h3>
						<p
							class="mb-3 text-sm {$theme === 'dark'
								? 'text-accent-400/70'
								: 'text-accent-600/70'}"
						>
							{project.subtitle}
						</p>

						<p
							class="mb-5 text-sm leading-relaxed {$theme === 'dark'
								? 'text-zinc-400'
								: 'text-zinc-600'}"
						>
							{project.description}
						</p>

						<!-- Metrics grid -->
						<div class="mb-5 grid grid-cols-2 gap-2">
							{#each project.metrics as metric (metric)}
								<div
									class="rounded-lg px-3 py-2 text-center {$theme === 'dark'
										? 'bg-surface-700/50'
										: 'bg-zinc-50'}"
								>
									<span
										class="font-mono text-xs font-bold {$theme === 'dark'
											? 'text-accent-400'
											: 'text-accent-700'}"
									>
										{metric}
									</span>
								</div>
							{/each}
						</div>

						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag (tag)}
								<span
									class="rounded-md px-2 py-0.5 font-mono text-[10px] {$theme === 'dark'
										? 'bg-surface-600 text-zinc-500'
										: 'bg-zinc-100 text-zinc-500'}"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Other projects grid -->
		<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{#each projects.filter((p) => !p.featured) as project, i (project.title)}
				<div
					class="card-hover group rounded-xl p-5 transition-all duration-700 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-6 opacity-0'} {$theme === 'dark' ? 'glass-dark' : 'glass-light'}"
					style="transition-delay: {500 + i * 100}ms"
				>
					<div class="mb-3">
						<svg
							class="h-6 w-6 {$theme === 'dark'
								? 'text-accent-400/50'
								: 'text-accent-500/50'}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							/>
						</svg>
					</div>

					<h4
						class="mb-1 text-sm font-bold {$theme === 'dark'
							? 'text-white'
							: 'text-zinc-900'}"
					>
						{project.title}
					</h4>

					<p
						class="mb-1 text-[10px] font-medium {$theme === 'dark'
							? 'text-accent-400/60'
							: 'text-accent-600/60'}"
					>
						{project.impact}
					</p>

					<p
						class="mb-3 text-xs leading-relaxed {$theme === 'dark'
							? 'text-zinc-500'
							: 'text-zinc-500'}"
					>
						{project.description}
					</p>

					<div class="flex flex-wrap gap-1">
						{#each project.tags.slice(0, 3) as tag (tag)}
							<span
								class="font-mono text-[10px] {$theme === 'dark'
									? 'text-zinc-600'
									: 'text-zinc-400'}"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
