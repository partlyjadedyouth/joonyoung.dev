/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', 'monospace'],
				barlow: ['Barlow'],
				biryani: ['Biryani'],
				montserrat: ['Montserrat'],
				roboto: ['Roboto'],
				neue: ['Helvetica Neue'],
				ibm: ['IBM Plex Sans']
			}
		}
	},
	plugins: []
};
