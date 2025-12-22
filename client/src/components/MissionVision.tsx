export default function MissionVision() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Transformar el talento interno de nuestros partners a través de soluciones innovadoras de capacitación y desarrollo organizacional, impulsando su crecimiento sostenible y contribuyendo al éxito de sus negocios.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser reconocidos como líderes en soluciones de capacitación y desarrollo organizacional, generando impacto positivo en la cultura empresarial y contribuyendo al desarrollo profesional de miles de personas en la región.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
