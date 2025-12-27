import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function WellnessProgramLanding() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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

  const benefits = [
    "Mejora del clima laboral y la motivación.",
    "Reducción del estrés y desgaste emocional.",
    "Mayor compromiso y sentido de pertenencia.",
    "Equipos más productivos.",
    "Mejor percepción de la empresa como lugar para trabajar.",
  ];

  const results = [
    { metric: "+100%", description: "mejora en participación interna*" },
    { metric: "90%", description: "empresas satisfechas*" },
    { metric: "X%", description: "reducción del estrés percibido*" },
    { metric: "X", description: "actividades ejecutadas al año*" },
    { metric: "X%", description: "clientes con programas anuales*" },
  ];

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
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white">
          <div className="container max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Programa de Bienestar Laboral
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Un programa diseñado para mejorar la calidad de vida de los colaboradores y fortalecer el desempeño de las organizaciones a través del cuidado integral de las personas.
              </p>
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

        {/* Why Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
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
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Beneficios que impactan en las personas y en la empresa
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Resultados que respaldan nuestros programas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg text-center border border-primary/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <p className="text-gray-700">{result.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mb-8">
              *Datos referenciales a validar con el cliente.
            </p>
            <div className="text-center">
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empieza hoy a cuidar a quienes sostienen tu organización
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Invertir en bienestar es invertir en personas, cultura y resultados.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Solicitar información
            </button>
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
