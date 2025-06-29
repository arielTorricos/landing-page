import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ServicesPage from "../page/ServicesPage";
import ContactPage from "../page/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "servicios",
        element: <AboutPage />,
      },
      {
        path: "beneficios",
        element: <ServicesPage />,
      },
      {
        path: "contacto",
        element: <ContactPage />,
      },
    ],
  },
]);