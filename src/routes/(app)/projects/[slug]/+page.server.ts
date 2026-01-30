import { error } from '@sveltejs/kit';
import type { Project } from '$lib/utils/definitions';

const projectModules = import.meta.glob('$lib/content/projects/*.md', { eager: true });

function normalizeThumbnail(project: Project): Project {
	return {
		...project,
		thumbnail: project.thumbnail.startsWith('/projectAssets/')
			? project.thumbnail
			: project.thumbnail.startsWith('/')
				? `/projectAssets${project.thumbnail}`
				: `/projectAssets/${project.thumbnail}`
	};
}

export function load({ params }) {
	const { slug } = params;
	const modulePath = `/src/lib/content/projects/${slug}.md`;
	const module = projectModules[modulePath] as { metadata?: Project } | undefined;
	const projectData = module?.metadata;

	if (!projectData) {
		throw error(404, 'Project not found');
	}

	return {
		slug,
		project: normalizeThumbnail(projectData)
	};
}
