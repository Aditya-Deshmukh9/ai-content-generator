"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

interface InterviewPageProps {
  params: {
    interviewId: string;
  };
}

function InterviewPage({ params }: InterviewPageProps) {
  const [interviewData, setInterviewData] = useState<any | null>([]);
  const [webCamEnable, setWebSCamEnable] = useState<boolean>(false);

  useEffect(() => {
    getInterviewDetails();
  }, [params.interviewId]);

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      if (result.length > 0) {
        setInterviewData(result[0]);
      } else {
        setInterviewData(null);
      }
    } catch (error) {
      console.error("Failed to fetch interview details:", error);
      setInterviewData(null);
    }
  };

  console.log(interviewData);

  return (
    <div className="container my-10 flex flex-col items-center justify-center">
      <h2 className="mb-6 text-2xl font-bold">Let's Get Started</h2>
      <div className="grid h-full w-full grid-cols-1 items-center justify-between py-4 md:grid-cols-2">
        <div className="flex h-full w-full flex-col items-center justify-center md:order-last md:mt-10">
          {webCamEnable ? (
            <Webcam
              onUserMedia={() => setWebSCamEnable(true)}
              onUserMediaError={() => setWebSCamEnable(false)}
              style={{ height: 600, width: 600 }}
              mirrored={true}
              videoConstraints={{
                facingMode: "user",
              }}
              disablePictureInPicture
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-72 rounded-lg bg-gray-200 p-20" />
              <Button
                variant={"ghost"}
                onClick={() => setWebSCamEnable(true)}
                className="mt-4"
              >
                Enable Camera and Microphone
              </Button>
            </>
          )}
        </div>
        <div className="flex flex-col items-start justify-center gap-4 p-4 px-8 text-left md:ml-10">
          <h2 className="mb-2 text-lg font-semibold">
            Job Role/Job Position:{" "}
            <span className="font-normal">{interviewData?.jobPosition}</span>
          </h2>
          <h2 className="mb-2 text-lg font-semibold">
            Job Description/Tech Stack:{" "}
            <span className="font-normal">{interviewData?.jobDec}</span>
          </h2>
          <h2 className="text-lg font-semibold">
            Years of Experience:{" "}
            <span className="font-normal">{interviewData?.jobExperience}</span>
          </h2>
          <div className="mt-4 bg-yellow-200 p-4 text-black">
            <h2 className="inline-flex gap-2 pb-4">
              <Lightbulb /> Information
            </h2>
            <p>
              To start your AI-generated mock interview, please enable your
              camera and microphone. The interview consists of five questions
              for you to answer, and you will receive a report based on your
              responses at the end. Please note that we do not record your
              video. You can disable webcam access at any time if you prefer.
            </p>
          </div>
        </div>
      </div>
      <div className="item-end flex justify-end">
        <Link href={`/interview/${params.interviewId}/start`}>
          <Button variant={"bgColor"}>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewPage;
