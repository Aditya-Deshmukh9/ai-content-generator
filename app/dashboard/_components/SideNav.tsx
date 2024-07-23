import React, { ReactNode } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  History,
  Settings2,
  ReceiptIndianRupee,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavItem {
  link: string;
  text: string;
  icon: ReactNode;
  total?: number;
}

function SideNav() {
  const Navtext: NavItem[] = [
    {
      link: "/",
      text: "Home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      link: "/history",
      text: "History",
      icon: <History className="h-4 w-4" />,
      total: 7,
    },
    {
      link: "/billing",
      text: "Billing",
      icon: <ReceiptIndianRupee className="h-4 w-4" />,
    },
    {
      link: "/settings",
      text: "Settings",
      icon: <Settings2 className="h-4 w-4" />,
    },
  ];

  return (
    <div className="hidden overflow-y-hidden border-r bg-muted/40 bg-white px-4 dark:bg-secondary md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo.svg"
              alt="logo"
              height={100}
              width={100}
              className="h-8 w-8"
            />
            <span>Ai Content Bhai</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        {/* sidenav links */}
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {Navtext.map((text, Index) => (
              <Link
                key={Index}
                href={`/dashboard/${text.link}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                {text.icon}
                {text.text}
                {text.total && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {text.total}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
