
import HeroSection from "@/sections/hero";
import ExperienceSection from "@/sections/experience";
import EducationSection from "@/sections/education";
import AchievementsSection from "@/sections/achievements";
import { Banner } from "@/components/Banner";
import FeaturedProjectsSection from "@/sections/featuredprojects";
import FooterSection from "@/sections/footer";
import GithubContributions from "@/components/githubContributions";
import CertificationsSection from "@/sections/certifications";
import { Testimonials } from "@/components/testimonials";
import CodolioSection from "@/sections/codolio";

export default async function Home() {
  await new Promise((r) => setTimeout(r, 3000));
  return (
    <div className="px-4 py-8 md:py-8 lg:px-58">
      <div className="space-y-7 md:space-y-9 *:px-2">
        <HeroSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
        <CodolioSection />
        <GithubContributions />
        <AchievementsSection />
        <CertificationsSection />
        <EducationSection />
        <Testimonials />
        <Banner/>
        <FooterSection />
      </div>
    </div>
  );
}
