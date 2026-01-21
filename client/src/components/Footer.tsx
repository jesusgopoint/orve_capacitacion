export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © ORVE 2025. Proyecto impulsado con ❤ por Soluciones para OTEC.
          </p>
          
          <div className="flex gap-6 items-center">
            <a href="/politica-de-privacidad" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos-del-servicio" className="text-sm text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a
              href="https://orvelearning.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-gray-400 text-gray-400 text-sm font-medium rounded hover:border-white hover:text-white transition-colors"
            >
              Orve Learning
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
