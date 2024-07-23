"use client";
import Tamplates from "@/app/(data)/Tamplates";
import React, { useMemo, useState } from "react";
import FormSection from "./_components/FormSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import OutputSection from "./_components/OutputSection";
import { chatSession } from "@/utils/AiModal";

function TamplateDetailsPage({ params }: { params: { slug: string } }) {
  const [aiOutput, setaiOutput] = useState<string>("");
  const [loading, setloading] = useState(false);
  const selectedTamplates = useMemo(
    () => Tamplates.filter((item) => item.slug.includes(params.slug)),
    [params.slug],
  );
  const GenerateAiContent = async (formData: any) => {
    setloading(true);
    // @ts-ignore
    const selectedPrompt = selectedTamplates?.aiPrompt;
    const FinalPrompt = JSON.stringify(formData) + " ," + selectedPrompt;
    const result = await chatSession.sendMessage(FinalPrompt);
    console.log(result.response.text());

    setaiOutput(result.response.text());
    setloading(false);
  };

  return (
    <div>
      <Link href={"/dashboard"}>
        <Button variant={"bgColor"} className="bg-textColor ml-5 mt-5">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid h-full grid-cols-1 gap-5 p-5 md:grid-cols-3">
        {/* @ts-ignore */}
        <FormSection
          userFormInput={(e: any) => GenerateAiContent(e)}
          selectedTamplates={selectedTamplates[0]}
          loading={loading}
        />

        <OutputSection aiOutput={aiOutput} loading={loading} />
      </div>
    </div>
  );
}

export default TamplateDetailsPage;
