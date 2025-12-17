import ServicesSection from "../components/ServicesSection/ServicesSection";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-8">Nuestros Servicios</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Ofrecemos soluciones completas para tu negocio digital.
          <Link to="/contact" className="text-purple-400 hover:text-purple-300 ml-2">
            Contáctanos para más información
          </Link>
        </p>
        <ServicesSection detailedView={true} />
      </div>
    </div>
  );
}