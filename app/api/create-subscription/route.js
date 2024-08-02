import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// api/create-subscription;

export async function POST(req, res) {
  let instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_ROZARPAY_KEY_ID,
    key_secret: process.env.ROZARPAY_KEY_SECRET_KEY_Id,
  });

  const result = await instance.subscriptions.create({
    plan_id: process.env.RAZORPAY_SUBSCRIPTION_Id,
    customer_notify: 1,
    quantity: 1,
    total_count: 1,
    addons: [],
    notes: {
      key1: "Notes",
    },
  });

  return NextResponse.json(result);
}
