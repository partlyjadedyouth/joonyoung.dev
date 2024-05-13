<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectContainer from '$lib/components/ProjectContainer.svelte';
</script>

<svelte:head>
	<title>projects</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<section class="py-10">
	<h1 class="font-ibm font-medium text-2xl mb-5">PROJECTS</h1>

	{#each projects as project}
		<ProjectContainer
			id={project.id}
			year={project.year}
			title={project.title}
			description={project.description}
			thumbnail={project.thumbnail}
		/>
	{/each}
</section>
