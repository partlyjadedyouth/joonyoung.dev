<script lang="ts">
	import { page } from '$app/stores';
	const pdfUrl = $page.url.pathname.split('/')[3];
</script>

<iframe src={`/pdfs/${pdfUrl}`} title="pdf" class="w-full h-screen"></iframe>
