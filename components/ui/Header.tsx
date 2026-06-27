import { logoutUser } from "@/actions/auth-actions";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4 dark:border-gray-700 dark:bg-gray-900">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Dashboard
        </h1>
      </div>

      <form action={logoutUser}>
        <button
          type="submit"
          className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Logout
        </button>
      </form>
    </header>
  );
}
