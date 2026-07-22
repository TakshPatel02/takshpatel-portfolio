import ApiExamples from "@/components/authkit/api-example";
import ApiReference from "@/components/authkit/api-reference";
import AuthKitHero from "@/components/authkit/authkit-hero";
import LinksSection from "@/components/authkit/authkit-links";
import BuiltWith from "@/components/authkit/built-with";
import EnvVariables from "@/components/authkit/env-variables";
import ProjectStructure from "@/components/authkit/project-structure";
import QuickStart from "@/components/authkit/quick-start";
import RateLimiting from "@/components/authkit/rate-limiting";
import ScriptsSection from "@/components/authkit/scripts";
import SecurityHighlights from "@/components/authkit/security-highlights";
import WhyAuthKit from "@/components/authkit/why-authkit";
import SectionDivider from "@/components/section-divider";
import { siteConfig } from "@/lib/config/site-config";
import { notFound } from "next/navigation";

export default function AuthKitPage() {

    if (!siteConfig.features.showAuthkit) {
        notFound();
    }

    return (
        <div>
            <AuthKitHero />
            <SectionDivider />
            <WhyAuthKit />
            <SectionDivider />
            <QuickStart />
            <SectionDivider />
            <EnvVariables />
            <SectionDivider />
            <ApiReference />
            <SectionDivider />
            <ApiExamples />
            <SectionDivider />
            <RateLimiting />
            <SectionDivider />
            <ProjectStructure />
            <SectionDivider />
            <SecurityHighlights />
            <SectionDivider />
            <BuiltWith />
            <SectionDivider />
            <ScriptsSection />
            <SectionDivider />
            <LinksSection />
            <SectionDivider />
        </div>
    )
}