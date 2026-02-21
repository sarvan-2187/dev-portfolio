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

              <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                  <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                      <Image src="https://ik.imagekit.io/sarvan/Portfolio/Octo_Logo.png" alt="Tantrotsav Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                  </div>

                  <div className='flex flex-col min-w-0'>
                      <p className='font-sans font-bold text-black dark:text-white text-lg'>Frontend Dev & Platform Ops <IoIosArrowDown
                          className={`inline text-gray-500 dark:text-white/50 mb-1 ml-1 cursor-pointer transition-transform duration-300 ${open2 ? "rotate-180" : ""
                              }`}
                          onClick={() => setOpen2(!open2)}
                      />
                      </p>
                      <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>Tantrotsav 2026 • Dec 2025 - Feb 2025</p>
                      <AnimatePresence>
                          {open2 &&
                              <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className='overflow-hidden font-sans text-gray-700 dark:text-white/70 text-sm mt-1 scrollbar-none'>
                                  <ul className='list-disc ml-5 space-y-1'>
                                      <li>Part of the <strong>Website Team</strong> for organizing the <strong>National Level Tech Fest of Amrita Vishwa Vidyapeetham, Chennai Campus.</strong></li>
                                      <li>Managed <strong>Live Production Deployments</strong> on <strong>remote servers</strong>, handling <strong>secure file transfers, build updates, environment configuration changes,</strong> and ensuring zero-downtime releases.</li>
                                      <li>Handled live <strong>Production Database Operations</strong> using <strong>MongoDB</strong>, including <strong>user registration updates, data corrections,</strong> and ensuring real-time data consistency.</li>
                                      <li>Resolved <strong>15+ payment discrepancies and transaction failures </strong> by coordinating with the <strong>CCAvenue</strong> payment gateway and validating backend payment records.</li>
                                      <li>Built a responsive website and followed modern UI design techniques using <strong>React.js</strong> and <strong>Tailwind CSS</strong>.</li>
                                      <li>Integrated <strong>ImageKit CDN</strong> for <strong>optimized delivery</strong> of posters, flyers, and media assets, ensuring <strong>fast load times and efficient asset management.</strong></li>
                                      <li>The platform efficiently managed <strong>3,500+</strong> registrations from <strong>participants across 10 states</strong>, supporting <strong>60+ events</strong> with secure transaction handling.</li>
                                  </ul>
                                  <Button variant="ghost" className='p-2 mt-2' rel="noopener noreferrer">
                                      <a href="https://tantrotsav.amrita.edu/" target="_blank" rel="noopener noreferrer">View Website</a>
                                  </Button>
                              </motion.div>
                          }
                      </AnimatePresence>
                  </div>

              </div>
              <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
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
                                      <li>Organized and executed <strong>Flash 2.0</strong>, a <strong>4-hour Competitive Hackathon</strong> featuring <strong>25+</strong> teams and <strong>80+</strong> participants.</li>
                                      <li>Managed team registrations, evaluation rounds, and <strong>final shortlisting</strong> in coordination with <strong>Principal and Faculty</strong> as reviewers.</li>
                                      <li>Ensured structured event flow, <strong>judging coordination</strong>, and <strong>timely result announcements</strong>, contributing to the event&apos;s grand success.</li>        
                                      <li>Developed an <strong>industry-grade web platform</strong> for the Neuronix community with a scalable and responsive architecture.</li>
                                      <li>Designed and implemented <strong>Role-Based Access Control</strong> {"(RBAC)"} to ensure secure and structured event management workflows.</li>
                                      <li>Engineered an <strong>Admin-driven Event Approval System</strong> to streamline submissions, moderation, and publishing process of events.</li>
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
