<script lang="ts">
  import { onMount } from "svelte";
  import { invalidate, goto } from "$app/navigation";

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

  async function handleSignOut() {
    await supabase.auth.signOut();
    goto("/");
  }
</script>

<nav class="navbar mx-auto mb-8 max-w-screen-xl px-0 py-6">
  <div class="navbar-start">
    <a href="/" class="text-5xl font-extrabold">BLOCKCHAIN</a>
  </div>

  <div class="navbar-end">
    <div class="flex gap-2">
      {#if session}
        <button onclick={handleSignOut} class="btn btn-outline btn-lg">Sign Out</button>
      {:else}
        <a href="/login" class="btn btn-primary btn-lg mr-2">Login</a>
        <a href="/register" class="btn btn-outline btn-lg">Register</a>
      {/if}
    </div>
  </div>
</nav>

<main class="mx-auto max-w-screen-xl">
  {@render children()}
</main>