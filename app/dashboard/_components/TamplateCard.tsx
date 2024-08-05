"use client";
import { TamplateTypes } from "@/app/(data)/Tamplates";
import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function TamplateCard(data: TamplateTypes) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/dashboard/content/" + data.slug}>
      <Card
        className={`flex cursor-pointer flex-col justify-between gap-2 gap-y-2 rounded-md border border-slate-200 p-3 shadow-md transition-all hover:scale-110 hover:shadow-xl sm:w-full ${
          isHovered ? "color text-white" : "bg-background"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={data.icon}
          alt="cardImg"
          loading="lazy"
          height={100}
          width={100}
          className={"h-20 w-20"}
        />
        <div className="flex flex-col items-start justify-between">
          <CardTitle
            className={`line-clamp-1 bg-clip-text text-xl ${
              isHovered
                ? "text-white"
                : "from-[#d41872] to-[#ff0066] hover:line-clamp-none hover:bg-gradient-to-r hover:text-transparent"
            }`}
          >
            {data.name}
          </CardTitle>
          <CardDescription
            className={`line-clamp-3 h-20 bg-clip-text md:h-20 ${
              isHovered
                ? "text-white"
                : "from-[#d41872] to-[#ff0066] hover:bg-gradient-to-r hover:text-transparent"
            }`}
          >
            {data.desc}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}
