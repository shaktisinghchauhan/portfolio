export const profile = {
	name: 'Shakti Singh Chauhan',
	title: 'Senior Software Engineer',
	email: 'shakti.panda.chauhan@gmail.com',
	phone: '+91-9172380653',
	linkedin: 'https://www.linkedin.com/in/shakti-chauhan-91a0491ab/',
	github: '#',
	location: 'Mumbai, India',
	available: true,
	taglines: [
		'I build production apps.',
		'I ship across platforms.',
		'I lead from the code.',
		'I own the product.'
	],
	bio: "6.5+ years shipping production software. I take ownership of products, not tasks — from architecture to app store. Mobile, web, backend — I move across the stack and I ship.",
	terminalIntro: [
		'> whoami',
		'shakti-singh-chauhan',
		'> cat role.txt',
		'Senior Software Engineer',
		'> cat stack.txt',
		'React Native • React • Next.js • Svelte • TypeScript • Node.js',
		'> cat status.txt',
		'Open to new opportunities',
		'> _'
	]
};

export const stats = [
	{ label: 'Years Building', value: 6.5, suffix: '+', decimals: 1, icon: 'clock' },
	{ label: 'Production Users', value: 4000, suffix: '+', decimals: 0, icon: 'users' },
	{ label: 'Countries', value: 177, suffix: '', decimals: 0, icon: 'globe' },
	{ label: 'Lines of Code', value: 84, suffix: 'K+', decimals: 0, icon: 'code' },
	{ label: 'Screens Shipped', value: 46, suffix: '', decimals: 0, icon: 'layers' },
	{ label: 'Apps in Stores', value: 2, suffix: '', decimals: 0, icon: 'rocket' }
];

export const timeline = [
	{
		company: 'Ek Ishwar Pvt. Ltd.',
		role: 'Senior Software Engineer',
		period: 'Oct 2025 — Apr 2026',
		location: 'Mumbai',
		highlight: 'Sole mobile engineer. 2 production apps. 4,000+ users across 177 countries.',
		description:
			'Owned two React Native applications end-to-end — architecture, design interpretation, implementation, payments, analytics, store submissions, and production support. Rebuilt legacy codebase from quality grade 3.5/10 to 9.6/10.',
		tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'Razorpay', 'Firebase', 'CleverTap'],
		accent: true
	},
	{
		company: 'Software Workshop',
		role: 'Senior Software Engineer',
		period: 'Aug 2023 — Sep 2025',
		location: 'Mumbai',
		highlight: 'Won company hackathon. Built tender platform from prototype to production.',
		description:
			'Led frontend development across Svelte, Next.js, and Python data pipelines. Delivered content delivery systems with SSR/CSR strategies. Established component standards across multiple products.',
		tags: ['Svelte', 'SvelteKit', 'Next.js', 'Python', 'TailwindCSS', 'Directus CMS'],
		accent: false
	},
	{
		company: 'Atra Phygital Pvt. Ltd.',
		role: 'Software Engineer → Team Lead',
		period: 'Jan 2021 — Jul 2023',
		location: 'Mumbai',
		highlight: 'Led 3-person team. Built fintech platform and enterprise HRMS.',
		description:
			'Grew from IC to leading a frontend team. Owned architecture for a multi-asset investment platform. Authored BRD for HRMS. Introduced GraphQL and code review processes.',
		tags: ['React.js', 'Redux Toolkit', 'Apollo Client', 'GraphQL', 'MUI', 'Prismic CMS'],
		accent: false
	},
	{
		company: 'Whizedin Solutions Pvt. Ltd.',
		role: 'Software Engineer',
		period: 'Nov 2019 — Dec 2020',
		location: 'Pune',
		highlight: 'First role. Full-stack web development.',
		description:
			'Built responsive UIs with React and RESTful APIs with Node.js/Express.js. Established foundation in the React ecosystem and agile delivery.',
		tags: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
		accent: false
	}
];

