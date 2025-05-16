import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 md:px-6 py-8">
      {/* Hero skeleton */}
      <div className="relative h-[200px] md:h-[300px] mb-8 bg-muted rounded-lg"></div>

      {/* Filters and products skeleton */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar skeleton */}
        <div className="hidden lg:block w-1/4 max-w-xs">
          <div className="space-y-6">
            <div>
              <Skeleton className="h-6 w-32 mb-3" />
              <div className="space-y-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                  ))}
              </div>
            </div>
            <Skeleton className="h-[1px] w-full" />
            <div>
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-10 w-full mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Products grid skeleton */}
        <div className="lg:w-3/4">
          <div className="flex justify-between mb-6">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-64" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="rounded-lg border overflow-hidden">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-4">
                    <Skeleton className="h-4 w-16 mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
