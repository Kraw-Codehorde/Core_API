import { Button } from "@mui/material";

import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:8000" });

const Login = () => {
  const handleClick = () => {
    axiosClient.get("api/spotify/login").then((res) => {
      console.log(res.data);
      window.location.href = res.data.spotify_login_url;
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
