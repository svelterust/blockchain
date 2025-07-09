<script lang="ts">
  import "../../app.css";
  import "@fontsource/geist";

  const { children } = $props();
</script>

<div class="bg-base-100 flex min-h-screen items-center justify-center">
  {@render children()}
</div>
