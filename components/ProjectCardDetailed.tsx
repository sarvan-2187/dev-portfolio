"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { motion } from "framer-motion";


type Project = {
    title: string;
    description: string;
    image: string;
    link?: string;    
    github?: string;  
};

export default function ProjectCardDetailed({ title, description, image, link, github }: Project) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative w-full overflow-hidden rounded-2xl
                       border border-black/10 dark:border-white/5
                       bg-white dark:bg-neutral-900 shadow-xl
                       transition-all duration-300"
        >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    draggable={false}
                    className="object-cover transition-transform duration-500"
                />

                <div
                    className="absolute inset-0
                               bg-gradient-to-t
                               from-black/80 via-black/50 to-transparent
                               dark:from-black dark:via-black/70
                               opacity-90"
                />
            </div>

            <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold
                               text-black dark:text-white mb-3">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {description}
                </p>

                <div className="flex gap-3">
                    {link && (
                        <button
                            onClick={() => window.open(link, "_blank")}
                            className="cursor-pointer flex items-center gap-2 rounded-lg
                                       bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black
                                       hover:bg-black/80 dark:hover:bg-white/90 transition-colors"
                        >
                            View Project
                            <FaSquareArrowUpRight size={16} />
                        </button>
                    )}

                    {github && (
                        <button
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
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
