import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import { RouterProvider, Routes } from "react-router-dom";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
