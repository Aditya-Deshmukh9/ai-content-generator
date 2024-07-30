"use client";
import Tamplates from "@/app/(data)/Tamplates";
import React, { useMemo, useState } from "react";
import FormSection from "./_components/FormSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import OutputSection from "./_components/OutputSection";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { AIResponse } from "@/utils/schema";

function TamplateDetailsPage({ params }: { params: { slug: string } }) {
  const [aiOutput, setaiOutput] = useState<string>("");
  const [loading, setloading] = useState(false);
  const { user } = useUser();

  const selectedTamplates = useMemo(
    () => Tamplates.find((item) => item.slug === params.slug),
    [params.slug],
  );

  const GenerateAiContent = async (formData: any) => {
    setloading(true);
    const selectedPrompt = selectedTamplates?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + " ," + selectedPrompt;

    try {
      const result = await chatSession.sendMessage(finalPrompt);

      const aiResponse = result?.response?.text();
      setaiOutput(aiResponse);
      console.log(aiResponse);
      const userEmail: any = user?.primaryEmailAddress?.emailAddress;

      if (aiResponse !== "" || !userEmail) {
        await saveInDb(
          JSON.stringify(formData),
          aiResponse,
          params?.slug,
          userEmail,
        );
      }
    } catch (error) {
      console.error("Error generating AI content or saving to DB:", error);
    } finally {
      setloading(false);
    }
  };

  const saveInDb = async (
    formData: any,
    aiResponse: any,
    slug: string,
    userEmail: string,
  ) => {
    try {
      const result = await db.insert(AIResponse).values({
        formData: formData,
        aiResponse: aiResponse,
        tamplateSlug: slug,
        createdBy: userEmail,
        createdAt: moment().format("YYYY-MM-DD"), // Use a standard date format
      });
      console.log(result);
    } catch (error) {
      console.error("Failed to save data to DB:", error);
      throw new Error("Database insert failed");
    }
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
      </div>
    </div>
  );
}

export default TamplateDetailsPage;
