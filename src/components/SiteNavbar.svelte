<script lang="ts">
  import { pages } from '../consts/pages';
  import Hamburger from './SiteNavbarHamburger.svelte';

  let showMobileMenu = false;

  const toggleMobileMenu = () => {
    showMobileMenu = !showMobileMenu;
  };
</script>

<style>
  .nav-link:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 92, 76, 0.5);
  }
</style>

<div class="bg-background shadow-md">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <!-- TODO Get brand logo properly rendered and use SEO best practices -->
    <img src="" alt="" />

    <nav class="hidden lg:flex space-x-6">
      {#each pages as page}
        <a
          href={page.link}
          class="text-lg text-text font-semibold nav-link"
          aria-label="{page.name}"
          rel="noopener"
          tabindex="0"
        >
          {page.name}
        </a>
      {/each}
    </nav>

    <div class="lg:hidden">
      <Hamburger on:toggle={toggleMobileMenu} ariaLabel="Toggle mobile menu" />

      {#if showMobileMenu}
        <nav class="absolute right-0 mt-3 bg-background shadow-md rounded p-2 z-10">
          {#each pages as page}
            <a
              href={page.link}
              class="block text-lg mx-3 my-1 text-text font-semibold nav-link"
              aria-label="{page.name}"
              rel="noopener"
              tabindex="0"
            >
              {page.name}
            </a>
          {/each}
        </nav>
      {/if}
    </div>
  </div>
</div>
