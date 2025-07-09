<script>
  import "../app.css";
  import "@fontsource/geist";
  import { onMount } from "svelte";
  import { invalidate } from "$app/navigation";
  import NavBar from "$lib/NavBar.svelte";

  // Props
  const { data, children } = $props();
  const { session, supabase } = $derived(data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });
    return () => data.subscription.unsubscribe();
  });
</script>

<NavBar {data} />
{@render children()}
