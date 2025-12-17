import { ChevronRight } from 'lucide-react';
import StatsCard from './StatsCard';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="min-h-screen w-full flex items-center justify-center overflow-hidden relative">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 animate-in fade-in-0 slide-in-from-bottom-4">
          Transforma tu
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent animate-pulse"> Futuro Digital</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4" style={{ animationDelay: '0.2s' }}>
          Descubre soluciones tecnológicas innovadoras que revolucionarán la forma en que trabajas y vives.
          Únete a miles de usuarios que ya han transformado su experiencia digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-0 slide-in-from-bottom-4" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => navigate('/contacto')}
            className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Comienza Ahora</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button
            onClick={() => navigate('/beneficios')}
            className="group border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Ver Beneficios
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-in fade-in-0 slide-in-from-bottom-4" style={{ animationDelay: '0.6s' }}>
          <StatsCard number="10K+" label="Usuarios Activos" />
          <StatsCard number="99%" label="Satisfacción" />
          <StatsCard number="24/7" label="Soporte" />
        </div>
      </div>
    </section>
  );
}