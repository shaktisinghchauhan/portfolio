<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { inview } from '$lib/actions/inview';

	let visible = $state(false);

	const resumes = [
		{
			title: 'Mobile Engineer',
			description: 'React Native focused. Production apps as the headline.',
			color: 'accent'
		},
		{
			title: 'Web / Frontend',
			description: 'React, Next.js, Svelte. Full web stack.',
			color: 'secondary'
		},
		{
			title: 'Senior / Lead',
			description: 'Architecture, team leadership, ownership.',
			color: 'accent'
		}
	];
</script>

<section class="px-6 py-24" use:inview oninview={() => (visible = true)}>
	<div class="mx-auto max-w-5xl">
		<h2
			class="mb-12 font-mono text-xs font-medium tracking-widest uppercase transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'} {$theme === 'dark' ? 'text-accent-400' : 'text-accent-600'}"
		>
			Resume
		</h2>

		<div class="grid gap-4 md:grid-cols-3">
			{#each resumes as resume, i (resume.title)}
				<div
					class="card-hover group cursor-pointer rounded-2xl p-6 transition-all duration-700 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'} {$theme === 'dark' ? 'glass-dark' : 'glass-light'}"
					style="transition-delay: {200 + i * 150}ms"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl {$theme === 'dark'
							? 'bg-accent-500/10'
							: 'bg-accent-100'}"
					>
						{#if i === 0}
							<svg
								class="h-6 w-6 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								/>
							</svg>
						{:else if i === 1}
							<svg
								class="h-6 w-6 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
								/>
							</svg>
						{:else}
							<svg
								class="h-6 w-6 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						{/if}
					</div>

					<h3
						class="mb-2 text-lg font-bold {$theme === 'dark'
							? 'text-white'
							: 'text-zinc-900'}"
					>
						{resume.title}
					</h3>
					<p
						class="mb-4 text-sm {$theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}"
					>
						{resume.description}
					</p>
					<span
						class="inline-flex items-center gap-2 font-mono text-xs transition-all group-hover:gap-3 {$theme ===
						'dark'
							? 'text-accent-400'
							: 'text-accent-600'}"
					>
						Download PDF
						<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>
