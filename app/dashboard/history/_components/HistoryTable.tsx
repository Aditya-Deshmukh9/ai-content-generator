"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AIResponse } from "@/utils/schema";
import { db } from "@/utils/db";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Loading from "../../loading";
import { Button } from "@/components/ui/button";

// const datas = [
//   {
//     data: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     data: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     data: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     data: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     data: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     data: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     data: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

// interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string | null;
//   tamplateSlug: string;
//   createdBy: string | null;
//   createdAt: string | null;
// }

interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  tamplateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

function HistoryTable() {
  const { user } = useUser();
  const [data, setData] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (
        user &&
        user.primaryEmailAddress &&
        user.primaryEmailAddress.emailAddress
      ) {
        const userEmail = user.primaryEmailAddress.emailAddress;
        const results: HISTORY[] = await db
          .select()
          .from(AIResponse)
          .where(eq(AIResponse.createdBy, userEmail))
          .orderBy(desc(AIResponse.createdAt));

        setData(results);
      } else {
        console.error("User email is not available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="m-6 h-screen bg-white p-2 shadow-md">
      <ScrollArea className="max-h-screen w-full overflow-y-scroll">
        <Table>
          <TableCaption>A list of your recent datas.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">Tamplate</TableHead>
              <TableHead className="w-1/2 font-bold text-black">
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
                <TableCell className="line-clamp-4 h-32 overflow-hidden">
                  {data?.aiResponse}
                </TableCell>
                <TableCell>{data?.createdAt}</TableCell>
                <TableCell>{data?.aiResponse?.length}</TableCell>
                <TableCell>
                  <Button variant={"bgColor"}>Copy</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Words Counts</TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ScrollArea>
    </main>
  );
}

export default HistoryTable;
