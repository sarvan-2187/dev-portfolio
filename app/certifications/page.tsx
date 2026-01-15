
import CertificationsHeaderBar from '@/components/CertificationsHeaderbar'
import CertificationsSection from '@/sections/certifcations'
import React from 'react'

const ProjectsPage = () => {
  return ( 
    <div className="px-4 lg:px-58" suppressHydrationWarning={true}>
      <CertificationsHeaderBar />
      <CertificationsSection />
    </div>
  )
}

export default ProjectsPage