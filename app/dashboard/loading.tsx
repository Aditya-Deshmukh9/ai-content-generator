export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-3">
      {/* <Skeleton className="m-5 h-2/3 w-full rounded-xl bg-gray-400" /> */}
      <div className="h-16 w-16 animate-spin rounded-full border-8 border-dashed border-[#ff0066]"></div>
    </div>
  );
}
