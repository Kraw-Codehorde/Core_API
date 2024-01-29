import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

const API_BASE_URL = BASE_URL;

const useAxiosWithInterceptor = () => {
  const jwtAxios = axios.create({ baseURL: API_BASE_URL });
  const navigate = useNavigate();

  jwtAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        if (error.response.data.detail === "Invalid token.") {
          // If token is invalid, redirect to login page
          navigate("/login");
        }
      }
      return Promise.reject(error);
    }
  );
  return jwtAxios;
};

export default useAxiosWithInterceptor;
