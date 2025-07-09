import { Database } from "./database";
import { SupabaseClient, Session, User } from "@supabase/supabase-js";

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient<Database, "public", any>;
      safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
      session: Session | null;
      user: User | null;
    }
    interface PageData {
      session: Session | null;
      user: User | null;
      supabase: SupabaseClient<Database, "public", any>;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
