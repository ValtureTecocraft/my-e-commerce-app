import axios from "axios";
export const loginApi = (values) => {
  return axios.post("api/auth/login", {
    email: values.email,
    password: values.password,
  });
};

export const signupApi = (user) => {
  return axios.post("/api/auth/signup", user);
};
