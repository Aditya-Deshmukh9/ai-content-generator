import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function SearchSection({ setSearcInput }: any) {
  return (
    <div className="mt-6 flex w-full items-center justify-center">
      <div className="relative w-3/4 md:w-2/4">
        <Search className="absolute left-2.5 top-2.5 h-6 w-6 text-muted-foreground" />
        <Input
          type="search"
          onChange={(e) => setSearcInput(e.target.value)}
          placeholder="Search products..."
          className="h-11 w-full bg-background pl-10 shadow-none"
        />
      </div>
    </div>
  );
}

export default SearchSection;
