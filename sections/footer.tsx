"use client";

import { SubscribeFooterInput } from "@/components/FooterSubscribe";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaRegCopyright, FaRobot, FaRss } from "react-icons/fa";
import { FaRegFaceSmileBeam, } from "react-icons/fa6";


const FooterSection = () => {
    const [visits, setVisits] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/visit")
            .then(res => res.json())
            .then(data => setVisits(data.visits))
            .catch(console.error);

        if (!sessionStorage.getItem("visited")) {
            fetch("/api/visit", { method: "POST" });
            sessionStorage.setItem("visited", "true");
        }
    }, []);

    return (
        <footer className="font-sans border-t border-black dark:border-white mt-16 px-2">
            <div className="py-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-6 text-xl md:text-4xl font-semibold">
                    Thank you for visiting my portfolio!<FaRegFaceSmileBeam className="inline text-xl md:text-2xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold">
                    <div>
                        <div className="mb-2 flex items-center gap-1">
                            <FaRegCopyright className="text-xs" />
                            {new Date().getFullYear()}
                            <span className="text-blue-600 dark:text-blue-300">
                                Sarvan Kumar.
                            </span>
                            All rights reserved.
                        </div>

                        {visits !== null && (
                            <div className="mb-2 flex items-center gap-1">
                                You are visitor number
                                <span className="font-bold text-blue-600 dark:text-blue-300">
                                    {"'"}{visits.toLocaleString()}{"'"}
                                </span>
                                 to my portfolio !
                            </div>
                        )}
                    </div>

                    
                    <div className="flex flex-col justify-end md:items-end items-start gap-1 text-xs opacity-80">
                        Built with Next.js and Tailwind CSS. Hosted on Vercel.
                    </div>
                </div>
                <div className="mt-6">
                    <SubscribeFooterInput />
                </div>
                <div className="py-8 flex flex-row flex-wrap items-center justify-center gap-4">
                    <Button variant="outline" asChild>
                        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                            <FaRss className="mr-2 text-orange-500" />
                            RSS Feed
                        </a>
                    </Button>

                    <Button variant="outline" asChild>
                        <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
                            <FaRobot className="mr-2 text-gray-600 dark:text-gray-300" />
                            llms.txt
                        </a>
                    </Button>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;
