import { error } from '@sveltejs/kit';
import { parseFrontmatter, parsePost } from '$lib/utils/parse-md.js';

export async function load({ params, fetch }) {
	const markdown = await fetch(`/projects/${params.slug}/index.md`);
	const content = await markdown.text();
	const project = parseFrontmatter(content);
	const post = parsePost(content);

	if (project && post) {
		return { project, post };
	} else {
		error(404, 'Not found');
	}
}
