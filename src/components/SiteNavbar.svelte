<script lang="ts">
  import { pages } from '../consts/pages'
  import Hamburger from './SiteNavbarHamburger.svelte'

  let showMobileMenu = false

  const toggleMobileMenu = () => {
    showMobileMenu = !showMobileMenu
  }
</script>

<div class="bg-background shadow-md mb-6">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <a href="/">
      <img
        class="h-10 cursor-pointer my-1 mr-8"
        src="/img/moss/clump.png"
        alt=""
      />
    </a>

    <nav class="hidden lg:flex lg:items-center space-x-6">
      {#each pages as page}
        <a
          href={page.link}
          class="text-lg text-text font-semibold nav-link"
          aria-label={page.name}
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
        <nav
          class="absolute right-0 mt-3 bg-background shadow-md rounded p-2 z-50"
        >
          <div class="flex flex-col gap-4 p-2">
            {#each pages as page}
              <a
                href={page.link}
                class="block text-lg mx-3 text-text font-semibold nav-link"
                aria-label={page.name}
                rel="noopener"
                tabindex="0"
              >
                {page.name}
              </a>
            {/each}
          </div>
        </nav>
      {/if}
    </div>
  </div>
</div>

<style>
  .nav-link:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 92, 76, 0.5);
  }
</style>
