"use client";
import React, { JSX, ReactNode, useState } from "react";
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
  ArrowLeftFromLine,
  ArrowRightFromLine,
  GalleryVerticalEnd,
  History,
  Home,
  Menu,
  ReceiptIndianRupee,
  Settings2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Sparkles } from "lucide-react";
import UserProfile from "./UserProfile";
import ThemeBtn from "./ThemeBtn";
import Link from "next/link";
import UsageTrack from "./UsageTrack";
import { usePathname } from "next/navigation";
import NewTamplate from "./NewTamplate";

interface NavItem {
  link: string;
  text: string;
  icon: ReactNode;
  total?: number;
}
function HeaderNav({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (value: boolean) => void }): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
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
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 bg-white px-4 dark:bg-secondary lg:h-[60px] lg:px-2">
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
      <div className={`w-full flex-1`}>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 mr-4"
        >
          {isCollapsed ? (
            <ArrowRightFromLine className="h-4 w-4" />
          ) : (
            <ArrowLeftFromLine className="h-4 w-4" />
          )}
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant={"bgColor"}>
              <Sparkles className="w-5 h-5 mr-2" />
              Create New Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col p-0">
            <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 border-b sticky top-0 z-10">
              <DialogTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                Create AI Template
              </DialogTitle>
              <DialogDescription className="text-sm">
                Build a custom AI template for your workflow
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4">
              <NewTamplate onClose={() => { setOpen(false); return true; }} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <ThemeBtn />
      <UserProfile />
    </header>
  );
}

export default HeaderNav;
