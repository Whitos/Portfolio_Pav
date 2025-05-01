// ProjectModal.jsx (avec Swiper intégré dans la carte)
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

const ProjectsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" }
    );
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="bg-[#0f172a] text-white max-w-3xl w-full rounded-xl overflow-hidden shadow-lg p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>

        {/* Swiper intégré dans la modale */}
        <Swiper
          effect="cube"
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCube, Autoplay]}
          className="mb-6 rounded-lg overflow-hidden max-w-lg mx-auto"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`screenshot-${i}`}
                className="h-64 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-neutral-400 mb-4">
          {project.fullDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-neutral-700 text-sm text-purple-400 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 border border-neutral-500 text-sm px-4 py-2 rounded hover:bg-neutral-700 transition"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <HiArrowUpRight /> Démo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectsModal.propTypes = {
  project: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    code: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectsModal;
