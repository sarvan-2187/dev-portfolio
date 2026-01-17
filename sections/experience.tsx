"use client";

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const ExperienceSection = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    
  return (
    <div className='p-2 mb-8'>
          <p className='font-sans font-bold text-2xl mb-4 md:text-xl text-black dark:text-white'>Work Experience</p>
          <div className='space-y-4'>
              {/* CARD */}
              <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-2 rounded-lg shadow-lg'>
                  <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                      <Image src="https://ik.imagekit.io/sarvan/Portfolio/nueronix.png" alt="Neuronix Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                  </div>

                  <div className='flex flex-col min-w-0'>
                      <p className='font-sans font-bold text-black dark:text-white text-lg'>Coordinator <IoIosArrowDown
                          className={`inline text-gray-500 dark:text-white/50 mb-1 ml-1 cursor-pointer transition-transform duration-300 ${open1 ? "rotate-180" : ""
                              }`}
                          onClick={() => setOpen1(!open1)}
                      />
                      </p>
                      <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>Neuronix Club • Jun 2025 - Present</p>
                      <AnimatePresence>
                          {open1 &&
                              <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className='overflow-hidden font-sans text-gray-700 dark:text-white/70 text-sm mt-1 scrollbar-none'>
                                  <ul className='list-disc ml-5 space-y-1'>
                                      <li>Built an industry grade website for the community.</li>
                                      <li>Implemented Role Based Access Control {"(RBAC)"} for event management.</li>
                                      <li>Implemented Admin based event approval and streamlined the event management process.</li>
                                  </ul>
                                  <Button variant="ghost" className='p-2 mt-2' rel="noopener noreferrer">
                                      <a href="https://neuronix-avv.vercel.app/" target="_blank" rel="noopener noreferrer">View Website</a>
                                  </Button>
                              </motion.div>
                          }
                      </AnimatePresence>
                  </div>

              </div>

              <div className='font-sans font-semibold'>
                  Also, <span className='text-blue-600 dark:text-blue-300'>I am currently open to internship opportunities in web development</span>. If you have an exciting role that matches my skills, please feel free to reach out!
              </div>
          </div>
          

    </div>
  )
}

export default ExperienceSection