"use client";
import { RootState } from "@/app/(redux)/store";
import {
  fetchUserSubscriptionData,
  fetchHistoryData,
} from "@/app/(redux)/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useMemo } from "react";

const UsageTrack: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { data, loading, error, userSubscriptionDetails } = useAppSelector(
    (state: RootState) => state?.user,
  );

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      dispatch(
        fetchUserSubscriptionData(user?.primaryEmailAddress?.emailAddress),
      );
      dispatch(fetchHistoryData(user?.primaryEmailAddress?.emailAddress));
    } else {
      console.error("User email is not available");
    }
  }, [dispatch, user]);

  const getTotalUsage = useMemo(() => {
    return data.reduce(
      (total, element) => total + (element?.aiResponse?.length || 0),
      0,
    );
  }, [data]);

  const currentCredit = getTotalUsage;
  const maxCredit = useMemo(
    () =>
      userSubscriptionDetails && userSubscriptionDetails[0]?.active
        ? 1000000
        : 10000,
    [userSubscriptionDetails],
  );
  const creditPercentage = useMemo(
    () => (currentCredit / maxCredit) * 100,
    [currentCredit, maxCredit],
  );
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
              style={{ width: `${creditPercentage}%`, maxWidth: "100%" }}
            ></div>
          </div>
          <div className="mt-2 line-clamp-1 flex gap-1 font-light text-white">
            <span
              className={
                currentCredit < 10000 ? "text-white" : "font-bold text-black"
              }
            >
              {loading ? "..." : currentCredit}
            </span>
            /
            {userSubscriptionDetails && userSubscriptionDetails[0]?.active
              ? "10,00,000"
              : "10,000"}{" "}
            Credits
          </div>
        </div>
      </div>
      <div className="mt-2 w-full p-1">
        {userSubscriptionDetails && userSubscriptionDetails[0]?.active ? (
          <Button
            disabled={true}
            size="sm"
            variant="default"
            className="w-full"
          >
            Pro User
          </Button>
        ) : (
          <Button size="sm" variant="default" className="w-full">
            Upgrade
          </Button>
        )}
      </div>
    </div>
  );
};

export default UsageTrack;
