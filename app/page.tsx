"use client";

import HeaderBar from "@/sections/header";
import HeroSection from "@/sections/hero";
import ExperienceSection from "@/sections/experience";
import EducationSection from "@/sections/education";
import AchievementsSection from "@/sections/achievements";
import { Banner } from "@/components/Banner";
import FeaturedProjectsSection from "@/sections/featuredprojects";
import FooterSection from "@/sections/footer";
import GithubContributions from "@/components/githubContributions";
import { Testimonials } from "@/components/testimonials";
import { motion } from "framer-motion";

export default async function Home() {
  await new Promise((r) => setTimeout(r, 3000));
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="px-4 lg:px-58">
      <HeaderBar />
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <EducationSection />
      <GithubContributions />
      <AchievementsSection />
      <Testimonials />
      <Banner />
      <FooterSection />
    </motion.div>
  );
}
