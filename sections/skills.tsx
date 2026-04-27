"use client";

import {
  FaReact,
  FaGitAlt,
  FaJs,
  FaPython
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiTypescript,
  SiC,
  SiPostman
} from "react-icons/si";
import { TbSql } from "react-icons/tb";


const techStack = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
  { name: "SQL", icon: <TbSql className="text-[#4479A1]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
];

export const SkillComponent = () => {
  return (
    <div >
      <p className='font-serif font-bold text-2xl mb-4 md:text-3xl text-black dark:text-white'>Skills</p>
      <div className="flex flex-wrap gap-3 ">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="
                            flex items-center gap-2
                            rounded-lg px-3 py-1.5 text-xs font-sans font-semibold
                            bg-white/50 dark:bg-black/20 backdrop-blur-sm
                            border border-black/10 dark:border-white/20
                        "
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-black dark:text-white/90">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};