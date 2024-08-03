import React from "react";
import HistoryTable from "./_components/HistoryTable";

function historyPage() {
  return (
    <div className="max-w-sm overflow-x-scroll bg-white p-2 sm:max-w-full md:m-5 md:h-[45vw] md:max-w-full md:overflow-hidden">
      <HistoryTable />
    </div>
  );
}

export default historyPage;
