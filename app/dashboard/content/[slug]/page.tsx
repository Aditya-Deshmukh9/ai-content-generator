"use client";
import React, { useMemo, use, useEffect, useState } from "react";
import { FormSection } from "./_components/FormSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { OutputSection } from "./_components/OutputSection";
import { useUser } from "@clerk/nextjs";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useSearchParams } from "next/navigation";
import { Tamplates } from "@/utils/constant";
import { generateAiContent } from "@/redux/aiContentSlice";
import { RootState } from "@/redux/store";
import { db } from "@/utils/db";
import { tamplate } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { TamplateRow } from "../../_components/TamplatelistSection";

function TamplateDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { aiOutput, loading } = useAppSelector(
    (state: RootState) => state.aiContent,
  );
  const historyQuery = useSearchParams();
  const [tamplateData, settamplateData] = useState<TamplateRow | null>(
    {} as TamplateRow,
  );
  // for fetch tamplate data
  useEffect(() => {
    const fetchData = async () => {
      const data: TamplateRow[] = await db
        .select()
        .from(tamplate)
        .where(eq(tamplate.slug, slug));

      settamplateData(data[0]);
    };
    if (slug) fetchData();
  }, [slug]);

  const historyData = historyQuery.get("history");

  const GenerateAiContent = (formData: any) => {
    const selectedPrompt = tamplateData?.ai_prompt;
    const userEmail: any = user?.primaryEmailAddress?.emailAddress;

    dispatch(
      generateAiContent({
        formData,
        selectedPrompt,
        slug: slug,
        userEmail,
      }),
    );
  };

  return (
    <div className="min-h-full w-full">
      <Link href={"/dashboard"}>
        <Button variant={"bgColor"} className="bg-textColor ml-2 mt-1">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid h-full grid-cols-1 gap-2 p-2 md:grid-cols-3">
        {/* @ts-ignore */}
        <FormSection
          userFormInput={(e: any) => GenerateAiContent(e)}
          selectedTamplates={tamplateData}
          loading={loading}
        />

        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
}

export default TamplateDetailsPage;
