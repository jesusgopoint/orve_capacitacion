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
                  className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-lg"
                >
                  Solicitar información del programa
                </button>
              </div>

              {/* Right Column - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/images/programadebienestarlaboralparaempresas.webp"
                    alt="capacitacion-laboral-1"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.1s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/images/programasdebienestarlaboralyclimaorganizacional.webp"
                    alt="capacitacion-laboral-2"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/images/bienestarlaboralyproductividadempresarial.webp"
                    alt="capacitacion-laboral-3"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/images/bienestarlaboralysaludemocionalenempresas.webp"
                    alt="capacitacion-laboral-4"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Carousel Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Empresas que confían en nosotros
            </h2>
            <div className="relative overflow-hidden bg-white rounded-lg">
              <style>{`
                @keyframes scroll-logos {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-2560px);
                  }
                }
                .carousel-container {
                  animation: scroll-logos 14s linear infinite;
                }
                .carousel-container:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="flex gap-6 carousel-container w-fit">
                {[
                  "/images/dimacofi-logo.webp",
                  "/images/CYD-logo.webp",
                  "/images/eklipse-logo.webp",
                  "/images/nexus-logo.webp",
                  "/images/iplacex-logo.webp",
                  "/images/trekrental-logo.webp",
                  "/images/bata-logo.webp",
                  "/images/imh-logo.webp",
                  "/images/celhex-logo.webp",
                  "/images/humboldt-logo.webp",
                  "/images/ultranav-logo.webp",
                  "/images/siigroup-logo.webp",
                  "/images/scotiabank-logo.webp",
                  "/images/crispagold-logo.webp",
                  "/images/saesa-logo.webp",
                  "/images/santafetransportes-logo.webp",
                ].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-20 w-40 object-contain flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Por qué elegir nuestra Capacitación Laboral Estratégica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  La formación continua no es un gasto, sino la base de una <strong>cultura organizacional</strong> sólida. Nuestro programa se integra a la <strong>gestión de personas / RRHH</strong>, transformando la <strong>experiencia del colaborador</strong> en un camino de crecimiento constante que promueve el <strong>trabajo decente</strong> y la competitividad.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Diseñamos intervenciones alineadas a los objetivos estratégicos, promoviendo el aprendizaje con un enfoque práctico y sostenible en el tiempo.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/images/equipoenprogramadebienestar2.webp"
                  alt="capacitacion-laboral-equipo"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-purple-50 to-blue-50 border-t-4 border-purple-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {index === 0 && <Briefcase className="w-8 h-8 text-primary" />}
                    {index === 1 && <Target className="w-8 h-8 text-primary" />}
                    {index === 2 && <Users className="w-8 h-8 text-primary" />}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                    {result.metric}
                  </div>
                  <p className="text-xs text-gray-700 leading-snug max-w-xs mx-auto">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Beneficios de la Capacitación Laboral para las personas y la empresa</h2>
            <div className="overflow-hidden">
              <style>{`
                @keyframes benefits-carousel {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(calc(-50% - 12px)); }
                }
                .benefits-carousel-container {
                  display: flex;
                  gap: 24px;
                  animation: benefits-carousel 45s linear infinite;
                  width: fit-content;
                }
                .benefits-carousel-container:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="benefits-carousel-container">
                {[
                  { title: "Mejora del desempeño laboral", desc: "Colaboradores más preparados ejecutan sus tareas con mayor eficiencia y precisión." },
                  { title: "Clima organizacional positivo", desc: "El aprendizaje grupal fortalece los vínculos y la motivación de los equipos." },
                  { title: "Retención de talento", desc: "Invertir en desarrollo reduce la alta rotación al aumentar el compromiso y sentido de pertenencia." },
                  { title: "Salud mental en el trabajo", desc: "Reducimos la desmotivación y el desgaste emocional al brindar herramientas para nuevos desafíos." },
                  { title: "Marca empleadora", desc: "Una empresa que capacita es vista como un lugar de excelencia, mitigando riesgos psicosociales." },
                  { title: "Mejora del desempeño laboral", desc: "Colaboradores más preparados ejecutan sus tareas con mayor eficiencia y precisión." },
                  { title: "Clima organizacional positivo", desc: "El aprendizaje grupal fortalece los vínculos y la motivación de los equipos." }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-lg flex-shrink-0 w-96">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Action Lines Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Líneas de Acción
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cuatro pilares estratégicos diseñados para transformar el talento y potenciar el desempeño laboral
              </p>
            </div>

            {/* Action Lines Accordion */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Action Line Buttons */}
              <div className="space-y-3">
                {actionLines.map((line, index) => {
                  const isSelected = selectedActionLine === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedActionLine(index)}
                      className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-all ${
                        isSelected
                          ? "bg-primary text-white shadow-lg"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {line.title}
                    </button>
                  );
                })}
              </div>

              {/* Right Column - Content Display */}
              <div className="md:col-span-2">
                {actionLines.map((line, index) => {
                  if (selectedActionLine !== index) return null;
                  const IconComponent = line.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`bg-${line.color}-100 p-4 rounded-lg`}>
                          <IconComponent className={`w-8 h-8 text-${line.color === 'primary' ? 'primary' : line.color}-500`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{line.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        <strong>Enfoque:</strong> {line.focus}
                      </p>
                      <div className="space-y-3">
                        {line.activities.map((activity, idx) => (
                          <p key={idx} className="text-gray-700 flex items-start gap-3">
                            <span className="text-primary font-bold mt-0.5">✓</span>
                            {activity}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sence Certification Banner */}
            <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl p-8 mb-12 border-2 border-primary/20">
              <div className="flex items-center justify-center gap-4">
                <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">Franquicia Sence</p>
                  <p className="text-sm text-gray-600">Este programa de capacitación laboral es imputable a la Franquicia Sence, permitiendo a las empresas utilizar sus recursos de capacitación de forma estratégica.</p>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Empieza hoy a transformar el talento de tu organización</h2>
            <p className="text-lg text-gray-700 mt-4">Invertir en capacitación laboral es invertir en personas, cultura y resultados.</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Solicita información del programa
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit} id="contact-form-capacitacion">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleFormChange}
                  required
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
                  required
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

              <button
                type="submit"
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
              Preguntas frecuentes Capacitación Laboral Estratégica
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
