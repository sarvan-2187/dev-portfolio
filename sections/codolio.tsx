"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

const CodolioSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <p className='font-sans font-bold text-2xl mb-4 md:text-3xl text-black dark:text-white'>
                Unified Coding Portfolio
            </p>

            <div className='bg-[#ffffff] dark:bg-black dark:outline dark:outline-1 flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                    <Terminal className="text-blue-500 text-2xl" />
                </div>

                <div className='font-sans flex flex-col min-w-0'>
                    <p className='font-sans font-bold text-black dark:text-white text-lg'>
                        Coding Portfolio Hub
                    </p>
                    <p className='text-gray-700 dark:text-white/70 text-sm'>
                        Unified Developer Profile • Codolio
                    </p>

                    <div className='p-2 mt-1 bg-gray-100 dark:bg-[#1f1f1f] rounded-lg'>
                        <div className='text-gray-700 dark:text-white/70 text-xs'>
                            <p>    Dive into my complete coding journey and track problem-solving stats, platform achievements, and progress across multiple coding sites, all in one place.</p>
                            <div className="mt-2">
                                <a
                                    href="https://codolio.com/profile/sarvan-2187"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black dark:text-white font-semibold hover:underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CodolioSection;
