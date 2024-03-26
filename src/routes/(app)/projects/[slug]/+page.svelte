<script lang="ts">
	import LinkContainer from '$lib/components/LinkContainer.svelte';
	import document from '$lib/images/document.svg';
	export let data;

	const project = data.project[0];
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<section class="flex flex-col items-center py-20">
	<!-- Title -->
	<p class="font-biryani font-semibold text-3xl">{project.title}</p>

	<!-- Project year -->
	<p class="font-barlow mt-1 text-lg">{project.year}</p>

	<!-- PDF, Web, Video links -->
	<div class="flex items-center justify-between gap-x-2">
		{#if project.fileName}
			<LinkContainer linkType="pdf" url={`/paper/${project.fileName}`} />
		{/if}
		{#if project.web}
			<LinkContainer linkType="web" url={project.web} />
		{/if}
		{#if project.video}
			<LinkContainer linkType="video" url={project.video} />
		{/if}
	</div>

	<!-- Thumbnail -->
	<img
		alt="thumbnail"
		src={project.thumbnail}
		class="mt-10 rounded border border-gray-400 w-full"
	/>

	<div class="sm:px-10 mt-12 font-barlow">
		<!-- Post -->
		<p class="font-light hyphenate">{project.post}</p>
		<!-- What I've done -->
		<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
		<p class="mt-2 font-medium">What I've done...</p>
		<p class="mt-1 text-sm font-light">{project.role}</p>
	</div>
</section>
