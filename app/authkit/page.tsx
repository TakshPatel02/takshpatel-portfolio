import ApiExamples from "@/components/authkit/api-example";
import ApiReference from "@/components/authkit/api-reference";
import AuthKitHero from "@/components/authkit/authkit-hero";
import BuiltWith from "@/components/authkit/built-with";
import EnvVariables from "@/components/authkit/env-variables";
import ProjectStructure from "@/components/authkit/project-structure";
import QuickStart from "@/components/authkit/quick-start";
import RateLimiting from "@/components/authkit/rate-limiting";
import SecurityHighlights from "@/components/authkit/security-highlights";
import WhyAuthKit from "@/components/authkit/why-authkit";
import SectionDivider from "@/components/section-divider";

export default function AuthKitPage() {
    return (
        <>
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
            </div>
        </>
    )
}