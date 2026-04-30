"use client";

import Image from 'next/image'
import { SkillComponent } from './skills'
import AboutSection from './about';
import Socials from './socials';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { motion } from 'framer-motion';

import { VscVerifiedFilled } from "react-icons/vsc";

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
      className='font-sans flex flex-col gap-2'>
      <div className="flex flex-row items-center justify-between text-white rounded-lg gap-4">
        <div className='max-w-2xl font-bold flex flex-col gap-2 text-black dark:text-white font-sans text-2xl md:text-5xl'>
          <div className='flex items-center gap-2'>
            <EncryptedText className="font-serif tracking-wide" text={'Hi I\'m Sarvan!'}></EncryptedText>
            <VscVerifiedFilled className="text-blue-500 size-6 md:size-10" />
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
            className='mt-2 font-medium max-w-xs md:max-w-xl text-sm md:text-xl text-gray-700 dark:text-white/70'>
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
          className='flex items-center justify-center rounded-xl'>
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={160} height={160} className="hidden md:block rounded-xl" draggable={false} />
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={125} height={125} className="block md:hidden rounded-xl" draggable={false} />
        </motion.div>
      </div>

      <div className='mt-6 flex flex-col md:flex-row items-start gap-8 justify-start md:justify-between'>
        <AboutSection />
        <Socials />
      </div>
      <SkillComponent />
    </motion.div>
  )
}

export default HeroSection
