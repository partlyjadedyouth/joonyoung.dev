import { error } from '@sveltejs/kit';
import * as yaml from 'js-yaml';

interface LinkDetails {
	type: string;
	url: string;
}

interface Project {
	id: string;
	year: string;
	title: string;
	description: string;
	thumbnail: string;
	role: string;
	links: LinkDetails[];
}

function parseFrontmatter(markdown: string): Project | null {
	// Regular expression to match the frontmatter block
	const frontmatterRegex = /---\s*([\s\S]+?)\s*---/;
	const match = markdown.match(frontmatterRegex);

	if (!match) {
		return null;
	}

	const frontmatter = match[1];

	try {
		// Parse the frontmatter using js-yaml
		const frontmatterObject = yaml.load(frontmatter) as Partial<Project>;

		const requiredKeys: (keyof Project)[] = [
			'id',
			'year',
			'title',
			'description',
			'thumbnail',
			'role',
			'links'
		];
		for (const key of requiredKeys) {
			if (!(key in frontmatterObject)) {
				return null;
			}
		}

		return {
			id: frontmatterObject.id as string,
			year: frontmatterObject.year as string,
			title: frontmatterObject.title as string,
			description: frontmatterObject.description as string,
			thumbnail: frontmatterObject.thumbnail as string,
			role: frontmatterObject.role as string,
			links: frontmatterObject.links as LinkDetails[]
		};
	} catch (error) {
		console.error('Error parsing frontmatter:', error);
		return null;
	}
}

function parsePost(markdown: string): string {
	const frontmatterRegex = /---\s*([\s\S]+?)\s*---/;
	const match = markdown.match(frontmatterRegex);

	if (!match) {
		return markdown;
	}

	return markdown.slice(match[0].length);
}

export async function load({ params, fetch }) {
	const markdown = await fetch(`/projects/${params.slug}/index.md`);
	const content = await markdown.text();
	const project = parseFrontmatter(content);
	const post = parsePost(content);

	if (project && post) {
		return { project, post };
	} else {
		error(404, 'Not found');
	}
}
