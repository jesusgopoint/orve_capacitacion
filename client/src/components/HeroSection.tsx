import { useState, useEffect } from 'react';

const services = [
  'Formación',
  'Programa de Calidad de Vida y Bienestar',
  'Desarrollo Organizacional',
  'Hunting',
  'Coaching'
];

export default function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayedService, setDisplayedService] = useState(services[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayedService(services[currentServiceIndex]);
  }, [currentServiceIndex]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{fontWeight: '400'}}>
              Transformamos el talento interno de nuestros partners, impulsando su crecimiento 
              <span className="block">
                con <span className="font-black">soluciones de capacitación innovadoras</span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
              Capacitamos en modalidad <span className="font-semibold text-gray-900">presencial, e-learning sincrónico y asincrónico, y autoinstrucción</span>, potenciando el talento y fortaleciendo habilidades.
            </p>

            {/* Services Carousel */}
            <div className="mb-8">
              <p className="text-lg font-semibold text-primary mb-4">Servicios:</p>
              <div className="h-12 flex items-center">
                <div className="text-2xl font-bold text-primary transition-all duration-500 ease-in-out">
                  {displayedService}
                </div>
              </div>

            </div>

            <div className="flex gap-4">
              <a href="#contacto" className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-lg">
                Contáctanos
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72 animate-fade-in-scale delay-100">
              <img 
                src="/images/hero-1.jpg" 
                alt="Equipo trabajando" 
                className="w-full h-full object-cover animate-float"
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72 mt-8 animate-fade-in-scale delay-200">
              <img 
                src="/images/hero-2.jpg" 
                alt="Reunión de equipo" 
                className="w-full h-full object-cover animate-float"
                style={{animationDelay: '0.5s'}}
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72 animate-fade-in-scale delay-300">
              <img 
                src="/images/hero-3.jpg" 
                alt="Capacitación" 
                className="w-full h-full object-cover animate-float"
                style={{animationDelay: '1s'}}
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72 mt-8 animate-fade-in-scale delay-400">
              <img 
                src="/images/hero-4.jpg" 
                alt="Colaboración" 
                className="w-full h-full object-cover animate-float"
                style={{animationDelay: '1.5s'}}
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
