<script lang="ts">
	export let year: string;
	export let title: string;
	export let description: string;
	export let thumbnail: string;
</script>

<!-- Project container -->
<div
	class="font-barlow container border-gray-400 hover:border-gray-700 border rounded-lg my-4 px-4 py-5 min-h-40 flex items-center justify-between"
>
	<!-- Project description -->
	<div class="flex flex-col max-w-sm">
		<p class="font-thin text-sm mb-3">{year}</p>
		<p class="font-medium text-lg mb-1">{title}</p>
		<p class="font-light text-sm">{description}</p>
	</div>
	<!-- Project thumbnail -->
	<div class="w-36 border border-gray-400">
		<img alt={title} src={thumbnail} class="object-contain" />
	</div>
</div>
