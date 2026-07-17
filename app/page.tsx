import HeroPanel from "@/components/home/hero-panel";
import IntroSection from "@/components/home/intro-section";
import NpmPackages from "@/components/home/npm-packages";
import TechStack from "@/components/home/tech-stack";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <div>
        <HeroPanel />
        <SectionDivider />
        <IntroSection />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <NpmPackages />
        <SectionDivider />
      </div>
    </>
  );
}
