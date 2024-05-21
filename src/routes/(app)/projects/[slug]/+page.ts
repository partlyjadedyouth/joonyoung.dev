import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects.js';
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

function parseMarkdown(markdown: string) {
	// Regular expression to match the frontmatter block
	const frontmatterRegex = /---\s*([\s\S]+?)\s*---/;
	const match = markdown.match(frontmatterRegex);

	if (!match) {
		return null;
	}

	const frontmatter = match[1];

	try {
		// Parse the frontmatter using js-yaml
		const frontmatterObject = yaml.load(frontmatter);

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
			id: frontmatterObject.id,
			year: frontmatterObject.year,
			title: frontmatterObject.title,
			description: frontmatterObject.description,
			thumbnail: frontmatterObject.thumbnail,
			role: frontmatterObject.role,
			links: frontmatterObject.links as LinkDetails[]
		};
	} catch (error) {
		console.error('Error parsing frontmatter:', error);
		return null;
	}
}

export async function load({ params, fetch }) {
	const project = projects.filter((project) => project.id === params.slug)[0];
	const markdown = await fetch(`/markdown/${params.slug}.md`);
	const post = await markdown.text();

	console.log(parseMarkdown(post));

	if (project && post) {
		return { project, post };
	} else {
		error(404, 'Not found');
	}
}
