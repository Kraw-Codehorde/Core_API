import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const CreateRoom = React.lazy(() => import("../pages/CreateRoom"));
const Room = React.lazy(() => import("../pages/Room"));

const routes = [
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
];

export default routes;
