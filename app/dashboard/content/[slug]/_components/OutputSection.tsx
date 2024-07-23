"use client";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: any) {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="col-span-2 h-fit bg-white">
      <div className="flex items-center justify-between p-2">
        <h2 className="ml-4 font-bold text-black">Your Result</h2>
        <Button variant={"bgColor"} className="gap-x-2">
          <Copy /> Copy
        </Button>
      </div>
      <div className="h-full w-full">
        <Editor
          ref={editorRef}
          initialValue="Your result appear here!"
          initialEditType="WYSIWYG"
          height="650px"
          useCommandShortcut={true}
          onChange={() =>
            console.log(editorRef.current.getInstance().getMarkdown())
          }
        />
      </div>
    </div>
  );
}

export default OutputSection;
