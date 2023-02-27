<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: { headline: string } = { headline: '' };
</script>

<div use:storyblokEditable={blok} class="py-32 text-6xl text-[#50b0ae] font-bold text-center">
	{blok.headline}
</div>
