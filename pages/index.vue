<script lang="ts" setup>
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>
<template>
  <div>
    <h1>Testing Storyblok</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>