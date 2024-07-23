import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Badge,
  CircleUser,
  Home,
  LineChart,
  Link,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import UserProfile from "./UserProfile";
import ThemeBtn from "./ThemeBtn";

interface NavItem {
  link: string;
  text: string;
  total?: number; // optional property
}

function HeaderNav() {
  const Navtext: NavItem[] = [
    {
      link: "/home",
      text: "Home",
    },
    {
      link: "/history",
      text: "History",
      total: 7,
    },
    {
      link: "/billing",
      text: "Billing",
    },
    {
      link: "/settings",
      text: "Settings",
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
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {Navtext.map((text, Index) => (
              <Link
                key={Index}
                href={text.link}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                {text.text}
              </Link>
            ))}
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
          </nav>
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
