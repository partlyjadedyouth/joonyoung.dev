import { visit } from 'unist-util-visit';

/** @typedef {{ type: string, children?: unknown[] }} Root */
/** @typedef {{ type: string, url?: string, alt?: string, title?: string, value?: string }} Image */

/** @param {string | undefined | null} value */
const isRelativeUrl = (value) => value && !/^([a-z]+:|\/)/i.test(value);

/** @param {string} value */
const escapeAttr = (value) =>
	String(value)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');

export function remarkAssetUrls() {
	/** @param {Root} tree */
	return (tree) => {
		visit(tree, 'image', /** @param {Image} node */ (node) => {
			if (!isRelativeUrl(node.url)) {
				return;
			}

			const alt = escapeAttr(node.alt || '');
			const title = node.title ? ` title="${escapeAttr(node.title)}"` : '';
			const src = `{new URL('${node.url}', import.meta.url).href}`;

			node.type = 'html';
			node.value = `<img src=${src} alt="${alt}"${title} />`;
			delete node.url;
			delete node.alt;
			delete node.title;
		});
	};
}