export const projects = [
	{
		title: 'Ek Ishwar — Devotee App',
		subtitle: 'Production mobile app for devotees',
		description:
			'34 screens. Puja booking, Razorpay payments, push notifications, 105 analytics events, 14-route deep linking. First-submission approval on both stores.',
		metrics: ['4,000+ users', '177 countries', '845 files', '60,885 LOC'],
		tags: ['React Native', 'TypeScript', 'RTK Query', 'Razorpay', 'Firebase'],
		impact: 'Sole engineer — architecture to app store',
		featured: true
	},
	{
		title: 'Ek Ishwar — Kiosk App',
		subtitle: 'Temple operations app built from scratch',
		description:
			'QR code check-in via camera, GPS-based attendance tracking, video upload to S3, offline-first local storage, Firebase Crashlytics.',
		metrics: ['432 files', '~23,500 LOC', '12 screens'],
		tags: ['React Native', 'Vision Camera', 'Geolocation', 'S3'],
		impact: 'Built from zero — no prior codebase',
		featured: true
	},
	{
		title: 'Homesharp Tender Platform',
		subtitle: 'Hackathon winner → production product',
		description:
			'Tender management platform with custom Google Maps, location-based filtering, secure auth, and encoded shareable URLs.',
		metrics: ['Hackathon Winner', 'Full Lifecycle'],
		tags: ['Svelte', 'TailwindCSS', 'Google Maps API'],
		impact: 'Won company hackathon, deployed to production',
		featured: false
	},
	{
		title: 'Investlane — BeyondIRR',
		subtitle: 'Fintech marketplace for alternative assets',
		description:
			'Investment discovery, KYC verification, portfolio tracking, onboarding flows. Mobile-first. Collaborated directly with investors.',
		metrics: ['1 year build', 'Production-ready'],
		tags: ['React.js', 'Redux Toolkit', 'MUI', 'Recharts'],
		impact: 'Owned frontend architecture end-to-end',
		featured: false
	},
	{
		title: 'HRMS Platform',
		subtitle: 'Enterprise hiring and onboarding',
		description:
			'Led 3-person team. Authored BRD. Apollo Client with GraphQL for form-heavy workflows. RBAC, draft/publish, real-time evaluation.',
		metrics: ['3 developers led', '1-year deadline met'],
		tags: ['React.js', 'Apollo Client', 'GraphQL'],
		impact: 'IC to team lead — authored the BRD',
		featured: false
	},
	{
		title: 'SplitBetter',
		subtitle: 'Personal project — expense management',
		description:
			'Cross-platform React Native app. Offline-first with WatermelonDB. Designed UX in Figma. Group expense logic and payment tracking.',
		metrics: ['Side Project', 'iOS + Android'],
		tags: ['React Native', 'WatermelonDB', 'Figma'],
		impact: 'Designed and built independently',
		featured: false
	}
];

export const skillGroups = [
	{
		category: 'Mobile',
		skills: [
			{ name: 'React Native', level: 95 },
			{ name: 'React Navigation', level: 90 },
			{ name: 'Reanimated', level: 85 },
			{ name: 'Vision Camera', level: 80 },
			{ name: 'Lottie', level: 85 },
			{ name: 'Flash List', level: 80 }
		]
	},
	{
		category: 'Web',
		skills: [
			{ name: 'React.js', level: 92 },
			{ name: 'Next.js', level: 85 },
			{ name: 'Svelte / SvelteKit', level: 88 },
			{ name: 'TailwindCSS', level: 95 },
			{ name: 'SCSS', level: 80 }
		]
	},
	{
		category: 'State & Data',
		skills: [
			{ name: 'Redux Toolkit', level: 92 },
			{ name: 'RTK Query', level: 90 },
			{ name: 'Apollo Client', level: 82 },
			{ name: 'GraphQL', level: 80 },
			{ name: 'Zod', level: 85 }
		]
	},
	{
		category: 'Backend',
		skills: [
			{ name: 'Node.js', level: 78 },
			{ name: 'Express.js', level: 78 },
			{ name: 'Python', level: 70 },
			{ name: 'REST APIs', level: 90 }
		]
	},
	{
		category: 'Services',
		skills: [
			{ name: 'Firebase', level: 88 },
			{ name: 'CleverTap', level: 85 },
			{ name: 'Razorpay', level: 85 },
			{ name: 'AWS S3', level: 75 },
			{ name: 'Google Maps', level: 80 }
		]
	},
	{
		category: 'Tools',
		skills: [
			{ name: 'TypeScript', level: 95 },
			{ name: 'Git', level: 90 },
			{ name: 'Docker', level: 70 },
			{ name: 'ESLint / Prettier', level: 92 },
			{ name: 'Figma', level: 75 }
		]
	}
];

export const howIWork = [
	{
		title: 'Ownership',
		text: 'I take ownership of products, not tasks. Architecture to production, across every role.',
		icon: 'shield'
	},
	{
		title: 'Ambiguity',
		text: 'Most features I built came from one-line briefs with partial or no design specs. I make decisions and ship.',
		icon: 'compass'
	},
	{
		title: 'Quality',
		text: 'I write strict, typed, documented code. The next person reading it should not have to guess.',
		icon: 'check'
	},
	{
		title: 'Range',
		text: 'Frontend-heavy, but comfortable with backend, data pipelines, native mobile, and infrastructure.',
		icon: 'layers'
	}
];
