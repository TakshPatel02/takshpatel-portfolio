import BlogSection from "@/components/home/blog-section";
import ComponentLabs from "@/components/home/component-labs";
import HeroPanel from "@/components/home/hero-panel";
import IntroSection from "@/components/home/intro-section";
import NpmPackages from "@/components/home/npm-packages";
import ProjectSection from "@/components/home/project-section";
import TechResources from "@/components/home/tech-resources";
import TechStack from "@/components/home/tech-stack";
import SectionDivider from "@/components/section-divider";
import { siteConfig } from "@/lib/config/site-config";

export default function Home() {
  return (
    <div>
      <HeroPanel />
      <SectionDivider />
      <IntroSection />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <ProjectSection />
      <SectionDivider />
      {siteConfig.features.showNpmPackages && (
        <>
          <NpmPackages />
          <SectionDivider />
        </>
      )}
      {siteConfig.features.showComponents && (
        <>
          <ComponentLabs />
          <SectionDivider />
        </>
      )}
      <BlogSection />
      <SectionDivider />
      {siteConfig.features.showResources && (
        <>
          <TechResources />
          <SectionDivider />
        </>
      )}
    </div>
  );
}
