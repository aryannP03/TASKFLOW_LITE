import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const API_URL = "http://localhost:3000/tasks"

export const fetchTasks = createAsyncThunk("fetchTasks", 
    async() => {
        const response = await fetch(API_URL)
        return await response.json()
    }
)

export const addTask = createAsyncThunk("addTask",
    async (task) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "json",
            },
            body: JSON.stringify(task),
        })

        return await response.json()
    }
)

export const editTask = createAsyncThunk("editTask", 
    async ({ id, updatedData}) => {
        await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })

        return { id, updatedData}
    }
)

export const deleteTask = createAsyncThunk("deleteTask",
  async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })

    return id
  }
)


const initialState =  {
    tasks: [],
    loading: false,
    error: null,
    selectedTasks: [],
}



const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

        toggleTaskSelection: (state, action) => {
            const id = action.payload

            if (state.selectedTasks.includes(id)) {
            state.selectedTasks = state.selectedTasks.filter(t => t !== id)
            } else {
            state.selectedTasks.push(id)
            }
            
        },
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false
            state.tasks = action.payload
        })
        .addCase(addTask.fulfilled, (state, action) =>{
            state.tasks.push(action.payload)
        })
        .addCase(editTask.fulfilled, (state, action) => {
            const { id, updatedData} = action.payload
            const task = state.tasks.find((task) => task.id===id)
            Object.assign(task, updatedData)
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            state.selectedTasks = state.selectedTasks.filter(id => id !== action.payload)
        })
    }
})

export const { toggleTaskSelection } = tasksSlice.actions
export default tasksSlice.reducer