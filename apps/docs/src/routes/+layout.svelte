<script lang="ts">
  // The theme's global layout needs a root layout to exist (SveltePress).
  import '@cii/tokens/tokens.css';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

{@render children()}
