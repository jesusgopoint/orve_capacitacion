export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=56986983439&text&type=phone_number&app_absent=0"
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
