<script lang="ts">
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok: { columns: any[] } = { columns: [] };

	$: columns = blok.columns;
</script>

<div
	use:storyblokEditable={blok}
	class="container mx-auto grid md:grid-cols-3 gap-16 place-items-center"
>
	{#each columns as blok}
		<div class="flex-auto px-6">
			<StoryblokComponent {blok} />
		</div>
	{/each}
</div>
