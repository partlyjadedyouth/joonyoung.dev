import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects.js';

export async function load({ params }) {
	const project = projects.filter((project) => project.id === params.slug);

	if (project) {
		return { project };
	} else {
		error(404, 'Not found');
	}
}
