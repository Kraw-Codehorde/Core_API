import { Button } from "@mui/material";
import { useAuth } from "../helpers/AuthContextProvider";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:8000" });
const dataToSend = {
  grant_type: "password",
  username: "admin",
  password: "admin",
  client_id: "clientid",
  client_secret: "clientsecret",
};
const _config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const Login = () => {
  const { checkLoginState } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    // window.localStorage.setItem("accessToken", "123456");
    // checkLoginState();
    // navigate("/");
    axiosClient.post("auth/token", dataToSend, _config).then((res) => {
      console.log(res.data);
      localStorage.setItem("accessToken", res.data.access_token);
      localStorage.setItem("refreshToken", res.data.refresh_token);
      checkLoginState();
      navigate("/");
    });
  };
  return (
    <>
      <div>Login</div>
      <Button onClick={handleClick}>Login</Button>
    </>
  );
};

export default Login;
