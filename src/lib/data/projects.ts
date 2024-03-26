interface Project {
	id: string;
	year: string;
	title: string;
	description: string;
	thumbnail: string;
	role: string;
	post: string;
	fileName?: string;
	web?: string;
	video?: string;
}

const spectrum: Project = {
	id: 'spectrum',
	year: '2023',
	title: 'SPEC`TRUM',
	description:
		'Web application simulates sensory overload for people with autism spectrum disorders',
	thumbnail: '/images/spectrum.png',
	role: 'Web development, service design',
	post: 'This is a web application developed using p5.js, created as coursework for &lt;Introduction to Information and Cultural Technologies&gt; class at Dept. of Information Science, Seoul National University.<br /><br />Many people with autism normally have similar levels of sensory and perceptual functioning to people without disabilities, but when they are placed in situations with strong external stimuli or mental stress, they experience a phenomenon called sensory overload. By allowing non-disabled people to experience this audiovisual sensory overload, SPEC`TRUM aims to educate non-disabled people about what the world is like for people with autism, while also allowing them to experience and relate to it indirectly.',
	web: 'https://github.com/partlyjadedyouth/spectrum'
};

const ischive: Project = {
	id: 'ischive',
	year: '2023-2024',
	title: 'ISCHIVE.com',
	description:
		'A website that archives coursework submitted by Dept. of Information Science students',
	thumbnail: '/images/ischive.jpeg',
	role: 'Web development, service design',
	post: 'This website is designed to archive the coursework produced by students in the Dept. of Information Science at Seoul National University.<br /><br />I started designing and development with my colleagues in December 2023, and after several revisions of the plan and changes to the technology stack, my team completed the deployment in July 2023.',
	web: 'https://ischive.com'
};

const wavin: Project = {
	id: 'wavin',
	year: '2024',
	title: 'Wavin',
	description: 'A design of audio visualization for D/HH listeners',
	thumbnail: '/images/ischive.jpeg',
	role: 'Project leader',
	post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur, ipsum eu condimentum aliquet, orci lacus maximus sem, nec tempus dolor elit ac lorem. Quisque lobortis est turpis, non aliquet purus gravida at. Fusce turpis justo, tincidunt vel ante eget, euismod commodo erat. Suspendisse eleifend nibh enim, non imperdiet metus pharetra et. Sed lobortis suscipit erat, quis posuere justo sollicitudin in. Praesent tincidunt sollicitudin velit ut convallis. Nulla sed libero id mauris tincidunt luctus vitae eu justo. Praesent sollicitudin risus nulla, dignissim molestie mauris blandit vitae. Phasellus purus turpis, finibus id condimentum non, fermentum id eros. Aenean tortor diam, ultrices nec venenatis eget, viverra sed felis.',
	fileName: 'wavin_paper.pdf'
};

export const projects: Project[] = [wavin, ischive, spectrum];
