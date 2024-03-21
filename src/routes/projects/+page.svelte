<script type="ts">
	import { projects } from '$lib/data/projects';
	import ProjectContainer from '$lib/components/ProjectContainer.svelte';
</script>

<section class="py-10">
	<h1 class="font-barlow font-medium text-2xl mb-5">PROJECTS</h1>

	{#each projects as project}
		<ProjectContainer {...project} />
	{/each}
</section>
