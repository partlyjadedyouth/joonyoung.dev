<script lang="ts">
	import ProfileContainer from '$lib/components/ProfileContainer.svelte';
	import ProjectContainer from '$lib/components/ProjectContainer.svelte';
	import { ischiveInfo, wavinInfo } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Joonyoung Park</title>
	<meta name="description" content="Joonyoung's Blog" />
</svelte:head>

<!-- Profile section -->
<section class="py-10">
	<ProfileContainer />
</section>

<!-- Latest Projects section -->
<section class="py-10">
	<div class="flex justify-between">
		<!-- Title -->
		<h1 class="font-barlow font-medium text-xl">Latest Projects</h1>
		<!-- Link to /projects -->
		<a href="/projects">
			<div
				class="font-barlow text-xs font-medium border rounded px-3 py-1 border-gray-500 hover:bg-black hover:text-white"
			>
				View all
			</div>
		</a>
	</div>

	<!-- Project container -->
	<ProjectContainer {...wavinInfo} />
	<ProjectContainer {...ischiveInfo} />
</section>
