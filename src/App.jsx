import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"


const App = () => {
  return <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-sky-500 selection:text-sky-900"></div>
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-tr from-[#1e293b] via-[#6366f1] to-[#71717a]"></div>
    </div>

    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Experience />
    </div>
  </>
}

export default App