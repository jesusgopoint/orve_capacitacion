import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Heart, Users, TrendingUp, Smile, Zap } from "lucide-react";

export default function WellnessProgramLanding() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedActionLine, setSelectedActionLine] = useState(0);
  const [currentResultIndex, setCurrentResultIndex] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Programa de bienestar laboral y calidad de vida
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Programa diseñado para mejorar la calidad de vida laboral de los colaboradores y potenciar el desempeño organizacional a través de un enfoque psicosocial integral centrado en personas, cultura y resultados.
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
                    src="/programadebienestarlaboralparaempresas.webp"
                    alt="programadebienestarlaboralparaempresas"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.1s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/programasdebienestarlaboralyclimaorganizacional.webp"
                    alt="programasdebienestarlaboralyclimaorganizacional"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/bienestarlaboralyproductividadempresarial.webp"
                    alt="bienestarlaboralyproductividadempresarial"
                    className="w-full h-full object-cover animate-fade-in-scale"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-48 md:h-56">
                  <img
                    src="/bienestarlaboralysaludemocionalenempresas.webp"
                    alt="bienestarlaboralysaludemocionalenempresas"
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
                  "/dimacofi-logo.webp",
                  "/CYD-logo.webp",
                  "/eklipse-logo.webp",
                  "/nexus-logo.webp",
                  "/iplacex-logo.webp",
                  "/trekrental-logo.webp",
                  "/bata-logo.webp",
                  "/imh-logo.webp",
                  "/celhex-logo.webp",
                  "/humboldt-logo.webp",
                  "/ultranav-logo.webp",
                  "/siigroup-logo.webp",
                  "/scotiabank-logo.webp",
                  "/crispagold-logo.webp",
                  "/saesa-logo.webp",
                  "/santafetransportes-logo.webp",
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
              Por qué elegir nuestra solución de Bienestar Organizacional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El éxito de las compañías modernas no se logra con acciones aisladas. Nuestro programa se integra a la cultura organizacional y a la gestión de personas / RRHH, generando un impacto real en la experiencia del colaborador.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Diseñamos intervenciones alineadas a los objetivos estratégicos, promoviendo el trabajo decente con un enfoque práctico y sostenible en el tiempo.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/bienestarlaboralysaludmentalenempresas.webp"
                  alt="bienestarlaboralysaludmentalenempresas"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-blue-100 to-blue-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {index === 0 && <Heart className="w-8 h-8 text-primary" />}
                    {index === 1 && <TrendingUp className="w-8 h-8 text-primary" />}
                    {index === 2 && <Users className="w-8 h-8 text-primary" />}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                    {result.metric}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-snug max-w-xs mx-auto">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios del Bienestar Laboral para las personas y la empresa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "😊", title: "Mejora del clima organizacional", description: "Fortalece las relaciones internas y la motivación, creando un entorno colaborativo." },
                { icon: "💜", title: "Salud mental en el trabajo", description: "Disminuye el desgaste emocional, promoviendo el equilibrio y la salud ocupacional." },
                { icon: "👥", title: "Mayor compromiso", description: "Incrementa el sentido de pertenencia, reduciendo la alta rotación y mejorando la retención de talento." },
                { icon: "📈", title: "Desempeño laboral optimizado", description: "Colaboradores con mayor bienestar presentan mejor foco y eficiencia diaria." },
                { icon: "⚡", title: "Marca Empleadora", description: "Posiciona a la organización como un lugar atractivo, mitigando riesgos psicosociales." },
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
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
                Cuatro pilares estratégicos diseñados para transformar el bienestar organizacional
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

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empieza hoy a cuidar a quienes sostienen tu organización
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Invertir en bienestar laboral es invertir en personas, cultura y resultados.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Solicitar información del programa
            </button>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Solicita información del programa
            </h2>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
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
              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
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
              Preguntas frecuentes sobre el programa de Bienestar Laboral
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
