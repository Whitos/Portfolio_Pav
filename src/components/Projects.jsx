import { useState } from "react";
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import ProjectsModal from "./ProjectsModal";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projets" className="py-20 text-white">
      <h2 className="text-5xl font-bold text-center mb-4">Mes Projets</h2>
      <p className="text-center text-neutral-400 mb-12">
        Découvrez quelques-uns de mes projets récents
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-[#0f172a] rounded-xl overflow-hidden shadow-md border border-neutral-800 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Swiper intégré dans chaque carte */}
            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              effect="fade"
              loop={true}
              className="h-48 w-full object-cover"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`slide-${i}`}
                    className="h-48 w-full object-contain bg-black rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700 text-sm text-purple-400 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 border border-neutral-500 text-sm px-4 py-2 rounded hover:bg-neutral-700 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 bg-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  <HiArrowUpRight /> Démo
                </a>
              </div>
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
  );
};

export default Projects;
