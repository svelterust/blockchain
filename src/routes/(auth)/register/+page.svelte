<script lang="ts">
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { registerSchema } from "$lib/schemas";

  // Props
  const { data } = $props();

  const { form, errors, enhance, submitting } = superForm(data.form, {
    validators: zodClient(registerSchema),
  });
</script>

<svelte:head>
  <title>Register - Blockchain</title>
</svelte:head>

<div class="w-full max-w-md p-8">
  <p class="mb-4 text-center text-4xl font-extrabold">
    <a href="/" class="mb-4">Blockchain</a>
  </p>

  <form method="POST" action="?/signup" use:enhance class="space-y-4">
    <div class="form-control">
      <label class="label" for="email">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        class="input input-bordered w-full"
        class:input-error={$errors.email}
        bind:value={$form.email}
      />
      {#if $errors.email}
        <label class="label">
          <span class="label-text-alt text-error">{$errors.email}</span>
        </label>
      {/if}
    </div>

    <div class="form-control">
      <label class="label" for="password">
        <span class="label-text">Password</span>
      </label>
      <input
        type="password"
        id="password"
        name="password"
        class="input input-bordered w-full"
        class:input-error={$errors.password}
        bind:value={$form.password}
      />
      {#if $errors.password}
        <label class="label">
          <span class="label-text-alt text-error">{$errors.password}</span>
        </label>
      {/if}
    </div>

    <button type="submit" class="btn btn-primary w-full" disabled={$submitting}>
      {#if $submitting}
        <span class="loading loading-spinner loading-sm"></span>
        Registering...
      {:else}
        Register
      {/if}
    </button>

    <p class="text-center text-sm text-slate-700">
      Already have an account?
      <a href="/login" class="link link-primary">Login here</a>
    </p>
  </form>
</div>
