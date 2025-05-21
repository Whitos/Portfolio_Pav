import { useState } from "react"
import { PROJECTS } from "../constants"
import { FaGithub } from "react-icons/fa"
import { HiArrowUpRight } from "react-icons/hi2"
import ProjectsModal from "./ProjectsModal"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div id="projets" className="py-20 text-white max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold mb-16 text-center uppercase tracking-widest">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="flex flex-col justify-between h-[540px] bg-gradient-to-br from-[#111] to-[#1c1c1c] p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-violet-400">
                {project.title}
              </h3>

              {/* Swiper preview */}
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                className="w-[280px] h-48 mx-auto rounded-lg overflow-hidden"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`project-${index}-slide-${i}`}
                      className="h-48 w-full object-contain bg-black rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Boutons */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-neutral-700 text-white px-4 py-2 rounded-full text-sm hover:bg-neutral-600 transition"
              >
                <FaGithub className="w-4 h-4" /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-4 py-2 rounded-full text-sm transition"
              >
                <HiArrowUpRight className="w-4 h-4" /> Démo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modale projet */}
      {selectedProject && (
        <ProjectsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects
