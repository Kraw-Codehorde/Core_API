import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthContextProvider } from "./helpers/AuthContextProvider";

import routes from "./routes/routes";

const App = () => {
  const router = createBrowserRouter([
    {
      // parent route component
      // element: <Layout />,
      // custom routing error component
      // errorElement: <Page404 />,
      // child route components
      children: routes,
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
