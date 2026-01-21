import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios", hasSubmenu: true },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
    { label: "Orve Learning", href: "https://orvelearning.cl/", isExternal: true, isPrimary: true },
  ];

  const servicesSubmenu = [
    { label: "Programa de Bienestar Laboral", href: "/programa-de-bienestar" },
    { label: "Capacitación Laboral", href: "/capacitacion-laboral" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/images/logo-orve.png" 
            alt="ORVE Logo" 
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  item.label === "Contacto"
                    ? "text-white bg-primary border-2 border-primary px-4 py-2 rounded-lg hover:bg-blue-400 hover:border-blue-400"
                    : item.isPrimary
                    ? "text-white bg-primary px-4 py-2 rounded-lg hover:bg-blue-400"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
                {item.hasSubmenu && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </a>

              {/* Desktop Submenu */}
              {item.hasSubmenu && (
                <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {servicesSubmenu.map((subitem) => (
                    <a
                      key={subitem.label}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Experience Badge */}
        <div className="hidden md:flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
          <span className="text-lg font-bold text-primary">15+</span>
          <span className="text-sm font-medium text-gray-600">años de experiencia</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary/30 pl-4">
                        {servicesSubmenu.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className="block text-sm text-gray-600 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
