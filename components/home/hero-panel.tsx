import BannerHero from "./banner-hero";
import FlipLink from "../fliplink";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site-config";
import LiveClock from "./live-clock";

const HeroPanel = () => {
    return (
        <div className="w-full">
            {/* Top border line spanning full screen width */}
            <div className="h-px w-full bg-border" />
            <BannerHero />

            {/* Horizontal divider line spanning full screen width */}
            <div className="h-px w-full bg-border" />

            <section className="mx-auto w-full max-w-200 px-4 sm:px-6 relative z-5">
                <div className="border-x border-border bg-bg-card">

                    {/* Info card — avatar placed inside a square box in the left column */}
                    <div className="flex items-stretch bg-bg-card relative z-0" style={{ height: "140px" }}>
                        <div className="w-35 shrink-0 border-r border-border flex items-center justify-center relative">
                            <Image
                                src={siteConfig.images.avatar}
                                alt={siteConfig.name}
                                priority
                                fill
                                sizes="140px"
                                className="h-full w-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            {/* Row 1: Empty spacer row for letters overlap */}
                            <div className="border-b border-border h-15 flex items-end justify-end px-2 pb-1">
                                <LiveClock />
                            </div>

                            {/* Row 2: Name row */}
                            <div className="border-b border-border h-10 flex items-center px-2">
                                <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-3xl">
                                    <FlipLink>{siteConfig.name}</FlipLink>
                                </h2>
                            </div>

                            {/* Row 3: Tagline row */}
                            <div className="h-10 flex items-center px-2 text-xs sm:text-sm text-text-secondary font-mono">
                                <span className="line-clamp-2 leading-tight">{siteConfig.tagline}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroPanel;
