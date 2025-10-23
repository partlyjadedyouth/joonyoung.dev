<script lang="ts">
	import { onMount } from 'svelte';
	import HorizontalLine from '$lib/components/HorizontalLine.svelte';

	type NewsItem = {
		id: string;
		title: string;
		date: string;
		summary: string;
		link?: string;
	};

	export let items: NewsItem[] | null = null;
	export let showViewAll = true;

	let news: NewsItem[] = items ?? [];
	let loading = !items;
	let error: string | null = null;

	onMount(async () => {
		if (items) {
			return;
		}

		try {
			const response = await fetch('/data/news.json');

			if (!response.ok) {
				throw new Error('Unable to load news for now.');
			}

			const payload = (await response.json()) as unknown;

			if (Array.isArray(payload)) {
				news = payload as NewsItem[];
			} else {
				throw new Error('News data is in an unexpected format.');
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unknown error while fetching news.';
		} finally {
			loading = false;
		}
	});

	const formatDate = (isoDate: string) => {
		try {
			return new Intl.DateTimeFormat('en-US', {
				month: 'short',
				day: 'numeric',
				year: 'numeric'
			}).format(new Date(isoDate));
		} catch {
			return isoDate;
		}
	};
</script>

<section class="py-10">
	<div class="flex items-center justify-between">
		<h1 class="font-ibm font-medium text-xl">News</h1>
		{#if showViewAll && !loading && !error && news.length > 0}
			<a href="/news">
				<div
					class="text-xs font-medium border rounded px-3 py-1 border-gray-500 hover:bg-black hover:text-white transition-colors"
				>
					View all
				</div>
			</a>
		{/if}
	</div>

	{#if loading}
		<p class="mt-6 font-ibm text-sm text-gray-500">Fetching the latest updates…</p>
	{:else if error}
		<p class="mt-6 font-ibm text-sm text-red-500">{error}</p>
	{:else if news.length === 0}
		<p class="mt-6 font-ibm text-sm text-gray-500">
			No news to share just yet. Please check back soon.
		</p>
	{:else}
		<div class="mt-6 space-y-10 border border-gray-400 rounded-lg p-5">
			{#each news as item, index (item.id)}
				<article class="font-ibm">
					<h2 class="mt-2 text-lg font-medium">{item.title}</h2>
					<p class="text-xs font-light tracking-wide text-gray-500">{formatDate(item.date)}</p>
					<p class="my-2 text-sm font-light leading-relaxed text-gray-700">{item.summary}</p>
				</article>
				{#if index < news.length - 1}
					<HorizontalLine w="full" color="gray" />
				{/if}
			{/each}
		</div>
	{/if}
</section>
