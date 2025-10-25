import { Button } from '@/components/ui/button'
import { FileDown } from 'lucide-react'
import React from 'react'

function ExportToPdf({aiOutput}: {aiOutput: string}) {
    const exportToPDF = async () => {
        if (!aiOutput) {
            console.log("No content to export!");
            return;
        }
        const res = await fetch("/api/markdown-to-pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                markdown: aiOutput,
            }),
        });

        if (!res.ok) {
            console.log("Error generating PDF!");
            return;
        }
        console.log(res);

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "output.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
    };

  return (
      <Button onClick={exportToPDF} variant="bgColor" className="gap-x-2">
          <FileDown /> Export PDF
      </Button>
  )
}

export default ExportToPdf