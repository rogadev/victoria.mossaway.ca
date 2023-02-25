export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }]
  ]
});