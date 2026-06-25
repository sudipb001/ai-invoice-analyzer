import { logoutUser } from "@/actions/auth-actions";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <form action={logoutUser}>
          <button type="submit" className="border px-4 py-2">
            Logout
          </button>
        </form>
      </div>

      <p className="mt-6">Welcome to the AI Invoice SaaS dashboard.</p>
    </main>
  );
}
