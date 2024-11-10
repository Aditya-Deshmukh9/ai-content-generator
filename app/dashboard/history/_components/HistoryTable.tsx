"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import Loading from "../../loading";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/(redux)/store";
import {
  calculateTotalHistory,
  fetchHistoryData,
} from "@/app/(redux)/userSlice";

function HistoryTable() {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { data, loading, totalHistoryText, totalHistoryNo } = useAppSelector(
    (state: RootState) => state?.user,
  );

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      dispatch(fetchHistoryData(user.primaryEmailAddress.emailAddress));
    } else {
      console.error("User email is not available");
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(calculateTotalHistory(data));
  }, [data, dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="remove-scrollbar m-2 h-full max-w-sm overflow-y-scroll bg-white dark:bg-slate-900 sm:max-w-full md:m-4 md:max-w-full">
      <h2 className="px-2 text-xs md:text-xl">
        No of History({totalHistoryNo})
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="text-slate-900 dark:bg-slate-900 dark:text-white">
            <TableHead className="font-bold">Tamplate</TableHead>
            <TableHead className="w-2/6 font-bold">AI Response</TableHead>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Words</TableHead>
            <TableHead className="font-bold">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id} className="dark:bg-slate-900">
              <TableCell className="font-medium dark:text-white">
                {data?.tamplateSlug}
              </TableCell>
              <TableCell className="h-12 py-2">
                <h3 className="mx-2 line-clamp-1 overflow-hidden">
                  {data?.aiResponse}
                </h3>
              </TableCell>
              <TableCell>{data?.createdAt}</TableCell>
              <TableCell>{data?.aiResponse?.length}</TableCell>
              <TableCell>
                <Button variant={"bgColor"}>Copy</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-slate-100 dark:bg-slate-900">
          <TableRow>
            <TableCell colSpan={3}>Total Words Counts</TableCell>
            <TableCell className="text-left">{totalHistoryText}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default HistoryTable;
