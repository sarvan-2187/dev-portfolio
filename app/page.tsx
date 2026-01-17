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

export default async function Home() {
  await new Promise((r) => setTimeout(r, 3000));
  return (
    <div className="px-4 lg:px-58">
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
    </div>
  );
}
