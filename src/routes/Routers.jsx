import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};
export default Routers;
