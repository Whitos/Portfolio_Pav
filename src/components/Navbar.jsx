import clsx from "clsx";
import { Navigation } from "./Navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const items = [
    { name: "Début", id: "debut" },
    { name: "A propos de moi", id: "a-propos-de-moi" },
    { name: "Technologies", id: "technologies" },
    { name: "Experience", id: "experience" },
    { name: "Projets", id: "projets" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="top-0  translate-x-1/4 flex fixed justify-center py-6 z-50">

      <div className="shrink-0 overflow-hidden rounded-full">
        <Navigation
          as="nav"
          className="relative rounded-full border border-white/10 bg-white/5 p-2"
        >
          <Navigation.List as="ul" className="relative flex items-center gap-6">
            {items.map((item, index) => (
              <Navigation.Item key={index} as="li" onActivated={() => handleScroll(item.id)}>
                {({ setActive, isActive }) => (
                  <button
                    className={clsx(
                      isActive
                        ? "text-white/75 text-shadow-sm"
                        : "text-white/60 hover:text-white/75",
                      "inline-block px-4 py-1.5 text-sm font-light transition-[text-shadow,color] duration-300"
                    )}
                    onClick={() => {
                      setActive();
                      handleScroll(item.id);
                    }}
                  >
                    {item.name}
                  </button>
                )}
              </Navigation.Item>
            ))}
          </Navigation.List>
        </Navigation>
      </div>

      <div className="text-white mb-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
