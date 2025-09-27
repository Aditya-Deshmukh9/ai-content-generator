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
import { RootState } from "@/redux/store";
import { calculateTotalHistory, fetchHistoryData } from "@/redux/userSlice";

function calculateTotalPages(total: number, limit: number): number {
  if (limit <= 0 || total <= 0) return 1;
  return Math.floor((total - 1) / limit) + 1;
}

function HistoryTable() {
  const { user } = useUser();
  const [page, setPage] = useState(1);
  const limit = 8;
  const dispatch = useAppDispatch();

  const { data, loading, totalHistoryText, totalHistoryNo, total } =
    useAppSelector((state: RootState) => state.user);

  const totalPages = calculateTotalPages(total, limit);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      dispatch(
        fetchHistoryData({
          userEmail: user.primaryEmailAddress.emailAddress,
          page,
          limit,
        }),
      );
    } else {
      console.error("User email is not available");
    }
  }, [dispatch, user, page]);

  useEffect(() => {
    dispatch(calculateTotalHistory(data));
  }, [data, dispatch]);

  if (loading) return <Loading />;

  return (
    <div className="remove-scrollbar m-2 h-full max-w-sm overflow-y-scroll bg-white dark:bg-slate-900 sm:max-w-full md:m-4 md:max-w-full">
      <h2 className="px-2 py-3 text-xs font-semibold md:text-xl">
        No of History ({totalHistoryNo})
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="text-slate-900 dark:bg-slate-900 dark:text-white">
            <TableHead className="font-bold">Template</TableHead>
            <TableHead className="w-2/6 font-bold">AI Response</TableHead>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Words</TableHead>
            <TableHead className="font-bold">Copy</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-green-400 dark:bg-slate-900 dark:hover:bg-green-400"
            >
              <TableCell className="font-medium dark:text-white">
                {item?.tamplateSlug}
              </TableCell>
              <TableCell className="h-12 py-2">
                <h3 className="mx-2 line-clamp-1 overflow-hidden">
                  {item?.aiResponse}
                </h3>
              </TableCell>
              <TableCell>{item?.createdAt}</TableCell>
              <TableCell>{item?.aiResponse?.length}</TableCell>
              <TableCell>
                <Button variant="bgColor">Copy</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="bg-slate-100 dark:bg-slate-900">
          <TableRow>
            <TableCell colSpan={3}>Total Words Count</TableCell>
            <TableCell className="text-left">{totalHistoryText}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>

        <span className="self-center">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default HistoryTable;
