"use client";
import React, { useEffect, useState } from "react";
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

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      dispatch(fetchHistoryData(user.primaryEmailAddress.emailAddress));
    } else {
      console.error("User email is not available");
    }
    setIsMounted(true);
  }, [dispatch, user]);

  useEffect(() => {
    if (isMounted) {
      dispatch(calculateTotalHistory(data));
    }
  }, [data, dispatch, isMounted]);

  if (loading || !isMounted) {
    return <Loading />;
  }

  return (
    <main className="w-full h-full bg-white rounded-md shadow-md md:p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">Template</TableHead>
            <TableHead className="w-2/6 font-bold text-black">
              AI Response
            </TableHead>
            <TableHead className="font-bold text-black">Date</TableHead>
            <TableHead className="font-bold text-black">Words</TableHead>
            <TableHead className="font-bold text-black">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item?.tamplateSlug}</TableCell>
              <TableCell className="h-32 py-2">
                <h3 className="line-clamp-4 overflow-hidden">
                  {item?.aiResponse}
                </h3>
              </TableCell>
              <TableCell>{item?.createdAt}</TableCell>
              <TableCell>{item?.aiResponse?.length}</TableCell>
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
    </main >
  );
}

export default HistoryTable;
