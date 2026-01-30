<script lang="ts">
	/**
	 * [/about/+page.svelte]
	 * This component renders the About page, displaying personal information, contact details,
	 * education background, work experience, awards, and proficiency in languages and tools.
	 */

	import email from '$lib/images/email.svg';
	import browser from '$lib/images/browser.png';
	import linkedin from '$lib/images/linkedin.png';
	import LinkContainer from '$lib/components/LinkContainer.svelte';
	import { publications } from '$lib/data/publications';

	const highlightedName = 'Joonyoung Park';
	const splitAuthors = (authors: string) => authors.split(highlightedName);
	const authorSegments = (authors: string) => {
		const parts = splitAuthors(authors);
		return parts.map((part: string, index: number) => ({
			part,
			highlight: index < parts.length - 1
		}));
	};
</script>

<svelte:head>
	<title>about | joonyoung park</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<section class="pt-20">
	<!-- Name -->
	<div class="flex">
		<h1 class="font-mono text-2xl font-semibold mr-2">Joonyoung Park</h1>
		<LinkContainer type="pdf" url="/pdfs/cv.pdf" />
	</div>

	<div class="flex flex-col">
		<!-- Website -->
		<a
			href="https://joonyoung.dev"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-end gap-x-1.5"
		>
			<img
				alt="Browser icons created by kmg design - Flaticon"
				src={browser}
				class="w-5 h-5 align-middle"
			/>
			<span class="font-ibm hover:font-medium hover:underline">joonyoung.dev</span>
		</a>
		<!-- Email -->
		<a
			href="mailto:joonyoung@kaist.ac.kr"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-end gap-x-1.5"
		>
			<img alt="email" src={email} class="w-5 h-5 align-middle" />
			<span class="font-ibm hover:font-medium hover:underline">joonyoung@kaist.ac.kr</span>
		</a>
		<!-- LinkedIn -->
		<a
			href="https://www.linkedin.com/in/joonyoung-park-487136185"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-start gap-x-1.5 mt-0.5"
		>
			<img alt="LinkedIn" src={linkedin} class="w-5 h-5 align-middle" />
			<span class="font-ibm hover:font-medium hover:underline">Joonyoung Park</span>
		</a>
	</div>
</section>

<!-- EDUCATION -->
<section class="mt-10 font-ibm">
	<h1 class="text-2xl font-medium">EDUCATION</h1>
	<!-- KAIST -->
	<div class="mt-2">
		<b class="font-medium">
			<a
				href="https://kaist.ac.kr"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:underline"
			>
				KAIST
			</a>
		</b>, Daejeon, Republic of Korea
	</div>
	<div class="font-light">Ph.D., Industrial Design</div>
	<div class="font-light text-sm">
		Advisor: <a
			href="https://galaxytourist.notion.site/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:underline"
		>
			Hwajung Hong
		</a>
	</div>
	<div class="font-extralight text-sm">Feb 2025 - Present</div>
	<!-- SNU -->
	<div class="mt-2">
		<b class="font-medium">
			<a href="https://snu.ac.kr" target="_blank" rel="noopener noreferrer" class="hover:underline">
				Seoul National University
			</a>
		</b>, Seoul, Republic of Korea
	</div>
	<div class="font-light">
		B.S., Electrical and Computer Engineering<br />
		B.A., Information Science and Culture Studies
	</div>
	<div class="font-extralight text-sm">Mar 2017 - Feb 2025 *</div>
	<div class="font-extralight text-sm">
		* includes a 2-year mandatory military service in Republic of Korea
	</div>
</section>

<!-- EXPERIENCE -->
<section class="mt-10 font-ibm">
	<h1 class="text-2xl font-medium">RESEARCH & WORK EXPERIENCE</h1>

	<div class="mt-2">
		<a href="http://hcid.snu.ac.kr/" target="_blank" rel="noopener noreferrer">
			<b class="font-medium hover:underline"> HCI+d Lab, </b>
		</a> Seoul National University
	</div>
	<div class="font-light">Undergraduate Research Intern</div>
	<div class="font-light text-sm">
		Advisor: <a
			href="https://www.hajinlim.com/"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:underline"
		>
			Hajin Lim
		</a>
	</div>
	<div class="font-extralight text-sm">Jan 2024 - Dec 2024</div>

	<div class="mt-3">
		<b class="font-medium hover:underline">
			<a href="https://www.samsungsem.com/" target="_blank" rel="noopener noreferrer">
				Samsung Electro-Mechanics
			</a>
		</b>, Suwon, Republic of Korea
	</div>
	<div class="font-light">Undergraduate Intern</div>
	<div class="font-extralight text-sm">Jul 2019 - Aug 2019</div>
</section>

<!-- PUBLICATIONS -->
<section class="mt-10 font-ibm">
	<h1 class="text-2xl font-medium">PUBLICATIONS</h1>

	{#each publications as publication}
		{#if publication.href}
			<div class="mt-2 hover:underline">
				<a href={publication.href} target="_blank" rel="noopener noreferrer">
					{publication.title}
				</a>
			</div>
		{:else}
			<div class="mt-2">{publication.title}</div>
		{/if}
		<div class="font-light text-sm">
			{#each authorSegments(publication.authors) as segment}
				{segment.part}
				{#if segment.highlight}
					<u><b>{highlightedName}</b></u>
				{/if}
			{/each}
			<div class="italic">{publication.venue}</div>
		</div>
	{/each}
</section>

<!-- ACADEMIC SERVICES -->
<section class="mt-10 font-ibm">
	<h1 class="text-2xl font-medium">ACADEMIC SERVICES</h1>

	<div class="mt-2">ACM Designing Interactive Systems Conference (DIS)</div>
	<div class="font-light">Reviewer</div>
	<div class="font-extralight text-sm">2025 (PWiP)</div>

	<div class="mt-3">ACM Conference on Human Factors in Computing Systems (CHI)</div>
	<div class="font-light">Reviewer</div>
	<div class="font-extralight text-sm">2025 (EA), 2026 (Full Paper)</div>
</section>

<!-- AWARDS & HONORS -->
<section class="mt-10 font-ibm">
	<h1 class="text-2xl font-medium">AWARDS & HONORS</h1>

	<div class="mt-2">
		<b class="font-medium">10% Merit-Based Scholarship</b>, Seoul National University
	</div>
	<div class="font-extralight">Feb 2017</div>
</section>

<section class="pb-20"></section>
