import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ThankYou() {
  const [, setLocation] = useLocation();

  // Scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-20">
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

        {/* Botón */}
        <Button
          onClick={() => setLocation('/')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          Volver al inicio
          <ArrowRight className="w-4 h-4" />
        </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
