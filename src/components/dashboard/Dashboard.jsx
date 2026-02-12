import React, {useState , useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import TaskBoard from "../tasks/components";
import TaskPopup from "../../common/modal/TaskPopup";
import TaskForm from "../tasks/components/task-form/TaskForm";
import Searchtask from "../../common/search/Search";
import Filter from "../../common/filter/Filter";
import useDebounce from "../../hooks/useDebounce";
import useTaskFilter from "../../hooks/useTaskFilter";
import { useDispatch, useSelector} from "react-redux"
import { fetchTasks, addTask, deleteTask, editTask } from "../tasks/components/tasksSlice";
import Header from "../../common/header/Header";
import "./style/index.css"
import toast from "react-hot-toast"

function Dashboard() {

  
  const { tasks, loading, error, selectedTasks } = useSelector((state) => state.tasks)
  // console.log(Error);
  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [priority, setPriority] = useState("")
  const [searchvalue, setSearchValue] = useState("")

  const debouncedSearch = useDebounce(searchvalue, 1500, 5)

  const { filteredTasks } = useTaskFilter(tasks, debouncedSearch, priority)

  const handleAddTask = (data) => {
    dispatch(addTask({
      ...data,
      status: "todo",
      assignee: "Aryan"
    }))
    setShowPopup(false)
  }

  const handlePriorityChange = (priority) => {
    selectedTasks.map(id => dispatch(editTask({
      id,
      updatedData: { priority }
    })))
  }

  const deleteTimerRef = useRef(null)
  const deletedTasksRef = useRef([])
  
  const handleDeleteSelected = () => {
    
    const idtoDelete = [...selectedTasks]
    
    deletedTasksRef.current = tasks.filter(task =>
      selectedTasks.includes(task.id)
    )

    idtoDelete.map(id => dispatch(deleteTask(id)))
    
    deleteTimerRef.current = setTimeout(() => {
          deletedTasksRef.current = []
     }, 5000)
  
    toast((t) => (
      <div className="flex items-center gap-4">
        <span>Tasks will be deleted</span>

        <button
          className="text-amber-400 font-semibold hover:underline"
          onClick={() => {
            clearTimeout(deleteTimerRef.current);
            
            deletedTasksRef.current.forEach(task => {
              dispatch(addTask(task))
            })

            deletedTasksRef.current = []
            toast.dismiss(t.id)
            toast.success("Tasks Restored")
          }}>
          Undo
        </button>
      </div>
    ), {
    duration: 5000
  });
  }


  useState(() => {
    if (error)
      toast.error("Failed to load tasks. Please try again")
  }, [error])

  return (
    <div className="bg-mainbg min-h-screen w-full">
      <Header />
      <div className="max-w-[75rem] mx-auto px-8">
        
        

        <div style={{ margin: "16px 0" }}>
          
        </div>

        <div className="flex flex-col h-fit p-3 items-start md:flex-row max-w-full gap-3 bg-card-column-bg md:h-15 md:items-center rounded-lg">
          <Searchtask searchvalue={searchvalue} setSearchValue={setSearchValue}/>
          <Filter className="" priority={priority} setPriority={setPriority}/>
          <div className="md:ml-auto flex gap-2 text-white text-xl">
            {selectedTasks.length > 0 && (
                                
                <button className="bg-save-update-btn hover:brightness-75 text-white text-md sm:text-lg rounded-lg  p-0.5 sm:p-1.5 "
                onClick={ handleDeleteSelected }
                >Delete Selected</button>
            )}
            {selectedTasks.length > 0 &&(
              <select onChange={ (e)=> handlePriorityChange(e.target.value)} className="border-b-fuchsia-300 border-2 rounded-lg  text-center bg-card-bg px-3 py-1 text-lg"> 
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            )}
          </div>  
          <button className="bg-save-update-btn hover:brightness-75 text-white rounded-lg cursor-pointer sm:mb-4 p-2 sm:mt-4 " 
          onClick={() => setShowPopup(true)}>
            + Add Task
          </button>
        </div>

        <div>

          {loading && <p>Loading tasks...</p>}

          {error && <p style={{ color: "red" }}>
            {error}         
            </p>}

          {!loading && !error && tasks.length === 0 && (
            <p className="text-xl text-white">No tasks found.</p>
          )}
          
          {!loading && !error && tasks.length > 0 && (
            <TaskBoard tasks={filteredTasks} />
          )}

          {showPopup && (
            
            <TaskPopup onClose={() => setShowPopup(false)}>
              <div
                className="
                  w-[27.5rem]
                  min-h-[20rem]
                  rounded-[1.25rem]
                  bg-[#161622]
                  p-[1.75rem]
                  shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.6)]
                  border border-white/10"
              >
              <TaskForm onSubmit={handleAddTask} />
              </div>
            </TaskPopup>
          
        )}
        </div>
      </div>  
    </div>
  );
}

export default Dashboard;
