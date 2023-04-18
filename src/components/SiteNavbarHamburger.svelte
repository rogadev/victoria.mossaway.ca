<script>
  import { createEventDispatcher } from 'svelte';
  export let ariaLabel

  const dispatch = createEventDispatcher();
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    dispatch('toggle', isOpen);
  }
</script>

<style>
  .line {
    transition: all 0.3s ease;
  }

  .line-1.open {
    transform: translateY(0.4rem) rotate(45deg);
  }

  .line-2.open {
    opacity: 0;
  }

  .line-3.open {
    transform: translateY(-0.4rem) rotate(-45deg);
  }
</style>

<button
  type="button"
  class="flex flex-col items-center justify-center cursor-pointer p-1 m-1"
  on:click={toggleMenu}
  aria-label={ariaLabel}
  tabindex="0"
>
  <div
    class="w-6 h-0.5 bg-text rounded-full line line-1"
    class:open={isOpen}
  ></div>
  <div
    class="w-6 h-0.5 bg-text rounded-full line line-2 mt-1"
    class:open={isOpen}
  ></div>
  <div
    class="w-6 h-0.5 bg-text rounded-full line line-3 mt-1"
    class:open={isOpen}
  ></div>
</button>
