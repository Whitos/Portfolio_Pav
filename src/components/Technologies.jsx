import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { DiSymfonyBadge } from "react-icons/di";

const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <TbBrandNextjs className="text-7xl text-cyan-400" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <SiMongodb className="text-7xl text-cyan-400" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <DiRedis className="text-7xl text-cyan-400" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <FaNodeJs className="text-7xl text-cyan-400" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <BiLogoPostgresql className="text-7xl text-blue-400" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <DiSymfonyBadge className="text-7xl text-black" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-400 p-4">
        <SiTailwindcss className="text-7xl text-cyan-400" />
      </div>
    </div>
  </div>
}

export default Technologies