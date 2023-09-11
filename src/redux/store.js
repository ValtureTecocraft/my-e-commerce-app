import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  dataReducer,
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
    userData: dataReducer,
  },
});

export default store;
