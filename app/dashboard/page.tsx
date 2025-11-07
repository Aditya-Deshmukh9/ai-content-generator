"use client";
import TamplatelistSection from "./_components/TamplatelistSection";
import { useState } from "react";
import SearchSection from "./_components/SearchSection";

export default function DashboardLayout() {
  const [SearcInput, setSearcInput] = useState<string>("");

  return (
    <div className="max-h-full min-h-full max-w-[1440px] mx-auto">
      <div className="bgColor flex h-60 w-full mt-4 flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-white">
          Browse All Templates
        </h2>
        <p className="text-xs text-slate-100">
          What would you like to create today?
        </p>
        <SearchSection setSearcInput={(value: any) => setSearcInput(value)} />
      </div>
      <TamplatelistSection SearcInput={SearcInput} />
    </div>
  );
}
