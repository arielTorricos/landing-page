import { Rocket, Star, Users, Zap } from 'lucide-react';
import BenefitItem from './BenefitItem';
import StatsBanner from './StatsBanner';


export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 relative overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            ¿Por qué elegir <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">TechFlow</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre las ventajas que nos hacen únicos en el mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <BenefitItem
              icon={<Star className="h-8 w-8" />}
              title="Experiencia Comprobada"
              description="Más de 5 años ayudando a empresas a crecer digitalmente con resultados medibles."
            />
            <BenefitItem
              icon={<Zap className="h-8 w-8" />}
              title="Tecnología Cutting-Edge"
              description="Utilizamos las últimas tecnologías y frameworks para garantizar el mejor rendimiento."
            />
            <BenefitItem
              icon={<Users className="h-8 w-8" />}
              title="Soporte Personalizado"
              description="Equipo dedicado 24/7 para resolver cualquier duda o problema que puedas tener."
            />
            <BenefitItem
              icon={<Rocket className="h-8 w-8" />}
              title="Resultados Rápidos"
              description="Implementación ágil que te permite ver resultados en las primeras semanas."
            />
          </div>

          <div className="relative">
            <StatsBanner />
          </div>
        </div>
      </div>
    </section>
  );
}