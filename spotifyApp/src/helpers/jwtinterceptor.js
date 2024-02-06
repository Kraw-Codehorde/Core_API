import axios from "axios";
import { BASE_URL } from "../config";

const API_BASE_URL = BASE_URL;

// axios.defaults.withCredentials = true;

const useAxiosWithInterceptor = () => {
  const jwtAxios = axios.create({ baseURL: API_BASE_URL });

  const refreshToken = () => {
    const _axiosInstance = axios.create({});
    console.log("refreshToken()");
    const dataToSend = {
      grant_type: "refresh_token",
      access_token: localStorage.getItem("accessToken"),
      refresh_token: localStorage.getItem("refreshToken"),
      client_id: "clientid",
      client_secret: "clientsecret",
    };
    const _config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return _axiosInstance.post(
      "http://localhost:8000/auth/token",
      dataToSend,
      _config
    );
  };

  jwtAxios.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log("access token is set", accessToken);
    } else {
      // console.log("need to login to do this action");
      return Promise.reject(new Error("need to login to do this action"));
    }
    return config;
  });

  jwtAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response) {
        if (error.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const refreshResponse = await refreshToken();
            localStorage.setItem(
              "accessToken",
              refreshResponse.data.access_token
            );
            localStorage.setItem(
              "refreshToken",
              refreshResponse.data.refresh_token
            );
            originalConfig.headers.Authorization = `Bearer ${refreshResponse.data.access_token}`;
            return jwtAxios(originalConfig);
          } catch (err) {
            if (err.response && err.response.status === 400) {
              console.log("bad request, logging out");
              localStorage.removeItem("accessToken");
            }
            return Promise.reject(err);
          }
        }
        return Promise.reject(error);
      }
    }
  );
  return jwtAxios;
};

export default useAxiosWithInterceptor;
