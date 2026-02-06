import { useState, useEffect } from "react";
// Team Building Landing - Última actualización: Feb 2026
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
      title: "Misión Posible",
      icon: Users,
      color: "primary",
      focus: "Jornada de alineamiento y conexión para impulsar competencias transversales de manera integral y colaborativa.",
      activities: [
        "Dinámicas de activación: Juegos lúdicos para conectar a los participantes y generar apertura.",
        "Método DISC: Neuro-herramienta para identificar estilos de personalidad y mejorar vínculos.",
        "Desafíos Experienciales: Misiones simultáneas (Nitrovluómetro, Nación Secreta, Protocolo Fantasma) que demandan coordinación máxima.",
        "Misión Final: Construcción de un circuito de movimiento continuo para activar el 'Código del éxito'."
      ]
    },
    {
      title: "Adrenalina y Naturaleza",
      icon: TrendingUp,
      color: "blue",
      focus: "Experiencias de alto impacto que combinan estrategia, diversión y entorno natural en el Cajón del Maipo.",
      activities: [
        "Rafting: Descenso por aguas rápidas para poner a prueba la unión del equipo ante la corriente.",
        "Paintball: Dinámica de estrategia y táctica en un entorno seguro y lleno de energía.",
        "Canopy: Velocidad y altura recorriendo circuitos sobre el Río Maipo.",
        "Combo Aventura: Jornadas completas con asado campestre, piscina y stand de hidratación."
      ]
    },
    {
      title: "Desafíos de Construcción",
      icon: Smile,
      color: "green",
      focus: "Resolución de problemas complejos mediante la creatividad y el liderazgo situacional.",
      activities: [
        "Escape Room Corporativo: Resolver acertijos y enigmas bajo presión para completar una misión.",
        "Puente de Bambú: Reto de ingeniería grupal donde el éxito culmina al cruzar la estructura construida por todos.",
        "Barco Vikingo: Diseño y navegación de embarcaciones con recursos limitados."
      ]
    },
    {
      title: "Integración Lúdica",
      icon: Zap,
      color: "orange",
      focus: "Fortalecimiento de la comunicación efectiva y la identidad grupal a través del juego.",
      activities: [
        "Búsqueda del Tesoro (Geo Cooking): Superar desafíos para encontrar ingredientes y cocinar en equipo.",
        "El Hit del Momento: Ejercicio colaborativo de reescritura de canciones vinculadas a la cultura de la empresa.",
        "Campeonato de Karting: Fomento del compañerismo en un ambiente de velocidad y sana competencia.",
        "Lego Serious Play: Metodología que usa LEGO para pensar, comunicar y resolver problemas de forma creativa.",
        "Desafíos co-creativos: Dinámicas colaborativas donde un equipo construye soluciones conjuntamente a partir de la interacción y el trabajo en equipo."
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
      
      const emailContent = `<h2>Nuevo formulario - Programa de Bienestar</h2><p><strong>Nombre:</strong> ${formData.nombre}</p><p><strong>Apellido:</strong> ${formData.apellido}</p><p><strong>Email:</strong> ${formData.correo}</p><p><strong>Telefono:</strong> ${formData.telefono}</p><p><strong>Mensaje:</strong></p><p>${formData.mensaje.replace(/\n/g, '<br>')}</p>`;
      
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
            form_type: 'team_building_program',
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
    { metric: "85%", description: "Aplicabilidad directa" },
    { metric: "75%", description: "Mejora en liderazgo" },
    { metric: "+100%", description: "Participación activa" },
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
      question: "¿Cómo impacta un programa de Team Building en el desempeño laboral a largo plazo?",
      answer: "Nuestras intervenciones no son eventos aislados, sino herramientas diseñadas para generar un cambio real en la cultura organizacional. Al fortalecer la sinergia grupal y la confianza, los equipos optimizan sus procesos internos, lo que se traduce en un desempeño laboral más eficiente, una reducción de errores por falta de comunicación y una mayor agilidad en la consecución de objetivos estratégicos."
    },
    {
      question: "¿Es posible resolver conflictos laborales mediante estas dinámicas?",
      answer: "Absolutamente. Utilizamos un enfoque psicosocial para identificar las raíces de las tensiones y transformarlas en oportunidades de aprendizaje. A través de la comunicación asertiva y ejercicios de empatía, los colaboradores desarrollan habilidades para gestionar diferencias de opinión de forma constructiva, mejorando drásticamente el clima organizacional y la armonía en la oficina."
    },
    {
      question: "¿Cómo ayuda el Team Building a reducir la alta rotación de personal?",
      answer: "La alta rotación suele ser síntoma de una desconexión emocional con la empresa. Nuestras jornadas mejoran la experiencia del colaborador, logrando que se sienta valorado y parte fundamental de un propósito común. Al incrementar el sentido de pertenencia y el bienestar, los talentos clave eligen permanecer en la organización, fortaleciendo la retención y la estabilidad de los equipos."
    },
    {
      question: "¿Qué rol juegan los líderes en estas jornadas de capacitación?",
      answer: "El liderazgo es el pilar de la cohesión. En cada actividad, fomentamos un liderazgo inspirador que permite a los jefes y gerentes conectar de forma auténtica con sus equipos. El programa les entrega herramientas de gestión de personas para que puedan motivar al personal, detectar riesgos de desmotivación a tiempo y guiar a sus colaboradores bajo los principios del trabajo decente y el respeto mutuo."
    },
    {
      question: "¿Sus programas se adaptan a la realidad de cada bienestar organizacional?",
      answer: "Sí, diseñamos cada intervención alineada a la salud ocupacional y las necesidades específicas de su empresa. Ya sea que busquen potenciar el desarrollo de talento, mejorar la salud mental del equipo o simplemente celebrar un hito importante, nuestras dinámicas se ajustan para promover un bienestar organizacional integral que sea sostenible y coherente con sus valores corporativos."
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
                  Team Building Estratégico para Empresas
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Programa diseñado para fortalecer el clima organizacional y la sinergia mediante dinámicas vivenciales de alto impacto. Potenciamos el desempeño laboral a través de un enfoque psicosocial que transforma los conflictos laborales en oportunidades de colaboración y confianza.
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
                    src="/teambuilding-hero-1.webp"
                    alt="Equipo corporativo celebrando con brazos levantados en campo verde"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.1s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/teambuilding-hero-2.webp"
                    alt="Colaboradores realizando dinámica de integración con sogas en oficina"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/teambuilding-hero-3.webp"
                    alt="Equipo de trabajo colaborando con bloques de colores en sala de reuniones"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/teambuilding-hero-4.webp"
                    alt="Actividad de team building outdoor con equipo en campo verde"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Lines Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Distintas actividades que puedes elegir
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Programas experienciales diseñados para fortalecer la confianza, la comunicación y el trabajo en equipo.
              </p>
            </div>

            {/* Action Lines Accordion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
              <div className="md:col-span-1">
                {actionLines.map((line, index) => {
                  if (selectedActionLine !== index) return null;
                  const IconComponent = line.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-lg flex flex-col h-96">
                      <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                        <div className={`bg-${line.color}-100 p-4 rounded-lg`}>
                          <IconComponent className={`w-8 h-8 text-${line.color === 'primary' ? 'primary' : line.color}-500`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{line.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 flex-shrink-0">
                        <strong>Enfoque:</strong> {line.focus}
                      </p>
                      <div className="space-y-3 overflow-y-auto pr-4 flex-1">
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
                  <p className="text-sm text-gray-600">Este programa de bienestar es imputable a la Franquicia Sence, permitiendo a las empresas utilizar sus recursos de capacitación de forma estratégica.</p>
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



        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Por qué elegir nuestra solución de Team Building Estratégico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El éxito de los equipos de alto desempeño no surge de la casualidad, sino de la construcción de vínculos sólidos. Nuestro programa de <strong>Team Building se integra a la cultura organizacional y a la gestión de personas / RRHH</strong>, transformando grupos de trabajo en equipos cohesionados que potencian los resultados del negocio.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Diseñamos dinámicas vivenciales de alto impacto alineadas a los objetivos estratégicos, promoviendo la confianza, la comunicación asertiva y el sentido de pertenencia con un enfoque práctico y sostenible en el tiempo.
                </p>
                <div className="mt-8">
                  <button
                    onClick={scrollToForm}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                  >
                    Solicitar información del programa
                  </button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/team-building-activdad-5.webp"
                  alt="Equipo en taller de Team Building Estratégico"
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
                    {index === 0 && <Heart className="w-8 h-8 text-primary" />}
                    {index === 1 && <TrendingUp className="w-8 h-8 text-primary" />}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Habilidades a trabajar con el team building</h2>
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
                  { title: "Sinergia de equipo", desc: "Fortalece los vínculos y la confianza para un trabajo colaborativo eficiente." },
                  { title: "Comunicación efectiva", desc: "Mejora el flujo de información y reduce drásticamente los conflictos laborales." },
                  { title: "Mayor compromiso", desc: "Incrementa el sentido de pertenencia y motiva el desarrollo de talento." },
                  { title: "Liderazgo", desc: "Potencia habilidades de gestión para guiar equipos hacia metas comunes." },
                  { title: "Clima organizacional", desc: "Crea entornos positivos que aumentan el bienestar y reducen la alta rotación." },
                  { title: "Sinergia de equipo", desc: "Fortalece los vínculos y la confianza para un trabajo colaborativo eficiente." },
                  { title: "Comunicación efectiva", desc: "Mejora el flujo de información y reduce drásticamente los conflictos laborales." }
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Empieza hoy a fortalecer el motor de tu organización</h2>
            <p className="text-lg text-gray-700 mt-4">Invertir en Team Building es invertir en sinergia, cultura y resultados colectivos.</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Solicita información del programa
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit} id="contact-form-wellness">
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
              Preguntas Frecuentes sobre Team Building Estratégico
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
