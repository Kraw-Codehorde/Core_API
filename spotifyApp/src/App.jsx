import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

import routes from "./routes/routes";

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // custom routing error component
      // errorElement: <Page404 />,
      // child route components
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
