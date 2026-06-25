"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormData } from "@/lib/validations/auth-schema";

import { loginUser } from "@/actions/auth-actions";

export default function LoginForm() {
  const router = useRouter();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setServerError("");

    const result = await loginUser(data);

    if (!result.success) {
      setServerError(result.error ?? "Login failed");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border p-2"
        />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full border p-2"
        />

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {serverError && <p>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="border px-4 py-2"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
