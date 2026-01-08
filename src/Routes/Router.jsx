import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Portfolio from "../Pages/Portfolio";
import PrivetRoute from "../Provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/services",
        element: (
          <PrivetRoute>
            <ServicesPage></ServicesPage>
          </PrivetRoute>
        ),
      },
      {
        path: "/portfolio",
        Component: Portfolio,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    element: (
      <h2>
        <span className="loading loading-dots loading-xl"></span>
      </h2>
    ),
  },
]);

export default router;
