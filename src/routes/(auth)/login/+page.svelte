<script lang="ts">
  import { enhance } from "$app/forms";

  const { form } = $props();
</script>

<svelte:head>
  <title>Login - Blockchain</title>
</svelte:head>

<div class="w-full max-w-md p-8">
  <h1 class="mb-4 text-center text-4xl font-semibold">Login</h1>
  <form method="POST" action="?/signin" use:enhance class="space-y-4">
    <div class="form-control">
      <label class="label" for="email">
        <span class="label-text">Email</span>
      </label>
      <input type="email" id="email" name="email" placeholder="email" class="input input-bordered w-full" required />
    </div>

    <div class="form-control">
      <label class="label" for="password">
        <span class="label-text">Password</span>
      </label>
      <input type="password" id="password" name="password" placeholder="password" class="input input-bordered w-full" required />
    </div>

    {#if form?.message}
      <div class="alert alert-error">
        <span>{form.message}</span>
      </div>
    {/if}

    <button type="submit" class="btn btn-primary w-full">Login</button>

    <p class="text-center text-sm text-slate-700">
      Don't have an account?
      <a href="/register" class="link link-primary">Register here</a>
    </p>
  </form>
</div>
