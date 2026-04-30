"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type CertificationCardProps = {
    image: string;
    title: string;
    subtitle: string;
    link: string;
};

export default function CertificationCard({
    image,
    title,
    subtitle,
    link,
}: CertificationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#ffffff] dark:bg-black outline outline-1 flex items-start gap-4 p-4 rounded-lg"
        >
            <div className="w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center">
                <Image src={image} alt={`${title} Logo`} width={50} height={50} className="object-contain rounded-full" draggable={false} />
            </div>
            <div className="flex flex-col min-w-0">
                <p className="font-sans font-bold text-black dark:text-white text-lg">{title}</p>
                <p className="font-sans text-gray-700 dark:text-white/70 text-sm">{subtitle}</p>
                <div className="font-sans p-2 mt-1 rounded-lg">
                    <Button variant="outline" size="sm" asChild>
                        <a href={link} target="_blank" rel="noopener noreferrer">View Credential</a>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
