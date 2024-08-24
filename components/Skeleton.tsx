import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 p-5">
      <Skeleton className="h-[20vh] w-[40%] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-[20vh] w-[80%]" />
        <Skeleton className="h-[30vh] w-[60%]" />
      </div>
    </div>
  )
}
