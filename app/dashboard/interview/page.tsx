import React from "react";
import AddNewInterview from "./_components/AddNewInterview";

function Interviewpage() {
  return (
    <div className="m-4 flex h-screen flex-col items-center justify-start gap-2 bg-white">
      <h2 className="textColor mt-7 text-3xl font-medium tracking-tight md:text-5xl">
        AI Interview
      </h2>
      <p className="text-xl">Create And Start you Mock Interview</p>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
        <AddNewInterview />
      </div>
    </div>
  );
}

export default Interviewpage;
