import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../adminpanel/AdminPanel";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../layout/Home";
import HomeContainer from "../pages/HomeContainer";
import MyList from "../components/MyList";
import Series from "../layout/Series";
import Film from "../layout/Film";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "admin",
        element: <AdminPanel />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "home",
        element: <HomeContainer />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "mylist",
            element: <MyList />,
          },
          {
            path: "series",
            element: <Series />,
          },
          {
            path: "film",
            element: <Film />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};
export default Routers;
