"use client";

import { Plus } from "lucide-react";
import React, { ChangeEvent, useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddNewInterview: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState<string>("");
  const [jobDesc, setJobDesc] = useState<string>("");
  const [jobExperience, setJobExperience] = useState<string>("");
  const router = useRouter();
  const [jsonResp, setJsonResp] = useState<
    { question: string; answer: string }[]
  >([]);
  const { user } = useUser();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log({ jobPosition, jobDesc, jobExperience });

    const finalPrompt = `Job position: ${jobPosition}, Job Description: ${jobDesc}, Year of Experience: ${jobExperience}. Based on the job position, job description, and years of experience, provide ${process.env.NEXT_PUBLIC_NUMBER_OF_QUESTION} interview questions along with answers in JSON format. Include fields for 'question' and 'answer' only in the JSON FORMAT.`;

    try {
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result.response.text();

      // Clean and parse JSON response
      const jsonString = responseText
        .replace("```json", "")
        .replace("```", "")
        .trim();

      const parsedJson = JSON.parse(jsonString);

      if (
        Array.isArray(parsedJson) &&
        parsedJson.every((item) => item.question && item.answer)
      ) {
        setJsonResp(parsedJson);

        // Insert into database
        const resp = await db
          .insert(MockInterview)
          // @ts-ignore
          .values({
            mockId: uuidv4(),
            jsonMockResp: jsonString,
            jobPosition: jobPosition,
            jobDec: jobDesc,
            jobExperience: jobExperience,
            createBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("YYYY-MM-DD"),
          })
          .returning({ mockId: MockInterview.mockId });

        console.log(resp);

        if (resp) {
          setOpenDialog(false);
          router.push("/interview/" + resp[0]?.mockId);
        }
      } else {
        console.log("Error: JSON response does not match expected format");
      }
    } catch (error) {
      console.error("Error during handleSubmit:", error);
    }
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-center rounded-lg border bg-slate-200 p-10 shadow-slate-800 transition-all hover:scale-105 hover:shadow-md"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="flex gap-2 font-semibold">
          <Plus /> Add New
        </h2>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tell us more about your job Interviewing</DialogTitle>
            <DialogDescription>
              Add details about the job position, job description, and years of
              experience
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="">
              <Label htmlFor="jobPosition" className="text-right">
                Job Role / Job Position
              </Label>
              <Input
                id="jobPosition"
                value={jobPosition}
                placeholder="Job Role / Job Position"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setJobPosition(e.target.value)
                }
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="jobDesc" className="text-right">
                Job Position / Tech stack (in Short)
              </Label>
              <Textarea
                id="jobDesc"
                value={jobDesc}
                placeholder="Job Position / Tech stack"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setJobDesc(e.target.value)
                }
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="jobExperience" className="text-right">
                No. of Experience
              </Label>
              <Input
                id="jobExperience"
                value={jobExperience}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setJobExperience(e.target.value)
                }
                placeholder="0"
                type="number"
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => setOpenDialog(false)}
                variant={"ghost"}
              >
                Cancel
              </Button>
              <Button type="submit" variant={"bgColor"}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
