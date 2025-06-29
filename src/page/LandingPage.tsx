import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap, Shield, Rocket, Users, Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TechFlow
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['inicio', 'servicios', 'beneficios', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 capitalize font-medium hover:scale-105 transform"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4 px-4 animate-in slide-in-from-top-2">
              {['inicio', 'servicios', 'beneficios', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50" />
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full mx-auto">
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

          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-in fade-in-0 slide-in-from-bottom-4" style={{animationDelay: '0.6s'}}>
            {[
              { number: '10K+', label: 'Usuarios Activos' },
              { number: '99%', label: 'Satisfacción' },
              { number: '24/7', label: 'Soporte' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="w-full py-20 bg-slate-800/50">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones completas y personalizadas para impulsar tu transformación digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="h-12 w-12" />,
                title: 'Desarrollo Web',
                description: 'Creamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.',
                features: ['Diseño Responsivo', 'SEO Optimizado', 'Alta Performance']
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Ciberseguridad',
                description: 'Protegemos tu negocio con las mejores prácticas de seguridad digital.',
                features: ['Análisis de Vulnerabilidades', 'Monitoreo 24/7', 'Backup Automático']
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Consultoría Digital',
                description: 'Te guiamos en tu proceso de transformación digital paso a paso.',
                features: ['Estrategia Personalizada', 'Análisis de Mercado', 'Implementación']
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="w-full py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">TechFlow</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre las ventajas que nos hacen únicos en el mercado
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Star className="h-8 w-8" />,
                  title: 'Experiencia Comprobada',
                  description: 'Más de 5 años ayudando a empresas a crecer digitalmente con resultados medibles.'
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: 'Tecnología Cutting-Edge',
                  description: 'Utilizamos las últimas tecnologías y frameworks para garantizar el mejor rendimiento.'
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: 'Soporte Personalizado',
                  description: 'Equipo dedicado 24/7 para resolver cualquier duda o problema que puedas tener.'
                },
                {
                  icon: <Rocket className="h-8 w-8" />,
                  title: 'Resultados Rápidos',
                  description: 'Implementación ágil que te permite ver resultados en las primeras semanas.'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    +500%
                  </div>
                  <p className="text-2xl text-white font-semibold mb-4">Crecimiento Promedio</p>
                  <p className="text-gray-300 mb-8">
                    Nuestros clientes experimentan un crecimiento promedio del 500% en su presencia digital
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-400">98%</div>
                      <div className="text-sm text-gray-300">Retención</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-pink-400">4.9★</div>
                      <div className="text-sm text-gray-300">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="w-full py-20 bg-slate-800/50">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Comenzar</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contáctanos hoy y descubre cómo podemos transformar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Mensaje"
                  className="w-full bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
                <button
                  onClick={() => alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-purple-500 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-pink-500 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">contacto@techflow.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-500 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                    <p className="text-gray-300">123 Tech Street, Digital City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 border-t border-slate-800">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TechFlow
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transformamos ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="bg-slate-800 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                {['Desarrollo Web', 'Ciberseguridad', 'Consultoría', 'Soporte 24/7'].map((service) => (
                  <li key={service}>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Política de Privacidad', 'Términos de Servicio', 'Aviso Legal', 'Cookies'].map((item) => (
                  <li key={item}>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 TechFlow. Todos los derechos reservados. Hecho con ❤️ para el futuro digital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}