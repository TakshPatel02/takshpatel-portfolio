import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TechResources = () => {
    return (
        <>
            <section id="how-i-learned" className="w-full scroll-mt-24">

                {/* Header */}
                <div className="w-full border-b border-border">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
                            {/* Technical Drawing Reference Line */}
                            <div className="flex items-center gap-2.5 w-full font-mono text-[11px] text-text-muted mb-2.5 select-none">
                                <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-text-muted opacity-60">
                                    <path d="M 0 10 L 0 0 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                                </svg>
                                <span className="shrink-0 px-1.5 py-0.5 rounded border border-border bg-(--color-surface-elevated) font-mono text-[10px] font-semibold text-text-primary tracking-wider">
                                    07
                                </span>
                                <div className="flex-1 h-px border-b border-dashed border-border" />
                                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                                    // LEARNINGS
                                </span>
                            </div>

                            {/* Section Title */}
                            <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary flex items-center gap-2">
                                How I Learned{" "}
                                <span className="text-xs font-mono font-normal text-text-muted sm:text-sm">
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
