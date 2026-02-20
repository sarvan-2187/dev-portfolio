"use client";

import Image from 'next/image'

const EducationSection = () => {
    return (
        <div className='p-2 mb-8'>
            <p className='font-sans font-bold text-2xl mb-4 md:text-xl text-black dark:text-white'>Education</p>
            <div className='space-y-4'>
                {/* CARD */}
                <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                    <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                        <Image src="https://ik.imagekit.io/sarvan/Portfolio/amrita.jpg" alt="Amrita Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                    </div>

                    <div className='flex flex-col min-w-0'>
                        <p className='font-sans font-bold text-black dark:text-white text-lg'>Amrita Vishwa Vidyapeetham</p>
                        <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>B.Tech • Jun 2024 - Present</p>
                    </div>

                </div>

                <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                    <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                        <Image src="https://ik.imagekit.io/sarvan/Portfolio/ascent.png" alt="Ascent Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                    </div>

                    <div className='flex flex-col min-w-0'>
                        <p className='font-sans font-bold text-black dark:text-white text-lg'>Ascent Classes</p>
                        <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>Intermediate {"("}MPC{")"} • Marks: 959/1000</p>
                    </div>
                </div>

                <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                    <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                        <Image src="https://ik.imagekit.io/sarvan/Portfolio/sri_chaitanya.png" alt="Sri Chaitanya Logo" width={50} height={50} className="object-contain rounded-full" draggable={false} />
                    </div>

                    <div className='flex flex-col min-w-0'>
                        <p className='font-sans font-bold text-black dark:text-white text-lg'>Sri Chaitanya Techno School</p>
                        <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>SSC • Marks: 583/600</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection