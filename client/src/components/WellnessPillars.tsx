export default function WellnessPillars() {
  const pillars = [
    {
      title: "Bienestar Físico",
      description: "Programas enfocados en la salud y actividad física de los colaboradores.",
      features: ["Actividades deportivas", "Asesoramiento nutricional", "Prevención de lesiones"],
      image: "/images/pilar-fisico.jpg"
    },
    {
      title: "Bienestar Mental",
      description: "Iniciativas para cuidar la salud emocional y mental del equipo.",
      features: ["Talleres de mindfulness", "Apoyo psicológico", "Gestión del estrés"],
      image: "/images/pilar-mental.jpg"
    },
    {
      title: "Bienestar Social",
      description: "Actividades que fortalecen las relaciones y la comunidad laboral.",
      features: ["Eventos de integración", "Voluntariado corporativo", "Espacios de convivencia"],
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
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="h-48 overflow-hidden bg-gray-300">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-primary mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contacto" className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                    Conocer más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SENCE Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¡Convierte tus excedentes SENCE en oportunidades de crecimiento real!
            </h2>
            
            <p className="text-white text-lg mb-8 leading-relaxed">
              En ORVE capacitación y desarrollo, transformamos tus fondos excedentes de capacitación SENCE en inversiones estratégicas que impulsan el potencial de tu equipo. Ofrecemos cursos totalmente personalizados que se alinean con las necesidades específicas de tu empresa, maximizando el rendimiento y desarrollo de tus empleados.
            </p>

            <p className="text-white text-lg mb-8 font-semibold">
              No dejes que estas oportunidades se escapen.
            </p>

            <p className="text-white text-lg mb-8">
              ¡Contáctanos ahora y asegura el futuro de tu empresa con nosotros!
            </p>

            <a 
              href="#contacto" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
