import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("formacion");

  const services = [
    {
      id: "formacion",
      title: "Formación",
      content: [
        {
          text: "En ORVE Capacitación, diseñamos programas de formación especializados en el desarrollo de ",
          bold: "habilidades blandas",
          rest: " para potenciar el desempeño y crecimiento del talento dentro de las organizaciones."
        },
        {
          text: "Nuestras capacitaciones abarcan áreas clave como liderazgo, trabajo en equipo, comunicación efectiva, gestión del tiempo, entre otras, ",
          bold: "adaptándose a las necesidades",
          rest: " específicas de cada empresa."
        },
        {
          text: "Ofrecemos ",
          bold: "diversas modalidades",
          rest: " de formación, incluyendo cursos, talleres, charlas y seminarios web, asegurando flexibilidad y efectividad en el aprendizaje."
        },
        {
          text: "Impulsa el desarrollo de tu equipo con programas diseñados para ",
          bold: "fortalecer desempeño",
          rest: " y productividad."
        }
      ]
    },
    {
      id: "bienestar",
      title: "Programa de Calidad de Vida y Bienestar",
      content: [
        {
          text: "En ORVE ofrecemos un programa diseñado para ",
          bold: "mejorar el bienestar",
          rest: " de los colaboradores dentro de las organizaciones. Abordamos aspectos clave como la salud mental, la gestión del estrés, el equilibrio entre la vida laboral y personal, y la promoción de hábitos saludables."
        },
        {
          text: "Nuestras actividades son ",
          bold: "flexibles y adaptables",
          rest: " a la rutina de cada equipo, contribuyendo a un entorno laboral más saludable, motivador y productivo."
        },
        {
          text: "Invierta en el bienestar de su equipo y ",
          bold: "potencia su desempeño",
          rest: " con nuestro servicio especializado."
        },
        {
          text: "Cuida a tus colaboradores que ",
          bold: "ellos cuidarán",
          rest: " de tu compañía."
        }
      ]
    },
    {
      id: "desarrollo",
      title: "Desarrollo Organizacional",
      content: [
        {
          text: "En ORVE Capacitación, ayudamos a las organizaciones a ",
          bold: "optimizar estructura y cultura",
          rest: " para alcanzar su máximo potencial. A través de un diagnóstico organizacional integral, diseñamos e implementamos programas de cambio, fomentamos el desarrollo de equipos de alto rendimiento y aseguramos una alineación cultural."
        },
        {
          text: "Nuestro enfoque estratégico ",
          bold: "potencia el rendimiento global",
          rest: ", alineando los recursos con los objetivos de la empresa, mejorando la eficiencia operativa y fortaleciendo la cohesión organizacional."
        },
        {
          text: "Transformamos desafíos en ",
          bold: "oportunidades de crecimiento",
          rest: " sostenible y una cultura empresarial más sólida."
        },
        {
          text: "Impulsa la evolución de tu empresa con nuestro ",
          bold: "servicio especializado",
          rest: " de Desarrollo Organizacional."
        }
      ]
    },
    {
      id: "hunting",
      title: "Hunting",
      content: [
        {
          text: "En ORVE nos encargamos de ",
          bold: "encontrar profesionales ideales",
          rest: " para cada puesto, optimizando el proceso de selección y garantizando incorporaciones que impulsen el crecimiento."
        },
        {
          text: "Encuentra el ",
          bold: "talento adecuado",
          rest: " con nuestro servicio de Hunting"
        }
      ]
    },
    {
      id: "coaching",
      title: "Coaching",
      content: [
        {
          text: "Ofrecemos servicios de ",
          bold: "coaching personalizado",
          rest: ", tanto a nivel individual como grupal, para potenciar el desarrollo personal y profesional. A través de un acompañamiento estratégico, ayudamos a las personas a definir objetivos claros, mejorar sus competencias y superar obstáculos, permitiéndoles alcanzar su máximo potencial en el ámbito laboral y personal."
        },
        {
          text: "Nuestro enfoque brinda ",
          bold: "herramientas efectivas",
          rest: " para la toma de decisiones, el liderazgo y la gestión del cambio, promoviendo un crecimiento sostenible y alineado con los desafíos actuales."
        },
        {
          text: "Transforma tu desarrollo con nuestro ",
          bold: "servicio de Coaching",
          rest: "."
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeTab);

  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="container">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Servicios</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tabs Vertical */}
          <div className="md:col-span-1">
            <div className="flex flex-col md:flex-col gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`text-center md:text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
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
                  {activeService.content.map((item, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {item.text}
                      <span className="font-bold">{item.bold}</span>
                      {item.rest}
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
