"use server";

import { redirect } from "next/navigation";
import { registerSchema, loginSchema } from "@/lib/validations/auth-schema";
import { createServerClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function registerUser(formData: {
  fullName: string;
  email: string;
  password: string;
}) {
  const validation = registerSchema.safeParse(formData);

  if (!validation.success) {
    return {
      success: false,
      error: "Invalid form data",
    };
  }

  const supabase = await createServerClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  if (!data.user) {
    return {
      success: false,
      error: "User creation failed",
    };
  }

  const { error: profileError } = await supabaseAdmin.from("profiles").insert({
    id: data.user.id,
    full_name: formData.fullName,
  });

  if (profileError) {
    return {
      success: false,
      error: profileError.message,
    };
  }

  return {
    success: true,
  };
}

export async function loginUser(formData: { email: string; password: string }) {
  const validation = loginSchema.safeParse(formData);

  if (!validation.success) {
    return {
      success: false,
      error: "Invalid login credentials",
    };
  }

  const supabase = await createServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function logoutUser() {
  const supabase = await createServerClient();

  await supabase.auth.signOut();

  redirect("/login");
}
