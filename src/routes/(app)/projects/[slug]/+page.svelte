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
				} else if (child.children[0] && child.children[0].tagName === 'IMG') {
					child.classList.add('py-5', 'flex', 'flex-col', 'items-center');
				}
			}
		}
	}

	function addBorderToImages() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const images = postContainer.getElementsByTagName('img');
			for (let img of images) {
				img.classList.add('rounded', 'border', 'border-gray-400', 'w-full');
			}
		}
	}

	function addHoverEffectToLinks() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const links = postContainer.getElementsByTagName('a');
			for (let link of links) {
				link.classList.add('hover:underline');
			}
		}
	}

	function alignImageCaptionsCenter() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const captions = postContainer.getElementsByTagName('em');
			for (let caption of captions) {
				caption.classList.add('align-center');
			}
		}
	}

	onMount(() => {
		addPaddingToElements();
		addBorderToImages();
		addHoverEffectToLinks();
		alignImageCaptionsCenter();
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
		<div class="sm:mx-10">
			<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
			<p class="mt-2 font-medium">What I've done...</p>
			<p class="mt-1 text-sm font-light">{project.role}</p>
		</div>
	</div>
</section>
