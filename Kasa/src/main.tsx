import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
} else {
  throw new Error("Failed to find the root element");
}
