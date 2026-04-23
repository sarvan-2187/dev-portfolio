"use client";

import { SubscribeFooterInput } from "@/components/FooterSubscribe";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaRegCopyright, FaRobot, FaRss } from "react-icons/fa";
import { FaRegFaceSmileBeam, } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

const FooterSection = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0, 0, 0.2, 1], // Proper cubic-bezier for easeOut
            },
        },
    };

    return (
        <footer className="font-sans border-t border-black/10 dark:border-white/5">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {/* <div className="mt-6">
                    <motion.div variants={itemVariants}>
                        <SubscribeFooterInput />
                    </motion.div>
                </div> */}
            
                <div className="py-8 rounded-2xl">
                    <motion.div 
                        variants={itemVariants}
                        className="flex items-center gap-2 mb-8 text-2xl md:text-3xl font-bold"
                    >
                        Thank you for visiting<FaRegFaceSmileBeam className="ml-2 text-2xl md:text-3xl" />
                    </motion.div>
    
                    <motion.div 
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                <FaRegCopyright className="text-xs" />
                                <span>
                                    {new Date().getFullYear()}
                                    <span className="font-semibold text-blue-600 dark:text-blue-400 mx-1">
                                        Sarvan Kumar.
                                    </span>
                                    All rights reserved.
                                </span>
                            </div>
                        </div>
    
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col justify-end md:items-end items-start gap-1 text-xs text-gray-600 dark:text-gray-400"
                        >
                            <span>Built with Next.js & Tailwind CSS</span>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="py-8 flex flex-row flex-wrap items-center justify-center gap-3"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button variant="outline" asChild className="hover:shadow-lg transition-shadow">
                                <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                                    <FaRss className="mr-2 text-orange-500" />
                                    RSS Feed
                                </a>
                            </Button>
                        </motion.div>
    
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button variant="outline" asChild className="hover:shadow-lg transition-shadow">
                                <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
                                    <FaRobot className="mr-2 text-gray-600 dark:text-gray-300" />
                                    llms.txt
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
        </footer>
    );
};

export default FooterSection;
