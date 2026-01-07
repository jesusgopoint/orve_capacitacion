import { Users, Zap, TrendingUp, Award, Trophy } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function OurStory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const features = [
    {
      title: "Enfoque personalizado",
      description: "Adaptabilidad a las necesidades del cliente.",
      icon: Users
    },
    {
      title: "Tecnologías avanzadas",
      description: "Capacitación inmersiva y efectiva.",
      icon: Zap
    },
    {
      title: "Seguimiento continuo",
      description: "Evaluación del impacto post-capacitación.",
      icon: TrendingUp
    },
    {
      title: "Formadores especializados",
      description: "Certificación de alta calidad.",
      icon: Award
    }
  ];

  // Check if mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile, features.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <>
      <section id="nosotros" className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Nuestra Historia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="bg-gray-300 rounded-lg overflow-hidden h-96 animate-fade-in-scale">
              <img 
                src="/images/history.jpg" 
                alt="Nuestra historia" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Orve Capacitación y Desarrollo nace con la misión de <span className="font-bold">mejorar las capacidades</span> y el talento de cada persona.
              </p>
              
              <p className="text-gray-700 text-lg mb-12 leading-relaxed">
                Con más de 15 años de experiencia en la industria del manejo de talento humano, nos hemos dedicado a <span className="font-bold">transformar la vida laboral</span> de aquellos que confían en nuestros programas, academias, charlas y más. Nuestra esencia está <span className="font-bold">centrada en las personas</span>, y es eso lo que nos impulsa cada día a seguir entregando lo mejor de nosotros.
              </p>

              {/* Certification Section */}
              <div className="mt-8">
                <p className="text-gray-700 text-lg font-semibold mb-4">Certificaciones:</p>
                <div className="flex items-center gap-6">
                  <img 
                    src="/images/certificadoOTEC.png" 
                    alt="certificadoOTEC" 
                    className="w-32 h-auto"
                  />
                  <div>
                    <p className="text-primary font-bold text-lg">Organismo Técnico Certificado y Acreditado</p>
                    <p className="text-gray-600 text-sm mt-2">Acreditación oficial que respalda la calidad de nuestros programas de capacitación.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Grid on Desktop, Carousel on Mobile/Tablet */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center animate-fade-in-up"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  {/* Icon Circle with Bounce Animation */}
                  <div className="bg-primary/10 rounded-full p-4 mb-4 hover:bg-primary/20 transition-colors duration-300 animate-icon-bounce">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Carousel Container */}
              <div 
                ref={carouselRef}
                className="overflow-hidden"
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="flex flex-col items-center text-center">
                          {/* Icon Circle with Bounce Animation */}
                          <div className="bg-primary/10 rounded-full p-4 mb-4 hover:bg-primary/20 transition-colors duration-300 animate-icon-bounce">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          
                          {/* Title */}
                          <p className="text-lg font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </p>
                          
                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>



              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
