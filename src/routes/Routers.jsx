import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};
export default Routers;
