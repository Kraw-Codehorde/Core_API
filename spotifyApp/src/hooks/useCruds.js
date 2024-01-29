import useAxiosWithInterceptor from "../helpers/jwtinterceptor";
import { BASE_URL } from "../config";
import { useState } from "react";

const useCrud = (data = [], url) => {
  const jwtAxios = useAxiosWithInterceptor();
  const [dataCRUD, setDataCRUD] = useState(data);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await jwtAxios.get(BASE_URL + url, {});
      // console.log(res.data);
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
