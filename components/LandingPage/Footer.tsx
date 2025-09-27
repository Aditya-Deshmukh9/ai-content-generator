import Link from "next/link";
import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

interface linkTypes {
  href: string;
  icon: React.JSX.Element;
}

function Footer() {
  const SOCIAL_MEDIA_LINKS: linkTypes[] = [
    {
      href: "https://x.com/ ",
      icon: (
        <FaFacebook
          fontSize={26}
          className="transition duration-75 ease-in-out hover:scale-125 hover:bg-yellow-400"
        />
      ),
    },
    {
      href: "https://x.com/adityadesh937?t=U_Wy5P0J2o2q1tRciLNOqg&s=08",
      icon: (
        <FaXTwitter
          fontSize={26}
          className="transition duration-75 ease-in-out hover:scale-125 hover:bg-yellow-400"
        />
      ),
    },
    {
      href: "https://github.com/Aditya-Deshmukh9",
      icon: (
        <FaGithub
          fontSize={26}
          className="transition duration-75 ease-in-out hover:scale-125 hover:bg-yellow-400"
        />
      ),
    },
    {
      href: "https://www.linkedin.com/in/aditya-deshmukh-878482229",
      icon: (
        <FaLinkedin
          fontSize={26}
          className="transition duration-75 ease-in-out hover:scale-125 hover:bg-yellow-400"
        />
      ),
    },
  ];

  return (
    <footer className="flex w-full items-center justify-between bg-white/10 p-6 text-sm text-white/80">
      <h2>
        <Link
          target="_blank"
          href="https://adityadeshmukh.online/"
          className="font-bold"
        >
          Aditya Deshmukh
        </Link>{" "}
        &copy; 2024 AI Content Genius. All rights reserved.:{" "}
      </h2>
      <div className="flex gap-10">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <Link
            key={index}
            target="_blank"
            href={link.href}
            rel="noopener noreferrer"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
