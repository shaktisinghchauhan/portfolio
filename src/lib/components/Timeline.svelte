<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { timeline } from '$lib/data/portfolio';
	import { inview } from '$lib/actions/inview';

	let visible = $state(false);
	let activeIdx = $state(0);
</script>

<section id="experience" class="px-6 py-24" use:inview oninview={() => (visible = true)}>
	<div class="mx-auto max-w-5xl">
		<h2
			class="mb-16 font-mono text-xs font-medium tracking-widest uppercase transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'} {$theme === 'dark' ? 'text-accent-400' : 'text-accent-600'}"
		>
			Experience
		</h2>

		<div class="grid gap-8 lg:grid-cols-[240px_1fr]">
			<!-- Left: Company selector tabs -->
			<div
				class="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible transition-all duration-700 {visible
					? 'translate-x-0 opacity-100'
					: '-translate-x-4 opacity-0'}"
			>
				{#each timeline as item, i (item.company)}
					<button
						onclick={() => (activeIdx = i)}
						class="group relative whitespace-nowrap rounded-lg px-4 py-3 text-left font-mono text-xs transition-all {activeIdx ===
						i
							? $theme === 'dark'
								? 'bg-accent-500/10 text-accent-400'
								: 'bg-accent-100 text-accent-700'
							: $theme === 'dark'
								? 'text-zinc-500 hover:bg-surface-700 hover:text-zinc-300'
								: 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700'}"
					>
						{#if activeIdx === i}
							<span
								class="absolute top-0 left-0 hidden h-full w-0.5 rounded-full bg-accent-500 lg:block"
							></span>
							<span
								class="absolute bottom-0 left-0 block h-0.5 w-full rounded-full bg-accent-500 lg:hidden"
							></span>
						{/if}
						{item.company.split(' ').slice(0, 2).join(' ')}
					</button>
				{/each}
			</div>

			<!-- Right: Detail panel -->
			<div
				class="transition-all duration-700 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-8 opacity-0'}"
				style="transition-delay: 200ms"
			>
				{#key activeIdx}
					{@const item = timeline[activeIdx]}
					<div class="animate-[fadeSlideIn_0.4s_ease]">
						<div class="mb-1 flex flex-wrap items-center gap-3">
							<h3
								class="text-xl font-bold {$theme === 'dark' ? 'text-white' : 'text-zinc-900'}"
							>
								{item.role}
							</h3>
							{#if item.accent}
								<span
									class="rounded-full px-2 py-0.5 text-[10px] font-semibold {$theme === 'dark'
										? 'bg-accent-500/15 text-accent-400'
										: 'bg-accent-100 text-accent-700'}"
								>
									Current
								</span>
							{/if}
						</div>

						<p
							class="mb-1 font-medium {$theme === 'dark'
								? 'text-accent-400'
								: 'text-accent-600'}"
						>
							{item.company}
						</p>

						<p
							class="mb-4 font-mono text-xs {$theme === 'dark'
								? 'text-zinc-600'
								: 'text-zinc-400'}"
						>
							{item.period} &bull; {item.location}
						</p>

						<div class="mb-4 rounded-lg border-l-2 border-accent-500/40 py-1 pl-4">
							<p
								class="text-sm font-semibold {$theme === 'dark'
									? 'text-zinc-300'
									: 'text-zinc-700'}"
							>
								{item.highlight}
							</p>
						</div>

						<p
							class="mb-6 text-sm leading-relaxed {$theme === 'dark'
								? 'text-zinc-400'
								: 'text-zinc-600'}"
						>
							{item.description}
						</p>

						<div class="flex flex-wrap gap-2">
							{#each item.tags as tag (tag)}
								<span
									class="rounded-lg px-2.5 py-1 font-mono text-xs {$theme === 'dark'
										? 'bg-surface-600 text-zinc-400'
										: 'bg-zinc-100 text-zinc-600'}"
								>
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fadeSlideIn {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
