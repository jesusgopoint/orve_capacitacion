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
      question: "¿Qué tipo de actividades incluye el programa?",
      answer:
        "Pausas activas, masajes laborales, charlas de salud mental, nutrición, manejo del estrés y actividades en fechas relevantes.",
    },
    {
      question: "¿Se puede adaptar a mi empresa?",
      answer: "Sí, todas las acciones se diseñan a medida.",
    },
    {
      question: "¿Puedo contratar acciones puntuales o un programa anual?",
      answer: "Ambas opciones están disponibles.",
    },
  ];

  const benefitIcons = [
    { icon: Smile, title: "Mejora del clima laboral", description: "y la motivación." },
    { icon: Heart, title: "Reducción del estrés", description: "y desgaste emocional." },
    { icon: Users, title: "Mayor compromiso", description: "y sentido de pertenencia." },
    { icon: TrendingUp, title: "Equipos más productivos", description: "" },
    { icon: Zap, title: "Mejor percepción", description: "de la empresa como lugar para trabajar." },
  ];

  const results = [
    { metric: "+100%", description: "mejora en participación interna*" },
    { metric: "90%", description: "empresas satisfechas*" },
    { metric: "X%", description: "reducción del estrés percibido*" },
    { metric: "X", description: "actividades ejecutadas al año*" },
    { metric: "X%", description: "clientes con programas anuales*" },
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
                  Programa de Bienestar Laboral
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Un programa diseñado para mejorar la calidad de vida de los colaboradores y fortalecer el desempeño de las organizaciones a través del cuidado integral de las personas.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Solicitar información del programa
                </button>
              </div>

              {/* Right Column - Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-40 flex items-center justify-center text-white font-semibold">
                  Imagen 1
                </div>
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg h-40 flex items-center justify-center text-white font-semibold">
                  Imagen 2
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg h-40 flex items-center justify-center text-white font-semibold">
                  Imagen 3
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg h-40 flex items-center justify-center text-white font-semibold">
                  Imagen 4
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Empresas que han confiado en nuestros programas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Placeholder para logos */}
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Logo 1
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Logo 2
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Logo 3
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Logo 4
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
                  Por qué contratar nuestro Programa de Bienestar Laboral
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El bienestar de los equipos no se construye con acciones aisladas ni iniciativas simbólicas. Nuestro programa se integra a la rutina laboral y genera impacto concreto en personas y organización.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Abordamos salud mental, gestión del estrés, equilibrio vida–trabajo y hábitos saludables. Las actividades se adaptan a cada empresa y se realizan en sus dependencias.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Solicitar información del programa
                </button>
              </div>

              {/* Right Column - Image */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg h-96 flex items-center justify-center text-gray-500 font-semibold">
                Imagen de Bienestar
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Cards Design */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Beneficios que impactan en las personas y en la empresa
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

            <p className="text-sm text-gray-500 text-center mt-8">
              *Datos referenciales a validar con el cliente.
            </p>

            <div className="text-center mt-8">
              <button
                onClick={scrollToForm}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Quiero una propuesta para mi empresa
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Preguntas frecuentes sobre el programa
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-left">
                      {item.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - No Button */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empieza hoy a cuidar a quienes sostienen tu organización
            </h2>
            <p className="text-lg text-gray-700">
              Invertir en bienestar es invertir en personas, cultura y resultados.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 md:py-24">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Formulario de contacto
            </h2>
            <form
              action="https://formspree.io/f/xvgzpzwj"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleFormChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Cuéntanos sobre tu empresa y tus necesidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
