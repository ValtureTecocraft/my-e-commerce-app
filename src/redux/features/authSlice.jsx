import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/getCookie";

const token = getCookie("access_token");

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const { setUser, setToken, logoutUser } = authSlice.actions;

export default authSlice.reducer;

// Selectors to access the state properties
export const selectUser = (state) => state.auth;
