<script lang="ts">
	import { page } from '$app/stores';
	const fileName = $page.url.pathname.split('/')[2];
</script>

<svelte:head>
	<title>{fileName}</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<iframe src={`/pdfs/${fileName}`} frameborder="0" title="pdf" style="width: 99vw; height: 100vh;"
></iframe>
