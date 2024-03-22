interface Project {
	id: string;
	year: string;
	title: string;
	description: string;
	thumbnail: string;
	role: string;
	post: string;
	pdf?: string;
	web?: string;
	video?: string;
}

export const ischiveInfo: Project = {
	id: 'ischive',
	year: '2023-2024',
	title: 'ISCHIVE.com',
	description:
		'A website that archives assignments submitted by Dept. of Information Science students',
	thumbnail: '/images/ischive.jpeg',
	role: 'Service design, web development',
	post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur, ipsum eu condimentum aliquet, orci lacus maximus sem, nec tempus dolor elit ac lorem. Quisque lobortis est turpis, non aliquet purus gravida at. Fusce turpis justo, tincidunt vel ante eget, euismod commodo erat. Suspendisse eleifend nibh enim, non imperdiet metus pharetra et. Sed lobortis suscipit erat, quis posuere justo sollicitudin in. Praesent tincidunt sollicitudin velit ut convallis. Nulla sed libero id mauris tincidunt luctus vitae eu justo. Praesent sollicitudin risus nulla, dignissim molestie mauris blandit vitae. Phasellus purus turpis, finibus id condimentum non, fermentum id eros. Aenean tortor diam, ultrices nec venenatis eget, viverra sed felis.',
	web: 'https://ischive.com'
};

export const wavinInfo: Project = {
	id: 'wavin',
	year: '2024',
	title: 'Wavin',
	description: 'A design of audio visualization for D/HH listeners',
	thumbnail: '/images/ischive.jpeg',
	role: 'Project leader',
	post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur, ipsum eu condimentum aliquet, orci lacus maximus sem, nec tempus dolor elit ac lorem. Quisque lobortis est turpis, non aliquet purus gravida at. Fusce turpis justo, tincidunt vel ante eget, euismod commodo erat. Suspendisse eleifend nibh enim, non imperdiet metus pharetra et. Sed lobortis suscipit erat, quis posuere justo sollicitudin in. Praesent tincidunt sollicitudin velit ut convallis. Nulla sed libero id mauris tincidunt luctus vitae eu justo. Praesent sollicitudin risus nulla, dignissim molestie mauris blandit vitae. Phasellus purus turpis, finibus id condimentum non, fermentum id eros. Aenean tortor diam, ultrices nec venenatis eget, viverra sed felis.',
	pdf: '/projects/wavin/wavin_paper.pdf'
};

export const projects: Project[] = [wavinInfo, ischiveInfo, ischiveInfo, ischiveInfo, ischiveInfo];
