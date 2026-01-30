/**
 * [/+page.ts]
 * This module defines the load function to fetch and parse markdown files
 * for the latest three projects. It retrieves the frontmatter metadata for
 * each project and returns an array of project data.
 */

import { projectIDs } from '$lib/data/projects';
import type { Project } from '$lib/utils/definitions';

const projectModules = import.meta.glob('$lib/content/projects/*/index.md', { eager: true });

const projectById = Object.entries(projectModules).reduce<Record<string, Project>>(
	(acc, [path, module]) => {
		const slug = path.split('/').slice(-2, -1)[0];
		if (slug) {
			const metadata = (module as { metadata?: Project }).metadata;
			if (metadata) {
				acc[slug] = metadata;
			}
		}
		return acc;
	},
	{}
);

export function load() {
	// Initializing an empty array to hold the project data
	const projects: Project[] = [];

	// Looping through the first three projectIDs in the projectIDs array
	for (const projectID of projectIDs.slice(0, 3)) {
		const project = projectById[projectID];

		// Adding the parsed project data to the projects array
		if (project) {
			projects.push(project);
		}
	}

	// Returning the projects array as a response
	return { projects };
}
