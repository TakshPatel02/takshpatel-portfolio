import type { Metadata } from "next";
import SectionDivider from "@/components/section-divider";
import { siteConfig } from "@/lib/config/site-config";
import { notFound } from "next/navigation";
import { lessons } from "@/lib/data/lessons";

export const metadata: Metadata = {
    title: `Lessons`,
    description: "Things that went wrong before they went right.",
};

export default function LessonsPage() {
    if (!siteConfig.features.showLessons) {
        notFound();
    }

    return (
        <main className="w-full">
            {/* ── Header ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-8 sm:py-10">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            04 Lessons
                        </span>
                        <h1 className="font-display text-2xl sm:text-4xl font-bold text-text-primary mb-3">
                            What I Learned The Hard Way
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            Things that went wrong before they went right. Real progress is
                            usually paid for in mistakes —{" "}
                            <span className="text-text-primary font-semibold">
                                here are four takeaways
                            </span>{" "}
                            from building, shipping, and iterating.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Lessons List ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        {lessons.map((item, i) => (
                            <article
                                key={item.id}
                                className={
                                    i < lessons.length - 1 ? "border-b border-border" : ""
                                }
                            >
                                {/* ── Lesson label row ── */}
                                <div className="flex items-center justify-between px-5 py-2.5 border-b border-border">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                                        Lesson · {item.id}
                                    </span>
                                    <span
                                        className="font-mono text-[11px] text-text-muted/40 select-none"
                                        aria-hidden="true"
                                    >
                                        □
                                    </span>
                                </div>

                                {/* ── Main Content Area ── */}
                                <div className="px-5 py-8 sm:py-9 sm:px-8">
                                    <h2 className="font-display font-bold text-text-primary text-lg sm:text-xl md:text-2xl leading-snug mb-3">
                                        {item.title}
                                    </h2>

                                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl mb-6">
                                        {item.description}
                                    </p>

                                    {/* ── Takeaway Box ── */}
                                    <div className="border border-border bg-(--color-surface-elevated) px-5 py-4 rounded">
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-2">
                                            → Takeaway
                                        </span>
                                        <p className="font-mono text-xs sm:text-sm text-text-primary font-semibold leading-relaxed">
                                            {item.lesson}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <SectionDivider />
        </main>
    );
}
