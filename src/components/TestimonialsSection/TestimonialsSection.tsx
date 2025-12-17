import { useState, useEffect } from 'react';
import TestimonialItem from './TestimonialItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CEO, TechStart",
    comment: "La transformación digital que logramos con esta plataforma fue increíble. Aumentamos nuestra productividad en un 200%.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "CTO, InnovateCorp",
    comment: "El soporte y la tecnología que ofrecen son de primer nivel. Definitivamente la mejor inversión para nuestra empresa.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Marketing Director, CreativeFlow",
    comment: "Diseño impecable y funcionalidad robusta. Ha superado todas nuestras expectativas.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Javier López",
    role: "Founder, StartupX",
    comment: "Una herramienta esencial para cualquier negocio moderno. Altamente recomendada.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section id="testimonios" className="py-20 relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Historias reales de éxito y transformación digital
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <TestimonialItem {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - itemsPerPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
