export default function WellnessPillars() {
  const pillars = [
    {
      title: "Bienestar Físico",
      description: "Programas enfocados en la salud y actividad física de los colaboradores.",
      features: ["Actividades deportivas", "Asesoramiento nutricional", "Prevención de lesiones"]
    },
    {
      title: "Bienestar Mental",
      description: "Iniciativas para cuidar la salud emocional y mental del equipo.",
      features: ["Talleres de mindfulness", "Apoyo psicológico", "Gestión del estrés"]
    },
    {
      title: "Bienestar Social",
      description: "Actividades que fortalecen las relaciones y la comunidad laboral.",
      features: ["Eventos de integración", "Voluntariado corporativo", "Espacios de convivencia"]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Pilares del Programa Bienestar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 mb-6">{pillar.description}</p>
              
              <ul className="space-y-2 mb-8">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Conocer más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
