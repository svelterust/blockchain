<script lang="ts">
  import { onMount } from "svelte";
  import { invalidate, goto } from "$app/navigation";

  // Props
  const { data, children } = $props();
  const { session, supabase } = $derived(data);

  // State
  let signingOut = $state(false);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });
    return () => data.subscription.unsubscribe();
  });

  async function handleSignOut() {
    signingOut = true;
    await supabase.auth.signOut();
    goto("/");
    signingOut = false;
  }
</script>

<nav class="navbar mx-auto mb-8 max-w-screen-xl px-0 py-6">
  <div class="navbar-start">
    <a href="/" class="text-4xl font-extrabold">Blockchain</a>
  </div>

  <div class="navbar-end">
    <div class="flex gap-2">
      {#if session}
        <button onclick={handleSignOut} class="btn btn-outline btn-lg" disabled={signingOut}>
          {#if signingOut}
            <span class="loading loading-spinner loading-sm"></span>
            Signing Out...
          {:else}
            Sign Out
          {/if}
        </button>
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
