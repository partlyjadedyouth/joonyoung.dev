/**
 * [/projects/+page.ts]
 * This module defines the load function to fetch and parse markdown files
 * for all projects. It retrieves the frontmatter metadata for each project
 * and returns an array of project data.
 */

// Importing the projectIDs array from the specified path
import { projectIDs } from '$lib/data/projects';
// Importing the Project type definition
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

// Asynchronous function to load project data
export function load() {
	// Initializing an empty array to hold the project data
	const projects: Project[] = [];

	// Looping through each projectID in the projectIDs array
	for (const projectID of projectIDs) {
		const project = projectById[projectID];

		// Adding the parsed project data to the projects array
		if (project) {
			projects.push(project);
		}
	}

	// Returning the projects array as a response
	return { projects };
}
