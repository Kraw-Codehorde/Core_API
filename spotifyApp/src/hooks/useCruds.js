import { BASE_URL } from "../config";
import { API_KEY } from "../cred";
import { useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Api-Key ${API_KEY}`,
  },
});

const useCrud = (data = [], url) => {
  const [dataCRUD, setDataCRUD] = useState(data);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(BASE_URL + url, {});
      // console.log(res.status);
      setStatus(res.status);
      setDataCRUD(res.data);
      setError(null);
      setIsLoading(false);

      let _data = {};
      _data.data = res.data;
      _data.status = res.status;
      // console.log("data", _data);
      // console.log("status", status);
      return _data;
    } catch (err) {
      console.log("error catching");
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
      const res = await axiosInstance.post(BASE_URL + url, data);
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
