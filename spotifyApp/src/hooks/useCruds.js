import { BASE_URL } from "../config";
import { useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const useCrud = (data = [], url) => {
  const [dataCRUD, setDataCRUD] = useState(data);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(BASE_URL + url, {});
      // console.log(res.data);
      setDataCRUD(res.data);
      setError(null);
      setIsLoading(false);
      return res.data;
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(new Error("400"));
      } else if (err.response && err.response.status === 404) {
        setError(new Error("404"));
      } else {
        // console.log("setting unknown error");
        // console.log(err.response.status);
        setError(err);
        // throw error;
      }
      setIsLoading(false);
    }
  };

  const createData = async (data) => {
    setIsLoading(true);
    try {
      const res = await jwtAxios.post(BASE_URL + url, data);
      setDataCRUD(res.data);
      setError(null);
      setIsLoading(false);
      return res.data;
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(new Error("400"));
      }
      setIsLoading(false);
      throw error;
    }
  };

  return { fetchData, createData, dataCRUD, error, isLoading };
};

export default useCrud;
