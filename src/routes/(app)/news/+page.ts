import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type NewsItem = {
	id: string;
	title: string;
	date: string;
	summary: string;
	link?: string;
};

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/data/news.json');

	if (!response.ok) {
		throw error(response.status, 'Failed to load news.');
	}

	const payload = (await response.json()) as unknown;

	if (!Array.isArray(payload)) {
		throw error(500, 'News data is in an unexpected format.');
	}

	return { news: payload as NewsItem[] };
};
