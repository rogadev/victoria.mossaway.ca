// TYPES
import type { LayoutLoad } from "./$types";
// STORYBLOK
import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
// COMPONENTS
import Page from "../components/Page.svelte";
import Grid from "../components/Grid.svelte";
import Teaser from "../components/Teaser.svelte";
import Feature from "../components/Feature.svelte";

export async function load(): LayoutLoad {
  storyblokInit({
    accessToken: "v5nokQVun9qCrV93kaAucAtt",
    use: [apiPlugin],
    apiOptions: {
      https: true,
      region: 'us'
    },
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    },
  });

  const storyblokApi = await useStoryblokApi();

  return {
    storyblokApi: storyblokApi,
  };
}

/**
 * NOTES:
 * 
 * - This is the only place where you need to set your access token.
 * - The `use` option is used to add plugins to Storyblok.
 * - The `components` option is used to add components to Storyblok.
 * - The `apiOptions` option is used to set the Storyblok API options.
 * 
 * The `apiOptions` option is entirely optional. If you are planning to use the Storyblok API
 * client to call the REST API, make sure to include the ApiPlugin when initializing the
 * storyblokInit() function.
 * 
 * For spaces created in the United States (which we did), the `apiOptions` region is required.
 */