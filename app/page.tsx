import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-wrap">
      <div className="mb-10 w-full sm:w-8/12">
        <div className="container mx-auto h-full sm:p-10">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo.svg"
              alt="logo"
              height={100}
              width={100}
              className="h-8 w-8"
            />
            <span>Ai Generator</span>
          </Link>
          <header className="container mt-10 h-full items-center px-4 lg:mt-0 lg:flex">
            <div className="w-full">
              <h1 className="text-4xl font-bold lg:text-6xl">
                AI Content <span className="textColor">Generator</span>
              </h1>
              <div className="my-4 h-2 w-20 bg-green-700"></div>
              <p className="mb-10 text-xl">
                Revolutionize your content creation with our AI-powered app,
                <br />
                delivering engaging and high-quality text in seconds.
              </p>

              <Link
                href="/dashboard"
                className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-[#d41872] px-12 py-3 text-lg font-semibold text-[#d41872] hover:bg-transparent hover:text-white"
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#d41872] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                  <MoveRight className="h-5 w-5" />
                </span>
                <span className="relative">Get Started</span>
              </Link>
            </div>
          </header>
        </div>
      </div>
      <Image
        src={"/hero-img.jpg"}
        alt="Ai-hero-image"
        loading="lazy"
        height={1000}
        width={1000}
        className="h-48 w-full object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
}

export default page;
