import { ReactNode } from "react";

import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import PageContainer from "@/components/ui/PageContainer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
}
