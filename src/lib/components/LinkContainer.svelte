<script lang="ts">
	import document from '$lib/images/document.svg';
	import link from '$lib/images/link.svg';
	import video from '$lib/images/video.svg';
	import github from '$lib/images/github-mark.svg';
	import cv from '$lib/images/cv.png';

	export let type: string;
	export let url: string;
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
	{#if type === 'pdf'}
		<div class="flex items-center">
			<img alt="document" src={document} class="w-3 m-1 pt-1" />
			<p class="font-barlow text-light hover:font-medium hover:underline">pdf</p>
		</div>
	{:else if type === 'video'}
		<div class="flex items-center">
			<img alt="document" src={video} class="w-3 m-1 pt-1" />
			<p class="font-barlow text-light hover:font-medium hover:underline">video</p>
		</div>
	{:else if type === 'web'}
		<div class="flex items-center">
			<img alt="document" src={link} class="w-3 m-1 pt-1" />
			<p class="font-barlow text-light hover:font-medium hover:underline">link</p>
		</div>
	{:else if type === 'code'}
		<div class="flex items-center">
			<img alt="github" src={github} class="w-3 m-1 pt-1" />
			<p class="font-barlow text-light hover:font-medium hover:underline">github</p>
		</div>
	{:else}
		<div class="flex items-center">
			<img alt="document" src={document} class="w-3 m-1 pt-1" />
			<p class="font-barlow text-light hover:font-medium hover:underline">{type}</p>
		</div>
	{/if}
</a>
