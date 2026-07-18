import AuthKitHero from "@/components/authkit/authkit-hero";
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
            </div>
        </>
    )
}