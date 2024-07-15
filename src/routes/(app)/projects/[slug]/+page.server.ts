import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
	const { slug } = params;
	const projectsDirectory = path.join(process.cwd(), 'static', 'projects');
	const fullPath = path.join(projectsDirectory, slug, 'index.md');

	try {
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);
		const htmlContent = marked(content);

		return {
			project: {
				...data,
				content: htmlContent
			}
		};
	} catch (err) {
		throw error(404, `Project not found`);
	}
}
