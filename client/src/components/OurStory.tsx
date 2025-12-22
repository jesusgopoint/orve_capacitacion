import { Users, Zap, TrendingUp, Award, Trophy } from "lucide-react";

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
          
          <div className="flex justify-center items-center min-h-96">
            {/* ORVE Badge - Simplified with animation on entire block */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-3xl p-12 text-center max-w-2xl animate-shimmer">
              <div className="inline-block bg-primary text-white px-6 py-3 rounded-full mb-6">
                <p className="font-bold text-base">ORVE</p>
              </div>
              <p className="text-gray-900 font-bold text-2xl mb-8">Capacitación y Desarrollo</p>
              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-primary/20">
                <Trophy className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-primary font-bold text-lg">Organismo Técnico Certificado y Acreditado</p>
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
