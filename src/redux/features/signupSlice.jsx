import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/features";

export const registrationUserData = createAsyncThunk(
  "user-login/signupUser",
  async (data) => {
    const response = await API.post(`auth/signup`, data);
    return response.data;
  }
);

const initialState = {
  signUpUser: {},
  registerUser: {},
};

const signupSlice = createSlice({
  name: "signupUser",
  initialState,
  reducers: {
    setSignUpUserdata: (state, { payload }) => {
      state.signUpUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationUserData.fulfilled, (state, { payload }) => {
      state.registerUser = payload;
    });
  },
});

export const { setSignUpUserdata } = signupSlice.actions;
export default signupSlice.reducer;
