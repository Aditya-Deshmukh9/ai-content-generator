"use client";
import { RootState } from "@/app/(redux)/store";
import { historyData } from "@/app/(redux)/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

const UsageTrack: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state?.user,
  );

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      dispatch(historyData(user.primaryEmailAddress.emailAddress));
    } else {
      console.error("User email is not available");
    }
  }, [dispatch, user]);

  const getTotalUsage = () => {
    return data.reduce(
      (total, element) => total + (element?.aiResponse?.length || 0),
      0,
    );
  };

  const currentCredit = getTotalUsage();
  const maxCredit = 10000;
  const creditPercentage = (currentCredit / maxCredit) * 100;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mb-6 mt-auto">
      <div className="color rounded-lg">
        <div className="p-2 pt-0 md:p-4">
          <div className="text-white">Credits</div>
          <div className="mt-4 h-2 w-full rounded-full bg-pink-400">
            <div
              className="h-2 rounded-full bg-white"
              style={{ width: `${creditPercentage}%` }}
            ></div>
          </div>
          <div className="mt-2 font-light text-white">
            <span>{loading ? "..." : currentCredit}</span>
            /10,000 Credit Used
          </div>
        </div>
      </div>
      <div className="mt-2 w-full p-1">
        <Button size="sm" variant="default" className="w-full">
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default UsageTrack;
