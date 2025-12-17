import { Zap } from 'lucide-react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Landing Ariel Torricos
              </span>
            </div>
            <p className="text-slate-600 dark:text-gray-400 mb-6 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Tu socio tecnológico de confianza.
            </p>
            <SocialLinks />
          </div>

          <FooterLinks
            title="Servicios"
            links={['Desarrollo Web', 'Ciberseguridad', 'Consultoría', 'Soporte 24/7']}
          />
          <FooterLinks
            title="Legal"
            links={['Política de Privacidad', 'Términos de Servicio', 'Aviso Legal', 'Cookies']}
          />
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 dark:text-gray-400">
            © 2025 Ariel Torricos. Todos los derechos reservados. Hecho para el Diplomado Modulo 4.
          </p>
        </div>
      </div>
    </footer>
  );
}