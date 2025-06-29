import { ChevronRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import StatsCard from './StatsCard';


export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in-0 slide-in-from-bottom-4">
          Transforma tu
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse"> Futuro Digital</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4" style={{animationDelay: '0.2s'}}>
          Descubre soluciones tecnológicas innovadoras que revolucionarán la forma en que trabajas y vives.
          Únete a miles de usuarios que ya han transformado su experiencia digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-0 slide-in-from-bottom-4" style={{animationDelay: '0.4s'}}>
          <button
            onClick={() => scrollToSection('servicios')}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Comienza Ahora</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button
            onClick={() => scrollToSection('beneficios')}
            className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Ver Beneficios
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-in fade-in-0 slide-in-from-bottom-4" style={{animationDelay: '0.6s'}}>
          <StatsCard number="10K+" label="Usuarios Activos" />
          <StatsCard number="99%" label="Satisfacción" />
          <StatsCard number="24/7" label="Soporte" />
        </div>
      </div>
    </section>
  );
}