<script lang="ts">
	// Import the page store from SvelteKit's app stores
	import { page } from '$app/stores';

	// Get the file name from the URL. The URL is expected to be in the format '/pdfs/{fileName}'
	const fileName = $page.url.pathname.split('/')[2];
</script>

<svelte:head>
	<!-- Set the page title to the file name -->
	<title>{fileName}</title>

	<!-- Set the meta description for the page -->
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<!-- Display the PDF in an iframe. The source of the iframe is set to the path of the PDF file -->
<iframe
	src={`/pdfs/${fileName}`}
	frameborder="0"
	title="pdf"
	style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
></iframe>
