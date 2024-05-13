<script lang="ts">
	import ProfileContainer from '$lib/components/ProfileContainer.svelte';
	import ProjectContainer from '$lib/components/ProjectContainer.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Joonyoung Park</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<!-- Profile section -->
<section class="py-10">
	<ProfileContainer />
</section>

<!-- Latest Projects section -->
<section class="py-10">
	<div class="flex justify-between">
		<!-- Title -->
		<h1 class="font-ibm font-medium text-xl">Latest Projects</h1>
		<!-- Link to /projects -->
		<a href="/projects">
			<div
				class="text-xs font-medium border rounded px-3 py-1 border-gray-500 hover:bg-black hover:text-white"
			>
				View all
			</div>
		</a>
	</div>

	<!-- Project container -->
	{#each projects.slice(0, 3) as project}
		<ProjectContainer
			id={project.id}
			year={project.year}
			title={project.title}
			description={project.description}
			thumbnail={project.thumbnail}
		/>
	{/each}
</section>
