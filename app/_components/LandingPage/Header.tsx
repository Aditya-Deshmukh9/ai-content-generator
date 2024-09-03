"use client";
import { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLinkType {
  label: string;
  href: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  const NAVIGATION_LINKS: NavLinkType[] = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#howitworks" },
    { label: "Pricing", href: "#pricing" },
    { label: "Get Started", href: "#getstarted" },
  ];

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center px-4 text-white shadow-lg lg:px-6">
      <Link href="#home" className="flex items-center gap-2 font-semibold">
        <Image
          src="/logo.svg"
          alt="logo"
          height={100}
          width={100}
          className="h-8 w-8"
        />
        <span>Ai Generator</span>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="ml-auto cursor-pointer lg:hidden" onClick={toggleMenu}>
        <div
          className={`my-1 h-1 w-6 bg-yellow-300 transition-all duration-300 ${
            isMenuOpen ? "translate-y-2 rotate-45 transform" : ""
          }`}
        ></div>
        <div
          className={`my-1 h-1 w-6 bg-yellow-300 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`my-1 h-1 w-6 bg-yellow-300 transition-all duration-300 ${
            isMenuOpen ? "-translate-y-2 -rotate-45 transform" : ""
          }`}
        ></div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`fixed right-0 top-14 h-1/3 w-full transform p-6 text-white backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:ml-auto lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0`}
      >
        {NAVIGATION_LINKS.map((item) => (
          <Link
            key={item.label}
            className="mb-2 block py-4 text-sm font-medium transition-colors hover:text-yellow-300 lg:mb-0 lg:ml-4 lg:inline-block"
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
