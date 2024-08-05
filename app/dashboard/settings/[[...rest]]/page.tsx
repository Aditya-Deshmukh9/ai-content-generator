import React from "react";
import { UserProfile } from "@clerk/nextjs";

function settingsPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <UserProfile />
    </div>
  );
}

export default settingsPage;
