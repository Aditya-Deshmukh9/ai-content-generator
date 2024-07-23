import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  redirect("/dashboard");

  return (
    <div>
      {" "}
      <Button>Click me</Button>
    </div>
  );
}

export default page;
