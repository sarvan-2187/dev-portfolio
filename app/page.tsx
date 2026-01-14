import HeaderBar from "@/sections/header";
import HeroSection from "@/sections/hero";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import ExperienceSection from "@/sections/experience";

export default function Home() {
  return (
    <div className="px-4 lg:px-58">
      <HeaderBar/>
      <HeroSection />
      <ExperienceSection/>
    </div>
  );
}
