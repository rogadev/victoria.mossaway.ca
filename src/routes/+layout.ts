import { storyblokInit, apiPlugin, callbackComponents, useStoryblokApi } from "@storyblok/svelte";

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

export async function load() {
  storyblokInit({
    accessToken: "RKqPB7MAYUawyar0pS29gAtt",
    use: [apiPlugin],
    components: callbackComponents,
    apiOptions: {
      https: true,
      region: 'us'
    },
  });

  const storyblokApi: any = await useStoryblokApi();

  return {
    storyblokApi: storyblokApi,
  };
}