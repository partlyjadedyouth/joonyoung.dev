<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col w-full flex-auto px-36">
		<slot />
	</main>

	<Footer />
</div>
