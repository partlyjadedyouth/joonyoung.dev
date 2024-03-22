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
		href="https://partlyjadedyouth.github.io"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center"
	>
		<img alt="Browser icons created by kmg design - Flaticon" src={browser} class="w-5 mr-1 pt-1" />
		<p class="font-barlow hover:font-medium hover:underline">parlyjadedyouth.github.io</p>
	</a>
</section>

<!-- EDUCATION -->
<section class="pt-10 font-barlow">
	<h1 class="text-2xl font-medium">EDUCATION</h1>

	<div class="pt-2">
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
<section class="py-10 font-barlow">
	<h1 class="text-2xl font-medium">RESEARCH & WORK EXPERIENCE</h1>

	<div class="pt-2">
		<a href="http://hcid.snu.ac.kr/" target="_blank" rel="noopener noreferrer">
			<b class="font-medium hover:underline">HCI+d Lab,</b>
		</a> Seoul National University
	</div>
	<div class="font-light">Undergraduate Research Intern</div>
	<div class="font-extralight">Jan 2024 - Present *</div>

	<div class="pt-5">
		<b class="font-medium">Samsung Electro-Mechanics</b>, Suwon, Republic of Korea
	</div>
	<div class="font-light">Undergraduate Engineer Intern</div>
	<div class="font-extralight">Jul 2019 - Aug 2019</div>
</section>
