export interface LinkDetails {
	type: string;
	url: string;
}

export interface Project {
	id: string;
	year: string;
	title: string;
	description: string;
	thumbnail: string;
	role: string;
	links: LinkDetails[];
}
