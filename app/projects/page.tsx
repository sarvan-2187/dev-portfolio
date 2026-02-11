"use client";
import ProjectsHeaderBar from '@/components/ProjectHeaderbar'
import { Button } from '@/components/ui/button';
import ProjectsSection from '@/sections/projects'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react';
import React from 'react'

const ProjectsPage = () => {
  return ( 
    <motion.div
      initial={{
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
      className="px-4 lg:px-58" suppressHydrationWarning={true}>
      <ProjectsHeaderBar />
      <ProjectsSection />
      <div className='my-8'>
        <Button variant={"outline"} asChild><a href='https://github.com/sarvan-2187' target='_blank'><Github size={5}/>View More on Github</a></Button>
      </div>
    </motion.div>
  )
}

export default ProjectsPage