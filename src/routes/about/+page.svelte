<script>
	import email from '$lib/images/email.svg';
	import browser from '$lib/images/browser.png';
</script>

<svelte:head>
	<title>about</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<section class="pt-20">
	<!-- Name -->
	<h1 class="font-biryani text-2xl font-semibold">Joonyoung Park</h1>
	<!-- Email -->
	<a
		href="mailto:jooony@snu.ac.kr"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center"
	>
		<img alt="email" src={email} class="w-5 mr-1 pt-1" />
		<p class="font-barlow hover:font-medium hover:underline">jooony@snu.ac.kr</p>
	</a>
	<!-- Website -->
	<a
		href="https://jooony.vercel.app"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center"
	>
		<img alt="Browser icons created by kmg design - Flaticon" src={browser} class="w-5 mr-1 pt-1" />
		<p class="font-barlow hover:font-medium hover:underline">jooony.vercel.app</p>
	</a>
</section>

<!-- EDUCATION -->
<section class="mt-10 font-barlow">
	<h1 class="text-2xl font-medium">EDUCATION</h1>

	<div class="mt-2">
		<b class="font-medium">Seoul National University</b>, Seoul, Republic of Korea
	</div>
	<div class="font-light">
		B.S., Electrical and Computer Engineering<br />
		B.A., Information Science
	</div>
	<div class="font-extralight">Mar 2017 - Feb 2025 (Expected) *</div>
	<div class="font-extralight">
		* includes a 2-year mandatory military service in Republic of Korea
	</div>
</section>

<!-- EXPERIENCE -->
<section class="mt-10 font-barlow">
	<h1 class="text-2xl font-medium">RESEARCH & WORK EXPERIENCE</h1>

	<div class="mt-2">
		<a href="http://hcid.snu.ac.kr/" target="_blank" rel="noopener noreferrer">
			<b class="font-medium hover:underline">HCI+d Lab,</b>
		</a> Seoul National University
	</div>
	<div class="font-light">Undergraduate Research Intern</div>
	<div class="font-extralight">Jan 2024 - Present</div>

	<div class="mt-3">
		<b class="font-medium">Samsung Electro-Mechanics</b>, Suwon, Republic of Korea
	</div>
	<div class="font-light">Undergraduate Intern</div>
	<div class="font-extralight">Jul 2019 - Aug 2019</div>
</section>

<!-- AWARDS & HONORS -->
<section class="mt-10 font-barlow">
	<h1 class="text-2xl font-medium">AWARDS & HONORS</h1>

	<div class="mt-2">
		<b class="font-medium">10% Merit-Based Scholarship</b>, Seoul National University
	</div>
	<div class="font-extralight">Feb 2017</div>
</section>

<!-- PROFICIENCY -->
<section class="mt-10 font-barlow">
	<h1 class="text-2xl font-medium">PROFICIENCY</h1>

	<h2 class="mt-2 text-lg font-medium">Languages</h2>
	<div class="mt-1 font-light">
		<b>Korean (Native):</b> Full professional proficiency in reading, writing, speaking, and comprehension
	</div>
	<div class="font-light">
		<b>English (Fluent):</b> High proficiency in reading, writing, speaking, and comprehension.
		Comfortable in professional and social contexts.
		<b>TEPS 455/600 (2024)</b>
	</div>
	<div class="font-light">
		<b>Japanese (Elementary):</b> Basic communication skills for everyday use. Able to understand and
		use elementary phrases and sentences
	</div>

	<h2 class="mt-3 text-lg font-medium">Programming & Design</h2>
	<div class="mt-1 font-light">
		<b>Languages:</b> Python, C/C++, JavaScript/TypeScript, HTML & CSS, Dart
	</div>
	<div class="font-light">
		<b>Tools & Frameworks:</b> Node.js, React/Next.js, Svelte/SvelteKit, p5.js, Flutter, TailwindCSS,
		Numpy, Pandas
	</div>
	<div class="font-light">
		<b>Others:</b> Git, LaTeX, Figma
	</div>
</section>

<section class="pb-20"></section>
