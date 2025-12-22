export default function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos el talento interno de nuestros partners, impulsando su crecimiento y las soluciones de capacitación innovadoras
            </h1>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Capacitación Organizacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Asesoramiento Directivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Soluciones de Capacitación Innovadoras</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a href="#contacto" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contáctanos
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72">
              <img 
                src="/images/placeholder-1.jpg" 
                alt="Equipo trabajando" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72 mt-8">
              <img 
                src="/images/placeholder-2.jpg" 
                alt="Reunión de equipo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72">
              <img 
                src="/images/placeholder-3.jpg" 
                alt="Capacitación" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-72 mt-8">
              <img 
                src="/images/placeholder-4.jpg" 
                alt="Colaboración" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mt-12 flex justify-center">
          <div className="bg-purple-100 text-primary px-6 py-3 rounded-full font-semibold inline-block">
            15+ años de experiencia
          </div>
        </div>
      </div>
    </section>
  );
}
