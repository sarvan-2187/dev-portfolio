"use client";

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

type ExperienceCardProps = {
    logo: string;
    alt: string;
    role: string;
    subtitle: string;
    bullets: React.ReactNode[];
    linkText: string;
    linkUrl: string;
};

export default function ExperienceCard({
    logo,
    alt,
    role,
    subtitle,
    bullets,
    linkText,
    linkUrl,
}: ExperienceCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-[#ffffff] dark:bg-black dark:outline dark:outline-1 flex items-start gap-4 p-4 rounded-lg shadow-lg'>
            <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-slate-100 bg-slate-200 dark:bg-black dark:outline dark:outline-1 p-2 flex items-center justify-center'>
                <Image src={logo} alt={alt} width={50} height={50} className="object-contain rounded-full" draggable={false} />
            </div>

            <div className='flex flex-col min-w-0'>
                <p className='font-sans font-bold text-black dark:text-white text-base md:text-lg'>
                    {role}
                    <IoIosArrowDown
                        className={`inline text-gray-500 dark:text-white/50 mb-1 ml-1 cursor-pointer transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        onClick={() => setOpen(!open)}
                    />
                </p>
                <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>{subtitle}</p>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className='overflow-hidden font-sans text-gray-700 dark:text-white/70 text-sm mt-1 scrollbar-none'
                        >
                            <ul className='list-disc ml-5 space-y-1'>
                                {bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                            <Button variant="ghost" className='p-2 mt-2'>
                                <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
