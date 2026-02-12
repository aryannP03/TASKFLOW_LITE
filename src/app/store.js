import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/tasks/components/tasksSlice";
import usersReducer from "../components/usersSlice";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});
