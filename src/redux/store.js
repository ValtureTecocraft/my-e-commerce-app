import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  loginReducer,
  sidebarReducer,
  signupReducer,
} from "./features";

const store = configureStore({
  reducer: {
    signupUser: signupReducer,
    loginUser: loginReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
