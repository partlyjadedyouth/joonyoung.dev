<script>
	import { page } from '$app/stores';
</script>

<header>
	<!-- Navigation bar -->
	<div class="flex justify-between px-5 py-4 shadow-md">
		<!-- Logo -->
		<p class="font-mono font-medium">
			<a href="/">partlyjadedyouth</a>
		</p>
		<!-- home, about, and projects -->
		<div class="flex justify-center font-barlow font-regular">
			<p class="mr-5 hover:font-medium" class:underline={$page.url.pathname === '/'}>
				<a href="/">home</a>
			</p>
			<p class="mr-5 hover:font-medium" class:underline={$page.url.pathname === '/about'}>
				<a href="/about">about</a>
			</p>
			<p class="hover:font-medium" class:underline={$page.url.pathname === '/projects'}>
				<a href="/projects">projects</a>
			</p>
		</div>
	</div>
</header>
