import { error } from '@sveltejs/kit';
import type { Project } from '$lib/utils/definitions';

const projectModules = import.meta.glob('$lib/content/projects/*/index.md', { eager: true });

export function load({ params }) {
	const { slug } = params;
	const modulePath = `/src/lib/content/projects/${slug}/index.md`;
	const module = projectModules[modulePath] as { metadata?: Project } | undefined;
	const projectData = module?.metadata;

	if (!projectData) {
		throw error(404, 'Project not found');
	}

	return {
		slug,
		project: projectData
	};
}
