import HeroPanel from "@/components/home/hero-panel";
import IntroSection from "@/components/home/intro-section";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <div>
        <HeroPanel />
        <SectionDivider />
        <IntroSection />
      </div>
    </>
  );
}
