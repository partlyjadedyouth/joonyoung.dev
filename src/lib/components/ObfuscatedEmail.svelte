<script lang="ts">
	import { onMount } from 'svelte';

	export let userCodes: number[] = [];
	export let domainCodes: number[] = [];
	export let label = 'Email';
	export let className = '';
	export let target = '_blank';
	export let rel = 'noopener noreferrer';

	let email = '';
	let href = '';

	const decode = (codes: number[]) => String.fromCharCode(...codes);

	onMount(() => {
		const user = decode(userCodes);
		const domain = decode(domainCodes);
		email = `${user}@${domain}`;
		href = `mailto:${email}`;
	});
</script>

<a href={href || undefined} target={target} rel={rel} class={className}>
	<slot email={email} isReady={Boolean(email)}>{email || label}</slot>
</a>
