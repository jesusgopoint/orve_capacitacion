import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Heart, Users, TrendingUp, Smile, Zap } from "lucide-react";
import { useLocation } from "wouter";

// Función para disparar evento personalizado a GTM
const triggerGTMEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName
    });
  }
};

export default function TeamBuildingLanding() {
  const [, setLocation] = useLocation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedActionLine, setSelectedActionLine] = useState(0);
  const [currentResultIndex, setCurrentResultIndex] = useState(0);
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

  const actionLines = [
    {
      title: "Salud Mental y Prevención",
      icon: Smile,
      color: "primary",
      focus: "Contención emocional y cumplimiento normativo.",
      activities: [
        "Charlas de salud mental y autocuidado",
        "Gestión de Riesgos Psicosociales (CEAL SM)",
        "Prevención y manejo del estrés",
        "Mindfulness y Yoga"
      ]
    },
    {
      title: "Calidad de Vida Laboral",
      icon: Heart,
      color: "blue",
      focus: "Intervenciones físicas y recreativas para el día a día.",
      activities: [
        "Pausas activas y Masajes express",
        "Charlas de hábitos saludables y nutrición",
        "Jornadas recreativas",
        "Celebración de fechas importantes"
      ]
    },
    {
      title: "Fortalecimiento y Cohesión de Equipos",
      icon: Users,
      color: "green",
      focus: "Actividades lúdicas para mejorar la cultura organizacional.",
      activities: [
        "Team Building (Indoor y Outdoor)",
        "Actividades lúdicas y Role playing",
        "Talleres de Resolución de Conflictos",
        "Trabajo en Equipo"
      ]
    },
    {
      title: "Desarrollo de Liderazgo y Talento",
      icon: TrendingUp,
      color: "orange",
      focus: "Acompañamiento estratégico para mandos medios y jefaturas.",
      activities: [
        "Coaching ejecutivo e individual",
        "Programas de Liderazgo",
        "Comunicación Efectiva",
        "Feedback guiado y desarrollo de potencial"
      ]
    }
  ];



  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const fullName = `${formData.nombre} ${formData.apellido}`;
      const subject = `Nuevo formulario desde Web | ${fullName}`;
      
      const emailContent = `<h2>Nuevo formulario - Programa Team Building</h2><p><strong>Nombre:</strong> ${formData.nombre}</p><p><strong>Apellido:</strong> ${formData.apellido}</p><p><strong>Email:</strong> ${formData.correo}</p><p><strong>Telefono:</strong> ${formData.telefono}</p><p><strong>Mensaje:</strong></p><p>${formData.mensaje.replace(/\n/g, '<br>')}</p>`;
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: ['seo@gopointagency.com', 'comercial@orvecapacitacion.cl'],
          from: 'comercial@orvecapacitacion.cl',
          subject: subject,
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.correo,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          replyTo: formData.correo,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_content: formData.utm_content,
          utm_term: formData.utm_term,
          campaign_id: formData.campaign_id
        })
      });
      
      if (response.ok) {
        // Push event to GTM dataLayer
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'form_submission',
            form_type: 'team_building',
            form_name: `${formData.nombre} ${formData.apellido}`
          });
        }
        
        setFormData({ nombre: "", apellido: "", correo: "", telefono: "", mensaje: "", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", utm_term: "", campaign_id: "" });
        setLocation('/gracias');
      } else {
        const error = await response.json();
        alert('Hubo un error al enviar el mensaje: ' + (error.message || 'Por favor, intenta de nuevo.'));
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Error al enviar el formulario. Por favor, intenta de nuevo.');
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const results = [
    { metric: "90%", description: "Empresas satisfechas" },
    { metric: "35%", description: "Reducción de estrés" },
    { metric: "+100", description: "Actividades ejecutadas" },
  ];

  // Carrusel de resultados
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResultIndex((prev) => (prev + 1) % results.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [results.length]);

  const faqItems = [
    {
      question: "¿Qué tipo de actividades incluye el programa para mejorar la experiencia del colaborador?",
      answer: "El programa contempla una combinación de actividades diseñadas para abordar el bienestar laboral de manera integral dentro del entorno de trabajo. Estas incluyen talleres participativos, charlas y espacios de reflexión orientados a mejorar la salud emocional y relacional de los equipos. Nos enfocamos en temáticas como autocuidado, hábitos saludables y el fortalecimiento de equipos, atacando directamente problemas como la desmotivación y los conflictos laborales para asegurar que cada instancia genere un impacto real en la rutina de la empresa."
    },
    {
      question: "¿Cómo ayuda el programa a combatir el Burnout y los riesgos psicosociales?",
      answer: "Nuestro enfoque preventivo permite identificar y gestionar variables críticas antes de que se conviertan en estrés laboral crónico o burnout. Al aplicar un enfoque psicosocial, el programa ayuda a monitorear los riesgos psicosociales y la sobrecarga laboral, promoviendo un equilibrio sano entre la vida y el trabajo. Esto no solo protege la salud mental, sino que impacta positivamente en la reducción del ausentismo laboral provocado por el agotamiento de los colaboradores."
    },
    {
      question: "¿Es efectivo para corregir un liderazgo deficiente y un bajo desempeño?",
      answer: "Sí. El programa ofrece herramientas para fortalecer la cultura organizacional, transformando situaciones de liderazgo deficiente en liderazgos que inspiran y sostienen. Al mejorar el soporte emocional y la comunicación interna, logramos revertir situaciones de bajo desempeño, alineando nuevamente a los colaboradores con los objetivos estratégicos y potenciando la productividad general del negocio."
    },
    {
      question: "¿Se puede adaptar el programa a la realidad y tamaño de mi empresa?",
      answer: "El programa se adapta completamente a la realidad de cada organización, ya sea una pyme o una gran empresa. Antes de la implementación, realizamos un levantamiento de necesidades para comprender la cultura y los desafíos específicos. A partir de este diagnóstico, ajustamos la metodología y la frecuencia de las actividades, asegurando que el programa sea pertinente para la salud ocupacional de su equipo y esté alineado con las prioridades de su negocio."
    },
    {
      question: "¿Qué modalidades ofrecen y cómo se mide el impacto en el bienestar organizacional?",
      answer: "Las actividades pueden desarrollarse de manera presencial, online o en formato híbrido, dependiendo de la ubicación de los colaboradores y los objetivos del programa. Para asegurar que la inversión genere valor, definimos indicadores que permiten medir el impacto en el bienestar organizacional y el clima organizacional. Esta información permite ajustar las acciones en el tiempo, garantizando resultados profundos y duraderos tanto para las personas como para los resultados del negocio."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  PROGRAMA TEAM BUILDING
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Programa diseñado para mejorar la calidad de vida laboral de los colaboradores y potenciar el desempeño organizacional a través de un enfoque psicosocial integral centrado en personas, cultura y resultados.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                >
                  Solicitar información
                </button>
              </div>

              {/* Right Column - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-300 rounded-lg h-48"></div>
                <div className="bg-gray-300 rounded-lg h-48"></div>
                <div className="bg-gray-300 rounded-lg h-48"></div>
                <div className="bg-gray-300 rounded-lg h-48"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container">
            <h3 className="text-center text-gray-600 text-sm font-semibold mb-8">EMPRESAS QUE CONFÍAN EN NOSOTROS</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-gray-300 h-12 w-32 rounded"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Por qué elegir nuestro programa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="bg-primary h-12 w-12 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Beneficio {i}</h3>
                  <p className="text-gray-700">Descripción del beneficio que ofrece nuestro programa de team building.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Resultados que hablan por sí solos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`text-center p-8 rounded-lg transition-all duration-500 ${
                    index === currentResultIndex
                      ? "bg-white shadow-lg scale-105"
                      : "bg-transparent"
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <p className="text-gray-700 text-lg">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Carousel Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios del programa
            </h2>
            <div className="space-y-4 mb-12">
              {[
                "Mejora del clima organizacional",
                "Reducción del estrés laboral",
                "Fortalecimiento de equipos",
                "Aumento de productividad",
                "Mejor comunicación interna",
                "Reducción del ausentismo"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-lg"
              >
                Cotiza tu programa aquí
              </button>
            </div>
          </div>
        </section>

        {/* Action Lines Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Líneas de acción
            </h2>
            <div className="space-y-4">
              {actionLines.map((line, index) => {
                const Icon = line.icon;
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setSelectedActionLine(selectedActionLine === index ? -1 : index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-900 text-left">
                          {line.title}
                        </h3>
                      </div>
                      {selectedActionLine === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {selectedActionLine === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 mb-4 font-medium">{line.focus}</p>
                        <ul className="space-y-2">
                          {line.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2 text-gray-700">
                              <span className="text-primary font-bold mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SENCE Banner */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-700 mb-2">Nuestros programas cuentan con</p>
              <h3 className="text-2xl font-bold text-gray-900">Certificación SENCE</h3>
              <p className="text-gray-600 mt-2">Garantizando calidad y cumplimiento normativo</p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-lg"
              >
                Cotiza tu programa aquí
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Empieza hoy a cuidar a quienes sostienen tu organización</h2>
            <p className="text-lg text-gray-700 mt-4">Invertir en bienestar laboral es invertir en personas, cultura y resultados.</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Solicita información del programa
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit} id="contact-form-team-building">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  value={formData.correo}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                name="mensaje"
                placeholder="¿Cómo podemos ayudarte?"
                value={formData.mensaje}
                onChange={handleFormChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>

              {/* Campos ocultos UTM - No controlados para que GTM pueda modificarlos */}
              <input type="hidden" name="utm_source" id="utm_source" defaultValue={formData.utm_source} />
              <input type="hidden" name="utm_medium" id="utm_medium" defaultValue={formData.utm_medium} />
              <input type="hidden" name="utm_campaign" id="utm_campaign" defaultValue={formData.utm_campaign} />
              <input type="hidden" name="utm_content" id="utm_content" defaultValue={formData.utm_content} />
              <input type="hidden" name="utm_term" id="utm_term" defaultValue={formData.utm_term} />
              <input type="hidden" name="campaign_id" id="campaign_id" defaultValue={formData.campaign_id} />

              <button                type="submit"
                className="w-full md:w-auto bg-primary text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        {/* Divider Section */}
        <div className="bg-gradient-to-r from-transparent via-gray-300 to-transparent h-1"></div>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 text-center">
              Preguntas frecuentes Programa Team Building
            </h2>
            <div className="space-y-4 mb-12">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {item.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-lg"
              >
                Solicitar información
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
