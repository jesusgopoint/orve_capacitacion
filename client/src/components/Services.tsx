export default function Services() {
  const services = [
    {
      title: "Formación",
      description: "Programas de formación diseñados específicamente para desarrollar competencias clave en tu equipo."
    },
    {
      title: "Programa de Bienestar Laboral",
      description: "Iniciativas integrales para mejorar la calidad de vida y el bienestar de tus colaboradores."
    },
    {
      title: "Desarrollo Organizacional",
      description: "Estrategias de transformación organizacional para optimizar procesos y resultados."
    },
    {
      title: "Coaching",
      description: "Acompañamiento personalizado para líderes y equipos en su desarrollo profesional."
    },
    {
      title: "Consultoría",
      description: "Asesoramiento experto en temas de recursos humanos y desarrollo organizacional."
    }
  ];

  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Services List */}
          <div>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image and Description */}
          <div>
            <div className="bg-gray-300 rounded-lg overflow-hidden h-96 mb-6">
              <img 
                src="/images/services.jpg" 
                alt="Especialista en servicios" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-900 mb-3">Especialista en Servicios</p>
              <p className="text-gray-700 leading-relaxed">
                Nuestro equipo de especialistas está comprometido con la excelencia y la innovación en cada proyecto. Trabajamos de cerca con nuestros clientes para entender sus necesidades específicas y diseñar soluciones personalizadas que generen impacto real en sus organizaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
