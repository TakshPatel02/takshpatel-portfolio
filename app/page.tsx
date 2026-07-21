import BlogSection from "@/components/home/blog-section";
import ComponentLabs from "@/components/home/component-labs";
import HeroPanel from "@/components/home/hero-panel";
import IntroSection from "@/components/home/intro-section";
import NpmPackages from "@/components/home/npm-packages";
import ProjectSection from "@/components/home/project-section";
import TechResources from "@/components/home/tech-resources";
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
        <ProjectSection />
        <SectionDivider />
        <NpmPackages />
        <SectionDivider />
        <ComponentLabs />
        <SectionDivider />
        <BlogSection />
        <SectionDivider />
        <TechResources />
        <SectionDivider />
      </div>
    </>
  );
}
