import type { PageLoad } from './$types';
import newsData from '$lib/data/news.json';

type NewsItem = {
	id: string;
	title: string;
	date: string;
	summary: string;
	link?: string;
};

export const load: PageLoad = async () => {
	return { news: newsData as NewsItem[] };
};
