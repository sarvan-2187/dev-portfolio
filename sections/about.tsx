import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import ISTClock from "@/components/Clock";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const AboutSection = () => {
    return (
        <div className='mb-6' style={{ lineHeightStep: "10px" }}>
            <p className='font-serif font-bold text-2xl md:text-3xl mb-2 text-black dark:text-white'>About</p>
            <HeroHighlight className="font-sans font-thin tracking-loose leading-[1.5] text-sm md:text-lg text-black dark:text-white md:max-w-2xl">
                I am a{" "}
                <span className="font-semibold">
                    Computer Science
                </span>{" "}
                undergraduate at{" "}

                <a
                    href="https://www.amrita.edu/tag/chennai-campus/"
                    target="_blank"
                    className="dark:text-white text-black font-semibold hover:underline transition-all duration-500"
                >
                    Amrita Vishwa Vidyapeetham Chennai Campus.{" "}
                </a>
                Currently in my{" "}
                <span className="font-semibold">fifth semester</span> {"(Upcoming)"}. I specialize in web development and core fundamentals such as algorithms and data structures, with a strong focus on building fast, scalable applications. I actively participate in <span className="font-bold">hackathons</span> to apply my skills to real-world problems and continuously improve my problem-solving ability.
            </HeroHighlight>

            <div className='mt-4 flex flex-wrap gap-2'>
                <div className='bg-white dark:bg-black dark:outline dark:outline-1 dark:text-white text-xs p-2 text-center rounded-2xl w-fit shadow-lg font-sans font-medium text-black'>
                    19Yr Old
                </div>
                <div className='bg-white dark:bg-black dark:outline dark:outline-1 dark:text-white text-xs p-2 text-center rounded-2xl w-fit shadow-lg font-sans font-medium text-black'>
                    <FaLocationDot className="text-xs inline mb-1" /> Chennai, India
                </div>
                <div className='bg-white dark:bg-black dark:outline dark:outline-1 dark:text-white text-xs p-2 text-center rounded-2xl w-fit shadow-lg font-sans font-medium text-black'>
                    <IoMdTime className="text-xs inline mb-1" /> <ISTClock />
                </div>
            </div>
        </div>
    )
}

export default AboutSection