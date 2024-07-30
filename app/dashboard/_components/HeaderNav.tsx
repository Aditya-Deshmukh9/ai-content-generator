import React, { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Badge,
  History,
  Home,
  Menu,
  Package2,
  ReceiptIndianRupee,
  Search,
  Settings2,
  ShoppingCart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import UserProfile from "./UserProfile";
import ThemeBtn from "./ThemeBtn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface NavItem {
  link: string;
  text: string;
  icon: ReactNode;
  total?: number;
}
function HeaderNav() {
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
              <Link key={Index} href={`/dashboard/${text.link}`}>
                <SheetClose className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  {text.icon}
                  {text.text}
                </SheetClose>
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <ThemeBtn />
      <UserProfile />
    </header>
  );
}

export default HeaderNav;
