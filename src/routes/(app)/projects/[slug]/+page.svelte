<script lang="ts">
	/**
	 * [/projects/[slug]/+page.svelte]
	 * This component renders a project page, displaying the project details
	 * including the title, year, links, post content, and the role of the author.
	 * It applies various styles and effects to the elements once the component is mounted.
	 */

	// Importing the LinkContainer component from the specified path
	import LinkContainer from '$lib/components/LinkContainer.svelte';

	// Importing the 'marked' library for parsing markdown content
	import { marked } from 'marked';

	// Importing the 'onMount' lifecycle function from Svelte
	import { onMount } from 'svelte';

	// Declaring 'data' as a prop that will be passed to this component
	export let data;

	// Extracting the 'project' property from the 'data' object
	const { project, parsedContent } = data;

	// Function to add padding to child elements of the post container
	function addPaddingToElements() {
		// Getting the element with the ID 'post-container'
		const container = document.getElementById('post-container');
		if (container) {
			// Getting all children of the container
			const children = container.children;
			// Looping through each child element
			for (const child of children) {
				// Checking if the first child element is not an image
				if (!child.children[0] || child.children[0].tagName !== 'IMG') {
					// Adding padding class to elements that are not images
					child.classList.add('sm:px-10');
				} else if (child.children[0] && child.children[0].tagName === 'IMG') {
					// Adding specific classes to image elements
					child.classList.add('py-5', 'flex', 'flex-col', 'items-center');
				}
			}
		}
	}

	// Function to add borders to all images inside the post container
	function formatImages() {
		// Getting the element with the ID 'post-container'
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			// Getting all image elements within the post container
			const images = postContainer.getElementsByTagName('img');
			// Looping through each image element
			for (let img of images) {
				// Adding border and styling classes to the image
				img.classList.add('rounded', 'border', 'border-gray-400', 'w-full', 'cursor-pointer');
				// Adding event listener to handle image click for fullscreen view
				img.addEventListener('click', handleImageClick);
			}
		}
	}

	// Function to add hover effects to all links inside the post container
	function addHoverEffectToLinks() {
		// Getting the element with the ID 'post-container'
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			// Getting all anchor (link) elements within the post container
			const links = postContainer.getElementsByTagName('a');
			// Looping through each link element
			for (let link of links) {
				// Adding hover effect class to the link
				link.classList.add('hover:underline');
			}
		}
	}

	// Function to center-align all image captions within the post container
	function alignImageCaptionsCenter() {
		// Getting the element with the ID 'post-container'
		const postContainer = document.getElementById('post-container');
		if (postContainer) {
			// Getting all <em> elements (typically used for captions) within the post container
			const captions = postContainer.getElementsByTagName('em');
			// Looping through each caption element
			for (let caption of captions) {
				// Adding center alignment class to the caption
				caption.classList.add('align-center');
			}
		}
	}

	// Function to handle image click for fullscreen view
	function handleImageClick(event: MouseEvent) {
		// Cast the event target to an HTMLImageElement to access the clicked image's properties
		const img = event.target as HTMLImageElement;

		// Create a new div element to act as the fullscreen container
		const fullscreenContainer = document.createElement('div');
		fullscreenContainer.id = 'fullscreen-container';

		// Add necessary classes to the fullscreen container for styling
		fullscreenContainer.classList.add(
			'fixed', // Position the container fixed relative to the viewport
			'inset-0', // Make the container cover the entire viewport
			'bg-black', // Set the background color to black
			'bg-opacity-75', // Make the background slightly transparent (75% opacity)
			'flex', // Use flexbox for centering the image
			'items-center', // Center items vertically
			'justify-center', // Center items horizontally
			'z-50', // Ensure the container appears on top of other content
			'p-10' // Add padding to the container
		);

		// Create a new image element for displaying the clicked image in fullscreen
		const fullscreenImage = document.createElement('img');
		fullscreenImage.src = img.src; // Set the source of the fullscreen image to the clicked image's source
		fullscreenImage.classList.add('max-w-full', 'max-h-full'); // Ensure the image scales appropriately

		// Append the fullscreen image to the fullscreen container
		fullscreenContainer.appendChild(fullscreenImage);

		// Append the fullscreen container to the body, making it visible
		document.body.appendChild(fullscreenContainer);

		// Add an event listener to the fullscreen container to handle click events
		fullscreenContainer.addEventListener('click', () => {
			// Remove the fullscreen container from the body when clicked, effectively closing the fullscreen view
			document.body.removeChild(fullscreenContainer);
		});
	}

	// Using the 'onMount' lifecycle function to execute code after the component has been mounted
	onMount(() => {
		// Adding padding to elements after the component has been mounted
		addPaddingToElements();
		// Adding borders to images after the component has been mounted
		formatImages();
		// Adding hover effects to links after the component has been mounted
		addHoverEffectToLinks();
		// Center-aligning image captions after the component has been mounted
		alignImageCaptionsCenter();
		//
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
			{@html parsedContent}
		</div>
		<!-- What I've done -->
		<div class="sm:mx-10">
			<hr class="border-[0.5px] border-gray-500 w-full mt-12" />
			<p class="mt-2 font-medium">What I've done...</p>
			<p class="mt-1 text-sm font-light">{project.role}</p>
		</div>
	</div>
</section>
