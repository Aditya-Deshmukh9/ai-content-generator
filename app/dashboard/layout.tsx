import HeaderNav from "./_components/HeaderNav";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-full w-full bg-slate-200 dark:bg-gray-700 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNav />
      <div className="flex flex-col">
        <HeaderNav />
        {children}
      </div>
    </div>
  );
}
