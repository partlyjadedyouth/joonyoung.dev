<script lang="ts">
	import LinkContainer from '$lib/components/LinkContainer.svelte';
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	export let data;

	const project = data.project;

	function addPaddingToElements() {
		const container = document.getElementById('post-container');
		if (container) {
			const children = container.children;
			for (const child of children) {
				if (!child.children[0] || child.children[0].tagName !== 'IMG') {
					child.classList.add('sm:px-10');
				}
			}
		}
	}

	function addBorderToImages() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const images = postContainer.getElementsByTagName('img');
			for (let img of images) {
				img.classList.add('my-5', 'rounded', 'border', 'border-gray-400', 'w-full');
			}
		}
	}

	onMount(() => {
		addPaddingToElements();
		addBorderToImages();
	});
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

	<div class="mt-5 font-ibm">
		<!-- Post -->
		<div class="font-light hyphenate flex flex-col space-y-5" id="post-container">
			{@html marked(data.post)}
		</div>
		<!-- What I've done -->
		<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
		<p class="mt-2 font-medium">What I've done...</p>
		<p class="mt-1 text-sm font-light">{project.role}</p>
	</div>
</section>
