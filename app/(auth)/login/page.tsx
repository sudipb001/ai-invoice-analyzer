import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <LoginForm />
      </div>
    </main>
  );
}
