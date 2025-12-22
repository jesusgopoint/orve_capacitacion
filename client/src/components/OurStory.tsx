export default function OurStory() {
  const features = [
    "Enfoque personalizado y adaptabilidad a las necesidades del cliente.",
    "Uso de tecnologías avanzadas para capacitación inmersiva.",
    "Seguimiento continuo y evaluación del impacto post-capacitación.",
    "Formadores especializados y certificación de alta calidad."
  ];

  return (
    <section id="nosotros" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Nuestra Historia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="bg-gray-300 rounded-lg overflow-hidden h-96">
            <img 
              src="/images/history.jpg" 
              alt="Nuestra historia" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Orve Capacitación y Desarrollo nace con la misión de mejorar las capacidades y el talento de cada persona.
            </p>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Con más de 15 años de experiencia en la industria del manejo de talento humano, nos hemos dedicado a transformar la vida laboral y personal de aquellos que confían en nuestros programas, academias, charlas y más. Nuestra esencia está centrada en las personas, y es eso lo que nos impulsa cada día a seguir entregando lo mejor de nosotros.
            </p>

            {/* ORVE Badge */}
            <div className="bg-white border-2 border-primary rounded-lg p-6 mb-8">
              <p className="text-primary font-bold text-center mb-1">ORVE</p>
              <p className="text-gray-900 font-semibold text-center mb-3">Capacitación y Desarrollo</p>
              <p className="text-primary font-bold text-center text-sm">Organismo Técnico Certificado y Acreditado</p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{feature}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
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
