import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const initialState =  {
    tasks: [],
    loading: false,
    error: null,
}


const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
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
    }
})

export default tasksSlice.reducer