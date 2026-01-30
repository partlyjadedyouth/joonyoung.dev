/**
 * [/projects/+page.ts]
 * This module defines the load function to fetch and parse markdown files
 * for all projects. It retrieves the frontmatter metadata for each project
 * and returns an array of project data.
 */

// Importing project helpers
import { getAllProjects } from './_data';

// Asynchronous function to load project data
export function load() {
	// Returning the projects array as a response
	return { projects: getAllProjects() };
}
