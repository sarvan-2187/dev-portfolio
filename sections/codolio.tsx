"use client";

import React, { useEffect, useState } from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { ExternalLink, Trophy } from "lucide-react";

interface PlatformProfile {
    platform: string;
    userStats: {
        handle: string;
    };
    totalQuestionStats: {
        totalQuestionCounts: number;
    };
}

interface CodolioData {
    totalSolved: number;
    firstName: string;
    secondName: string;
    profileName: string;
    platforms: PlatformProfile[];
}

const CodolioSection = () => {
    const [data, setData] = useState<CodolioData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.codolio.com/profile?userKey=sarvan-2187');
                const result = await response.json();
                const profileData = result.data;
                const platformProfiles = profileData.platformProfiles.platformProfiles;
                
                let totalSolved = 0;
                platformProfiles.forEach((p: any) => {
                    totalSolved += p.totalQuestionStats?.totalQuestionCounts || 0;
                });

                setData({
                    totalSolved,
                    firstName: profileData.firstName,
                    secondName: profileData.secondName,
                    profileName: profileData.profileName,
                    platforms: platformProfiles
                });
            } catch (error) {
                console.error("Error fetching Codolio data:", error);
                setData(FALLBACK_DATA);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return null;

    const platformIcons: { [key: string]: { icon: React.ReactNode, color: string } } = {
        leetcode: { icon: <SiLeetcode />, color: "#FFA116" },
        geeksforgeeks: { icon: <SiGeeksforgeeks />, color: "#2F8D46" },
        hackerrank: { icon: <SiHackerrank />, color: "#2EC866" }
    };

    const platformLinks: { [key: string]: string } = {
        leetcode: `https://leetcode.com/${data?.platforms.find(p => p.platform.toLowerCase() === 'leetcode')?.userStats.handle || 'sarvan2187'}`,
        geeksforgeeks: `https://www.geeksforgeeks.org/user/${data?.platforms.find(p => p.platform.toLowerCase() === 'geeksforgeeks')?.userStats.handle || 'sarvankumar2187'}`,
        hackerrank: `https://www.hackerrank.com/${data?.platforms.find(p => p.platform.toLowerCase() === 'hackerrank')?.userStats.handle || 'sarvan_2187'}`
    };

    return (
        <section className="">
            <div className="mb-6">
                <h2 className='font-serif font-bold text-2xl md:text-3xl text-black dark:text-white'>
                    Code Matrix
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:grid-rows-[180px_180px] auto-rows-min">
                {/* Main Stats Bento Card / Button */}
                <a 
                    href={`https://codolio.com/profile/${data?.profileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-5 md:row-span-2 bg-white dark:bg-black border border-black/20 dark:border-white/20 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl border border-black/20 dark:border-white/20 flex items-center justify-center text-black dark:text-white">
                                <Trophy size={24} />
                            </div>
                            <div className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 flex items-center gap-2">
                                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-black dark:text-white">View Full Profile</span>
                                <ExternalLink size={10} className="text-black dark:text-white" />
                            </div>
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-black dark:text-white leading-tight uppercase">
                            {data?.firstName}<br />{data?.secondName}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-sans mt-1">@{data?.profileName}</p>
                    </div>

                    <div>
                        <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-2">Total Problems Solved</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-bold text-black dark:text-white font-sans tracking-tighter">{data?.totalSolved}</span>
                        </div>
                    </div>
                </a>

                {/* Platform Bento Cards as Buttons */}
                {data?.platforms.map((platform, idx) => (
                    <a 
                        key={platform.platform}
                        href={platformLinks[platform.platform.toLowerCase()]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-white dark:bg-black border border-black/20 dark:border-white/20 rounded-3xl p-6 flex flex-col justify-between transition-colors hover:bg-black/5 dark:hover:bg-white/5 group ${
                            idx === 0 ? 'md:col-span-4' : idx === 1 ? 'md:col-span-3' : 'md:col-span-7'
                        }`}
                    >
                        <div className="flex justify-between items-start">
                            <div 
                                className="text-2xl transition-opacity group-hover:opacity-100"
                                style={{ color: platformIcons[platform.platform.toLowerCase()]?.color }}
                            >
                                {platformIcons[platform.platform.toLowerCase()]?.icon}
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-2xl font-bold text-black dark:text-white font-sans leading-none">{platform.totalQuestionStats.totalQuestionCounts}</p>
                                <p className="text-[10px] font-sans font-bold text-gray-400 dark:text-gray-500 tracking-wider mt-1">Solved</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <h4 className="font-bold font-sans text-black dark:text-white capitalize text-sm">
                                    {platform.platform === 'geeksforgeeks' ? 'GeeksForGeeks' : platform.platform}
                                </h4>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">@{platform.userStats.handle}</p>
                            </div>
                            <div className="p-1.5 rounded-full border border-black/10 dark:border-white/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={12} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

const FALLBACK_DATA: CodolioData = {
    totalSolved: 84,
    firstName: "Nagarampalli",
    secondName: "Sarvan Kumar",
    profileName: "sarvan-2187",
    platforms: [
        {
            platform: "leetcode",
            userStats: { handle: "sarvan2187" },
            totalQuestionStats: { totalQuestionCounts: 2 }
        },
        {
            platform: "geeksforgeeks",
            userStats: { handle: "sarvankumar2187" },
            totalQuestionStats: { totalQuestionCounts: 36 }
        },
        {
            platform: "hackerrank",
            userStats: { handle: "sarvan_2187" },
            totalQuestionStats: { totalQuestionCounts: 46 }
        }
    ]
};

export default CodolioSection;
