import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { registerSchema } from "$lib/schemas";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(registerSchema)),
  };
};

export const actions: Actions = {
  signup: async ({ request, locals: { supabase } }) => {
    // Get form
    const form = await superValidate(request, zod(registerSchema));
    if (!form.valid) return fail(400, { form });
    const { email, password } = form.data;

    // Try to sign up
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign up error:", error);
      return fail(500, { form, message: error.message });
    }

    return { form, message: "Please check your email for a verification link before signing in." };
  },
};
