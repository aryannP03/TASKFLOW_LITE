import Skeleton from "../../../../../common/skeleton"

function TaskColSkeleton() {
    return (
        <div className="bg-card-column-bg rounded-[1.25rem] p-4">
        <Skeleton className="h-[4rem] rounded-2xl mb-4" />

        <div className="space-y-3">
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
        </div>
      </div>
    )
}

export default TaskColSkeleton
