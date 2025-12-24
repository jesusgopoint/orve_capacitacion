import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Política de Privacidad
          </h1>

          {/* Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Responsable del tratamiento */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Responsable del tratamiento
              </h2>
              <p>
                El responsable del tratamiento de los datos personales es Orve Capacitación y desarrollo, con domicilio en Avenida Manquehue Norte 958, Las Condes, Zócalo -1, y correo electrónico de contacto orlando.palma@orvecapacitacion.cl
              </p>
            </section>

            {/* Datos personales que se recopilan */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Datos personales que se recopilan
              </h2>
              <p>
                A través de este sitio web y de los formularios asociados, se podrán recopilar datos personales básicos, tales como nombre, correo electrónico, teléfono y cualquier otra información que el usuario decida proporcionar voluntariamente al momento de completar un formulario.
              </p>
            </section>

            {/* Finalidad del tratamiento */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Finalidad del tratamiento
              </h2>
              <p className="mb-4">
                Los datos personales serán utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Atender consultas, solicitudes de información o contacto.</li>
                <li>Enviar información relacionada con productos, servicios o contenidos de la empresa.</li>
                <li>Gestionar relaciones comerciales o profesionales.</li>
              </ul>
              <p className="mt-4">
                En ningún caso los datos serán utilizados para fines distintos a los aquí indicados.
              </p>
            </section>

            {/* Base legal del tratamiento */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Base legal del tratamiento
              </h2>
              <p>
                El tratamiento de los datos personales se realiza sobre la base del consentimiento del usuario, otorgado al enviar voluntariamente sus datos a través de los formularios disponibles.
              </p>
            </section>

            {/* Conservación de los datos */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Conservación de los datos
              </h2>
              <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la cual fueron recopilados o hasta que el usuario solicite su eliminación.
              </p>
            </section>

            {/* Comunicación de datos a terceros */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Comunicación de datos a terceros
              </h2>
              <p>
                Los datos personales no serán cedidos a terceros, salvo cuando sea necesario para la prestación del servicio o exista una obligación legal.
              </p>
            </section>

            {/* Derechos del usuario */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Derechos del usuario
              </h2>
              <p>
                El usuario tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales, así como a retirar su consentimiento en cualquier momento. Para ejercer estos derechos, podrá contactar al responsable a través del correo electrónico orlando.palma@orvecapacitacion.cl
              </p>
            </section>

            {/* Modificaciones */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Modificaciones
              </h2>
              <p>
                El responsable se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a cambios legales o operativos. Las modificaciones serán publicadas en esta misma página.
              </p>
            </section>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
