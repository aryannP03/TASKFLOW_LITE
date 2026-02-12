import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/tasks/components/tasksSlice";
// import usersReducer from "../components/usersSlice";
import { userApi } from "../components/usersSlice2";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
