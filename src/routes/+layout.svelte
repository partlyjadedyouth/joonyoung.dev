<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col w-full flex-auto px-36">
		<slot />
	</main>

	<Footer />
</div>
