"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterFormData,
} from "@/lib/validations/auth-schema";
import { registerUser } from "@/actions/auth-actions";
export default function RegisterForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  async function onSubmit(data: RegisterFormData) {
    setServerError("");
    const result = await registerUser(data);

    if (!result.success) {
      setServerError(result.error ?? "Registration failed");
      return;
    }

    router.push("/login");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
          className="w-full border p-2"
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
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
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
