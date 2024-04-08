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
	post: string;
	links: LinkDetails[];
}

const spectrum: Project = {
	id: 'spectrum',
	year: '2023',
	title: 'SPEC`TRUM',
	description:
		'A web application simulates sensory overload for people with autism spectrum disorders',
	thumbnail: '/images/spectrum.png',
	role: 'Web development, service design',
	post: 'Many people with autism normally have similar levels of sensory and perceptual functioning to people without disabilities, but when they are placed in situations with strong external stimuli or mental stress, they experience a phenomenon called sensory overload. By allowing non-disabled people to experience this audiovisual sensory overload, SPEC`TRUM aims to educate non-disabled people about what the world is like for people with autism, while also allowing them to experience and relate to it indirectly.<br /><br />This is a web application developed using p5.js, submitted as coursework for Introduction to Information-Culture Technology course at Dept. of Information Science, Seoul National University.',
	links: [{ type: 'code', url: 'https://github.com/partlyjadedyouth/spectrum' }]
};

const ischive: Project = {
	id: 'ischive',
	year: '2023-2024',
	title: 'ISCHIVE.com',
	description:
		'A website that archives coursework submitted by Dept. of Information Science students',
	thumbnail: '/images/ischive.jpeg',
	role: 'Web development, service design',
	post: 'This website is designed to archive the coursework produced by students in the Dept. of Information Science at Seoul National University.<br /><br />I started this project with my colleagues and the official support of the department in December 2023. After several revisions of the plan and changes to the technology stack, we completed the deployment in July 2023.',
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
	post: 'In Korea, most concerts are held in Seoul, due to the high concentration of people in the metropolitan area. Therefore, people living in rural areas have to spend extra money on transportation and accommodation to attend concerts, which makes them hesitate to do so.<br /><br />I designed a bus charter service with my colleagues to solve this problem. We conducted market research with interviews, developed a prototype design, and established a market entry strategy with revenue model, and presented it through an IR deck.<br /><br />This design work was submitted as coursework for User-Centered Design course at Dept. of Information Science, Seoul National University.',
	links: [{ type: 'pdf', url: '/pdfs/together_bus.pdf' }]
};

const wavin: Project = {
	id: 'wavin',
	year: '2024',
	title: 'Wavin',
	description:
		'A study on lyrics visualization in mobile music streaming services to improve music comprehension for D/HH',
	thumbnail: '/images/wavin.png',
	role: 'Project leader',
	post: 'Many people believe that D/HH cannot enjoy music, but this is not true. A lots of D/HH have a desire to enjoy music in their daily lives through mobile music streaming applications, but they fell it hard to understand music because those apps are designed for hearing people (Fourney, 2015). <br /><br /> The purpose of this study is to improve D/HH usability of mobile music streaming services from an HCI perspective, by identifying specific elements that should be included in lyrics visualizations to improve music comprehension for D/HH, and presenting design guidelines for a lyrics display UI based on these elements. <br /><br /> In this study, we conducted in-depth interviews with D/HH to find out the problems they experience with mobile music streaming services. As a result, we proposed and evaluated visualization of lyrics as a way to solve them. The proposed UI prototype, Wavin, shows which letter is currently being sung by the singer, places each letter at a different height on the display depending on the pitch, and displays the name of the singer. In prototype testing, study participants rated Wavin as helping them understand music better than traditional lyric display UIs. <br /><br /> This design work was submitted as coursework for Human-Computer Interaction course at Dept. of Information Science, Seoul National University.',
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
	post: 'Did you know that turtles are one of the most endangered species in the world? In this serious game, you can experience life as a turtle in the ocean, eating jellyfish while avoiding plastic bags. The game is designed to raise awareness of the importance of protecting turtles and the ocean.<br /><br />Before developing this game, I had literally no experience and knowledge in C# and Unity. However, I was able to develop this game in a week with just the support of ChatGPT. Of course, the game has a lot to be improved, but developing it solely with AI support was a unique experience.<br /><br />This game was submitted as coursework for Serious Game course at Seoul National University.',
	links: [{ type: 'web', url: 'https://joonpart.itch.io/turtles-snacktime' }]
};

export const projects: Project[] = [wavin, snackTime, ischive, togetherBus, spectrum];
