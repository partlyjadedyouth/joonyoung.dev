<script lang="ts">
	import LinkContainer from '$lib/components/LinkContainer.svelte';
	export let data;

	const project = data.project[0];
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<section class="flex flex-col items-center py-20">
	<!-- Title -->
	<p class="font-biryani font-semibold text-3xl text-center">{project.title}</p>

	<!-- Project year -->
	<p class="font-ibm mt-1 text-lg">{project.year}</p>

	<!-- PDF, Web, Video links -->
	<div class="flex items-center justify-between gap-x-2">
		{#each project.links as link}
			<LinkContainer type={link.type} url={link.url} />
		{/each}
	</div>

	<!-- Thumbnail -->
	<img
		alt="thumbnail"
		src={project.thumbnail}
		class="mt-10 rounded border border-gray-400 w-full"
	/>

	<div class="sm:px-10 mt-12 font-ibm">
		<!-- Post -->
		<p class="font-light hyphenate">{@html project.post}</p>
		<!-- What I've done -->
		<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
		<p class="mt-2 font-medium">What I've done...</p>
		<p class="mt-1 text-sm font-light">{project.role}</p>
	</div>
</section>
