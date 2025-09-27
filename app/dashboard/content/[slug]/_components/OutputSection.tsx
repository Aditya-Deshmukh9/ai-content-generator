"use client";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy, FileDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
// import { jsPDF } from "jspdf";

interface OutputSectionProps {
  aiOutput: string;
}

export const OutputSection: React.FC<OutputSectionProps> = ({ aiOutput }) => {
  const editorRef = useRef<Editor>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current?.getInstance().setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const copyToClipboard = () => {
    if (editorRef.current) {
      const content = editorRef.current?.getInstance().getMarkdown();
      if (content) {
        navigator.clipboard.writeText(content).then(
          () => {
            toast({
              variant: "destructive",
              title: "Content copied to clipboard!",
            });
          },
          () => {
            toast({ title: "Failed to copy" });
          },
        );
      }
    }
  };

  // ✅ Export text to PDF
  const exportToPDF = () => {
    // if (editorRef.current) {
    //   const content = editorRef.current?.getInstance().getMarkdown();
    //   if (content) {
    //     const doc = new jsPDF();
    //     const lines = doc.splitTextToSize(content, 180); // wrap text to page width
    //     doc.text(lines, 10, 10);
    //     doc.save("output.pdf");
    //     toast({
    //       title: "PDF downloaded successfully!",
    //     });
    //   }
    // }
  };

  const SendEmail = () => {};

  return (
    <div className="col-span-2 h-fit bg-white">
      <div className="flex items-center justify-between p-2">
        <h2 className="ml-4 font-bold text-black">Your Result</h2>
        <div className="flex gap-2">
          <Button
            onClick={copyToClipboard}
            variant="bgColor"
            className="gap-x-2"
          >
            <Copy /> Copy
          </Button>
          <Button onClick={exportToPDF} variant="bgColor" className="gap-x-2">
            <FileDown /> Export PDF
          </Button>
          <Button
            onClick={SendEmail}
            variant="bgColor"
            className="gap-x-2 bg-sky-400"
          >
            <FileDown /> Send Email
          </Button>
        </div>
      </div>
      <div className="h-full w-full">
        <Editor
          ref={editorRef}
          initialValue="Your result will appear here!"
          initialEditType="wysiwyg"
          height="650px"
          useCommandShortcut={true}
        />
      </div>
    </div>
  );
};

