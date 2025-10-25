"use client"
import { Suspense, useState } from "react";
import HeaderNav from "./_components/HeaderNav";
import SideNav from "./_components/SideNav";
import Loading from "./loading";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex h-full w-full bg-slate-200 dark:bg-gray-700 md:h-screen">
        <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className="flex flex-1 flex-col">
          <HeaderNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <div className="bg-slate-200 dark:bg-slate-600">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
