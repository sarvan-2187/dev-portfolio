"use client";

import { motion } from "motion/react";

export function StaggerTitle({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) {
    return (
        <motion.h1
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                show: {
                    transition: { staggerChildren: 0.05 },
                },
            }}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
}
