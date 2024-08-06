"use client";
import Tamplates from "@/app/(data)/Tamplates";
import React, { useMemo } from "react";
import FormSection from "./_components/FormSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import OutputSection from "./_components/OutputSection";
import { useUser } from "@clerk/nextjs";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/(redux)/store";
import { generateAiContent } from "@/app/(redux)/aiContentSlice";

function TamplateDetailsPage({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { aiOutput, loading } = useAppSelector(
    (state: RootState) => state.aiContent,
  );
  const { totalHistoryText } = useAppSelector((state: RootState) => state.user);

  const selectedTamplates = useMemo(
    () => Tamplates.find((item) => item.slug === params.slug),
    [params.slug],
  );

  const GenerateAiContent = (formData: any) => {
    const selectedPrompt = selectedTamplates?.aiPrompt;
    const userEmail: any = user?.primaryEmailAddress?.emailAddress;

    dispatch(
      generateAiContent({
        formData,
        selectedPrompt,
        slug: params.slug,
        userEmail,
      }),
    );
  };

  return (
    <div className="h-full w-full md:h-screen">
      <Link href={"/dashboard"}>
        <Button variant={"bgColor"} className="bg-textColor ml-5 mt-5">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid h-full grid-cols-1 gap-5 p-5 md:grid-cols-3">
        {/* @ts-ignore */}
        <FormSection
          userFormInput={(e: any) => GenerateAiContent(e)}
          selectedTamplates={selectedTamplates}
          loading={loading}
        />

        <OutputSection aiOutput={aiOutput} />
        <div>Total History Text: {totalHistoryText}</div>
      </div>
    </div>
  );
}

export default TamplateDetailsPage;
