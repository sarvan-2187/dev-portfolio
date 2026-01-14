import React from 'react'

const AboutSection = () => {
  return (
      <div className='p-2'>
          <p className='font-sans font-bold text-2xl mb-2 md:text-xl text-black dark:text-white'>About</p>
          <p className='font-sans font-thin leading-relaxed text-sm md:text-lg text-black dark:text-white md:max-w-2xl'>
              In 2024, I have started my journey as a <span className='underline font-semibold'>Computer Science Student</span> at <a href='https://www.amrita.edu/tag/chennai-campus/' target='_blank' className=' text-gray-700 dark:text-white/70 font-semibold hover:underline transition-all duration-500'>Amrita Vishwa Vidyapeetham Chennai Campus</a>.
              I am currently in my <span className='underline font-semibold'>fourth semester</span>, where I am honing my skills in web development, algorithms, and data structures.
               love building fast, scalable web applications and participating in Hackathons.
          </p>
      </div>
  )
}

export default AboutSection