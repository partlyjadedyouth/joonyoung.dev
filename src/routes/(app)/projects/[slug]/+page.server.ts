import { error } from '@sveltejs/kit';
import type { Project } from '$lib/utils/definitions';

const projectModules = import.meta.glob('/src/routes/**/index.md', { eager: true });

export function load({ params }) {
	const { slug } = params;
	const modulePath = `/src/routes/(app)/projects/(content)/${slug}/index.md`;
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
