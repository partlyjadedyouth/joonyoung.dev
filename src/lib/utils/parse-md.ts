import type { LinkDetails, Project } from './definitions';
import * as yaml from 'js-yaml';

export function parseFrontmatter(markdown: string): Project | null {
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

export function parsePost(markdown: string): string {
	const frontmatterRegex = /---\s*([\s\S]+?)\s*---/;
	const match = markdown.match(frontmatterRegex);

	if (!match) {
		return markdown;
	}

	return markdown.slice(match[0].length);
}
