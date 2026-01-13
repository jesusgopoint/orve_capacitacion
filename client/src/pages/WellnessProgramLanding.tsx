import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Heart, Users, TrendingUp, Smile, Zap } from "lucide-react";

export default function WellnessProgramLanding() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const faqItems = [
    {
      question: "¿Qué tipo de actividades incluye el programa para mejorar la experiencia del colaborador?",
      answer:
        "El programa contempla una combinación de actividades diseñadas para abordar el bienestar laboral de manera integral dentro del entorno de trabajo. Estas incluyen talleres participativos, charlas y espacios de reflexión orientados a mejorar la salud emocional y relacional de los equipos. Nos enfocamos en temáticas como autocuidado, hábitos saludables y el fortalecimiento de equipos, atacando directamente problemas como la desmotivación y los conflictos laborales para asegurar que cada instancia genere un impacto real en la rutina de la empresa.",
    },
    {
      question: "¿Cómo ayuda el programa a combatir el Burnout y los riesgos psicosociales?",
      answer: "Nuestro enfoque preventivo permite identificar y gestionar variables críticas antes de que se conviertan en estrés laboral crónico o burnout. Al aplicar un enfoque psicosocial, el programa ayuda a monitorear los riesgos psicosociales y la sobrecarga laboral, promoviendo un equilibrio sano entre la vida y el trabajo. Esto no solo protege la salud mental, sino que impacta positivamente en la reducción del ausentismo laboral provocado por el agotamiento de los colaboradores.",
    },
    {
      question: "¿Es efectivo para corregir un liderazgo deficiente y un bajo desempeño?",
      answer: "Sí. El programa ofrece herramientas para fortalecer la cultura organizacional, transformando situaciones de liderazgo deficiente en liderazgos que inspiran y sostienen. Al mejorar el soporte emocional y la comunicación interna, logramos revertir situaciones de bajo desempeño, alineando nuevamente a los colaboradores con los objetivos estratégicos y potenciando la productividad general del negocio.",
    },
    {
      question: "¿Se puede adaptar el programa a la realidad y tamaño de mi empresa?",
      answer: "El programa se adapta completamente a la realidad de cada organización, ya sea una pyme o una gran empresa. Antes de la implementación, realizamos un levantamiento de necesidades para comprender la cultura y los desafíos específicos. A partir de este diagnóstico, ajustamos la metodología y la frecuencia de las actividades, asegurando que el programa sea pertinente para la salud ocupacional de su equipo y esté alineado con las prioridades de su negocio.",
    },
    {
      question: "¿Qué modalidades ofrecen y cómo se mide el impacto en el bienestar organizacional?",
      answer: "Las actividades pueden desarrollarse de manera presencial, online o en formato híbrido, dependiendo de la ubicación de los colaboradores y los objetivos del programa. Para asegurar que la inversión genere valor, definimos indicadores que permiten medir el impacto en el bienestar organizacional y el clima organizacional. Esta información permite ajustar las acciones en el tiempo, garantizando resultados profundos y duraderos tanto para las personas como para los resultados del negocio.",
    },
  ];

  const benefitIcons = [
    { icon: Smile, title: "Mejora del clima organizacional", description: "Fortalece las relaciones internas y la motivación, creando un entorno colaborativo." },
    { icon: Heart, title: "Salud mental en el trabajo", description: "Disminuye el desgaste emocional, promoviendo el equilibrio y la salud ocupacional." },
    { icon: Users, title: "Mayor compromiso", description: "Incrementa el sentido de pertenencia, reduciendo la alta rotación y mejorando la retención de talento." },
    { icon: TrendingUp, title: "Desempeño laboral optimizado", description: "Colaboradores con mayor bienestar presentan mejor foco y eficiencia diaria." },
    { icon: Zap, title: "Marca Empleadora", description: "Posiciona a la organización como un lugar atractivo, mitigando riesgos psicosociales." },
  ];

  const results = [
    { metric: "90%", description: "de empresas clientes declaran estar satisfechas o muy satisfechas con los programas de capacitación ejecutados por ORVE" },
    { metric: "35%", description: "de reducción del estrés percibido, según encuestas post-capacitación en programas de bienestar, comunicación y liderazgo" },
    { metric: "+100", description: "actividades de capacitación ejecutadas en el año, entre cursos, talleres, relatorías y programas especiales" },
  ];

  // Carrusel de resultados
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResultIndex((prev) => (prev + 1) % results.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [results.length]);

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - Two Column Layout */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Programa de bienestar laboral y calidad de vida
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
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
                <div className="rounded-lg overflow-hidden h-40 animate-fade-in-scale delay-100">
                  <img
                    src="/images/programadebienestarlaboralparaempresas.webp"
                    alt="programadebienestarlaboralparaempresas"
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40 mt-4 animate-fade-in-scale delay-200">
                  <img
                    src="/images/programasdebienestarlaboralyclimaorganizacional.webp"
                    alt="programasdebienestarlaboralyclimaorganizacional"
                    className="w-full h-full object-cover animate-float"
                    style={{animationDelay: '0.5s'}}
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40 animate-fade-in-scale delay-300">
                  <img
                    src="/images/bienestarlaboralyproductividadempresarial.webp"
                    alt="bienestarlaboralyproductividadempresarial"
                    className="w-full h-full object-cover animate-float"
                    style={{animationDelay: '1s'}}
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40 mt-4 animate-fade-in-scale delay-400">
                  <img
                    src="/images/bienestarlaboralysaludemocionalenempresas.webp"
                    alt="bienestarlaboralysaludemocionalenempresas"
                    className="w-full h-full object-cover animate-float"
                    style={{animationDelay: '1.5s'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section - Carousel */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <h2 className="text-center text-gray-600 mb-8 text-2xl md:text-3xl font-bold">Empresas que confían en nosotros</h2>
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-16.666% - 6px));
                }
              }
              .carousel-track {
                animation: scroll-left 24s linear infinite;
              }
              .carousel-container:hover .carousel-track {
                animation-play-state: paused;
              }
            `}</style>
            <div className="carousel-container overflow-hidden bg-white rounded-lg" style={{ width: '100%' }}>
              <div className="carousel-track flex gap-6 py-6 px-4 whitespace-nowrap" style={{ width: 'fit-content' }}>
                {/* First set of logos */}
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/dimacofi-logo.webp" alt="Dimacofi" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/CYD-logo.webp" alt="C&D Ingeniería" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/eklipse-logo.webp" alt="Eklipse" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/nexus-logo.webp" alt="Nexus" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/iplacex-logo.webp" alt="IPLACEX" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/trekrental-logo.webp" alt="Trek Rental" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/bata-logo.webp" alt="Bata" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/imh-logo.webp" alt="IMH" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/celhex-logo.webp" alt="Celhex" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/humboldt-logo.webp" alt="Humboldt" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/ultranav-logo.webp" alt="Ultranav" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/siigroup-logo.webp" alt="SII Group" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/scotiabank-logo.webp" alt="Scotiabank" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/crispagold-logo.webp" alt="Crispa Gold" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/saesa-logo.webp" alt="Saesa" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/santafetransportes-logo.webp" alt="Santa Fe Transportes" className="max-w-full max-h-full object-contain" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/dimacofi-logo.webp" alt="Dimacofi" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/CYD-logo.webp" alt="C&D Ingeniería" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/eklipse-logo.webp" alt="Eklipse" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/nexus-logo.webp" alt="Nexus" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/iplacex-logo.webp" alt="IPLACEX" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/trekrental-logo.webp" alt="Trek Rental" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/bata-logo.webp" alt="Bata" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/imh-logo.webp" alt="IMH" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/celhex-logo.webp" alt="Celhex" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/humboldt-logo.webp" alt="Humboldt" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/ultranav-logo.webp" alt="Ultranav" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/siigroup-logo.webp" alt="SII Group" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/scotiabank-logo.webp" alt="Scotiabank" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/crispagold-logo.webp" alt="Crispa Gold" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/saesa-logo.webp" alt="Saesa" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ width: 'calc(16.666% - 5px)' }}>
                  <img src="/images/santafetransportes-logo.webp" alt="Santa Fe Transportes" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section - Two Column Layout */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Por qué elegir nuestra solución de Bienestar Organizacional
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El éxito de las compañías modernas no se logra con acciones aisladas. Nuestro programa se integra a la cultura organizacional y a la gestión de personas / RRHH, generando un impacto real en la experiencia del colaborador.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Diseñamos intervenciones alineadas a los objetivos estratégicos, promoviendo el trabajo decente con un enfoque práctico y sostenible en el tiempo.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-lg"
                >
                  Solicitar información del programa
                </button>
              </div>

              {/* Right Column - Image */}
              <img
                src="/images/bienestarlaboralysaludmentalenempresas.webp"
                alt="bienestarlaboralysaludmentalenempresas"
                className="rounded-lg h-96 object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section - Cards Design */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios del Bienestar Laboral para las personas y la empresa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitIcons.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h3>
                        {benefit.description && (
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results Section - Carousel */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Resultados que respaldan nuestros programas
            </h2>
            
            {/* Carousel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center border border-primary/20 min-h-64 flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {results[currentResultIndex].metric}
                </div>
                <p className="text-xl text-gray-700 mb-8">
                  {results[currentResultIndex].description}
                </p>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentResultIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentResultIndex
                        ? "bg-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>



            <div className="text-center mt-8">
              <button
                onClick={scrollToForm}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                Solicitar información del programa
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Preguntas frecuentes sobre el programa de Bienestar Laboral
            </h2>
            <div className="space-y-4">
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
            <form className="space-y-6">
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
      </main>

      <Footer />
    </div>
  );
}
