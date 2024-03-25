<script lang="ts">
	import { page } from '$app/stores';
	const pdfUrl = $page.url.pathname.split('/')[3];
</script>

<svelte:head>
	<title>{pdfUrl}</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<iframe src={`/pdfs/${pdfUrl}`} title="pdf" class="w-full h-screen"></iframe>
