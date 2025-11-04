<script lang="ts">
	/**
	 * [/news/+page.svelte]
	 * Renders the news archive page by reusing the NewsSection component with all news items.
	 */
	import NewsSection from '$lib/components/NewsSection.svelte';

	// Use $props() to receive data from the page load function
	let { data } = $props();

	// Create a derived value for news with fallback to empty array
	let news = $derived(data.news ?? []);
</script>

<svelte:head>
	<title>news | joonyoung park</title>
	<meta name="description" content="Latest news and updates from Joonyoung Park." />
</svelte:head>

<div class="py-20">
	<h1 class="font-ibm font-medium text-2xl mb-5">NEWS</h1>
	<NewsSection items={news} />
</div>
