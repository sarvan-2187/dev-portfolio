"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { motion } from "framer-motion";

type Project = {
    title: string;
    image: string;
    link?: string;    
    github?: string;  
};

export default function ProjectCard({ title, image, link, github }: Project) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative w-full overflow-hidden rounded-2xl
                       border border-black/10 dark:border-white/5
                       bg-white dark:bg-black outline outline-1"
        >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    draggable={false}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <motion.div
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0
                               bg-gradient-to-t
                               from-black/80 via-black/50 to-transparent
                               dark:from-black dark:via-black/70"
                />
            </div>

            <motion.div 
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-5"
            >
                <h3 className="text-lg sm:text-xl font-bold
                               text-black dark:text-white mb-3">
                    {title}
                </h3>

                <div className="flex gap-3">
                    {link && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open(link, "_blank")}
                            className="cursor-pointer flex items-center gap-2 rounded-lg
                                       bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black
                                       hover:bg-black/80 dark:hover:bg-white/90 transition-colors"
                        >
                            View Project
                            <FaSquareArrowUpRight size={16} />
                        </motion.button>
                    )}

                    {github && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open(github, "_blank")}
                            className="cursor-pointer flex items-center gap-2 rounded-lg
                                       border border-black/20 dark:border-white/20
                                       px-4 py-2 text-sm font-medium
                                       text-black dark:text-white
                                       hover:bg-black/5 dark:hover:bg-white/10
                                       transition-colors"
                        >
                            GitHub
                            <FaGithub size={16} />
                        </motion.button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
