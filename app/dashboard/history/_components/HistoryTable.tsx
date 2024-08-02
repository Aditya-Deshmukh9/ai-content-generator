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
  const { data, loading, totalHistoryText } = useAppSelector(
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
    <main className="h-screen w-full shadow-md md:min-h-0 md:p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">Tamplate</TableHead>
            <TableHead className="w-2/6 font-bold text-black">
              AI Response
            </TableHead>
            <TableHead className="font-bold text-black">Date</TableHead>
            <TableHead className="font-bold text-black">Words</TableHead>
            <TableHead className="font-bold text-black">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">
                {data?.tamplateSlug}
              </TableCell>
              <TableCell className="h-32 py-2">
                <h3 className="line-clamp-4 overflow-hidden">
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
        <TableFooter className="bg-white">
          <TableRow>
            <TableCell colSpan={3}>Total Words Counts</TableCell>
            <TableCell className="text-right">{totalHistoryText}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}

export default HistoryTable;
