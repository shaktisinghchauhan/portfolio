<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { skillGroups } from '$lib/data/portfolio';
	import { inview } from '$lib/actions/inview';

	let visible = $state(false);
	let activeGroup = $state(0);
</script>

<section id="skills" class="px-6 py-24" use:inview oninview={() => (visible = true)}>
	<div class="mx-auto max-w-5xl">
		<h2
			class="mb-12 font-mono text-xs font-medium tracking-widest uppercase transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'} {$theme === 'dark' ? 'text-accent-400' : 'text-accent-600'}"
		>
			Skills
		</h2>

		<!-- Category tabs -->
		<div
			class="mb-8 flex flex-wrap gap-2 transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			{#each skillGroups as group, i (group.category)}
				<button
					onclick={() => (activeGroup = i)}
					class="rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all {activeGroup === i
						? $theme === 'dark'
							? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
							: 'bg-accent-600 text-white shadow-lg shadow-accent-600/25'
						: $theme === 'dark'
							? 'bg-surface-700 text-zinc-400 hover:bg-surface-600 hover:text-zinc-300'
							: 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700'}"
				>
					{group.category}
				</button>
			{/each}
		</div>

		<!-- Skills with progress bars -->
		<div
			class="transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
			style="transition-delay: 200ms"
		>
			{#key activeGroup}
				<div class="grid gap-4 sm:grid-cols-2 animate-[fadeSlideIn_0.4s_ease]">
					{#each skillGroups[activeGroup].skills as skill (skill.name)}
						<div
							class="rounded-xl p-4 {$theme === 'dark' ? 'glass-dark' : 'glass-light'}"
						>
							<div class="mb-2 flex items-center justify-between">
								<span
									class="text-sm font-medium {$theme === 'dark'
										? 'text-zinc-300'
										: 'text-zinc-700'}"
								>
									{skill.name}
								</span>
								<span
									class="font-mono text-xs {$theme === 'dark'
										? 'text-zinc-600'
										: 'text-zinc-400'}"
								>
									{skill.level}%
								</span>
							</div>
							<div
								class="h-1.5 overflow-hidden rounded-full {$theme === 'dark'
									? 'bg-surface-700'
									: 'bg-zinc-100'}"
							>
								<div
									class="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-400"
									style="width: {skill.level}%"
								></div>
							</div>
						</div>
					{/each}
				</div>
			{/key}
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
