<script lang="ts">
  import { goto } from "$app/navigation";
  
  const { data } = $props();
  const { session, supabase } = $derived(data);
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    goto("/");
  };
</script>

<div class="navbar bg-base-100 shadow-lg">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-xl">Blockchain</a>
  </div>
  
  <div class="navbar-center">
    <div class="menu menu-horizontal px-1">
      <li><a href="/crypto" class="btn btn-ghost">Crypto</a></li>
    </div>
  </div>
  
  <div class="navbar-end">
    {#if session}
      <button onclick={handleSignOut} class="btn btn-outline btn-sm mr-2">Sign Out</button>
    {:else}
      <a href="/login" class="btn btn-primary btn-sm mr-2">Login</a>
      <a href="/register" class="btn btn-outline btn-sm">Register</a>
    {/if}
  </div>
</div>