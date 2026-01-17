"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useState } from "react";

const GithubContributions = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    const years = Array.from(
        { length: 3 },
        (_, i) => currentYear - i
    );

    return (
        <div className="p-2 my-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-sans font-bold text-2xl md:text-xl text-black dark:text-white">
                    GitHub Contributions
                </h2>
                <select
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="cursor-pointer font-sans rounded-lg p-2 border text-sm bg-white text-black
                               dark:bg-black dark:text-white dark:border-gray-700"
                >
                    {years.map((y) => (
                        <option className="cursor-pointer font-sans" key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            <div className="p-2">
                <GitHubCalendar
                    username="sarvan-2187"
                    year={year}
                    fontSize={14}
                    style={{
                        fontFamily: "Google Sans",
                    }}
                    colorScheme={isDark ? "dark" : "light"}
                    theme={{
                        light: ["#e5e7eb", "#111827"],
                        dark: ["#1f2937", "#ffffff"],
                    }}
                    blockSize={15}
                />
            </div>
        </div>
    );
};

export default GithubContributions;
