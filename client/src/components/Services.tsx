import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("formacion");

  const services = [
    {
      id: "formacion",
      title: "Formación",
      content: [
        "En ORVE Capacitación, diseñamos programas de formación especializados en el desarrollo de habilidades blandas para potenciar el desempeño y crecimiento del talento dentro de las organizaciones.",
        "Nuestras capacitaciones abarcan áreas clave como liderazgo, trabajo en equipo, comunicación efectiva, gestión del tiempo, entre otras, adaptándose a las necesidades específicas de cada empresa.",
        "Ofrecemos diversas modalidades de formación, incluyendo cursos, talleres, charlas y seminarios web, asegurando flexibilidad y efectividad en el aprendizaje.",
        "Impulsa el desarrollo de tu equipo con programas diseñados para fortalecer su desempeño y productividad."
      ]
    },
    {
      id: "bienestar",
      title: "Programa de Bienestar Laboral",
      content: [
        "En ORVE ofrecemos un programa diseñado para mejorar el bienestar de los colaboradores dentro de las organizaciones. Abordamos aspectos clave como la salud mental, la gestión del estrés, el equilibrio entre la vida laboral y personal, y la promoción de hábitos saludables.",
        "Nuestras actividades son flexibles y se adaptan a la rutina de cada equipo, contribuyendo a un entorno laboral más saludable, motivador y productivo.",
        "Invierta en el bienestar de su equipo y potencia su desempeño con nuestro servicio especializado.",
        "Cuida a tus colaboradores que ellos cuidaran de tu compañía."
      ]
    },
    {
      id: "desarrollo",
      title: "Desarrollo Organizacional",
      content: [
        "En ORVE Capacitación, ayudamos a las organizaciones a optimizar su estructura, cultura y procesos internos para alcanzar su máximo potencial. A través de un diagnóstico organizacional integral, diseñamos e implementamos programas de cambio, fomentamos el desarrollo de equipos de alto rendimiento y aseguramos una alineación cultural.",
        "Nuestro enfoque estratégico potencia el rendimiento global, alineando los recursos con los objetivos de la empresa, mejorando la eficiencia operativa y fortaleciendo la cohesión organizacional.",
        "Transformamos desafíos en oportunidades para un crecimiento sostenible y una cultura empresarial más sólida.",
        "Impulsa la evolución de tu empresa con nuestro servicio de Desarrollo Organizacional."
      ]
    },
    {
      id: "hunting",
      title: "Hunting",
      content: [
        "En ORVE nos encargamos de encontrar a los profesionales ideales para cada puesto, optimizando el proceso de selección y garantizando incorporaciones que impulsen el crecimiento.",
        "Encuentra el talento adecuado con nuestro servicio de Hunting"
      ]
    },
    {
      id: "coaching",
      title: "Coaching",
      content: [
        "Ofrecemos servicios de coaching personalizado, tanto a nivel individual como grupal, para potenciar el desarrollo personal y profesional. A través de un acompañamiento estratégico, ayudamos a las personas a definir objetivos claros, mejorar sus competencias y superar obstáculos, permitiéndoles alcanzar su máximo potencial en el ámbito laboral y personal.",
        "Nuestro enfoque brinda herramientas efectivas para la toma de decisiones, el liderazgo y la gestión del cambio, promoviendo un crecimiento sostenible y alineado con los desafíos actuales.",
        "Transforma tu desarrollo con nuestro servicio de Coaching."
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeTab);

  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tabs Vertical */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === service.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            {activeService && (
              <div className="bg-gray-50 rounded-lg p-8 min-h-96">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{activeService.title}</h3>
                <div className="space-y-4">
                  {activeService.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12">
          <div className="bg-gray-300 rounded-lg overflow-hidden h-96">
            <img 
              src="/images/services.jpg" 
              alt="Servicios profesionales" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
