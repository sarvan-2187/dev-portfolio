"use client";

import { StaggerTitle } from '@/components/StaggerTitle';
import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { PiCertificate } from "react-icons/pi";


const CertificationsSection = () => {
  return (
      <div className="font-sans my-4 p-2">
                <StaggerTitle
                    text="<My_Certifications/>"
                    className="text-3xl md:text-4xl mb-4 font-bold text-center"
      />
        <TextGenerateEffect words="All of my professional certifications in one place" className="font-medium text-center mb-6 text-gray-600 tracking-tighter" />
      
            <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-2 rounded-lg shadow-lg'>
                  <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                    <Image src="https://ik.imagekit.io/sarvan/Portfolio/gemini.webp" alt="Gemini Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                  </div> 
                  <div className='flex flex-col min-w-0'>
                    <p className='font-sans font-bold text-black dark:text-white text-lg'>Gemini for University Students</p>
                    <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>From Google {"•"} Expires Dec 2028</p>
                    <div className='font-sans p-2 mt-1 rounded-lg'>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://edu.google.accredible.com/9ac77ba7-0ef6-4805-86f7-23a9f2e48bad#acc.O4IW109E" target="_blank" rel="noopener noreferrer">View Credential</a>
                      </Button>
                    </div>
                  </div> 
                </motion.div>
              
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-2 rounded-lg shadow-lg'>
                  <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                    <Image src="https://ik.imagekit.io/sarvan/Portfolio/databricks.jpg" alt="Databricks Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                  </div> 
                  <div className='flex flex-col min-w-0'>
                    <p className='font-sans font-bold text-black dark:text-white text-lg'>Generative AI Fundamentals</p>
                    <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>From Databricks {"•"} Expires Jun 2027</p>
                    <div className='font-sans p-2 mt-1 rounded-lg'>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://credentials.databricks.com/b8cc4763-1b59-4012-a045-239bd6ccc5d9#acc.Q7abUOmF" target="_blank" rel="noopener noreferrer">View Credential</a>
                      </Button>
                    </div>
                  </div> 
              </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-2 rounded-lg shadow-lg'>
                <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                  <Image src="https://ik.imagekit.io/sarvan/Portfolio/vercel.png" alt="Vercel Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                </div>
                <div className='flex flex-col min-w-0'>
                  <p className='font-sans font-bold text-black dark:text-white text-lg'>Next{"."}JS Fundamentals {"(4 Courses)"}</p>
                  <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>From Vercel {"•"} Issued Jun 2025</p>
                  <div className='font-sans p-2 mt-1 rounded-lg'>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://drive.google.com/file/d/1Nyr_oV2nxGu_0y-2W-cHb4d9AT2WCJL8/view" target="_blank" rel="noopener noreferrer">View Credential</a>
                    </Button>
                  </div>
                </div>
              </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-2 rounded-lg shadow-lg'>
                <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                  <Image src="https://ik.imagekit.io/sarvan/Portfolio/postman.jpg" alt="Postman Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                </div>
                <div className='flex flex-col min-w-0'>
                  <p className='font-sans font-bold text-black dark:text-white text-lg'>Postman Student Expert</p>
                  <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>From Postman {"•"} Issued May 2025</p>
                  <div className='font-sans p-2 mt-1 rounded-lg'>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://drive.google.com/file/d/10sE7m43Fl7PxX9tB_UbLsVbcADWMUaEi/view" target="_blank" rel="noopener noreferrer">View Credential</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-2 rounded-lg shadow-lg'>
              <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                <Image src="https://ik.imagekit.io/sarvan/Portfolio/hubspot_academy_logo.jpg" alt="HubSpot Academy Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
              </div>
              <div className='flex flex-col min-w-0'>
                <p className='font-sans font-bold text-black dark:text-white text-lg'>SEO Expert</p>
                <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>From HubSpot Academy {"•"} Expires Jun 2026</p>
                <div className='font-sans p-2 mt-1 rounded-lg'>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://app-na2.hubspot.com/academy/achievements/5btx0b7q/en/1/nagarampalli-sarvan-kumar/seo" target="_blank" rel="noopener noreferrer">View Credential</a>
                  </Button>
                </div>
              </div>
              </motion.div>
              <div className='bg-[#ffffff] dark:bg-[#131313] flex flex-col items-center justify-center gap-4 p-2 rounded-lg shadow-lg'>
                <PiCertificate size={100} className=" text-gray-600 dark:text-gray-400" />
                <div className='flex flex-col text-center min-w-0 tracking-wide'>
                  <p className='font-sans font-bold text-black dark:text-white text-lg md:text-2xl'>More Certifications Coming Soon...</p>
                  <p className='font-sans text-gray-700 dark:text-white/70 text-sm md:text-lg'>Stay tuned for updates!</p>
                </div>
              </div>
          </div>
    </div>
  )
}

export default CertificationsSection