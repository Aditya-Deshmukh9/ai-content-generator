import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col space-y-3">
      <Skeleton className="m-5 h-2/3 w-full rounded-xl bg-gray-400" />
    </div>
  );
}
