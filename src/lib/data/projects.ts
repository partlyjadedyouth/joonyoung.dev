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

const ischive: Project = {
	id: 'ischive',
	year: '2023-2024',
	title: 'ISCHIVE.com',
	description:
		'A website that archives coursework submitted by Dept. of Information Science students',
	thumbnail: '/images/ischive.jpeg',
	role: 'Web development, service design',
	links: [{ type: 'web', url: 'https://ischive.com' }]
};

const togetherBus: Project = {
	id: 'together-bus',
	year: '2024',
	title: 'Together Bus',
	description:
		'Designing a bus charter service for rural residents who have trouble getting to concerts in Seoul',
	thumbnail: '/images/together-bus.png',
	role: 'Product design',
	links: [{ type: 'pdf', url: '/pdfs/together_bus.pdf' }]
};

const wavin: Project = {
	id: 'wavin',
	year: '2024',
	title:
		'Wavin: Lyrics Visualization in Mobile Music Streaming Services to Improve Music Comprehension for D/HH',
	description: '',
	thumbnail: '/images/wavin.png',
	role: 'Project leader',
	links: [
		{ type: 'pdf', url: '/pdfs/wavin_paper.pdf' },
		{ type: 'poster', url: '/pdfs/wavin_poster.pdf' }
	]
};

const snackTime: Project = {
	id: 'snack-time',
	year: '2024',
	title: "Turtle's Snack Time",
	description: 'A 2D game that simulates the life of a turtle in the ocean',
	thumbnail: '/images/snack-time.png',
	role: 'Game development, game design',
	links: [{ type: 'web', url: 'https://joonpart.itch.io/turtles-snacktime' }]
};

export const projects: Project[] = [wavin, snackTime, togetherBus, ischive];
