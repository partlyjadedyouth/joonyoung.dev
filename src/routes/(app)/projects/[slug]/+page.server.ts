import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { parseFrontmatter, parsePost } from '$lib/utils/parse-md';
import type { Project } from '$lib/utils/definitions';

const projectFiles = import.meta.glob('/static/projectAssets/**/index.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export async function load({ params }) {
	const { slug } = params;
	const matchingFile = Object.entries(projectFiles).find(([path]) =>
		path.includes(`/static/projectAssets/${slug}/`)
	);

	if (!matchingFile) {
		throw error(404, `Project not found`);
	}

	const [, content] = matchingFile;

	const projectData = parseFrontmatter(content as string);
	if (!projectData) {
		throw error(500, `Failed to parse project data`);
	}

	const markdown = parsePost(content as string);
	const htmlContent = marked(markdown.trim());

	// Adjust the thumbnail path
	const adjustedProjectData = {
		...projectData,
		thumbnail: projectData.thumbnail.startsWith('/')
			? `/projectAssets${projectData.thumbnail}`
			: `/projectAssets/${projectData.thumbnail}`
	};

	return {
		project: {
			...adjustedProjectData,
			content: htmlContent
		} as Project & { content: string }
	};
}
