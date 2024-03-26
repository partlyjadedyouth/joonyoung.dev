<script lang="ts">
	import { page } from '$app/stores';
	const pdfUrl = $page.url.pathname.split('/')[2];
</script>

<svelte:head>
	<title>file</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<iframe src={`/pdfs/${pdfUrl}`} title="pdf" class="w-full h-screen"></iframe>
