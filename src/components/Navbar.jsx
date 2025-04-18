import { useState, useEffect } from "react";
import clsx from "clsx";
import { Navigation } from "./Navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("debut");

  const items = [
    { name: "Début", id: "debut", icon: "🏠" },
    { name: "A propos de moi", id: "a-propos-de-moi", icon: "👤" },
    { name: "Technologies", id: "technologies", icon: "💻" },
    { name: "Experience", id: "experience", icon: "📈" },
    { name: "Projets", id: "projets", icon: "🚀" },
    { name: "Contact", id: "contact", icon: "✉️" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Détecter si l'utilisateur a scrollé pour changer l'apparence de la navbar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Détection automatique de la section active basée sur le scroll
      const sections = items.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      })).filter(item => item.element);

      if (sections.length) {
        const currentPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.element.offsetTop <= currentPosition) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, items]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Version desktop */}
      <nav 
        className={clsx(
          "top-0 left-0 right-0 fixed flex justify-center py-4 z-50 transition-all duration-300",
          scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}
      >
        <div className={clsx(
          "w-full max-w-6xl px-4 flex items-center justify-center", // Changé "justify-between" en "justify-center"
          scrolled ? "py-2" : "py-4"
        )}>

          {/* Menu de navigation desktop */}
          <div className="hidden md:block shrink-0 overflow-hidden rounded-full">
            <Navigation
              as="nav"
              className="relative rounded-full border border-white/20 bg-black/20 backdrop-blur-sm p-2 shadow-lg"
            >
              <Navigation.List as="ul" className="relative flex items-center gap-2">
                {items.map((item, index) => (
                  <Navigation.Item key={index} as="li" active={activeSection === item.id} onActivated={() => handleScroll(item.id)}>
                    {({ setActive, isActive }) => (
                      <button
                        className={clsx(
                          "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                          isActive || activeSection === item.id
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        )}
                        onClick={() => {
                          setActive();
                          handleScroll(item.id);
                        }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {(isActive || activeSection === item.id) && (
                          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm" />
                        )}
                      </button>
                    )}
                  </Navigation.Item>
                ))}
              </Navigation.List>
            </Navigation>
          </div>

          {/* Bouton menu mobile */}
          <button 
            className="md:hidden absolute right-4 text-white p-2 rounded-lg hover:bg-white/10" // Ajouté "absolute right-4" pour le positionner à droite
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div className={clsx(
        "fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          {items.map((item, index) => (
            <button
              key={index}
              className={clsx(
                "w-full text-center py-4 px-8 rounded-xl transition-all duration-300",
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white font-medium"
                  : "text-white/70 hover:bg-white/5"
              )}
              onClick={() => handleScroll(item.id)}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg">{item.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Indicateur de progression */}
      <div 
        className={clsx(
          "fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
        style={{ 
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
      />
    </>
  );
};

export default Navbar;