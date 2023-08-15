import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MeusImoveis from "./components/MeusImoveis.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/meus-imoveis",
    element: <MeusImoveis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
