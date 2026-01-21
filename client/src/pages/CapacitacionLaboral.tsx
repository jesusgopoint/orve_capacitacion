import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Briefcase, Users, Target, Zap } from "lucide-react";
import { useLocation } from "wouter";

// Función para disparar evento personalizado a GTM
const triggerGTMEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName
    });
  }
};

export default function CapacitacionLaboral() {
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
      title: "Desarrollo de Competencias Técnicas",
      icon: Briefcase,
      color: "primary",
      focus: "Actualización profesional y eficiencia operativa para potenciar el desempeño laboral.",
      activities: [
        "Programas de especialización por área",
        "Nivelación de habilidades críticas",
        "Gestión de la productividad",
        "Formación en estándares de calidad"
      ]
    },
    {
      title: "Fortalecimiento de Soft Skills",
      icon: Users,
      color: "blue",
      focus: "Enfoque psicosocial aplicado a la efectividad relacional y clima organizacional.",
      activities: [
        "Comunicación asertiva y efectiva",
        "Gestión del tiempo y priorización",
        "Resiliencia y agilidad emocional",
        "Trabajo colaborativo"
      ]
    },
    {
      title: "Formación de Liderazgo Estratégico",
      icon: Target,
      color: "green",
      focus: "Transformación de la gestión de personas / RRHH desde el mando medio.",
      activities: [
        "Liderazgo Empático y Motivador",
        "Gestión de la Experiencia del Colaborador",
        "Detección temprana de riesgos",
        "Toma de decisiones estratégica"
      ]
    },
    {
      title: "Salud y Prevención en el Trabajo",
      icon: Zap,
      color: "orange",
      focus: "Integración de la salud ocupacional en el aprendizaje continuo.",
      activities: [
        "Educación en Salud Mental",
        "Talleres de manejo de carga mental",
        "Prevención de Ausentismo Laboral",
        "Promoción de Marca Empleadora"
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
      
      const emailContent = `<h2>Nuevo formulario - Capacitación Laboral</h2><p><strong>Nombre:</strong> ${formData.nombre}</p><p><strong>Apellido:</strong> ${formData.apellido}</p><p><strong>Email:</strong> ${formData.correo}</p><p><strong>Telefono:</strong> ${formData.telefono}</p><p><strong>Mensaje:</strong></p><p>${formData.mensaje.replace(/\n/g, '<br>')}</p>`;
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'seo@gopointagency.com',
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
            form_type: 'capacitacion_laboral',
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
    { metric: "85%", description: "Aplicabilidad en trabajo diario" },
    { metric: "75%", description: "Mejora en liderazgo" },
    { metric: "+100%", description: "Participación" },
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
      question: "¿Qué temáticas aborda el programa de capacitación laboral?",
      answer: "Nuestro programa contempla una combinación de actividades diseñadas para abordar las necesidades técnicas y relacionales de manera integral. Incluimos talleres sobre liderazgo, comunicación efectiva y gestión del tiempo, atacando directamente problemas como el liderazgo deficiente y los conflictos laborales. Todas las instancias están pensadas para generar un impacto real en la rutina y los resultados del negocio."
    },
    {
      question: "¿Cómo ayuda la capacitación a reducir el Burnout y el estrés?",
      answer: "La falta de herramientas para realizar una tarea es una causa principal de sobrecarga laboral y estrés laboral crónico. Al capacitar a los colaboradores, aumentamos su confianza y autonomía, lo que previene el burnout y reduce el ausentismo laboral derivado de la frustración por un bajo desempeño. Aplicamos un enfoque psicosocial para que el aprendizaje sea un motor de bienestar."
    },
    {
      question: "¿Es posible adaptar los contenidos a la cultura organizacional de mi empresa?",
      answer: "Sí. Antes de la implementación, realizamos un levantamiento de necesidades para comprender los desafíos específicos de su gestión de personas / RRHH. Adaptamos la metodología y la duración de la capacitación laboral para que sea pertinente y esté alineada con sus prioridades estratégicas, asegurando que cada sesión fortalezca el bienestar organizacional."
    },
    {
      question: "¿En qué modalidades se imparten las capacitaciones?",
      answer: "Las actividades pueden desarrollarse de manera presencial, online o híbrida, facilitando la participación de todos los colaboradores independientemente de su ubicación. Esta flexibilidad permite mantener la calidad de la experiencia del colaborador sin interrumpir la operatividad, favoreciendo una salud ocupacional equilibrada entre formación y ejecución."
    },
    {
      question: "¿Cómo se mide el impacto de la capacitación en el desempeño organizacional?",
      answer: "Definimos indicadores claros que permiten evaluar el progreso de los equipos y la mejora en el clima organizacional. A través de evaluaciones de seguimiento, medimos cómo la nueva formación impacta en la productividad y en la reducción de riesgos psicosociales, garantizando que la inversión se traduzca en resultados duraderos para la organización."
    }
  ];

  const benefits = [
    "Mejora del desempeño laboral: Colaboradores más preparados ejecutan sus tareas con mayor eficiencia y precisión.",
    "Clima organizacional positivo: El aprendizaje grupal fortalece los vínculos y la motivación de los equipos.",
    "Retención de talento: Invertir en desarrollo reduce la alta rotación al aumentar el compromiso y sentido de pertenencia.",
    "Salud mental en el trabajo: Reducimos la desmotivación y el desgaste emocional al brindar herramientas para afrontar nuevos desafíos.",
    "Marca empleadora: Una empresa que capacita es vista como un lugar de excelencia, mitigando riesgos psicosociales."
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
                  Capacitación Laboral Estratégica para Empresas
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Programa diseñado para potenciar el desempeño laboral y la calidad de vida laboral mediante la adquisición de nuevas competencias y el fortalecimiento del talento interno con un enfoque psicosocial.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Solicitar información del programa
                </button>
              </div>

              {/* Right Column - Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Imagen 1</span>
                </div>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Imagen 2</span>
                </div>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Imagen 3</span>
                </div>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Imagen 4</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Por qué elegir nuestra Capacitación Laboral
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  La formación continua no es un gasto, sino la base de una <strong>cultura organizacional</strong> sólida. Nuestro programa se integra a la <strong>gestión de personas / RRHH</strong>, transformando la <strong>experiencia del colaborador</strong> en un camino de crecimiento constante que promueve el <strong>trabajo decente</strong> y la competitividad.
                </p>
              </div>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Imagen grande - Grupo celebrando</span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Resultados que hablan por sí solos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-lg text-center transition-all ${
                    index === currentResultIndex
                      ? "bg-purple-600 text-white scale-105"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-4">
                    {result.metric}
                  </div>
                  <p className="text-lg font-semibold">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Beneficios de la Capacitación para las personas y la empresa
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    •
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Lines Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Líneas de acción
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Impulsa el crecimiento de tu equipo a través de cuatro ejes estratégicos diseñados para transformar el conocimiento en resultados.
            </p>

            {/* Action Lines Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {actionLines.map((line, index) => {
                const Icon = line.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedActionLine(index)}
                    className={`p-6 rounded-lg text-left transition-all ${
                      selectedActionLine === index
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-lg">{line.title}</h3>
                  </button>
                );
              })}
            </div>

            {/* Selected Action Line Details */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {actionLines[selectedActionLine].title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Enfoque:</strong> {actionLines[selectedActionLine].focus}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {actionLines[selectedActionLine].activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-purple-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empieza hoy a transformar el talento de tu organización
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Invertir en capacitación laboral es asegurar el futuro de tu cultura y tus resultados.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Solicitar información del programa
            </button>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-white">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Contacta con nosotros
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              {/* Hidden UTM fields */}
              <input type="hidden" name="utm_source" id="utm_source" defaultValue={formData.utm_source} />
              <input type="hidden" name="utm_medium" id="utm_medium" defaultValue={formData.utm_medium} />
              <input type="hidden" name="utm_campaign" id="utm_campaign" defaultValue={formData.utm_campaign} />
              <input type="hidden" name="utm_content" id="utm_content" defaultValue={formData.utm_content} />
              <input type="hidden" name="utm_term" id="utm_term" defaultValue={formData.utm_term} />
              <input type="hidden" name="campaign_id" id="campaign_id" defaultValue={formData.campaign_id} />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Preguntas frecuentes sobre el programa de Capacitación Laboral
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 text-left">{item.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
