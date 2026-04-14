import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      <div className="flex items-center justify-between mb-9">
        <div>
          <Skeleton className="h-4 w-40 mb-2" />
          <Skeleton className="h-8 w-64" />
        </div>
        <Skeleton className="h-2 w-60 hidden sm:block" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        <Skeleton className="h-[400px] rounded-xl" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-32 rounded-xl" />
          <Skeleton className="h-48 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
