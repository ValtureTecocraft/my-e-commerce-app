import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/features";
import { useDispatch } from "react-redux";

export const loginUser = createAsyncThunk(
  "user-login/loginUser",
  async (data) => {
    const response = await API.post(`auth/login`, data);
    return response.data;
  }
);

const initialState = {
  loginDetails: {},
};

const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loginDetails = payload;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loginDetails = payload;
    });
  },
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
