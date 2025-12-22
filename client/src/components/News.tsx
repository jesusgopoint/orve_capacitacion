export default function News() {
  const newsItems = [
    {
      title: "Importancia de la Capacitación Continua",
      description: "En un mundo empresarial en constante cambio, la capacitación continua es fundamental para mantener la competitividad y el desarrollo profesional de los equipos.",
      date: "Diciembre 2025",
      image: "/images/placeholder-news-1.jpg"
    },
    {
      title: "Formación Tribastas SINCE",
      description: "Presentamos nuestro nuevo programa de formación integral que combina teoría y práctica para desarrollar competencias clave en liderazgo y gestión.",
      date: "Diciembre 2025",
      image: "/images/placeholder-news-2.jpg"
    },
    {
      title: "Importancia del Bienestar en la Organización",
      description: "El bienestar de los colaboradores es esencial para crear una cultura organizacional positiva y aumentar la productividad empresarial.",
      date: "Diciembre 2025",
      image: "/images/placeholder-news-3.jpg"
    }
  ];

  return (
    <section id="noticias" className="bg-white py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Noticias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-300 h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.description}</p>
                
                <button className="text-primary font-semibold hover:text-purple-700 transition-colors">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
