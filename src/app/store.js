import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

/**
 * Redux is a tool that wraps our react project with a data layer
 * This allows us to control the flow of data into and out of the app without having
 *    to have props passed through multiple components (AKA prop drilling)
 */

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
