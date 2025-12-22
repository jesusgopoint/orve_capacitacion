export default function WellnessPillars() {
  const pillars = [
    {
      title: "Bienestar Físico",
      description: "Programas enfocados en la salud y actividad física de los colaboradores, promoviendo hábitos saludables y energía en el trabajo.",
      features: ["Pausas Activas", "Masajes en Silla", "Baile entretenido", "Entre Otros"],
      image: "/images/pilar-fisico.jpg"
    },
    {
      title: "Bienestar Mental",
      description: "Iniciativas para cuidar la salud emocional y mental del equipo, generando espacios de calma y equilibrio.",
      features: ["Pausas Psicológicas", "Mindfulness (Eating, express, tradicional)", "Yoga", "Entre Otros"],
      image: "/images/pilar-mental.jpg"
    },
    {
      title: "Bienestar Integral de Salud",
      description: "Programas integrales que cuidan la salud general de los colaboradores desde múltiples dimensiones.",
      features: ["Operativos Médicos", "Programa Alimentación Saludable Organizacional", "Programa Integral de Salud", "Entre Otros"],
      image: "/images/pilar-social.jpg"
    }
  ];

  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Pilares del Programa Bienestar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Image - Horizontal */}
                <div className="h-40 overflow-hidden bg-gray-300">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pillar.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-primary mr-3 mt-0.5 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contacto" className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block text-sm">
                    Conocer más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SENCE Section - Redesigned */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left" style={{animationDelay: '0s'}}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¡Convierte tus excedentes SENCE en oportunidades de crecimiento real!
              </h2>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                En ORVE capacitación y desarrollo, transformamos tus <span className="font-bold">fondos excedentes SENCE</span> en <span className="font-bold">inversiones estratégicas</span> que impulsan el potencial de tu equipo.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Ofrecemos <span className="font-bold">cursos personalizados</span> que se alinean con las necesidades específicas de tu empresa, maximizando el rendimiento y desarrollo de tus empleados.
              </p>

              <a 
                href="#contacto" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Contáctanos
              </a>
            </div>

            {/* Right Image */}
            <div className="bg-gray-300 rounded-lg overflow-hidden h-96 animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
              <img 
                src="/images/hero-1.jpg" 
                alt="SENCE" 
                className="w-full h-full object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
