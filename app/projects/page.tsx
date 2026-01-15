import ProjectsHeaderBar from '@/components/ProjectHeaderbar'
import ProjectsSection from '@/sections/projects'
import React from 'react'

const ProjectsPage = () => {
  return ( 
    <div className="px-4 lg:px-58" suppressHydrationWarning={true}>
      <ProjectsHeaderBar />
      <ProjectsSection />
    </div>
  )
}

export default ProjectsPage