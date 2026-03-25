<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { howIWork, stats } from '$lib/data/portfolio';
	import { inview } from '$lib/actions/inview';

	let visible = $state(false);
	let counters = $state(stats.map(() => 0));
	let countStarted = false;

	function startCounters() {
		if (countStarted) return;
		countStarted = true;
		stats.forEach((stat, i) => {
			const duration = 2000;
			const steps = 60;
			const stepTime = duration / steps;
			let current = 0;
			const interval = setInterval(() => {
				current++;
				const progress = current / steps;
				const eased = 1 - Math.pow(1 - progress, 3);
				counters[i] = Number((eased * stat.value).toFixed(stat.decimals));
				if (current >= steps) {
					counters[i] = stat.value;
					clearInterval(interval);
				}
			}, stepTime);
		});
	}
</script>

<section
	id="about"
	class="px-6 py-24"
	use:inview={{ threshold: 0.15 }}
	oninview={() => {
		visible = true;
		startCounters();
	}}
>
	<div class="mx-auto max-w-6xl">
		<h2
			class="mb-12 font-mono text-xs font-medium tracking-widest uppercase transition-all duration-700 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'} {$theme === 'dark' ? 'text-accent-400' : 'text-accent-600'}"
		>
			About Me
		</h2>

		<!-- Bento Grid -->
		<div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
			<!-- Big card: How I Work - spans 2 cols -->
			{#each howIWork as item, i (item.title)}
				<div
					class="card-hover rounded-2xl p-6 transition-all duration-700 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'} {$theme === 'dark' ? 'glass-dark' : 'glass-light'} {i === 0
						? 'md:col-span-2'
						: ''}"
					style="transition-delay: {150 + i * 100}ms"
				>
					<div
						class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl {$theme === 'dark'
							? 'bg-accent-500/10'
							: 'bg-accent-100'}"
					>
						{#if item.icon === 'shield'}
							<svg
								class="h-5 w-5 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
						{:else if item.icon === 'compass'}
							<svg
								class="h-5 w-5 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
								/>
							</svg>
						{:else if item.icon === 'check'}
							<svg
								class="h-5 w-5 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								/>
							</svg>
						{:else}
							<svg
								class="h-5 w-5 text-accent-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								/>
							</svg>
						{/if}
					</div>
					<h3
						class="mb-2 text-lg font-bold {$theme === 'dark' ? 'text-white' : 'text-zinc-900'}"
					>
						{item.title}
					</h3>
					<p class="text-sm leading-relaxed {$theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}">
						{item.text}
					</p>
				</div>
			{/each}

			<!-- Stats row -->
			{#each stats as stat, i (stat.label)}
				<div
					class="card-hover flex flex-col items-center justify-center rounded-2xl p-5 text-center transition-all duration-700 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-6 opacity-0'} {$theme === 'dark' ? 'glass-dark' : 'glass-light'} {i === 0
						? 'md:col-span-2 lg:col-span-1'
						: ''}"
					style="transition-delay: {600 + i * 80}ms"
				>
					<div
						class="text-3xl font-black tabular-nums {$theme === 'dark'
							? 'text-white'
							: 'text-zinc-900'}"
					>
						{counters[i]}<span class="text-accent-500">{stat.suffix}</span>
					</div>
					<div
						class="mt-1 font-mono text-[10px] tracking-wider uppercase {$theme === 'dark'
							? 'text-zinc-600'
							: 'text-zinc-400'}"
					>
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
