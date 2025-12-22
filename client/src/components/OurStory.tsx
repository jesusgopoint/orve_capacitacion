export default function OurStory() {
  return (
    <section id="nosotros" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Nuestra Historia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="bg-gray-300 rounded-lg overflow-hidden h-96">
            <img 
              src="/images/placeholder-history.jpg" 
              alt="Nuestra historia" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Orve Capacitación es una empresa especializada en transformar el talento interno de nuestros partners a través de soluciones innovadoras de capacitación y desarrollo organizacional. Con más de 15 años de experiencia, hemos acompañado a cientos de empresas en su proceso de crecimiento y transformación.
            </p>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Nuestro enfoque integral combina experiencia, metodología probada y un equipo de profesionales altamente capacitados para entregar resultados tangibles que impacten positivamente en la cultura y productividad de las organizaciones.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-gray-600">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-gray-600">Empresas capacitadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">10K+</p>
                <p className="text-sm text-gray-600">Profesionales formados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
