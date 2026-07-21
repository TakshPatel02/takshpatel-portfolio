import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { learningResources } from "@/lib/data/tech-resources";
import type { ResourceStatus } from "@/lib/data/tech-resources";
import SectionDivider from "@/components/section-divider";

export const metadata: Metadata = {
    title: "Resources · Taksh Patel",
    description:
        "Creators and courses that shaped how I build — with honest notes on what worked, what didn't, and what's still in progress.",
};

const STATUS_LABEL: Record<ResourceStatus, string> = {
    completed:     "Completed",
    "in-progress": "In Progress",
    ongoing:       "Ongoing",
};

const STATUS_COLOR: Record<ResourceStatus, string> = {
    completed:     "text-[#1a7a4a] dark:text-[#59d499] border-[#1a7a4a]/25 dark:border-[#59d499]/25 bg-[#1a7a4a]/6 dark:bg-[#59d499]/8",
    "in-progress": "text-[#8a5c00] dark:text-[#ffc533] border-[#8a5c00]/25 dark:border-[#ffc533]/25 bg-[#8a5c00]/6 dark:bg-[#ffc533]/8",
    ongoing:       "text-[#0077b6] dark:text-[#57c1ff] border-[#0077b6]/25 dark:border-[#57c1ff]/25 bg-[#0077b6]/6 dark:bg-[#57c1ff]/8",
};

export default function ResourcesPage() {
    return (
        <main className="w-full">

            {/* ── Page header ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            How I Learned
                        </span>
                        <h1 className="font-display font-bold text-text-primary mb-3">
                            Resources
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            Most resource lists are just bookmarks. These aren&apos;t — they&apos;re the{" "}
                            <span className="text-text-primary font-semibold">{learningResources.length} creators</span>{" "}
                            I kept returning to while building real things. Each entry has what I actually learned, what I&apos;d tell a beginner before starting, and an honest take on what didn&apos;t work for me.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Resource list ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">

                        {learningResources.map((resource, i) => (
                            <article
                                key={resource.id}
                                className={`${i < learningResources.length - 1 ? "border-b border-border" : ""}`}
                            >
                                {/* ── Meta row ── */}
                                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-4">
                                    <div className="flex flex-col gap-1">
                                        {/* Index + creator */}
                                        <div className="flex items-baseline gap-3">
                                            <span className="font-mono text-[10px] text-text-muted tracking-widest shrink-0">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <h2 className="font-display text-base sm:text-lg font-bold text-text-primary leading-tight">
                                                {resource.creator}
                                            </h2>
                                        </div>
                                        {/* Handle */}
                                        <span className="font-mono text-[10px] text-text-muted tracking-wide ml-7">
                                            @{resource.handle}
                                        </span>
                                    </div>

                                    {/* Right meta: status + platform + visit link */}
                                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                                        <span className={`inline-flex items-center rounded border px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider ${STATUS_COLOR[resource.status]}`}>
                                            {STATUS_LABEL[resource.status]}
                                        </span>
                                        <span className="inline-flex items-center rounded border border-border bg-(--color-surface-elevated) px-2 py-0.5 text-[9px] font-mono tracking-wider text-text-secondary">
                                            {resource.platform}
                                        </span>
                                        <a
                                            href={resource.channelUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted hover:text-text-primary transition-colors"
                                        >
                                            Visit <ExternalLink size={10} />
                                        </a>
                                    </div>
                                </div>

                                {/* ── Topics row ── */}
                                <div className="flex flex-wrap gap-1.5 items-center border-b border-border px-5 py-3">
                                    {resource.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="inline-flex items-center rounded border border-border bg-(--color-surface-elevated) px-2.5 py-1 text-[10px] font-mono tracking-wide text-text-secondary"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>

                                {/* ── Body: learned + recommend ── */}
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* What I Learned */}
                                    <div className={`px-5 py-5 ${resource.whyIRecommend ? "border-b border-border sm:border-b-0 sm:border-r" : ""}`}>
                                        <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-2">
                                            What I Learned
                                        </span>
                                        <p className="text-sm text-text-primary font-semibold leading-relaxed">
                                            {resource.whatILearned}
                                        </p>
                                    </div>

                                    {/* Why I Recommend */}
                                    <div className="px-5 py-5">
                                        <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-2">
                                            Why I Recommend
                                        </span>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {resource.whyIRecommend}
                                        </p>
                                    </div>
                                </div>

                                {/* ── Caveat (optional) ── */}
                                {resource.caveat && (
                                    <div className="border-t border-border px-5 py-4 bg-(--color-surface-elevated)">
                                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8a5c00] dark:text-[#ffc533] block mb-1.5">
                                            ⚠ Heads Up
                                        </span>
                                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic">
                                            {resource.caveat}
                                        </p>
                                    </div>
                                )}

                                {/* ── Links (optional) ── */}
                                {resource.links && resource.links.length > 0 && (
                                    <div className="border-t border-border px-5 py-3 flex flex-wrap gap-2">
                                        {resource.links.map((link) => (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 rounded border border-border bg-bg-card px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
                                            >
                                                {link.label}
                                                <ExternalLink size={9} className="opacity-50" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </article>
                        ))}

                    </div>
                </div>
            </div>

            <SectionDivider />

        </main>
    );
}

