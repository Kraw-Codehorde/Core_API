import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const CreateRoom = React.lazy(() => import("../pages/CreateRoom"));

const routes = [
  {
    path: PathConstants.HOME,
    element: <Home />,
  },
  {
    path: PathConstants.CREATE_ROOM,
    element: <CreateRoom />,
  },
];

export default routes;
