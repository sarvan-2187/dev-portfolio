import React from 'react'
import Image from 'next/image'

import { MdVerified } from 'react-icons/md';

const techStack = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Data Structures & Algorithms",
  "Git",
  "MySQL",
  "Github",
  "Vercel",
  "C++",
  "JavaScript",
  "TypeScript",
  "C"
];


const HeroSection = () => {
  return (
    <div className='font-sans flex flex-col gap-4 min-h-screen mt-8'>
      <div className="flex flex-row items-center justify-between text-white p-2 rounded-lg gap-4">
        <div className='max-w-xl font-bold inline flex-col gap-2 text-black dark:text-white font-sans text-3xl md:text-7xl'>
          Hi I'm Sarvan! <MdVerified className='inline text-blue-500 mb-1' />
          <div className='font-semibold max-w-xs md:max-w-xl text-xs md:text-xl text-[#5b5b5b]'>
            I build reliable, modern web applications with a focus on clarity, performance, and real-world impact.
          </div>
        </div>
        <div className='border-2 border-black dark:border-slate-700 rounded-full'>
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/profile.png" alt="Profile Picture" width={150} height={150} className="hidden md:block rounded-full" draggable={false} />
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/profile.png" alt="Profile Picture" width={120} height={120} className="block md:hidden rounded-full" draggable={false} />
        </div>
      </div>
      {/* SKILLS */}
      <div className='p-2'>
        <p className='font-sans font-bold text-2xl mb-4 md:text-xl text-black dark:text-white'>Skills</p>
        <div className="flex flex-wrap gap-2 max-w-xl">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="
              rounded-md px-2 py-1 text-xs font-mono
              bg-black text-white 
              dark:bg-white dark:text-black
              border border-white/10 dark:border-white/5
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-md
            "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HeroSection