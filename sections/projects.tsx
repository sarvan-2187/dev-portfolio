import ProjectCardDetailed from '@/components/ProjectCardDetailed';
import { StaggerTitle } from '@/components/StaggerTitle';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { PiBarricadeFill } from "react-icons/pi";

const ProjectsSection = () => {
  return (
      <div className='font-sans my-4 p-2'>
            <StaggerTitle
                          text="<My_Works/>"
                          className="text-3xl md:text-4xl mb-4 font-bold text-center"
            />
              <TextGenerateEffect words="Check out my projects" highlight='projects' className="font-medium text-center mb-6 text-gray-600 tracking-tighter" />
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
              <ProjectCardDetailed
                title="Stumps & Stories"
                description="Stumps & Stories is a fully automated cricket newsletter platform that fetches verified RSS feeds, summarizes the latest 72 hours of cricket news using AI, and delivers curated emails to subscribers on a scheduled basis."
                image="https://ik.imagekit.io/sarvan/Portfolio/og.png"
                link="https://stumps-and-stories.vercel.app/"
                github="https://github.com/sarvan-2187/stumps_and_stories"
              />
          
              <ProjectCardDetailed
                title="Neuronix Club"
          description="Neuronix is a student-driven technology club dedicated to exploring innovation at the intersection of artificial intelligence, software engineering, and emerging tech. I am a coordinator of this club."
                image="https://ik.imagekit.io/sarvan/Portfolio/neuronix_banner.png"
                link="https://neuronix-avv.vercel.app/"
                github="https://github.com/sarvan-2187/neuronix-club-website"
              />
          
              <ProjectCardDetailed
                title="Networq"
                description="Networq is a lightweight, browser based video conferencing app built for instant meetings. No sign-ups needed, just create a room, share the link, and start talking. Designed with a clean UI and focused on speed & clarity."
                image="https://ik.imagekit.io/sarvan/Portfolio/networq_og.png"
                link="#"
                github="https://github.com/sarvan-2187/networq"
              />
      </div>
      <div className='font-sans my-4'>
        <div className='bg-white/80 shadow-lg flex flex-col items-center justify-center p-4 rounded-lg dark:bg-[#1a1a1a]'>
          <PiBarricadeFill className="text-9xl mb-2" style={{
              fill: "url(#blueGradient)",
          }} />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
          </svg>
          <p className='text-center p-2 font-bold text-xl md:text-4xl mb-2'>More Projects Coming Soon!</p>
        </div>
      </div>
      </div>
  )
}



export default ProjectsSection