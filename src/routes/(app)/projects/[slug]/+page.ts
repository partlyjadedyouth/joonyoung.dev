/**
 * [/projects/[slug]/+page.ts]
 * This module defines the load function to fetch and parse the markdown file
 * for a specific project based on the route parameter (slug). It retrieves
 * the project metadata and post content, and handles errors if the content
 * is not found or fails to parse.
 */

// Importing the 'error' function from '@sveltejs/kit' for error handling
import { error } from '@sveltejs/kit';

// Importing utility functions for parsing markdown content
import { parseFrontmatter, parsePost } from '$lib/utils/parse-md.js';

// Asynchronous function to load data based on route parameters and fetch function
export async function load({ params, fetch }) {
	// Fetching the markdown file from the specified project path using the slug parameter
	const markdown = await fetch(`/projects/${params.slug}/index.md`);
	// Reading the content of the fetched markdown file as text
	const content = await markdown.text();
	// Parsing the frontmatter (metadata) from the markdown content
	const project = parseFrontmatter(content);
	// Parsing the main post content from the markdown file
	const post = parsePost(content);

	// Checking if both project metadata and post content are successfully parsed
	if (project && post) {
		// Returning the parsed project metadata and post content
		// console.log({
		// 	project: project,
		// 	post: post
		// });
		return { project, post };
	} else {
		// Throwing a 404 error if the project or post is not found or failed to parse
		error(404, 'Not found');
	}
}
