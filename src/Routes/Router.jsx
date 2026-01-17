import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
// import ServicesPage from "../Pages/ServicesPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "../Provider/PrivetRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ServicesPage from "../Pages/ServicesPage";
import Profile from "../Pages/Profile";

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
        Component: ServicesPage,
      },
      {
        path: "/profile",
        Component: Profile,
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
    path: "/services-details/:id",
    element: (
      <PrivetRoute>
        <ServiceDetails></ServiceDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("/petcare.json"),
  },
  {
    path: "/*",
    element: (
      <h2 className="text-black min-h-screen text-center">
        error
      </h2>
    ),
  },
]);

export default router;
