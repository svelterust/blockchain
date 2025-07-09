<script lang="ts">
  import { enhance } from "$app/forms";

  const { form } = $props();
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Welcome back to your crypto trading platform. Sign in to continue.</p>
    </div>
    <div class="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
      <form method="POST" action="?/signin" use:enhance class="card-body">
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            class="input input-bordered"
            required
          />
        </div>
        
        {#if form?.message}
          <div class="alert alert-error">
            <span>{form.message}</span>
          </div>
        {/if}
        
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
        
        <div class="text-center">
          <p class="text-sm">
            Don't have an account? 
            <a href="/register" class="link link-primary">Register here</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>