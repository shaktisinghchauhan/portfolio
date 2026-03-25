import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'dark' | 'light';

function createThemeStore() {
	const initial: Theme = browser
		? (localStorage.getItem('theme') as Theme) || 'dark'
		: 'dark';

	const { subscribe, set, update } = writable<Theme>(initial);

	if (browser) {
		subscribe((value) => {
			localStorage.setItem('theme', value);
			document.documentElement.classList.toggle('dark', value === 'dark');
			document.documentElement.classList.toggle('light', value === 'light');
		});
	}

	return {
		subscribe,
		toggle: () => update((t) => (t === 'dark' ? 'light' : 'dark')),
		set
	};
}

export const theme = createThemeStore();
