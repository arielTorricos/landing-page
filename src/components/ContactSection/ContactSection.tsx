import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';


export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-slate-800/50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Comenzar</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos hoy y descubre cómo podemos transformar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <ContactInfoCard
              icon={<Phone className="h-6 w-6 text-white" />}
              title="Teléfono"
              content="+591 79319449"
              color="purple"
            />
            <ContactInfoCard
              icon={<Mail className="h-6 w-6 text-white" />}
              title="Email"
              content="ariel.ben75@gmail.com"
              color="pink"
            />
            <ContactInfoCard
              icon={<MapPin className="h-6 w-6 text-white" />}
              title="Ubicación"
              content="Sucre calle 2009 sin numero"
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}