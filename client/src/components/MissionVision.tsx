export default function MissionVision() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="animate-slide-in-left" style={{animationDelay: '0s'}}>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <p className="text-2xl font-bold text-gray-900 mb-4">Misión</p>
              <p className="text-gray-700 leading-relaxed">
                Transformar el talento interno de nuestros partners a través de soluciones innovadoras de capacitación y desarrollo organizacional, impulsando su crecimiento sostenible y contribuyendo al éxito de sus negocios.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <p className="text-2xl font-bold text-gray-900 mb-4">Visión</p>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como líderes en soluciones de capacitación y desarrollo organizacional, generando impacto positivo en la cultura empresarial y contribuyendo al desarrollo profesional de miles de personas en la región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
