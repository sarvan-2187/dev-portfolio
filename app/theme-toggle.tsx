"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() { 
    const {theme, setTheme} = useTheme();
    return (
        <Button variant={"outline"} size={"icon"} className="cursor-pointer relative rounded-full bg-white  dark:bg-[#1f1f1f] border-none" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <FaSun className="absolute h-8 w-8 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" ></FaSun>
            <FaMoon className="absolute h-8 w-8 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
        </Button>
    );
}