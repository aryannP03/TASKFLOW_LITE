import {useState , useEffect, useRef} from "react";
import TaskBoard from "../tasks/components";
import TaskPopup from "../../common/modal/TaskPopup";
import TaskForm from "../tasks/components/task-form/TaskForm";
import Searchtask from "../../common/search/Search";
import Filter from "../../common/filter/Filter";
import Header from "../../common/header/Header";
import "./style/index.css"
import TaskBoardSkeleton from "../tasks/components/skeleton";
import useDashboard from "./hooks/useDashboard";
import Customcarousel from "../carousel";

function Dashboard() {

    const { tasks, loading, error, selectedTasks, filteredTasks, showPopup, setShowPopup, priority, setPriority, searchValue, 
    setSearchValue, handleAddTask, handlePriorityChange, handleDeleteSelected  } = useDashboard()

  return (
    <div className="bg-mainbg min-h-screen w-full">
      <Header />
      <div className="max-w-[75rem] mx-auto px-8">
        
        <div className="flex flex-col h-fit p-3 items-start md:flex-row max-w-full gap-3 bg-card-column-bg md:h-15 md:items-center rounded-lg mt-5">
          <Searchtask searchvalue={searchValue} setSearchValue={setSearchValue}/>
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
          <Customcarousel />
        </div>

        <div>
          
          {loading && <TaskBoardSkeleton />}

          {error && <p className="text-3xl mt-20 ml-15 text-red-700">
            Unable to fetch tasks ! <br />         
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
                className="w-[27.5rem] min-h-[20rem] rounded-[1.25rem] bg-[#161622] p-[1.75rem] border border-white/10"
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
