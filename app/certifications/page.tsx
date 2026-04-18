"use client";

import { StaggerTitle } from '@/components/StaggerTitle';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import { PiCertificate } from "react-icons/pi";
import CertificationCard from '@/components/CertificationCard';

const CERTIFICATIONS = [
  {
    title: "Gemini for University Students",
    image: "https://ik.imagekit.io/sarvan/Portfolio/gemini.webp",
    subtitle: "From Google • Expires Dec 2028",
    link: "https://edu.google.accredible.com/9ac77ba7-0ef6-4805-86f7-23a9f2e48bad#acc.O4IW109E",
  },
  {
    title: "Generative AI Fundamentals",
    image: "https://ik.imagekit.io/sarvan/Portfolio/databricks.jpg",
    subtitle: "From Databricks • Expires Jun 2027",
    link: "https://credentials.databricks.com/b8cc4763-1b59-4012-a045-239bd6ccc5d9#acc.Q7abUOmF",
  },
  {
    title: "Next.JS Fundamentals",
    image: "https://ik.imagekit.io/sarvan/Portfolio/vercel.png",
    subtitle: "From Vercel • Issued Jun 2025",
    link: "https://drive.google.com/file/d/1Nyr_oV2nxGu_0y-2W-cHb4d9AT2WCJL8/view",
  },
  {
    title: "Postman Student Expert",
    image: "https://ik.imagekit.io/sarvan/Portfolio/postman.jpg",
    subtitle: "From Postman • Issued May 2025",
    link: "https://drive.google.com/file/d/10sE7m43Fl7PxX9tB_UbLsVbcADWMUaEi/view",
  },
  {
    title: "SEO Expert",
    image: "https://ik.imagekit.io/sarvan/Portfolio/hubspot_academy_logo.jpg",
    subtitle: "From HubSpot Academy • Expires Jun 2026",
    link: "https://app-na2.hubspot.com/academy/achievements/5btx0b7q/en/1/nagarampalli-sarvan-kumar/seo",
  },
];

const CertificationsPage = () => {
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
      className="font-sans px-4 lg:px-58">

      <div className="font-sans my-4 p-2">
        <div className="mt-4">
          <StaggerTitle
            text="<My_Certifications/>"
            className="text-3xl md:text-4xl mb-4 font-bold text-center"
          />
          <TextGenerateEffect words="All of my certifications in one place" highlight="certifications" className="font-medium text-center mb-6 text-gray-600 tracking-tighter" />
        </div>
        
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className='bg-[#ffffff] dark:bg-black dark:outline dark:outline-1 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg'
          >
            <PiCertificate size={100} className="text-gray-600 dark:text-gray-400" />
            <div className='flex flex-col text-center min-w-0 tracking-wide'>
              <p className='font-sans font-bold text-black dark:text-white text-lg md:text-2xl'>More Certifications Coming Soon...</p>
              <p className='font-sans text-gray-700 dark:text-white/70 text-sm md:text-lg'>Stay tuned for updates!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationsPage;
