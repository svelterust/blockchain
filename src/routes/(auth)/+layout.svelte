<script lang="ts">
  import "../../app.css";
  import "@fontsource/geist";

  const { children } = $props();
</script>

<div class="min-h-screen flex items-center justify-center bg-base-100">
  {@render children()}
</div>