<script>
	import profile from '$lib/images/profile.png';
	import email from '$lib/images/email.svg';
	import github from '$lib/images/github-mark.svg';
	import instagram from '$lib/images/instagram_mark.svg';
</script>

<svelte:head>
	<title>Joonyoung Park</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<section>
	<!-- Profile pic, name and social buttons -->
	<div class="flex flex-col items-center py-14">
		<!-- Profile pic -->
		<img alt="profile pic" src={profile} class="w-36 rounded-full" />
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
				<img alt="instagram" src={instagram} class="w-6" />
			</a>
		</div>
	</div>
</section>
