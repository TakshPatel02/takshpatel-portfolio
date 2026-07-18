import AuthKitHero from "@/components/authkit/authkit-hero";
import EnvVariables from "@/components/authkit/env-variables";
import QuickStart from "@/components/authkit/quick-start";
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
            </div>
        </>
    )
}