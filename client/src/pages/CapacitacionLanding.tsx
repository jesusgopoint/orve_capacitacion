import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Users, Lightbulb, Target, Award } from "lucide-react";
import { useLocation } from "wouter";

// Función para disparar evento personalizado a GTM
const triggerGTMEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName
    });
  }
};

export default function CapacitacionLanding() {
  const [, setLocation] = useLocation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    campaign_id: ""
  });

  // Capturar parámetros UTM de la URL y notificar a GTM
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      campaign_id: params.get('campaign_id') || ''
    }));
    
    // Disparar evento a GTM indicando que el formulario esta listo
    setTimeout(() => {
      triggerGTMEvent('form_ready');
      // Disparar evento personalizado para activar el radar de GTM
      window.dispatchEvent(new Event('gtmFormReady'));
    }, 100);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const trainingPrograms = [
    {
      title: "Liderazgo y Gestión",
      icon: Target,
      color: "text-blue-500",
      description: "Desarrolla habilidades de liderazgo estratégico y gestión efectiva de equipos.",
      topics: [
        "Liderazgo transformacional y adaptativo",
        "Gestión de equipos de alto rendimiento",
        "Toma de decisiones estratégica",
        "Coaching y mentoría de colaboradores"
      ]
    },
    {
      title: "Comunicación Efectiva",
      icon: Users,
      color: "text-purple-500",
      description: "Mejora la comunicación interna y externa de tu organización.",
      topics: [
        "Comunicación asertiva y empática",
        "Presentaciones impactantes",
        "Escucha activa y empatía",
        "Manejo de conflictos y negociación"
      ]
    },
    {
      title: "Desarrollo de Competencias",
      icon: Lightbulb,
      color: "text-green-500",
      description: "Potencia las habilidades técnicas y blandas de tu equipo.",
      topics: [
        "Gestión del tiempo y productividad",
        "Trabajo en equipo y colaboración",
        "Pensamiento crítico y resolución de problemas",
        "Innovación y creatividad"
      ]
    },
    {
      title: "Transformación Digital",
      icon: Award,
      color: "text-orange-500",
      description: "Prepara tu equipo para la era digital y el cambio organizacional.",
      topics: [
        "Adaptación al cambio digital",
        "Herramientas digitales y automatización",
        "Mentalidad ágil y flexible",
        "Inteligencia emocional en contextos digitales"
      ]
    }
  ];

  const trainingModalities = [
    {
      title: "Presencial",
      description: "Talleres y capacitaciones en tus instalaciones o en nuestros espacios, con interacción directa y experiencias vivenciales."
    },
    {
      title: "E-learning Síncrono",
      description: "Clases virtuales en vivo donde los participantes interactúan en tiempo real con el facilitador."
    },
    {
      title: "E-learning Asíncrono",
      description: "Contenidos digitales disponibles 24/7 que permiten a los colaboradores aprender a su propio ritmo."
    },
    {
      title: "Blended",
      description: "Combinación de modalidades presenciales y virtuales para máxima flexibilidad y efectividad."
    }
  ];

  const faqs = [
    {
      question: "¿Cómo se diseña un programa de capacitación personalizado?",
      answer: "Realizamos un diagnóstico de necesidades con tu equipo de recursos humanos y líderes. Identificamos brechas de competencias y diseñamos un programa que se alinea con tus objetivos estratégicos."
    },
    {
      question: "¿Cuál es la duración típica de un programa?",
      answer: "Nuestros programas varían desde sesiones puntuales de 4-8 horas hasta programas anuales con múltiples módulos. La duración se adapta a tus necesidades y disponibilidad."
    },
    {
      question: "¿Qué modalidades de capacitación ofrecen?",
      answer: "Ofrecemos capacitación presencial, e-learning síncrono, e-learning asíncrono y modalidad blended. Cada modalidad se adapta a los objetivos y contexto de tu organización."
    },
    {
      question: "¿Se proporciona material de apoyo?",
      answer: "Sí, proporcionamos manuales, guías de trabajo, videos educativos y recursos digitales que los participantes pueden consultar después de la capacitación."
    },
    {
      question: "¿Cómo se mide el impacto de la capacitación?",
      answer: "Utilizamos evaluaciones pre y post-capacitación, seguimiento de aplicación en el trabajo, y métricas de desempeño para medir el impacto real en tu organización."
    },
    {
      question: "¿Se puede utilizar presupuesto SENCE?",
      answer: "Sí, nuestros programas están certificados y pueden financiarse con excedentes SENCE. Te asesoramos en todo el proceso de solicitud."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        triggerGTMEvent('form_submitted');
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        setFormData({
          nombre: "",
          apellido: "",
          correo: "",
          telefono: "",
          mensaje: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
          utm_content: "",
          utm_term: "",
          campaign_id: ""
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-50 to-blue-50 py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Formación y Capacitación Laboral
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Potencia el desempeño y crecimiento de tu talento con programas de formación especializados en habilidades blandas y competencias clave.
                </p>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Solicitar información
                </button>
              </div>
              <div className="relative">
                <img 
                  src="/services.webp" 
                  alt="Capacitación Laboral" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programas de Capacitación */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Programas de Capacitación
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`w-8 h-8 ${program.color} mr-4`} />
                      <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{program.description}</p>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Modalidades de Capacitación
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingModalities.map((modality, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{modality.title}</h3>
                  <p className="text-gray-700">{modality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios para tu Organización
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Desarrollo de Talento",
                  description: "Invierte en el crecimiento profesional de tus colaboradores y fortalece su compromiso con la organización."
                },
                {
                  title: "Mejora de Desempeño",
                  description: "Colaboradores capacitados son más productivos, eficientes y alcanzan mejores resultados."
                },
                {
                  title: "Retención de Talento",
                  description: "Las oportunidades de capacitación aumentan la satisfacción y retención de los mejores colaboradores."
                },
                {
                  title: "Adaptación al Cambio",
                  description: "Prepara tu equipo para enfrentar nuevos desafíos y cambios en el mercado."
                },
                {
                  title: "Cultura de Aprendizaje",
                  description: "Fomenta una cultura organizacional donde el aprendizaje continuo es valorado."
                },
                {
                  title: "ROI Medible",
                  description: "Obtén resultados cuantificables en productividad, calidad y satisfacción del cliente."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Impulsa el desarrollo de tu equipo hoy
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Con programas de formación diseñados para fortalecer desempeño y productividad en tu organización.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Solicitar información del programa
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Preguntas Frecuentes sobre Capacitación
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contacto" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Contáctanos
            </h2>
            
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo electrónico"
                  value={formData.correo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu empresa y qué tipo de capacitación necesitas"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                >
                  Enviar solicitud
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
