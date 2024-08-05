import React from "react";
import HistoryTable from "./_components/HistoryTable";

function historyPage() {
  return (
    <div className="mt-2 max-w-sm overflow-x-auto bg-white p-2 sm:max-w-full md:m-5 md:h-[45vw] md:max-w-full md:overflow-hidden lg:max-w-full">
      <HistoryTable />
    </div>
  );
}

export default historyPage;
