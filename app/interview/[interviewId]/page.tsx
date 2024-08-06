"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";
interface InterviewPageProps {
  params: {
    interviewId: string;
  };
}

function InterviewPage({ params }: InterviewPageProps) {
  useEffect(() => {
    getInterviewDetails();
  }, [params.interviewId]);

  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    console.log(result[0].jsonMockResp);
  };

  return <div>InterviewPage</div>;
}

export default InterviewPage;
