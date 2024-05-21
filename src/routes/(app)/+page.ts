/**
 * [/+page.ts]
 * This module defines the load function to fetch and parse markdown files
 * for the latest three projects. It retrieves the frontmatter metadata for
 * each project and returns an array of project data.
 */

import { projectIDs } from '$lib/data/projects';
import { parseFrontmatter } from '$lib/utils/parse-md';
import type { Project } from '$lib/utils/definitions';

export async function load({ fetch }) {
	// Initializing an empty array to hold the project data
	const projects: Project[] = [];

	// Looping through the first three projectIDs in the projectIDs array
	for (const projectID of projectIDs.slice(0, 3)) {
		// Fetching the markdown file for the current projectID
		const markdown = await fetch(`/projects/${projectID}/index.md`);
		// Reading the content of the fetched markdown file as text
		const content = await markdown.text();
		// Parsing the frontmatter (metadata) from the markdown content
		const project = parseFrontmatter(content);

		// Adding the parsed project data to the projects array
		projects.push(project!);
	}

	// Returning the projects array as a response
	return { projects };
}
