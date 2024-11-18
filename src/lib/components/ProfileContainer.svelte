<script>
	import email from '$lib/images/email.svg';
	import github from '$lib/images/github-mark.svg';
	import instagram from '$lib/images/instagram_mark.svg';
	import cv from '$lib/images/cv.png';
</script>

<!-- Profile pic, name and social buttons -->
<div class="flex flex-col items-center mb-8">
	<!-- Profile pic -->
	<enhanced:img alt="profile pic" src="$lib/images/profile.png" class="w-36 rounded-full" />
	<!-- Name -->
	<h1 class="font-semibold font-biryani text-xl my-1">Joonyoung Park</h1>
	<!-- Social Buttons -->
	<div class="flex">
		<!-- mail -->
		<a
			href="mailto:joonyoung@kaist.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="w-6 mr-2"
		>
			<img alt="email" src={email} />
		</a>
		<!-- github -->
		<a href="https://github.com/partlyjadedyouth" target="_blank" rel="noopener noreferrer">
			<img alt="github" src={github} class="w-6 mr-2" />
		</a>
		<!-- instagram -->
		<a href="https://instagram.com/partlyjadedyouth" target="_blank" rel="noopener noreferrer">
			<img alt="instagram" src={instagram} class="w-6 mr-2" />
		</a>
		<!-- cv -->
		<a href="/pdfs/cv.pdf" target="_blank" rel="noopener noreferrer">
			<img alt="Document icons created by Freepik - Flaticon" src={cv} class="w-6 mr-2" />
		</a>
	</div>
</div>

<!-- Self-introduction -->
<div class="flex flex-col font-ibm font-light text-md hyphenate">
	<p class="mb-3">
		I am an HCI researcher and Master's student in the
		<a
			href="https://id.kaist.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Department of Industrial Design
		</a>
		at
		<a
			href="https://kaist.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline inline-block"
		>
			KAIST
		</a>, where I am working with
		<a
			href="https://galaxytourist.notion.site/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Prof. Hwajung Hong
		</a>
		at the
		<a
			href="https://dxd-lab.github.io/#/"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline inline-block"
		>
			DxD Lab
		</a>. Previously, I received a B.S. in
		<a
			href="https://ece.snu.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Electrical & Computer Engineering
		</a>
		and a B.A. in
		<a
			href="https://isc.snu.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Information Science
		</a>
		from
		<a
			href="https://snu.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline inline-block"
		>
			Seoul National University
		</a>.
	</p>
	<p class="mb-3">
		I want to contribute to creating a more inclusive society where marginalized people can express
		themselves, communicate freely with others, and learn through technology.
	</p>
	<p>
		My research interests lie at the intersection of Human-Computer Interaction (HCI), Human-AI
		Interaction (HAI), and AI-mediated communication. Specifically, I want to explore the potential
		of LLMs to improve learning for people with disabilities, by facilitating communication between
		people with disabilities and those without.
	</p>
</div>
