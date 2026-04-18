"use client";

import { useState } from "react";
import AchievementCard from "@/components/AchievementCard";

const ACHIEVEMENTS = {
    Technical: [
        {
            title: "Runners Up in Code of Caribbean",
            subtitle: "Event • Mar 2026",
            description: "Cleared all the three rounds and secured the 2nd position.",
            linkText: "View Github",
            linkUrl: "https://github.com/sarvan-2187/code-of-caribbean",
        },
        {
            title: "Top 20 in Suprathon",
            subtitle: "Hackathon • Jul 2025",
            description: "Presented my idea Aarogya AI, a one-stop solution for AI based Health Care in India.",
            linkText: "View Certificate",
            linkUrl: "https://drive.google.com/file/d/1Iv8_6W9TdRom5l0WWjGZKItG5t5HLifE/view",
        },
        {
            title: "Flash 2K25",
            highlight: "(1st Hackathon Win!)",
            subtitle: "Hackathon • Jan 2025",
            description: "Developed Pill-Pal, a web application designed to provide medication reminders for elderly users.",
            linkText: "View Certificate",
            linkUrl: "https://drive.google.com/file/d/1I_xiXDhK_kRg-cbzxEEH8H8YE0BlMTiq/view",
        },
    ],
    Academic: [
        {
            title: "Academic Excellence Award",
            subtitle: "Academics • Jan 2023",
            description: "Received for outstanding performance in studies at Ascent Classes.",
            linkText: "View Certificate",
            linkUrl: "https://drive.google.com/file/d/1cgFKjL-ebAwq00BPivaLBWJFidU4uzsi/view",
        },
    ],
};

type TabType = "Technical" | "Academic";

const AchievementsSection = () => {
    const [activeTab, setActiveTab] = useState<TabType>("Technical");

    return (
        <div className='p-2 font-sans mb-8'>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <p className='font-bold text-2xl md:text-xl text-black dark:text-white mb-4 sm:mb-0'>
                    Achievements
                </p>
                <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10 w-fit">
                    {(["Technical", "Academic"] as TabType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                activeTab === tab
                                    ? "bg-white dark:bg-[#1a1a1a] text-black dark:text-white shadow-sm border border-black/10 dark:border-white/10"
                                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className='space-y-4'>
                {ACHIEVEMENTS[activeTab].map((achievement) => (
                    <AchievementCard key={achievement.title} {...achievement} />
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;