import Link from "next/link";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Upload Invoice",
    href: "/upload",
  },
  {
    label: "Invoices",
    href: "/invoices",
  },
  {
    label: "Exports",
    href: "/exports",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900 md:block">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          AI Invoice SaaS
        </h2>
      </div>

      <nav>
        <ul className="space-y-3">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
