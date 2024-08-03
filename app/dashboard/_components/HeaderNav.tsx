"use client";
import React, { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  History,
  Home,
  Menu,
  ReceiptIndianRupee,
  Search,
  Settings2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import UserProfile from "./UserProfile";
import ThemeBtn from "./ThemeBtn";
import Link from "next/link";
import UsageTrack from "./UsageTrack";
import { usePathname } from "next/navigation";

interface NavItem {
  link: string;
  text: string;
  icon: ReactNode;
  total?: number;
}
function HeaderNav() {
  const pathname = usePathname();
  const Navtext: NavItem[] = [
    {
      link: "/dashboard",
      text: "Home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      link: "/dashboard/history",
      text: "History",
      icon: <History className="h-4 w-4" />,
      total: 7,
    },
    {
      link: "/dashboard/billing",
      text: "Billing",
      icon: <ReceiptIndianRupee className="h-4 w-4" />,
    },
    {
      link: "/dashboard/settings",
      text: "Settings",
      icon: <Settings2 className="h-4 w-4" />,
    },
  ];

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 bg-white px-4 dark:bg-secondary lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav>
            {Navtext.map((text, Index) => (
              <Link key={Index} href={text.link}>
                <SheetClose
                  // className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  className={`${
                    pathname === `${text.link}`
                      ? "activeNavText"
                      : "flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {text.icon}
                  {text.text}
                </SheetClose>
              </Link>
            ))}
          </nav>
          <UsageTrack />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1"></div>
      <ThemeBtn />
      <UserProfile />
    </header>
  );
}

export default HeaderNav;
