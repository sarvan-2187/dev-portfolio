"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

export type Experience = {
    logo: string;
    alt: string;
    role: string;
    subtitle: string;
    bullets?: React.ReactNode[];
    linkText?: string;
    linkUrl?: string;
};

export default function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative w-full py-8 overflow-hidden">
            {/* The Path (Vertical Line Background) */}
            <div className="absolute left-8 top-0 bottom-0 w-[1.5px] bg-black/10 dark:bg-white/10" />
            
            {/* Animated Path Overlay */}
            <motion.div 
                style={{ scaleY, originY: 0 }}
                className="absolute left-8 top-0 bottom-0 w-[1.5px] bg-black dark:bg-white z-0"
            />

            <div className="space-y-12 relative z-10">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} exp={exp} index={index} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ exp, index }: { exp: Experience, index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = (exp.bullets && exp.bullets.length > 0) || exp.linkUrl;

    return (
        <div className="relative pl-20 group">
            {/* Circular Icon on the Path */}
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                className="absolute left-8 w-10 h-10 rounded-full bg-white dark:bg-black border-[1.5px] border-black dark:border-white z-20 flex items-center justify-center overflow-hidden p-1 shadow-sm transition-transform duration-300 group-hover:scale-110 transform -translate-x-1/2 top-0"
            >
                <Image src={exp.logo} alt={exp.alt} width={32} height={32} className="object-contain" />
            </motion.div>
            
            {/* Side Arrow Indicator for Mobile */}
            {hasDetails && (
                <div className="absolute left-[42px] top-3 md:hidden">
                    <motion.div
                        animate={{ 
                            rotate: isOpen ? 90 : 0,
                            x: isOpen ? 0 : [0, 3, 0]
                        }}
                        transition={{ 
                            rotate: { duration: 0.3 },
                            x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                        }}
                    >
                        <ChevronRight size={14} className="text-black/40 dark:text-white/40" />
                    </motion.div>
                </div>
            )}

            {/* Content Area */}
            <div 
                className={hasDetails ? "cursor-pointer" : ""}
                onClick={() => hasDetails && setIsOpen(!isOpen)}
            >
                <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-black dark:text-white leading-tight">
                            {exp.role}
                        </h3>
                        {hasDetails && (
                                <motion.div
                                    animate={{ 
                                        rotate: isOpen ? 180 : 0,
                                        y: [0, 3, 0]
                                    }}
                                    transition={{ 
                                        rotate: { duration: 0.3 },
                                        y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                                    }}
                                    className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4"
                                >
                                    <ChevronDown size={20} className="text-black dark:text-white" />
                                </motion.div>
                        )}
                    </div>
                    <p className="font-sans font-medium text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {exp.subtitle}
                    </p>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 pb-2 space-y-4">
                                <ul className="space-y-3">
                                    {exp.bullets?.map((bullet, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex gap-3 text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed"
                                        >
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 mt-1.5" />
                                            <span className="font-sans">{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {exp.linkUrl && (
                                    <div className="flex justify-start">
                                        <Button variant="ghost" size="sm" className="h-8 px-0 text-black dark:text-white hover:bg-transparent hover:underline group/btn" asChild onClick={(e) => e.stopPropagation()}>
                                            <a href={exp.linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                                <span className="font-sans font-semibold text-xs uppercase tracking-wider">{exp.linkText}</span>
                                                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
