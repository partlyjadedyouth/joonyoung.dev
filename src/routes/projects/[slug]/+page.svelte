<script type="ts">
	export let data;

	const project = data.project[0];
</script>

<section class="flex flex-col items-center py-20">
	<!-- Title -->
	<p class="font-biryani font-semibold text-3xl">{project.title}</p>
	<!-- Project year -->
	<p class="font-barlow mt-4 text-lg">{project.year}</p>
	<!-- Thumbnail -->
	<img
		alt="thumbnail"
		src={project.thumbnail}
		class="mt-10 rounded border border-gray-400 w-full"
	/>

	<div class="px-10 mt-12 font-barlow">
		<!-- Post -->
		<p class="font-light hyphenate">{project.post}</p>
		<!-- What I've done -->
		<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
		<p class="mt-2 font-medium">What I've done...</p>
		<p class="mt-1 text-sm font-light">{project.role}</p>
	</div>
</section>

<style>
	/* hyphenate wrapped words */
	.hyphenate {
		overflow-wrap: break-word;
		word-wrap: break-word;
		-webkit-hyphens: auto;
		-moz-hyphens: auto;
		-ms-hyphens: auto;
		hyphens: auto;
	}
</style>
