import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { parseFrontmatter, parsePost } from '$lib/utils/parse-md.js';
import { marked } from 'marked';

interface Project {
	id: string;
	year: string;
	title: string;
	description: string;
	thumbnail: string;
	role: string;
	links: Array<{
		type: string;
		url: string;
	}>;
}

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
		const response = await fetch(`/projects/${params.slug}/index.md`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const content = await response.text();

		const project = parseFrontmatter(content) as Project | null;
		const post = parsePost(content);

		if (!project) {
			throw new Error('Failed to parse project content');
		}

		if (!post || typeof post !== 'string' || post.trim() === '') {
			throw new Error('Failed to parse post content or post is empty');
		}

		const parsedContent = marked(post);

		return {
			project,
			parsedContent
		};
	} catch (err) {
		console.error('Error loading project:', err);
		throw error(404, `Not found: ${err instanceof Error ? err.message : String(err)}`);
	}
};
