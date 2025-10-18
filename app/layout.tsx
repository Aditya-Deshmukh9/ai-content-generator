import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Loading from "./dashboard/loading";
import StoreProvider from "@/redux/StoreProvider";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/LandingPage/ScrollToTop";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContentGenie",
  description: "ContentGenie is AI content Genration webapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(outfit.className, "scroll-smooth antialiased")}>
          <StoreProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              <Suspense fallback={<Loading />}>
                <ScrollToTop/>
                {children}</Suspense>
            </ThemeProvider>
            <Toaster />
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
