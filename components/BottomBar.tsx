"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Folder, Award, Map, Mail } from "lucide-react";
import { ThemeToggle } from "@/app/theme-toggle";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "Certifications", href: "/certifications", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
];

export default function BottomBar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-4 font-sans left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-full shadow-2xl"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link key={item.name} href={item.href} className="relative group">
                            <div
                                className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                                    isActive
                                        ? "text-white"
                                        : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <item.icon
                                    size={20}
                                    className={`relative z-10 ${isActive ? "text-white dark:text-black" : ""}`}
                                />
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {item.name}
                            </div>
                        </Link>
                    );
                })}
                
                <ThemeToggle />
            </motion.div>
        </div>
    );
}
