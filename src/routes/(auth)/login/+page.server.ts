import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { loginSchema } from "$lib/schemas";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema)),
  };
};

export const actions: Actions = {
  signin: async ({ request, locals: { supabase } }) => {
    // Get form
    const form = await superValidate(request, zod(loginSchema));
    if (!form.valid) return fail(400, { form });
    const { email, password } = form.data;

    // Try signing in
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Sign in error:", error);
      return fail(500, { form, message: error.message });
    }

    redirect(303, "/");
  },
};
