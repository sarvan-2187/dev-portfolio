"use client";

import Image from 'next/image'
import { SkillComponent } from './skills'
import AboutSection from './about';
import Socials from './socials';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
      className='h-screen font-sans flex flex-col gap-4 mt-10 md:mt-6 md:mb-8'>
      <div className="flex flex-row items-center justify-between text-white p-2 rounded-lg gap-4">
        <div className='max-w-xl font-bold inline flex-col gap-2 text-black dark:text-white font-sans text-3xl md:text-5xl'>
          <EncryptedText text={'Hi I\'m Sarvan!'}></EncryptedText>
          <motion.div
            initial={{
              opacity: 0,
              y: 0,
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
            className='mt-4 font-medium max-w-xs md:max-w-xl text-xs md:text-xl text-gray-700 dark:text-white/70'>
            I build reliable, modern web applications with a focus on clarity, performance, and real-world impact.
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
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
          className='flex items-center border-4 border-slate-200 dark:border-[#2f2f2f] justify-center rounded-full'>
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={150} height={150} className="hidden md:block rounded-full" draggable={false} />
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={120} height={120} className="block md:hidden rounded-full" draggable={false} />
        </motion.div>
      </div>
      <AboutSection />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8'>
        <SkillComponent />
        <Socials />
      </div>
    </motion.div>
  )
}

export default HeroSection