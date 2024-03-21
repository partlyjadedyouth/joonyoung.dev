<script type="ts">
	import { page } from '$app/stores';
	const pdfUrl = $page.url.pathname.split('/')[3];
	console.log($page.url.pathname);
	console.log(pdfUrl);
</script>

<iframe src={`/pdfs/${pdfUrl}`} title="pdf" class="w-full h-screen"></iframe>
