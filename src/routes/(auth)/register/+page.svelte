<script lang="ts">
  import { enhance } from "$app/forms";

  const { form } = $props();
</script>

<svelte:head>
  <title>Register - Blockchain</title>
</svelte:head>

<div class="mx-auto max-w-md">
  <h1 class="mb-4 text-4xl font-semibold">Register</h1>
  <form method="POST" action="?/signup" use:enhance class="space-y-4">
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
      <div class="alert alert-info">
        <span>{form.message}</span>
      </div>
    {/if}

    <button type="submit" class="btn btn-primary w-full">Register</button>

    <p class="text-center text-sm">
      Already have an account?
      <a href="/login" class="link link-primary">Login here</a>
    </p>
  </form>
</div>
