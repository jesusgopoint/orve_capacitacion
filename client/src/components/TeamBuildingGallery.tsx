import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: "/images/ActividadTeamBuilding-1.webp", alt: "Paintball - Actividad de adrenalina y competencia" },
  { src: "/images/ActividadTeamBuilding-2.webp", alt: "Karting - Campeonato de velocidad y destreza" },
  { src: "/images/ActividadTeamBuilding-3.webp", alt: "Escape Room - Desafío de construcción y lógica" },
  { src: "/images/ActividadTeamBuilding-4.webp", alt: "Actividad de Adrenalina - Trabajo en equipo al aire libre" },
  { src: "/images/ActividadTeamBuilding-5.webp", alt: "Dinámicas de Integración - Juegos colaborativos en la naturaleza" },
  { src: "/images/ActividadTeamBuilding-7.webp", alt: "Ejercicio de Confianza - Actividad grupal de integración" },
  { src: "/images/ActividadTeamBuilding-9.webp", alt: "Desafío Colaborativo - Construcción conjunta de soluciones" },
  { src: "/images/ActividadTeamBuilding-11.webp", alt: "Lego Serious Play - Metodología creativa de resolución de problemas" },
];

export default function TeamBuildingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Ajustar cantidad de imágenes por vista según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleImages = galleryImages.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Galería de Actividades
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Conoce las experiencias de team building que hemos realizado con nuestros clientes
        </p>

        {/* Carrusel */}
        <div className="relative">
          {/* Imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleImages.map((image, index) => (
              <div
                key={currentIndex + index}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary text-white hover:bg-blue-400 transition-colors disabled:opacity-50"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(galleryImages.length / itemsPerView) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === Math.floor(currentIndex / itemsPerView)
                        ? "bg-primary"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Ir a grupo de imágenes ${index + 1}`}
                  />
                )
              )}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary text-white hover:bg-blue-400 transition-colors disabled:opacity-50"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Contador */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Mostrando {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, galleryImages.length)} de {galleryImages.length} imágenes
          </p>
        </div>
      </div>
    </section>
  );
}
