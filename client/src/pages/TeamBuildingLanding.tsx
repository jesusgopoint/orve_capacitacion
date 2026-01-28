'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Users, Zap, Target, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

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
      title: "Sinergia y Cohesión de Equipos",
      icon: Users,
      color: "primary",
      focus: "Construcción de vínculos sólidos y confianza mutua.",
      activities: [
        "Dinámicas de integración vivencial",
        "Fortalecimiento de la identidad grupal",
        "Alineación de objetivos comunes",
        "Resolución colaborativa de retos"
      ]
    },
    {
      title: "Comunicación Asertiva y Efectiva",
      icon: Zap,
      color: "blue",
      focus: "Optimización del flujo de información y empatía relacional.",
      activities: [
        "Talleres de escucha activa",
        "Gestión de feedback constructivo",
        "Eliminación de barreras comunicativas",
        "Comunicación no verbal y empatía"
      ]
    },
    {
      title: "Liderazgo Inspirador y Gestión de Personas",
      icon: Target,
      color: "green",
      focus: "Transformación de mandos medios en facilitadores de éxito.",
      activities: [
        "Liderazgo estratégico y empático",
        "Gestión del soporte emocional",
        "Empoderamiento y delegación",
        "Promoción del trabajo decente"
      ]
    },
    {
      title: "Bienestar y Clima Organizacional",
      icon: Lightbulb,
      color: "orange",
      focus: "Creación de entornos saludables y motivadores.",
      activities: [
        "Intervenciones de bienestar laboral",
        "Prevención de riesgos psicosociales",
        "Celebración de hitos y logros",
        "Cultura de aprendizaje continuo"
      ]
    }
  ];

  const benefits = [
    { title: "Sinergia de equipo", description: "Fortalece los vínculos y la confianza para un trabajo colaborativo eficiente." },
    { title: "Comunicación asertiva", description: "Mejora el flujo de información y reduce drásticamente los conflictos laborales." },
    { title: "Mayor compromiso", description: "Incrementa el sentido de pertenencia y motiva el desarrollo de talento." },
    { title: "Liderazgo inspirador", description: "Potencia habilidades de gestión para guiar equipos hacia metas comunes." },
    { title: "Clima organizacional", description: "Crea entornos positivos que aumentan el bienestar y reducen la alta rotación." }
  ];

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          program: 'Team Building'
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
        setLocation('/gracias');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">PROGRAMA TEAM BUILDING</h1>
          <p className="text-xl max-w-2xl">Fortalece el clima organizacional y la sinergia mediante dinámicas vivenciales de alto impacto. Potenciamos el desempeño laboral a través de un enfoque psicosocial que transforma los conflictos laborales en oportunidades de colaboración y confianza.</p>
        </div>
      </section>

      {/* Grid de Imágenes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <img src="/teambuilding-1.png" alt="Team Building - High Five" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/teambuilding-3.png" alt="Team Building - Rope Activity" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/teambuilding-4.png" alt="Team Building - Strategy" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/teambuilding-5.jpg" alt="Team Building - Workshop" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Por qué elegir */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Por qué elegir nuestra solución de Team Building Estratégico</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              El éxito de los equipos de alto desempeño no surge de la casualidad, sino de la construcción de vínculos sólidos. Nuestro programa de Team Building se integra a la <strong>cultura organizacional</strong> y a la <strong>gestión de personas / RRHH</strong>, transformando grupos de trabajo en equipos cohesionados que potencian los resultados del negocio.
            </p>
            <p className="text-lg text-gray-700">
              Diseñamos dinámicas vivenciales de alto impacto alineadas a los objetivos estratégicos, promoviendo la <strong>confianza</strong>, la <strong>comunicación asertiva</strong> y el <strong>sentido de pertenencia</strong> con un enfoque práctico y sostenible en el tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Resultados Clave</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">85%</div>
              <p className="text-xl font-semibold">Aplicabilidad directa</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">75%</div>
              <p className="text-xl font-semibold">Mejora en liderazgo</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">+100%</div>
              <p className="text-xl font-semibold">Participación activa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Beneficios del Team Building para el éxito colectivo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-3 text-purple-600">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de Acción */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Líneas de Acción</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">Estrategias integrales diseñadas para fortalecer la sinergia y el bienestar organizacional</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {actionLines.map((line, index) => {
              const Icon = line.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6 border-l-4 border-purple-600">
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="text-xl font-bold">{line.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4"><strong>Enfoque:</strong> {line.focus}</p>
                    <ul className="space-y-2">
                      {line.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Empieza hoy a fortalecer el motor de tu organización</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Invertir en Team Building es invertir en sinergia, cultura y resultados colectivos.</p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-16" id="formulario">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Solicitar información del programa</h2>
          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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

            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleFormChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 mb-6"
            />

            {/* Campos ocultos UTM */}
            <input type="hidden" name="utm_source" id="utm_source" defaultValue={formData.utm_source} />
            <input type="hidden" name="utm_medium" id="utm_medium" defaultValue={formData.utm_medium} />
            <input type="hidden" name="utm_campaign" id="utm_campaign" defaultValue={formData.utm_campaign} />
            <input type="hidden" name="utm_content" id="utm_content" defaultValue={formData.utm_content} />
            <input type="hidden" name="utm_term" id="utm_term" defaultValue={formData.utm_term} />
            <input type="hidden" name="campaign_id" id="campaign_id" defaultValue={formData.campaign_id} />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes sobre Team Building Estratégico</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-left">{item.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
