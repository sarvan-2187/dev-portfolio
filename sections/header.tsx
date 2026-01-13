"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/app/theme-toggle";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="mx-auto mt-4 top-1 sticky z-50">
            <div className="relative flex items-center justify-between rounded-xl bg-white text-black p-2 px-4 dark:bg-[#1f1f1f] dark:text-white shadow-lg">
                {/* LEFT */}
                <div className="font-sans text-md md:text-lg text-black dark:text-white">
                    <Link href="/">Sarvan Kumar</Link>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:block font-mono text-md md:text-lg">
                    <ul className="flex items-center gap-4 px-2">
                        <li><Link href="/projects" className="text-gray-700 dark:text-white hover:text-black dark:hover:text-blue-300 transition">{"<"}projects{"/>"}</Link></li>
                        <li><Link href="/certifications" className="text-gray-700 dark:text-white hover:text-black dark:hover:text-blue-300 transition">{"<"}certifications{"/>"}</Link></li>
                        <li><Link href="/contact" className="text-gray-700 dark:text-white hover:text-black dark:hover:text-blue-300 transition">{"<"}contact{"/>"}</Link></li>
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
                    <div className="font-mono absolute right-0 top-full mt-2 w-50 rounded-xl bg-white p-3 shadow-lg dark:bg-slate-800 md:hidden">
                        <ul className="flex flex-col gap-3 text-md text-black dark:text-white">
                            <li>
                                <Link href="/projects" onClick={() => setOpen(false)}>{"<"}projects{"/>"}</Link>
                            </li>
                            <li>
                                <Link href="/certifications" onClick={() => setOpen(false)}>{"<"}certifications{"/>"}</Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={() => setOpen(false)}>{"<"}contact{"/>"}</Link>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </header>
    );
};

export default HeaderBar;
