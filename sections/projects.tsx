"use client";
import ProjectCardDetailed from '@/components/ProjectCardDetailed';
import { StaggerTitle } from '@/components/StaggerTitle';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { PiBarricadeFill } from "react-icons/pi";

const ProjectsSection = () => {
  return (
    <div
      className='font-sans my-4 p-2'>
            <StaggerTitle
                          text="My Works"
                          className="font-serif text-3xl md:text-4xl mb-12   font-bold text-center"
            />
            
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">
            <ProjectCardDetailed
              title="Tantrotsav"
          description="Tantrotsav is a MERN stack-based event management web application enabling secure registrations, real-time data handling, payment integration, and scalable fest operations for 3,500+ participants."
          image="https://ik.imagekit.io/sarvan/Portfolio/tantrotsasv.png?updatedAt=1776928496822"
              link="https://tantrotsav.amrita.edu"
            />
              <ProjectCardDetailed
                title="Savynce"
                description="Savynce is a Next.js App Router-based price tracking web application that integrates Supabase (Auth + PostgreSQL), Firecrawl for scraping, and Nodemailer for automated alerts."
                image="https://ik.imagekit.io/sarvan/Portfolio/savynce.png"
                link="https://savynce-price-drop-tracker.vercel.app/"
                github="https://github.com/sarvan-2187/savynce-price-drop-tracker"
               />
        
              <ProjectCardDetailed
                title="Stumps & Stories"
                description="Stumps & Stories is a fully automated cricket newsletter platform that fetches verified RSS feeds, summarizes the latest 72 hours of cricket news using AI, and delivers curated emails to subscribers on a scheduled basis."
                image="https://ik.imagekit.io/sarvan/Portfolio/og.png"
                link="https://stumps-and-stories.vercel.app/"
                github="https://github.com/sarvan-2187/stumps_and_stories"
              />

              {/* <ProjectCardDetailed
                title="Neuronix Club"
          description="Neuronix is a student-driven technology club dedicated to exploring innovation at the intersection of artificial intelligence, software engineering, and emerging tech. I am a coordinator of this club."
                image="https://ik.imagekit.io/sarvan/Portfolio/neuronix_banner.png"
                link="https://neuronix-avv.vercel.app/"
                github="https://github.com/sarvan-2187/neuronix-club-website"
              /> */}
          
              <ProjectCardDetailed
                title="Networq"
                description="Networq is a lightweight, browser based video conferencing app built for instant meetings. No sign-ups needed, just create a room, share the link, and start talking. Designed with a clean UI and focused on speed & clarity."
                image="https://ik.imagekit.io/sarvan/Portfolio/networq_og.png"
                link="https://project-networq.vercel.app/"
                github="https://github.com/sarvan-2187/networq"
              />
      </div>
      <div className='font-sans py-12'>
        <div className='max-w-3xl mx-auto text-center'>
          <Button className="h-12 w-fit text-lg" variant={"outline"} asChild><a href='https://github.com/sarvan-2187' target='_blank'><Github size={5} />View More on Github</a></Button>
                </div>
        </div>
      </div>
      
  )
}



export default ProjectsSection
