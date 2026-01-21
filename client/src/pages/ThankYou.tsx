import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYou() {
  const [, setLocation] = useLocation();

  // Scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        {/* Icono de éxito */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <CheckCircle className="w-20 h-20 text-purple-600 relative z-10" strokeWidth={1.5} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          ¡Gracias!
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-slate-600 mb-2">
          Tu mensaje ha sido recibido exitosamente
        </p>

        {/* Descripción */}
        <p className="text-slate-500 mb-10 leading-relaxed">
          Nos pondremos en contacto contigo a la brevedad posible. Revisa tu correo electrónico para actualizaciones.
        </p>

        {/* Botones */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => setLocation('/')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            Volver al inicio
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            onClick={() => setLocation('/servicios')}
            variant="outline"
            className="w-full border-2 border-slate-300 hover:border-purple-600 hover:bg-purple-50 text-slate-700 font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Explorar servicios
          </Button>
        </div>

        {/* Información adicional */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">
            ¿Tienes preguntas? Contáctanos directamente
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:comercial@orvecapacitacion.cl"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              comercial@orvecapacitacion.cl
            </a>
            <a
              href="tel:+56912345678"
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              +56 9 1234 5678
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
