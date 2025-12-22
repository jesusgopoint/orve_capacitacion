import { Users, Zap, TrendingUp, Award } from "lucide-react";

export default function OurStory() {
  const features = [
    {
      title: "Enfoque personalizado",
      description: "Adaptabilidad a las necesidades del cliente.",
      icon: Users
    },
    {
      title: "Tecnologías avanzadas",
      description: "Capacitación inmersiva y efectiva.",
      icon: Zap
    },
    {
      title: "Seguimiento continuo",
      description: "Evaluación del impacto post-capacitación.",
      icon: TrendingUp
    },
    {
      title: "Formadores especializados",
      description: "Certificación de alta calidad.",
      icon: Award
    }
  ];

  return (
    <>
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
                Orve Capacitación y Desarrollo nace con la misión de <span className="font-bold">mejorar las capacidades</span> y el talento de cada persona.
              </p>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Con más de 15 años de experiencia en la industria del manejo de talento humano, nos hemos dedicado a <span className="font-bold">transformar la vida laboral</span> de aquellos que confían en nuestros programas, academias, charlas y más. Nuestra esencia está <span className="font-bold">centrada en las personas</span>, y es eso lo que nos impulsa cada día a seguir entregando lo mejor de nosotros.
              </p>

              {/* ORVE Badge - Improved Design */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-xl p-8 text-center">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full mb-3">
                  <p className="font-bold text-sm">ORVE</p>
                </div>
                <p className="text-gray-900 font-bold text-xl mb-2">Capacitación y Desarrollo</p>
                <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-primary/20">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <p className="text-primary font-semibold text-sm">Organismo Técnico Certificado y Acreditado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Icons */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Por qué elegirnos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="bg-primary/10 rounded-full p-4 mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
