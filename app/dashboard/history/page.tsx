import React from "react";
import HistoryTable from "./_components/HistoryTable";

function historyPage() {
  return (
    <div className="overflow-y-auto bg-white p-2 md:m-5 md:h-[45vw]">
      <HistoryTable />
    </div>
  );
}

export default historyPage;
