<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { profile } from '$lib/data/portfolio';
	import { inview } from '$lib/actions/inview';

	let visible = $state(false);
</script>

<section id="contact" class="px-6 py-24" use:inview oninview={() => (visible = true)}>
	<div class="mx-auto max-w-3xl">
		<!-- CTA Card -->
		<div
			class="relative overflow-hidden rounded-3xl p-10 text-center transition-all duration-700 md:p-16 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'} {$theme === 'dark' ? 'glass-dark' : 'glass-light'}"
		>
			<!-- Subtle gradient overlay -->
			<div
				class="pointer-events-none absolute inset-0 opacity-40 {$theme === 'dark'
					? ''
					: 'opacity-20'}"
			>
				<div
					class="animate-gradient absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-r from-accent-500/20 to-transparent blur-3xl"
				></div>
			</div>

			<div class="relative z-10">
				<div
					class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl {$theme === 'dark'
						? 'bg-accent-500/10'
						: 'bg-accent-100'}"
				>
					<svg
						class="h-7 w-7 text-accent-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>

				<h3
					class="mb-3 text-3xl font-bold md:text-4xl {$theme === 'dark'
						? 'text-white'
						: 'text-zinc-900'}"
				>
					Let's Build Something
				</h3>

				<p
					class="mx-auto mb-8 max-w-md text-base leading-relaxed {$theme === 'dark'
						? 'text-zinc-400'
						: 'text-zinc-600'}"
				>
					I'm looking for my next challenge. If you need someone who ships production code and takes
					ownership, let's talk.
				</p>

				<div class="flex flex-wrap justify-center gap-3">
					<a
						href="mailto:{profile.email}"
						class="magnetic-btn inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-600"
					>
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Send Email
					</a>
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-all {$theme ===
						'dark'
							? 'border-zinc-700 text-zinc-300 hover:border-accent-500/50 hover:text-accent-400'
							: 'border-zinc-200 text-zinc-700 hover:border-accent-500 hover:text-accent-600'}"
					>
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
						LinkedIn
					</a>
					<a
						href="tel:{profile.phone}"
						class="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-all {$theme ===
						'dark'
							? 'border-zinc-700 text-zinc-300 hover:border-accent-500/50 hover:text-accent-400'
							: 'border-zinc-200 text-zinc-700 hover:border-accent-500 hover:text-accent-600'}"
					>
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						Call
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer
	class="border-t px-6 py-8 {$theme === 'dark' ? 'border-zinc-800/50' : 'border-zinc-200'}"
>
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
		<p class="font-mono text-xs {$theme === 'dark' ? 'text-zinc-700' : 'text-zinc-400'}">
			Built with SvelteKit + TailwindCSS
		</p>
		<p class="font-mono text-xs {$theme === 'dark' ? 'text-zinc-700' : 'text-zinc-400'}">
			Shakti Singh Chauhan &copy; {new Date().getFullYear()}
		</p>
	</div>
</footer>
