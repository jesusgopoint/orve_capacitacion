import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Contacto</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xl font-semibold text-gray-900 mb-4">Ubicación</p>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Av. Manquehue Norte 958, Oficina 18, Zócalo -1 (por la escalera mecánica), Las Condes.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-900 mb-4">Llámanos</p>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-gray-700">+56 9 8698 3439</p>
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-900 mb-4">Escríbenos</p>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-gray-700">comercial@orvecapacitacion.cl</p>
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-900 mb-4">Síguenos</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/orve_capacitacionydesarrollo/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/people/ORVE-Capacitaci%C3%B3n-y-Desarrollo/61573139375844/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/orve-capacitaci%C3%B3n-y-desarrollo/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.199-1.61 2.92-1.61 2.135 0 3.753 1.395 3.753 4.402v5.49zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.757 1.939 1.71 0 .949-.752 1.707-1.982 1.707zm1.582 11.019H3.771V9.807h3.148v10.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=56986983439&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <img src="/images/whatsapp-icon.jpg" alt="WhatsApp" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
