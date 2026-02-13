import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, deleteTask, editTask } from "../../tasks/components/tasksSlice";
import useDebounce from "../../../hooks/useDebounce";
import useTaskFilter from "../../../hooks/useTaskFilter";
import toast from "react-hot-toast";

function useDashboard() {
  const { tasks, loading, error, selectedTasks } = useSelector(
    (state) => state.tasks
  );
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])

  const [showPopup, setShowPopup] = useState(false)

  const [priority, setPriority] = useState("")
  const [searchValue, setSearchValue] = useState("")

  const debouncedSearch = useDebounce(searchValue, 1500, 5)
  const { filteredTasks } = useTaskFilter(tasks, debouncedSearch, priority)

  const handleAddTask = (data) => {
    dispatch(
      addTask({
        ...data,
        status: "todo",
        assignee: "Aryan",
      })
    )
    setShowPopup(false);
  }

  const handlePriorityChange = (priority) => {
    selectedTasks.forEach((id) => {
      dispatch(
        editTask({
          id,
          updatedData: { priority },
        })
      )
    })
  }

  const deleteTimerRef = useRef(null)
  const deletedTasksRef = useRef([])

  const handleDeleteSelected = () => {
    if (selectedTasks.length === 0) return;

    deletedTasksRef.current = tasks.filter((task) =>
      selectedTasks.includes(task.id)
    );

    selectedTasks.forEach((id) => dispatch(deleteTask(id)));

    deleteTimerRef.current = setTimeout(() => {
      deletedTasksRef.current = [];
    }, 5000);

    toast(
      (t) => (
        <div className="flex items-center gap-4">
          <span>Tasks will be deleted</span>
          <button
            className="text-amber-400 font-semibold hover:underline"
            onClick={() => {
              clearTimeout(deleteTimerRef.current);

              deletedTasksRef.current.forEach((task) => {
                dispatch(addTask(task));
              });

              deletedTasksRef.current = [];
              toast.dismiss(t.id);
              toast.success("Tasks Restored");
            }}
          >
            Undo
          </button>
        </div>
      ),
      { duration: 5000 }
    );
  };

  useEffect(() => {
    if (error) {
      toast.error("Failed to load tasks. Please try again");
    }
  }, [error]);

  return { tasks, loading, error, selectedTasks, filteredTasks, showPopup, setShowPopup, priority, setPriority, searchValue, 
    setSearchValue, handleAddTask, handlePriorityChange, handleDeleteSelected }
}

export default useDashboard;
