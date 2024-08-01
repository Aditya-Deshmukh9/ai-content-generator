"use client";
import React, { useMemo } from "react";
import TamplateCard from "./TamplateCard";
import Tamplates from "@/app/(data)/Tamplates";

function TamplatelistSection({ SearcInput }: any) {
  const filterTamplate = useMemo(() => {
    if (!SearcInput) {
      return Tamplates;
    }

    const lowerCaseInput = SearcInput.toLowerCase();
    return Tamplates.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseInput) ||
        item.desc.toLowerCase().includes(lowerCaseInput),
    );
  }, [SearcInput]);

  return (
    <div className="max-h-[69vh]">
      <div className="mb-10 grid w-full grid-cols-2 gap-4 p-2 sm:grid-cols-2 md:grid-cols-2 md:p-10 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 2xl:grid-cols-4">
        {filterTamplate.map((data, index) => (
          // @ts-ignore
          <TamplateCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default TamplatelistSection;
