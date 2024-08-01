"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  History,
  Settings2,
  ReceiptIndianRupee,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import UsageTrack from "./UsageTrack";
import { usePathname } from "next/navigation";

interface NavItem {
  link: string;
  text: string;
  icon: ReactNode;
  total?: number;
}

function SideNav() {
  const pathname = usePathname();
  console.log(pathname === "/dashboard/history" ? true : false);

  const Navtext: NavItem[] = [
    {
      link: "/dashboard",
      text: "Home",
      icon: <Home className="h-5 w-5" />,
    },
    {
      link: "/dashboard/history",
      text: "History",
      icon: <History className="h-5 w-5" />,
      total: 7,
    },
    {
      link: "/dashboard/billing",
      text: "Billing",
      icon: <ReceiptIndianRupee className="h-5 w-5" />,
    },
    {
      link: "/dashboard/settings",
      text: "Settings",
      icon: <Settings2 className="h-5 w-5" />,
    },
  ];

  return (
    <div className="hidden border-r bg-muted/40 bg-white px-4 dark:bg-secondary md:block">
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
          <nav className="grid items-start gap-y-1 px-2 text-sm font-medium lg:px-4">
            {Navtext.map((text, index) => (
              <Link
                key={index}
                href={`${text.link}`}
                className={`${
                  pathname === `${text.link}` ? "activeNavText" : "navText"
                }`}
              >
                {text.icon}
                <h2>{text.text}</h2>
              </Link>
            ))}
          </nav>
        </div>

        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
