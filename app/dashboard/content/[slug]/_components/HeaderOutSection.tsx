import ExportToPdf from "@/app/dashboard/_components/ExportToPdf";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import React, { RefObject } from "react";

interface HeaderOutputSectionProps {
  aiOutput: string;
  editorRef: RefObject<Editor | null>;
}

function HeaderOutSection({ aiOutput, editorRef }: HeaderOutputSectionProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
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

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800">
      <h2 className="ml-4 font-bold">Your Result</h2>
      <div className="flex gap-2">
        <Button onClick={copyToClipboard} variant="bgColor" className="gap-x-2">
          <Copy /> Copy
        </Button>
        <ExportToPdf aiOutput={aiOutput} />
      </div>
    </div>
  );
}

export default HeaderOutSection;
