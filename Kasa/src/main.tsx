import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import About from "./pages/About/About";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import "./style/global.scss";
import Rental from "./pages/Rental/Rental";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "rentals/:id",
        element: <Rental />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  throw new Error("Failed to find the root element");
}
