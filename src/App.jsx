import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Sparkles from "./components/Sparkles";

const App = () => {
  return (
    <>
      {/* Fond sombre avec Sparkles */}
      <div className="relative overflow-x-hidden h-full min-h-screen bg-neutral-900 text-neutral-300 antialiased selection:bg-sky-500 selection:text-sky-900">
        {/* Sparkles couvrent toute la page */}
        <Sparkles
          density={1200}
          className="absolute inset-0 h-full w-full pointer-events-none"
        />

        {/* Contenu principal */}
        <div className="relative container mx-auto px-8 z-10">
          <Navbar />
          <Hero />
          <AboutMe />
          <Technologies />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default App;
