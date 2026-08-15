import type { NowData, RecentlyCompletedItem } from "@/lib/firebase";
import SectionDivider from "@/components/section-divider";

interface Props {
    data: NowData | null;
}

function formatDate(iso: string) {
    if (!iso) return "–";
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default function NowPageClient({ data }: Props) {
    const doing = data?.currentlyDoing ?? [];
    const completed = data?.recentlyCompleted ?? [];

    return (
        <main className="w-full">

            {/* ── Page header — identical structure to /movies, /resources ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            What I&apos;m up to
                        </span>
                        <h1 className="font-display font-bold text-text-primary mb-3">
                            Now
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            A living snapshot of what I&apos;m currently working on and what I&apos;ve recently shipped.{" "}
                            {data?.lastUpdated && (
                                <span className="text-text-primary font-semibold">
                                    Last updated {formatDate(data.lastUpdated)}.
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Section 1: Currently ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">

                        {/* Section header row — same as movies 01 / */}
                        <div className="border-b border-border px-5 py-4 flex items-baseline justify-between">
                            <div className="flex items-baseline gap-3">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                                    01 /
                                </span>
                                <h2 className="font-display font-bold text-text-primary text-base sm:text-lg">
                                    Currently
                                </h2>
                            </div>
                            <span className="font-mono text-[9px] text-text-muted tracking-widest hidden sm:block">
                                {doing.length} active
                            </span>
                        </div>

                        {/* › list — unique to this page, but font scale and padding match site */}
                        <div className="px-5 py-6 sm:px-8 sm:py-8">
                            {doing.length > 0 ? (
                                <ul className="space-y-3">
                                    {doing.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="font-mono text-text-muted select-none shrink-0 leading-relaxed">
                                                ›
                                            </span>
                                            <span className="text-sm sm:text-base text-text-primary leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-text-muted">Nothing here yet — check back soon.</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Section 2: Recently Shipped ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">

                        {/* Section header row */}
                        <div className="border-b border-border px-5 py-4 flex items-baseline justify-between">
                            <div className="flex items-baseline gap-3">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                                    02 /
                                </span>
                                <h2 className="font-display font-bold text-text-primary text-base sm:text-lg">
                                    Recently Shipped
                                </h2>
                            </div>
                            <span className="font-mono text-[9px] text-text-muted tracking-widest hidden sm:block">
                                {completed.length} shipped
                            </span>
                        </div>

                        {/* Table-row layout — unique content, site-matching spacing */}
                        {completed.length > 0 ? (
                            completed.map((item: RecentlyCompletedItem, i: number) => (
                                <div
                                    key={i}
                                    className={`px-5 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8 ${i < completed.length - 1 ? "border-b border-border" : ""}`}
                                >
                                    {/* Left: title + description */}
                                    <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2">
                                            {item.liveUrl && (
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22c55e] shrink-0" />
                                            )}
                                            <h3 className="font-display font-bold text-text-primary text-sm sm:text-base leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
                                        {item.description && (
                                            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                        {/* Links on mobile — below description */}
                                        {(item.liveUrl || item.githubUrl) && (
                                            <div className="flex items-center gap-4 mt-1 sm:hidden">
                                                {item.liveUrl && (
                                                    <a
                                                        href={item.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-mono text-[11px] text-text-muted hover:text-text-primary hover:underline underline-offset-2 transition-colors"
                                                    >
                                                        Live →
                                                    </a>
                                                )}
                                                {item.githubUrl && (
                                                    <a
                                                        href={item.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-mono text-[11px] text-text-muted hover:text-text-primary hover:underline underline-offset-2 transition-colors"
                                                    >
                                                        GitHub →
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Links on desktop — right-aligned */}
                                    {(item.liveUrl || item.githubUrl) && (
                                        <div className="hidden sm:flex items-center gap-5 shrink-0 pt-0.5">
                                            {item.liveUrl && (
                                                <a
                                                    href={item.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-[11px] text-text-muted hover:text-text-primary hover:underline underline-offset-2 transition-colors whitespace-nowrap"
                                                >
                                                    Live →
                                                </a>
                                            )}
                                            {item.githubUrl && (
                                                <a
                                                    href={item.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-[11px] text-text-muted hover:text-text-primary hover:underline underline-offset-2 transition-colors whitespace-nowrap"
                                                >
                                                    GitHub →
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="px-5 py-6 sm:px-8">
                                <p className="text-sm text-text-muted">Nothing shipped yet.</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Footer note ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-4">
                        <p className="font-mono text-[11px] text-text-muted leading-relaxed">
                            Inspired by{" "}
                            <a
                                href="https://nownownow.com/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-text-primary transition-colors"
                            >
                                nownownow.com
                            </a>
                            {" "}— a movement to share what people are focused on right now.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

        </main>
    );
}
