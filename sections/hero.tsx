import Image from 'next/image'
import { SkillComponent } from './skills'
import AboutSection from './about';
import Socials from './socials';



const HeroSection = () => {
  return (
    <div className='font-sans flex flex-col gap-4 md:h-[80vh] mt-12 md:mt-16'>
      <div className="flex flex-row items-center justify-between text-white p-2 rounded-lg gap-4">
        <div className='max-w-xl font-bold inline flex-col gap-2 text-black dark:text-white font-sans text-3xl md:text-7xl'>
          Hi I'm Sarvan!
          <div className='mt-4 font-medium max-w-xs md:max-w-xl text-xs md:text-xl text-gray-700 dark:text-white/70'>
            I build reliable, modern web applications with a focus on clarity, performance, and real-world impact.
          </div>
        </div>
        <div className='flex items-center border-4 border-slate-200 dark:border-[#2f2f2f] justify-center rounded-full'>
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={150} height={150} className="hidden md:block rounded-full" draggable={false} />
          <Image src="https://ik.imagekit.io/sarvan/Portfolio/sarvan.png" alt="Profile Picture" width={120} height={120} className="block md:hidden rounded-full" draggable={false} />
        </div>
      </div>
      <AboutSection />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-12'>
        <SkillComponent />
        <Socials />
      </div>
    </div>
  )
}

export default HeroSection