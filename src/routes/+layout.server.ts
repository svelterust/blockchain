import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals: { session, user, supabase }, cookies }) => {
  return {
    session,
    user,
    supabase,
    cookies: cookies.getAll(),
  };
};
