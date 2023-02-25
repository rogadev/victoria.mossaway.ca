<script setup lang="ts">
defineProps<{
  blok: {
    name: string,
    link: string,
  };
}>();
</script>

<template>
  <div v-editable="blok">
    <h1>{{ blok.name }}</h1>
    <NuxtLink class="text-blue-500" :to="blok.link">Link</NuxtLink>
  </div>
</template>