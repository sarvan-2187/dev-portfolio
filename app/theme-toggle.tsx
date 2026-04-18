"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRef, useCallback } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const toggleRef = useRef<HTMLDivElement>(null);

    const handleToggle = useCallback(() => {
        const el = toggleRef.current;
        const newTheme = theme === "light" ? "dark" : "light";

        // Fallback for browsers without View Transitions API
        if (!el || !document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        // Get button center coordinates
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Calculate the radius needed to cover the entire screen from the button
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 600,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    }, [theme, setTheme]);

    return (
        <div
            ref={toggleRef}
            onClick={handleToggle}
            className="relative cursor-pointer flex items-center justify-center w-11 h-11 rounded-full text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-all duration-300"
        >
            <FaSun className="absolute h-[20px] w-[20px] rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-transform" />
            <FaMoon className="absolute h-[20px] w-[20px] rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-transform" />
        </div>
    );
}