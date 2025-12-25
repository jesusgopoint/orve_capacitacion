import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Términos y Condiciones
        </h1>

        {/* Sección 1 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            1. Información general
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El presente documento regula el acceso y uso del sitio web{" "}
            <a href="https://www.orvecapacitacion.cl" className="text-primary hover:underline">
              https://www.orvecapacitacion.cl
            </a>
            , de titularidad de Orve Capacitación y Desarrollo, con domicilio en Avenida Manquehue Norte 958, Las Condes, Zócalo -1, Chile.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Al acceder y navegar por este sitio web, el usuario acepta plenamente estos Términos y Condiciones. Si no está de acuerdo con alguno de ellos, deberá abstenerse de utilizar el sitio.
          </p>
        </section>

        {/* Sección 2 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            2. Objeto del sitio web
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El sitio web tiene como finalidad proporcionar información sobre los servicios de capacitación, desarrollo profesional y contenidos asociados ofrecidos por Orve Capacitación y Desarrollo, así como permitir el contacto con potenciales clientes y usuarios interesados.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El titular se reserva el derecho de modificar, actualizar o eliminar contenidos del sitio en cualquier momento y sin previo aviso.
          </p>
        </section>

        {/* Sección 3 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            3. Condiciones de uso
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El usuario se compromete a utilizar el sitio web de manera responsable y conforme a la legislación vigente, la buena fe y el orden público.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            Queda expresamente prohibido:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Utilizar el sitio con fines ilícitos o no autorizados.</li>
            <li>Realizar acciones que afecten la seguridad, funcionamiento o disponibilidad del sitio.</li>
            <li>Introducir información falsa, ofensiva o que vulnere derechos de terceros.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            El incumplimiento de estas condiciones podrá dar lugar a la restricción o suspensión del acceso al sitio.
          </p>
        </section>

        {/* Sección 4 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            4. Propiedad intelectual
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Todos los contenidos presentes en el sitio web, incluyendo textos, imágenes, logotipos, marcas, diseños, material audiovisual y cualquier otro elemento, son propiedad de Orve Capacitación y Desarrollo o se utilizan con autorización de sus titulares.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Queda prohibida su reproducción, distribución, comunicación pública o modificación sin autorización previa y expresa.
          </p>
        </section>

        {/* Sección 5 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            5. Responsabilidad
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Orve Capacitación y Desarrollo no garantiza la disponibilidad permanente del sitio ni la inexistencia de errores técnicos o interrupciones.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            El titular no será responsable por:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Daños derivados del uso o imposibilidad de uso del sitio web.</li>
            <li>Decisiones tomadas por el usuario a partir de la información publicada.</li>
            <li>Contenidos o servicios ofrecidos por terceros enlazados desde este sitio.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            El uso del sitio web es responsabilidad exclusiva del usuario.
          </p>
        </section>

        {/* Sección 6 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            6. Enlaces a sitios de terceros
          </h2>
          <p className="text-gray-700 leading-relaxed">
            El sitio web puede contener enlaces a páginas externas. Orve Capacitación y Desarrollo no se responsabiliza por los contenidos, políticas o prácticas de dichos sitios, los cuales son gestionados por terceros.
          </p>
        </section>

        {/* Sección 7 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            7. Protección de datos personales
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            El tratamiento de los datos personales de los usuarios se rige por la Política de Privacidad, disponible en el siguiente enlace:{" "}
            <a href="/politica-de-privacidad" className="text-primary hover:underline">
              https://www.orvecapacitacion.cl/politica-de-privacidad
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dicha política forma parte integrante de estos Términos y Condiciones.
          </p>
        </section>

        {/* Sección 8 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            8. Modificaciones de los Términos y Condiciones
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Orve Capacitación y Desarrollo se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento para adaptarlos a cambios legales o operativos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Las modificaciones entrarán en vigencia desde su publicación en el sitio web.
          </p>
        </section>

        {/* Sección 9 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            9. Legislación aplicable y jurisdicción
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Estos Términos y Condiciones se rigen por las leyes de la República de Chile. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Santiago de Chile.
          </p>
        </section>

        {/* Sección 10 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            10. Contacto
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Para consultas relacionadas con estos Términos y Condiciones, el usuario puede contactar a Orve Capacitación y Desarrollo a través del correo electrónico:{" "}
            <a href="mailto:orlando.palma@orvecapacitacion.cl" className="text-primary hover:underline">
              orlando.palma@orvecapacitacion.cl
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
