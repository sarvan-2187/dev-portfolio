import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import ISTClock from "@/components/Clock";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const AboutSection = () => {
  return (
      <div className='p-2 mb-6 ' style={{ lineHeightStep: "10px"}}>
          <p className='font-sans  font-bold text-2xl mb-2 text-black dark:text-white'>About</p>
          <HeroHighlight className="font-sans font-thin tracking-wide leading-[1.7] text-sm md:text-lg text-black dark:text-white md:max-w-2xl">
              In 2024, I have started my journey as a{" "}
              <span className="underline font-semibold">
                  Computer Science Student
              </span>{" "}
              at{" "}
              <Highlight>
                  <a
                      href="https://www.amrita.edu/tag/chennai-campus/"
                      target="_blank"
                      className="text-white dark:text-black font-semibold hover:underline transition-all duration-500"
                  >
                      Amrita Vishwa Vidhyapeetham
                  </a>
              </Highlight>
              . &nbsp;I am currently in my{" "}
              <span className="underline font-semibold">fourth semester</span>, where I am
              honing my skills in web development, algorithms, and data structures. I love
              building fast, scalable web applications and participating in Hackathons.
          </HeroHighlight>

          <div className='mt-4 flex flex-wrap gap-2'>
            <div className='bg-white dark:bg-[#1f1f1f] text-xs p-2 text-center rounded-2xl w-fit shadow-lg font-sans font-medium text-black dark:text-white'>
                18Yr Old
              </div>
              <div className='bg-white dark:bg-[#1f1f1f] text-xs p-2 text-center rounded-2xl w-fit shadow-lg font-sans font-medium text-black dark:text-white'>
                <FaLocationDot className="text-xs inline mb-1" /> Visakhapatnam, India
              </div>
              <div className='bg-white dark:bg-[#1f1f1f] text-xs p-2 text-center rounded-2xl w-fit shadow-lg font-sans font-medium text-black dark:text-white'>
                  <IoMdTime className="text-xs inline mb-1" /> <ISTClock/>
              </div>
          </div>
      </div>
  )
}

export default AboutSection