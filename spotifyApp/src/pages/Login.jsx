import { Button } from "@mui/material";
import { useAuth } from "../helpers/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:8000" });

const Login = () => {
  const { checkLoginState } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    // window.localStorage.setItem("accessToken", "123456");
    // checkLoginState();
    // navigate("/");
    axiosClient.get("api/spotify/login").then((res) => {
      console.log(res.data);
      window.location.href = res.data.spotify_login_url;
    });
  };
  // useEffect(() => {
  //   checkLoginState();
  // }, []);

  return (
    <>
      <div>Login</div>
      <Button onClick={handleClick}>Login</Button>
    </>
  );
};

export default Login;
