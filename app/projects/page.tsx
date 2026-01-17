import ProjectsHeaderBar from '@/components/ProjectHeaderbar'
import ProjectsSection from '@/sections/projects'
import { motion } from 'framer-motion'
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
    </motion.div>
  )
}

export default ProjectsPage