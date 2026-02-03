import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "../Provider/PrivetRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ServicesPage from "../Pages/ServicesPage";
import Profile from "../Pages/Profile";
import Loading from "../components/Loading";
import ForgotPassword from "../Pages/ForgotPassword";

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
      {
        path: "/auth/forgot-password",
        Component: ForgotPassword,
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
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: (
      <h2 className="flex items-center justify-center text-4xl font-semibold text-red-300 min-h-screen">
        Something error....
      </h2>
    ),
  },
]);

export default router;
