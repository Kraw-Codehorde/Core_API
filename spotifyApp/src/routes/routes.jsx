import React from "react";
import PathConstants from "./pathConstants";
import { useLocation } from "react-router-dom";
import { useAuth } from "../helpers/AuthContextProvider";
import Layout from "../components/Layout";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const CreateRoom = React.lazy(() => import("../pages/CreateRoom"));
const Room = React.lazy(() => import("../pages/Room"));
const Login = React.lazy(() => import("../pages/Login"));

const ProtectedRoutes = () => {
  const location = useLocation();
  const { loggedIn } = useAuth();

  useEffect(() => {
    console.log("logged in", loggedIn);
  }, [loggedIn]);

  return loggedIn ? (
    <Layout />
  ) : (
    <Navigate to={PathConstants.LOGIN} replace state={{ from: location }} />
  );
};

const routes = [
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: PathConstants.HOME,
        element: <Home />,
      },
      {
        path: PathConstants.CREATE_ROOM,
        element: <CreateRoom />,
      },
      {
        path: PathConstants.ROOM,
        element: <Room />,
      },
    ],
  },
  {
    path: PathConstants.LOGIN,
    element: <Login />,
  },
];

export default routes;
