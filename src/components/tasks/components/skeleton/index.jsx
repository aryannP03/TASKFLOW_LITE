import TaskColSkeleton from "./task-col-skeleton"

function TaskBoardSkeleton() {
    return (
    <div className="grid grid-cols-3 gap-6 mt-6 max-md:grid-cols-2 max-sm:grid-cols-1">
      
      <TaskColSkeleton />
      <TaskColSkeleton />
      <TaskColSkeleton />
      
    </div>
  )
}
export default TaskBoardSkeleton
