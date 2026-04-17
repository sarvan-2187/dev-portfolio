"use client";

import Image from 'next/image'
import { SkillComponent } from './skills'
import AboutSection from './about';
import Socials from './socials';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { MdCall } from 'react-icons/md';

const HeroSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 0,
        filter: "blur(14px)",
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
      className='font-sans flex flex-col gap-4 mt-10 md:mt-6 md:mb-8'>
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
          className='flex items-center justify-center rounded-md'>
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={150} height={150} className="hidden md:block rounded-xl" draggable={false} />
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={120} height={120} className="block md:hidden rounded-xl" draggable={false} />
        </motion.div>
      </div>
      
      <div className='text-sm mt-2 flex flex-row gap-2 px-2'>
        <Button variant={"default"} asChild className='text-sm'>
          <a href='https://cal.com/nagarampallli-sarvan-kumar-5jwphm' target='_blank'><MdCall></MdCall>Book A Call</a>
        </Button>
        <Button variant={"outline"} asChild>
          <a href='https://drive.google.com/file/d/1qNhU2jayUuXwZb37r0lfXDFkrFBI4eq4/view?usp=sharing' target='_blank'><Eye></Eye>View Resume</a>
        </Button>
        </div>
      <AboutSection />
      <div className='flex flex-col md:flex-row items-start gap-8 mb-2 justify-start md:justify-between'>
        <SkillComponent />
        <Socials />
      </div>
    </motion.div>
  )
}

export default HeroSection
