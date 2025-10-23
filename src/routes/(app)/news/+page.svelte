<script lang="ts">
	/**
	 * [/news/+page.svelte]
	 * Renders the news archive page by reusing the NewsSection component with all news items.
	 */
	import NewsSection from '$lib/components/NewsSection.svelte';

	export let data;

	const news = data.news ?? [];
</script>

<svelte:head>
	<title>news</title>
	<meta name="description" content="Latest news and updates from Joonyoung Park." />
</svelte:head>

<div class="pt-20">
	<NewsSection items={news} showViewAll={false} showLinks={true} />
</div>
