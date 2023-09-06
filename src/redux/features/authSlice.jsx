import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/getCookie";
import { useState } from "react";
import axios from "axios";

const token = getCookie("access_token");

const fetchFooDetails = async () => {
  try {
    const response = await axios.get(`/api/user/private-route`, {
      headers: {
        authorization: token,
      },
    });
    const foo = response.data.bar;
    console.log(foo);
  } catch (error) {
    console.log(error);
  }
};

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

if (token) {
  fetchFooDetails();
}

export const { setUser, setToken, logoutUser } = authSlice.actions;

export default authSlice.reducer;

// Selectors to access the state properties
export const selectUser = (state) => state.auth;
