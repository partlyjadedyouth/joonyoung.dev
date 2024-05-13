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
		<a href="mailto:jooony@snu.ac.kr" target="_blank" rel="noopener noreferrer" class="w-6 mr-2">
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
		I am an aspiring HCI researcher and undergraduate student in
		<a
			href="https://snu.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Seoul National University.
		</a>

		I am majoring in
		<a
			href="https://ece.snu.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Electrical & Computer Engineering
		</a>
		and
		<a
			href="https://isc.snu.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium hover:underline"
		>
			Information Science.
		</a>
	</p>
	<p>
		My research interest lies in the intersection of human-computer interaction (HCI), human-AI
		interaction (HAI), and electrical engineering. Specifically, I want to find ways to improve the
		interaction and accessibility of computers for marginalized people.
	</p>
</div>
