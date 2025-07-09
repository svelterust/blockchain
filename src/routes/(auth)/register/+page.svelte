<script lang="ts">
  import { enhance } from "$app/forms";

  const { form } = $props();
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Register now!</h1>
      <p class="py-6">Join our crypto trading platform and start your journey today.</p>
    </div>
    <div class="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
      <form method="POST" action="?/signup" use:enhance class="card-body">
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
          <div class="alert alert-info">
            <span>{form.message}</span>
          </div>
        {/if}
        
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
        
        <div class="text-center">
          <p class="text-sm">
            Already have an account? 
            <a href="/login" class="link link-primary">Login here</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>