import { Instagram, Facebook, Linkedin, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © ORVE 2025. Proyecto impulsado con ❤ por Soluciones para OTEC.
          </p>
          
          <div className="flex gap-6 items-center flex-wrap">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 ml-4 pl-4 border-l border-gray-700">
              <a 
                href="https://www.instagram.com/orve_capacitacionydesarrollo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/people/ORVE-Capacitaci%C3%B3n-y-Desarrollo/61573139375844/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/orve-capacitaci%C3%B3n-y-desarrollo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=56986983439&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-500 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@ORVECapacitaci%C3%B3nyDesarrollo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
