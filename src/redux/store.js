import { configureStore } from "@reduxjs/toolkit";
import { authReducer, loginReducer, signupReducer } from "./features";

const store = configureStore({
  reducer: {
    signupUser: signupReducer,
    loginUser: loginReducer,
    auth: authReducer,
  },
});

export default store;
