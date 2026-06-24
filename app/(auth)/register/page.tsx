import RegisterForm from "@/components/forms/RegisterForm";
export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>
        <RegisterForm />
      </div>
    </main>
  );
}
