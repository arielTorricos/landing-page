import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ContactPage from "../page/ContactPage";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

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
        element: <ServicesSection />,
      },
      {
        path: "beneficios",
        element: <BenefitsSection />,
      },
      {
        path: "testimonios",
        element: <TestimonialsSection />
      },
      {
        path: "contacto",
        element: <ContactPage />,
      },
    ],
  },
]);