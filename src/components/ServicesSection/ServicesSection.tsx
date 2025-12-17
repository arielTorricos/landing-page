import { Rocket, Shield, Users } from 'lucide-react';
import ServiceCard from './ServicesCard';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  detailedView?: boolean;
}

export default function ServicesSection({ detailedView = false }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">

        {!detailedView && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Nuestros <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones completas y personalizadas para impulsar tu transformación digital
            </p>
            <Link
              to="/services"
              className="inline-block mt-6 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
            >
              Ver todos los servicios en detalle →
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Rocket className="h-12 w-12" />}
            title="Desarrollo Web"
            description="Creamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes."
            features={['Diseño Responsivo', 'SEO Optimizado', 'Alta Performance']}
          />
          <ServiceCard
            icon={<Shield className="h-12 w-12" />}
            title="Ciberseguridad"
            description="Protegemos tu negocio con las mejores prácticas de seguridad digital."
            features={['Análisis de Vulnerabilidades', 'Monitoreo 24/7', 'Backup Automático']}
          />
          <ServiceCard
            icon={<Users className="h-12 w-12" />}
            title="Consultoría Digital"
            description="Te guiamos en tu proceso de transformación digital paso a paso."
            features={['Estrategia Personalizada', 'Análisis de Mercado', 'Implementación']}
          />
        </div>
      </div>
    </section>
  );
}