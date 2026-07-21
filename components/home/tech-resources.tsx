import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TechResources = () => {
    return (
        <>
            <section id="how-i-learned" className="w-full scroll-mt-24">

                {/* Header */}
                <div className="w-full border-b border-border">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card px-5 py-4">
                            <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl flex items-center gap-2.5">
                                How I Learned{" "}
                                <span className="align-super text-xs font-normal text-text-muted sm:text-sm">
                                    (Resources)
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <div className="w-full border-b border-border">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card px-5 py-3.5">
                            <p className="text-sm sm:text-base text-text-muted font-body leading-relaxed">
                                Most resource lists are just bookmarks. These aren't — they're the 6 creators I kept returning to while building real things. Each one comes with what I actually learned, what I'd tell a beginner before starting, and an honest take on what didn't work for me.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="w-full">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card">
                            <Link
                                href="/resources"
                                className="font-mono group flex w-full items-center justify-center gap-2 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-text-muted hover:text-text-primary hover:bg-hover-bg transition-all duration-200"
                            >
                                <span>See all resources</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default TechResources;
