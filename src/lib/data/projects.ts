interface Project {
	id: string;
	year: string;
	title: string;
	description: string;
	thumbnail: string;
}

export const ischiveInfo: Project = {
	id: 'ischive',
	year: '2023-2024',
	title: 'ISCHIVE.com',
	description: 'A website that archives assignments submitted by Information Science students',
	thumbnail: '/images/ischive.jpeg'
};

export const wavinInfo: Project = {
	id: 'wavin',
	year: '2024',
	title: 'Wavin',
	description: 'A design of audio visualization for D/HH listeners',
	thumbnail: '/images/ischive.jpeg'
};

export const projects: Project[] = [wavinInfo, ischiveInfo, ischiveInfo, ischiveInfo, ischiveInfo];
