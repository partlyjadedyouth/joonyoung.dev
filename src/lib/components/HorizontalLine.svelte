<script lang="ts">
	export let w = '32';
	export let my = '0';
	export let color = 'black';

	let widthClass: string;
	let marginClass: string;
	let colorClass: string;
	let backgroundColor: string | undefined;
	$: widthClass = w.startsWith('w-') ? w : `w-${w}`;
	$: marginClass = my.startsWith('my-') ? my : `my-${my}`;
	$: {
		if (color.startsWith('bg-')) {
			colorClass = color;
			backgroundColor = undefined;
		} else {
			colorClass = '';
			backgroundColor = color;
		}
	}
</script>

<hr
	class={`mx-auto h-px border-0 ${widthClass} ${marginClass} ${colorClass}`}
	style:background-color={backgroundColor}
/>
