"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/app/theme-toggle";
import { HiMenu, HiX } from "react-icons/hi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/navigation";


const HeaderBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="mx-auto mt-4 top-1 sticky z-50">
            <div className="relative flex items-center justify-between rounded-xl bg-white text-black p-2 px-4 dark:bg-[#1a1a1a] dark:text-white shadow-lg">
                {/* LEFT */}
                <div className="font-sans font-bold text-md md:text-lg text-black dark:text-white">
                    <Link href="/">Sarvan Kumar <VscVerifiedFilled className='text-lg inline text-blue-500 mb-1' /></Link>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:block font-sans font-bold text-md md:text-lg">
                    <ul className="flex items-center gap-4 px-2">
                        <li><Link href={navLinks.projects} className="text-gray-700 dark:text-white hover:text-black dark:hover:text-blue-300 transition">Projects</Link></li>
                        <li><Link href={navLinks.certifications} className="text-gray-700 dark:text-white hover:text-black dark:hover:text-blue-300 transition">Certifications</Link></li>
                        <li><Link href={navLinks.contact} className="text-gray-700 dark:text-white hover:text-black dark:hover:text-blue-300 transition">Contact</Link></li>
                        <li className="flex items-center cursor-pointer"><ThemeToggle /></li>
                    </ul>
                </nav>

                {/* MOBILE CONTROLS */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-md p-2 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        {open ? <HiX size={22} /> : <HiMenu size={22} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 0,
                            filter: "blur(14px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="font-sans font-bold absolute right-0 top-full mt-2 w-50 rounded-xl bg-white p-3 shadow-lg dark:bg-[#1f1f1f] md:hidden">
                        <ul className="flex flex-col gap-3 text-md text-black dark:text-white">
                            <li className="flex gap-2 items-center">
                                <BsFillGridFill className="text-sm"/><Link href={navLinks.projects} onClick={() => setOpen(false)}>Projects</Link>
                            </li>
                            <li className="flex gap-2 items-center">
                                <LiaCertificateSolid className="text-sm"/><Link href={navLinks.certifications} onClick={() => setOpen(false)}>Certifications</Link>
                            </li>
                            <li className="flex gap-2 items-center">
                                <AiOutlineMessage className="text-sm"/><Link href={navLinks.contact} onClick={() => setOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </motion.div>
                )}

            </div>
        </header>
    );
};

export default HeaderBar;
