<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Header />
<div class="flex flex-col min-h-screen items-center">
	<main class="flex flex-col w-full flex-auto max-w-xl">
		<slot />
	</main>
</div>
<Footer />
