<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Shakti Singh Chauhan — Senior Software Engineer</title>
</svelte:head>

<ScrollProgress />
<Navbar />

<main>
	<Hero />
	<About />
	<Timeline />
	<Projects />
	<Skills />
	<Resume />
	<Contact />
</main>
