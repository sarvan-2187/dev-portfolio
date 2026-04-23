"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import CertificationCard from "@/components/CertificationCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Claude Code in Action",
    image: "https://ik.imagekit.io/sarvan/Portfolio/claude-color.webp",
    subtitle: "From Anthropic • Issued Mar 2026",
    link: "https://verify.skilljar.com/c/nt57hc854bur",
  },
  {
    title: "Gemini for University Students",
    image: "https://ik.imagekit.io/sarvan/Portfolio/gemini.webp",
    subtitle: "From Google • Expires Dec 2028",
    link: "https://edu.google.accredible.com/9ac77ba7-0ef6-4805-86f7-23a9f2e48bad#acc.O4IW109E",
  },
  {
    title: "Generative AI Fundamentals",
    image: "https://ik.imagekit.io/sarvan/Portfolio/databricks.jpg",
    subtitle: "From Databricks • Expires Jun 2027",
    link: "https://credentials.databricks.com/b8cc4763-1b59-4012-a045-239bd6ccc5d9#acc.Q7abUOmF",
  },
  {
    title: "Next.JS Fundamentals",
    image: "https://ik.imagekit.io/sarvan/Portfolio/vercel.png",
    subtitle: "From Vercel • Issued Jun 2025",
    link: "https://drive.google.com/file/d/1Nyr_oV2nxGu_0y-2W-cHb4d9AT2WCJL8/view",
  },
  {
    title: "Postman Student Expert",
    image: "https://ik.imagekit.io/sarvan/Portfolio/postman.jpg",
    subtitle: "From Postman • Issued May 2025",
    link: "https://drive.google.com/file/d/10sE7m43Fl7PxX9tB_UbLsVbcADWMUaEi/view",
  },
  {
    title: "SEO Expert",
    image: "https://ik.imagekit.io/sarvan/Portfolio/hubspot_academy_logo.jpg",
    subtitle: "From HubSpot Academy • Expires Jun 2026",
    link: "https://app-na2.hubspot.com/academy/achievements/5btx0b7q/en/1/nagarampalli-sarvan-kumar/seo",
  },
];

const CertificationsSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedCerts = isExpanded ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 3);

    return (
        <section className="font-sans">
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-black dark:text-white">
                Certifications
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout" initial={false}>
                    {displayedCerts.map((cert) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            layout
                        >
                            <CertificationCard {...cert} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {CERTIFICATIONS.length > 3 && (
                <div className="mt-8 flex justify-center">
                    <Button 
                        variant="link" 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-md"
                    >
                        {isExpanded ? (
                            <>Show Less <ChevronUp size={18} /></>
                        ) : (
                            <>View More Certifications <ChevronDown size={18} /></>
                        )}
                    </Button>
                </div>
            )}
        </section>
    );
};

export default CertificationsSection;
