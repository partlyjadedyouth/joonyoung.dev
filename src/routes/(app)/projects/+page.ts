import { projectIDs } from '$lib/data/projects';
import { parseFrontmatter } from '$lib/utils/parse-md';
import type { Project } from '$lib/utils/definitions';

export async function load({ fetch }) {
	const projects: Project[] = [];
	for (const projectID of projectIDs) {
		const markdown = await fetch(`/projects/${projectID}/index.md`);
		const content = await markdown.text();
		const project = parseFrontmatter(content);

		projects.push(project!);
	}

	return { projects };
}
