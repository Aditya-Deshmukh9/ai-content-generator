"use client";
import React from "react";
import Link from "next/link";
import { Home, History, Settings2, ReceiptIndianRupee } from "lucide-react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const UsageTrack = dynamic(() => import("./UsageTrack"));

function SideNav() {
  const pathname = usePathname();

  const Navtext = [
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
    <div className="hidden border-r bg-muted/40 bg-white dark:bg-secondary md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo.svg"
              alt="logo"
              height={100}
              width={100}
              className="h-10 w-10"
            />
            <span>Ai Generator</span>
          </Link>
        </div>
        {/* sidenav links */}
        <div className="flex-1">
          <nav className="grid items-start gap-y-1 px-2 text-sm font-medium lg:px-4">
            {Navtext.map((text, index) => (
              <Link
                key={index}
                href={`${text.link}`}
                className={`dark:text-white ${
                  pathname === text.link ? "activeNavText" : "navText"
                }`}
              >
                <text.icon className="h-5 w-5" />
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
