import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-8 dark:bg-gray-950">
      {children}
    </main>
  );
}
