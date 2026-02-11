import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Heart, Brain, Users, Leaf } from "lucide-react";
import { useLocation } from "wouter";

// Función para disparar evento personalizado a GTM
const triggerGTMEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName
    });
  }
};

export default function BienestarLanding() {
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

  const wellnessAreas = [
    {
      title: "Salud Física",
      icon: Heart,
      color: "text-red-500",
      description: "Programas de actividad física, nutrición y prevención de enfermedades ocupacionales.",
      activities: [
        "Clases de yoga y pilates en la oficina",
        "Talleres de nutrición y hábitos saludables",
        "Programas de actividad física personalizada",
        "Evaluaciones de salud ocupacional"
      ]
    },
    {
      title: "Salud Mental",
      icon: Brain,
      color: "text-blue-500",
      description: "Gestión del estrés, mindfulness y apoyo psicológico para el bienestar emocional.",
      activities: [
        "Sesiones de meditación y mindfulness",
        "Talleres de manejo del estrés",
        "Charlas sobre salud mental en el trabajo",
        "Asesoramiento psicológico confidencial"
      ]
    },
    {
      title: "Equilibrio Vida-Trabajo",
      icon: Users,
      color: "text-purple-500",
      description: "Estrategias para conciliar responsabilidades laborales y personales.",
      activities: [
        "Talleres de gestión del tiempo",
        "Programas de flexibilidad laboral",
        "Actividades de integración familiar",
        "Espacios de descanso y relajación"
      ]
    },
    {
      title: "Bienestar Social",
      icon: Leaf,
      color: "text-green-500",
      description: "Actividades que fortalecen las relaciones y el sentido de comunidad.",
      activities: [
        "Actividades de integración grupal",
        "Programas de voluntariado corporativo",
        "Eventos de celebración y reconocimiento",
        "Espacios de convivencia y camaradería"
      ]
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es la duración del programa?",
      answer: "Nuestros programas son flexibles y se adaptan a las necesidades de cada organización. Pueden ser desde sesiones puntuales hasta programas anuales con actividades mensuales o semanales."
    },
    {
      question: "¿Cómo se personaliza el programa para mi empresa?",
      answer: "Realizamos un diagnóstico inicial para entender las necesidades específicas de tu equipo. Luego diseñamos un programa personalizado que aborda los pilares más relevantes para tu organización."
    },
    {
      question: "¿Cuál es el costo del programa?",
      answer: "El costo varía según el tamaño de la empresa, la duración del programa y las actividades seleccionadas. Te invitamos a contactarnos para una cotización personalizada."
    },
    {
      question: "¿Se puede utilizar presupuesto SENCE?",
      answer: "Sí, nuestros programas están certificados y pueden financiarse con excedentes SENCE. Podemos asesorarte en el proceso de solicitud."
    },
    {
      question: "¿Qué resultados puedo esperar?",
      answer: "Nuestros clientes reportan mejoras en el clima laboral, reducción del estrés, mayor engagement de los colaboradores, y disminución del ausentismo."
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
                  Programa de Calidad de Vida y Bienestar
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Invierte en el bienestar de tu equipo y potencia el desempeño de tu organización. Creamos entornos laborales más saludables, motivadores y productivos.
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
                  alt="Programa de Bienestar" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pilares del Programa */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Pilares del Programa
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wellnessAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`w-8 h-8 ${area.color} mr-4`} />
                      <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{area.description}</p>
                    <ul className="space-y-2">
                      {area.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios para tu Organización
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mejora del Clima Laboral",
                  description: "Crea un ambiente de trabajo más positivo, inclusivo y motivador donde los colaboradores se sienten valorados."
                },
                {
                  title: "Reducción de Ausentismo",
                  description: "Disminuye el ausentismo y la rotación de personal al mejorar la salud física y mental de tu equipo."
                },
                {
                  title: "Mayor Productividad",
                  description: "Colaboradores más saludables y felices son más productivos y comprometidos con los objetivos organizacionales."
                },
                {
                  title: "Fortalecimiento de Vínculos",
                  description: "Actividades que integran y fortalecen las relaciones entre colaboradores de diferentes áreas."
                },
                {
                  title: "Reducción de Estrés",
                  description: "Herramientas y espacios para gestionar el estrés y mejorar el bienestar emocional del equipo."
                },
                {
                  title: "Atracción de Talento",
                  description: "Empresas con programas de bienestar son más atractivas para atraer y retener talento de calidad."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
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
              Empieza hoy a transformar el bienestar de tu organización
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Cuida a tus colaboradores y ellos cuidarán de tu compañía. Invierte en bienestar y obtén resultados medibles.
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
              Preguntas Frecuentes sobre Bienestar Corporativo
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
                  placeholder="Cuéntanos sobre tu empresa y qué esperas del programa"
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
