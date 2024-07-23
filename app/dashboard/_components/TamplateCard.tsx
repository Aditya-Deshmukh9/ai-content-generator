// "use client";

import * as React from "react";

import { TamplateTypes } from "@/app/(data)/Tamplates";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function TamplateCard(data: TamplateTypes) {
  return (
    <Link href={"/dashboard/content/" + data.slug}>
      <Card className="flex cursor-pointer flex-col justify-between gap-2 gap-y-2 rounded-md border border-slate-200 bg-background p-5 shadow-md transition-all hover:scale-110 hover:shadow-xl sm:w-full">
        <Image
          src={data.icon}
          alt="cardImg"
          height={100}
          width={100}
          className="h-20 w-20"
        />
        <div className="flex flex-col items-start justify-between">
          <CardTitle className="from-[#d41872] to-[#ff0066] bg-clip-text text-xl hover:bg-gradient-to-r hover:text-transparent">
            {data.name}
          </CardTitle>
          <CardDescription className="line-clamp-3 h-20 md:h-20">
            {data.desc}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}
