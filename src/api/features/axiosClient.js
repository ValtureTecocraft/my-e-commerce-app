import axios from "axios";
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from "./clientHelper";
import { baseURL } from "../url";
import { getCookie } from "../../utils/getCookie";

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

const instance = setupInterceptorsTo(
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
);

instance.interceptors.request.use(async (config) => {
  const token = getCookie("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

export { instance };
