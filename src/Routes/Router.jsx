import { createBrowserRouter, Link } from "react-router";
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
      <h2 className="flex flex-col gap-y-4 items-center justify-center text-4xl font-semibold text-red-400 min-h-screen">
        404 No Found...
        <Link to={"/"} className="btn btn-secondary w-44">
          Go Home
        </Link>
      </h2>
    ),
  },
]);

export default router;
