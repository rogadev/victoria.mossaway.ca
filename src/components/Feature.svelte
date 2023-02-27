<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: { name: string } = { name: '' };
</script>

<div use:storyblokEditable={blok} class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center">
	<h1 class="text-2xl text-[#1d243d] font-bold">{blok.name}</h1>
</div>
