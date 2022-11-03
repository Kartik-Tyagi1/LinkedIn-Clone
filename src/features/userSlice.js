import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

/**
 * The userSlice is a portion of the redux data layer
 * Each slice is like its own section that holds the state of the data we want
 * That way we can manage the data in sections instead of everything in one section
 */
export const userSlice = createSlice({
  name: "user",
  initialState,

  /**
   * Reducers are methods that allow you to manipulate the state of the data
   * Each one takes in the current state and can also take in an action to perform
   */
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// This line lets us use the reducers
export const { login, logout } = userSlice.actions;

// This line lets us pull the user value from the user object
// This is a selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
