import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx"
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
      borderRadius: '10px',
    },

    success: {
      duration: 3000,
      style: {
        background: 'green',
      },
    }
  }} ></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
