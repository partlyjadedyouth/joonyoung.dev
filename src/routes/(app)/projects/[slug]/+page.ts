import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects.js';

export async function load({ params, fetch }) {
	const project = projects.filter((project) => project.id === params.slug)[0];
	const markdown = await fetch(`/markdown/${params.slug}.md`);
	const post = await markdown.text();

	if (project && post) {
		return { project, post };
	} else {
		error(404, 'Not found');
	}
}
