"use client";
import React, { JSX, useState } from "react";
import Link from "next/link";
import { Home, History, Settings2, ReceiptIndianRupee, LucideIcon, ChevronRight, ChevronLeft, ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const UsageTrack = dynamic(() => import("./UsageTrack"));

interface NavItem {
  link: string;
  text: string;
  icon: LucideIcon;
  total?: number;
}

function SideNav({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (value: boolean) => void }):JSX.Element {
  const pathname = usePathname();
  const Navtext: NavItem[] = [
    {
      link: "/dashboard",
      text: "Home",
      icon: Home,
    },
    {
      link: "/dashboard/history",
      text: "History",
      icon: History,
      total: 7,
    },
    {
      link: "/dashboard/billing",
      text: "Billing",
      icon: ReceiptIndianRupee,
    },
    {
      link: "/dashboard/settings",
      text: "Settings",
      icon: Settings2,
    },
  ];

  return (
    <div
      className={`hidden border-r bg-muted/40 bg-white dark:bg-secondary md:block transition-all duration-300 ${isCollapsed ? "md:w-[70px]" : "md:w-[220px] lg:w-[280px]"
        }`}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/"
            className={`flex items-center gap-2 font-semibold ${isCollapsed ? "justify-center w-full" : ""
              }`}
          >
            <Image
              src="/logo.svg"
              alt="logo"
              height={100}
              width={100}
              className="h-10 w-10"
            />
            {!isCollapsed && <span>Ai Generator</span>}
          </Link>
        </div>

     

        {/* sidenav links */}
        <div className="flex-1">
          <nav className="grid items-start gap-y-1 px-2 text-sm font-medium lg:px-4">
            {Navtext.map((text: NavItem, index: number) => (
              <Link
                key={index}
                href={`${text.link}`}
                className={`dark:text-white flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === text.link ? "activeNavText" : "navText"
                  } ${isCollapsed ? "justify-center" : ""}`}
                title={isCollapsed ? text.text : ""}
              >
                <text.icon className="h-5 w-5" />
                {!isCollapsed && <h2>{text.text}</h2>}
              </Link>
            ))}
          </nav>
        </div>

        {!isCollapsed && <UsageTrack />}
      </div>
    </div>
  );
}

export default SideNav;
