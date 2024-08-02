"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { pricePlans } from "@/app/(data)/Types";
import Script from "next/script";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import moment from "moment";
import { useUser } from "@clerk/nextjs";

const PricePlans: React.FC = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const createSubscriptionOrder = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/create-subscription", {});
      onPayment(response.data.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onPayment = async (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_ROZARPAY_KEY_ID,
      subscription_id: subId,
      name: "ADITYA DESHMUKH",
      description: "Monthly Subscription",
      handler: (resp: any) => {
        console.log(resp);
        {
          if (resp) {
            saveSubscription(resp?.razorpay_payment_id);
          }
        }
      },
    };

    // @ts-ignore
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const saveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      username: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <>
      <section className="relative z-50 h-full overflow-y-scroll py-2">
        <div className="container">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="textColor mt-7 text-3xl font-medium tracking-tight md:text-5xl">
              Price Plans
            </h2>
            <div className="color mx-auto mt-5 h-[2px] w-10"></div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 2xl:px-28">
            {pricePlans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 ${
                  plan.popular
                    ? "relative z-20 bg-white shadow-2xl"
                    : "bg-gray-50 shadow"
                }`}
              >
                {plan.popular && (
                  <div className="absolute inset-x-0 top-1">
                    <div className="flex justify-center">
                      <span className="rounded-md border border-gray-700 bg-black px-2 py-1 text-xs font-medium uppercase text-white">
                        most popular
                      </span>
                    </div>
                  </div>
                )}
                <div className="pt-10 text-center">
                  <h5 className="text-xl font-semibold">{plan.name}</h5>
                  <h2 className="mb-3 mt-8 items-center align-middle text-5xl">
                    <sup className="align-middle text-2xl">₹</sup>
                    {plan.price}
                  </h2>
                  <span>per user, per month</span>
                </div>
                <div className="p-10">
                  <ul className="mb-10 text-center">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="my-4">
                        <h5
                          className={`font-medium ${
                            typeof feature === "string"
                              ? ""
                              : feature.disabled
                                ? "text-gray-500 line-through dark:text-gray-300"
                                : "dark:text-gray-300"
                          }`}
                        >
                          {typeof feature === "string" ? feature : feature.text}
                        </h5>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <Button
                      onClick={createSubscriptionOrder}
                      disabled={!plan.popular}
                      variant={"bgColor"}
                    >
                      {loading && <Loader2Icon className="animate-spin" />}
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
};

export default PricePlans;
