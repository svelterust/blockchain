import { Database } from "$lib/types/database.types";
import { SupabaseClient, Session, User } from "@supabase/supabase-js";

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient<Database>;
      safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
      session: Session | null;
      user: User | null;
    }
    interface PageData {
      session: Session | null;
      user: User | null;
      supabase: SupabaseClient<Database>;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
