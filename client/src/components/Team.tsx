export default function Team() {
  const teamMembers = [
    {
      name: "Orlando Palma",
      role: "Socio Fundador",
      image: "/images/orlando-palma.jpg"
    },
    {
      name: "Tamara Bravo",
      role: "Especialista",
      image: "/images/tamara-bravo.jpg"
    }
  ];

  return (
    <section id="equipo" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Nuestro Equipo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-300 rounded-lg overflow-hidden mb-4 animate-fade-in-scale" style={{aspectRatio: '3/4', maxHeight: '320px'}}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-1">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
