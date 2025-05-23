"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiSymfonyBadge } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const techs = [
  { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400" },
  { icon: <TbBrandNextjs />, name: "Next.js", color: "text-cyan-400" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-cyan-400" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL", color: "text-blue-400" },
  { icon: <DiSymfonyBadge />, name: "Symfony", color: "text-white" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
];

const Technologies = () => {
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;

    gsap.to(track, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });
  }, []);

  return (
    <div id="technologies" className="border-b border-neutral-800 py-24 overflow-hidden">
      <h2 className="mb-16 text-center text-4xl text-white">Technologies</h2>

      <div className="overflow-hidden w-full relative">
        <div
          ref={trackRef}
          className="flex gap-8 w-max"
          style={{ whiteSpace: "nowrap" }}
        >
          {/* 👇 Duplication manuelle pour effet loop fluide */}
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className={`flex items-center justify-center rounded-2xl border-4 border-neutral-400 p-6 text-6xl min-w-[120px] ${tech.color}`}
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
