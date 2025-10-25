"use client";
import React, { useEffect, useMemo, useState } from "react";
import TamplateCard from "./TamplateCard";
import { db } from "@/utils/db";
import { tamplate } from "@/utils/schema";

export interface TamplateRow {
  id: number;
  name: string;
  createdBy: number;
  createdAt: string;
  slug: string;
  description: string;
  catgory: string;
  icon: string;
  ai_prompt: string;
  form: unknown;
};

function TamplatelistSection({ SearcInput }: any) {
  const [tamplateData, settamplateData] = useState<TamplateRow[]>([])
  const filterTamplate = useMemo(() => {
    if (!SearcInput) {
      return tamplateData;
    }

    const lowerCaseInput = SearcInput.toLowerCase();
    return tamplateData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseInput) ||
        item.description.toLowerCase().includes(lowerCaseInput),
    );
  }, [SearcInput, tamplateData]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.select().from(tamplate).limit(10);
      settamplateData(data)
    }
    fetchData();
  }, []);

  return (
    <div className="max-h-[69vh]">
      <div className="mb-10 grid w-full grid-cols-2 gap-2 p-2 sm:grid-cols-2 md:grid-cols-2 md:p-4 lg:grid-cols-2 lg:gap-1 xl:grid-cols-3 2xl:grid-cols-4">
        {filterTamplate.map((data, index) => (
          <TamplateCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default TamplatelistSection;
