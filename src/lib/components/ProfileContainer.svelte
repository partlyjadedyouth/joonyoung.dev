<script>
	import email from '$lib/images/email.svg';
	import github from '$lib/images/github-mark.svg';
	import instagram from '$lib/images/instagram_mark.svg';
	import linkedin from '$lib/images/linkedin.png';
	import cv from '$lib/images/cv.png';
</script>

<!-- Profile pic, name and social buttons -->
<div class="flex flex-col items-start mb-8">
	<!-- Profile pic -->
	<!-- <enhanced:img alt="profile pic" src="$lib/images/profile.png" class="w-36 rounded-full" /> -->
	<!-- Name -->
	<h1 class="font-semibold font-mono text-2xl my-1">Joonyoung Park</h1>
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
		<!-- LinkedIn -->
		<a
			href="https://www.linkedin.com/in/joonyoung-park-487136185"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img alt="linkedin" src={linkedin} class="w-6 mr-2" />
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
<div class="flex flex-col font-ibm font-light text-md hyphens-auto">
	<p class="mb-3">
		I am an HCI researcher and an incoming Ph.D. student in the
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
			href="https://dxd-lab.github.io"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline inline-block"
		>
			DxD Lab
		</a>.
	</p>
	<p class="mb-3">
		My research interests lie at the intersection of Human-Computer Interaction (HCI), Human-AI
		Interaction (HAI), and AI-mediated communication. Specifically, I aim to explore ways to improve
		technological accessibility and create new opportunities for marginalized people through
		multi-modal and cross-modal interactions.
	</p>
	<p>
		Prior to my graduate studies, I received a B.S. in
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
			Information Science and Culture Studies
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
</div>
