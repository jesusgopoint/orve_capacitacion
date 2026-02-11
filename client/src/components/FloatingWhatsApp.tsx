export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/56986528382?text=Estoy%20en%20su%20sitio%20web%20y%20quería%20pedirles%20más%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
      title="Contáctanos por WhatsApp"
    >
      <img
        src="/images/whatsapp-flotante.png"
        alt="WhatsApp"
        className="w-16 h-16 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
      />
    </a>
  );
}
