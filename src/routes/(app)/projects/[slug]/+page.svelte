<script lang="ts">
	/**
	 * [/projects/[slug]/+page.svelte]
	 * This component renders a project page, displaying the project details
	 * including the title, year, links, post content, and the role of the author.
	 * It applies various styles and effects to the elements once the component is mounted.
	 */

	import LinkContainer from '$lib/components/LinkContainer.svelte';
	import { onMount, afterUpdate } from 'svelte';

	export let data;
	$: project = data.project;

	// Function to add padding to child elements of the post container
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

	// Function to add borders to all images inside the post container
	function formatImages() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const images = postContainer.getElementsByTagName('img');
			for (let img of images) {
				img.classList.add('rounded', 'border', 'border-gray-400', 'w-full', 'cursor-pointer');
				img.addEventListener('click', handleImageClick);
			}
		}
	}

	// Function to add hover effects to all links inside the post container
	function addHoverEffectToLinks() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const links = postContainer.getElementsByTagName('a');
			for (let link of links) {
				link.classList.add('hover:underline');
			}
		}
	}

	// Function to center-align all image captions within the post container
	function alignImageCaptionsCenter() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const captions = postContainer.getElementsByTagName('em');
			for (let caption of captions) {
				caption.classList.add('align-center');
			}
		}
	}

	// Function to handle image click for fullscreen view
	function handleImageClick(event: MouseEvent) {
		const img = event.target as HTMLImageElement;

		const fullscreenContainer = document.createElement('div');
		fullscreenContainer.id = 'fullscreen-container';
		fullscreenContainer.classList.add(
			'fixed',
			'inset-0',
			'bg-black',
			'bg-opacity-75',
			'flex',
			'items-center',
			'justify-center',
			'z-50',
			'p-10'
		);

		const fullscreenImage = document.createElement('img');
		fullscreenImage.src = img.src;
		fullscreenImage.classList.add('max-w-full', 'max-h-full');

		fullscreenContainer.appendChild(fullscreenImage);
		document.body.appendChild(fullscreenContainer);

		fullscreenContainer.addEventListener('click', () => {
			document.body.removeChild(fullscreenContainer);
		});
	}

	// Function to clean up event listeners
	function cleanup() {
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			const images = postContainer.getElementsByTagName('img');
			for (let img of images) {
				img.removeEventListener('click', handleImageClick);
			}
		}
	}

	// Function to set up the page
	function setupPage() {
		cleanup(); // Clean up old event listeners
		addPaddingToElements();
		formatImages();
		addHoverEffectToLinks();
		alignImageCaptionsCenter();
	}

	// Use afterUpdate to handle DOM manipulations when data changes
	afterUpdate(() => {
		setupPage();
	});

	// Clean up on component destruction
	onMount(() => {
		return () => {
			cleanup();
		};
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
			{@html project.content}
		</div>
		<!-- What I've done -->
		<div class="sm:mx-10">
			<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
			<p class="mt-2 font-medium">What I've done...</p>
			<p class="mt-1 text-sm font-light">{project.role}</p>
		</div>
	</div>
</section>
