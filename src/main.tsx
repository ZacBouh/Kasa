import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.tsx";
import Home, { loader as homeLoader } from "./routes/Home";
import Logement, { loader as logementLoader } from "./routes/Logement.tsx";
import About from "./routes/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logements/:logementId",
        element: <Logement />,
        loader: logementLoader,
      },
      {
        path: "home",
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
