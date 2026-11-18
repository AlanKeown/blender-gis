<script lang="ts">
  // The theme's global layout needs a root layout to exist (SveltePress).
  import '@cii/tokens/tokens.css';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style>
  /* The theme's `logo` option takes one image. Its darkest facet disappears on the
     dark background, so swap in the dark symbol when the theme sets html.dark. */
  :global(html.dark img[src$='/blender-gis-symbol.svg']) {
    content: url('/blender-gis-symbol-dark.svg');
  }
</style>
