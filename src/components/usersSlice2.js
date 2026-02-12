import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ["User"],
    
    endpoints: (builder) => ({
        
        fetchUsers: builder.query({
            query: () => "/users",
            invalidatesTags: ["User"]
        }),

        getuserbyid: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ["User"]
        }),

        edituserbyid: builder.mutation({
            query: ({id, updatedData}) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body: updatedData
            }),
            invalidatesTags: ["User"]
        }),

        adduser: builder.mutation({
            query: (data) => ({
                url: "/users",
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["User"]
        })
    })
})

export const { useFetchUsersQuery, useGetuserbyidQuery, useEdituserbyidMutation, useAdduserMutation } = userApi





























// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const API_URL = "http://localhost:3000/users"

// export const fetchUsers = createAsyncThunk("fetchUsers", 
//     async() => {
//         const response = await fetch(API_URL)
//         return await response.json()
//     }
// )

// export const addUser = createAsyncThunk("addUser",
//     async (user) => {
//         const response = await fetch(API_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(user),
//         })

//         return await response.json()
//     }
// )

// export const editUser = createAsyncThunk("editUser", 
//     async ({ id, updatedData}) => {
//         await fetch(`${API_URL}/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedData),
//         })

//         return { id, updatedData}
//     }
// )


// const initialState =  {
//     users: [],
//     loading: false,
//     error: null,
//     currentUser: null,
// }


// const usersSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {},

//     extraReducers: (builder) => {
//         builder.addCase(fetchUsers.pending, (state) => {
//             state.loading = true
//             state.error = null
//         })
//         .addCase(fetchUsers.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.payload
//         })
//         .addCase(fetchUsers.fulfilled, (state, action) => {
//             state.loading = false
//             state.users = action.payload

//             if (action.payload.length > 0 && !state.currentUser) {
//                 state.currentUser = action.payload[0]
//              }
//         })
//         .addCase(addUser.fulfilled, (state, action) =>{
//             state.users.push(action.payload)
//             state.currentUser = action.payload
//         })
//         .addCase(editUser.fulfilled, (state, action) => {
//             const { id, updatedData} = action.payload
//             const user = state.users.find((u) => u.id===id)
//             Object.assign(user, updatedData)

//             if (state.currentUser?.id === id) {
//             Object.assign(state.currentUser, updatedData)
//             }
//         })
//     }
// })

// export default usersSlice.reducer