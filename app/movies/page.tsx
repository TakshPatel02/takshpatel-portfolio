import type { Metadata } from "next";
import Image from "next/image";
import { movies, favorites } from "@/lib/data/movies";
import SectionDivider from "@/components/section-divider";
import { siteConfig } from "@/lib/config/site-config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Movies · Taksh Patel",
    description:
        "I don't just watch movies for entertainment — even something like a superhero film leaves me with a real takeaway. Some stories stick with me longer than others.",
};

/* ── Blueprint-style poster frame ──────────────────────────────────────
   Thin border + corner tick marks, small fixed size.
   Matches the iso-fig / technical-drawing aesthetic of the site logo.
   ──────────────────────────────────────────────────────────────────── */
function BlueprintPoster({
    src,
    alt,
    index,
    priority = false,
}: {
    src: string;
    alt: string;
    index: number;
    priority?: boolean;
}) {
    return (
        <div className="flex flex-col items-center gap-2.5">
            {/* Corner-tick wrapper — p-2 gives ticks room outside the image border */}
            <div className="relative p-2">
                {/* Top-left */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-text-muted/40" />
                {/* Top-right */}
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-text-muted/40" />
                {/* Bottom-left */}
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-text-muted/40" />
                {/* Bottom-right */}
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-text-muted/40" />

                {/* Poster image */}
                <div className="relative w-30 h-45 border border-border overflow-hidden bg-[--color-surface-elevated]">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="120px"
                        className="object-cover"
                        priority={priority}
                    />
                </div>
            </div>

            {/* Blueprint label beneath frame */}
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-text-muted/50 select-none">
                Poster · {String(index + 1).padStart(2, "0")}
            </span>
        </div>
    );
}

export default function MoviesPage() {
    if (!siteConfig.features.showMovies) {
        notFound();
    }

    return (
        <main className="w-full">

            {/* ── Page header ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            What I Watch
                        </span>
                        <h1 className="font-display font-bold text-text-primary mb-3">
                            Movies
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            I don&apos;t just watch movies for entertainment — even something like a superhero film leaves me with a real takeaway.{" "}
                            <span className="text-text-primary font-semibold">
                                Some stories stick with me longer than others
                            </span>
                            , and these are the ones I keep coming back to.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── What Stuck With Me ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">

                        {/* Section header */}
                        <div className="border-b border-border px-5 py-4 flex items-baseline justify-between">
                            <div className="flex items-baseline gap-3">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                                    01 /
                                </span>
                                <h2 className="font-display font-bold text-text-primary text-base sm:text-lg">
                                    What Stuck With Me
                                </h2>
                            </div>
                            <span className="font-mono text-[9px] text-text-muted tracking-widest hidden sm:block">
                                {movies.length} films
                            </span>
                        </div>

                        {/* Section description */}
                        <div className="border-b border-border px-5 py-4">
                            <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                                A handful of films that actually changed how I think about work, ego, and direction —
                                not because they&apos;re{" "}
                                <span className="italic">&quot;inspirational,&quot;</span>{" "}
                                but because the lessons genuinely applied to real decisions I&apos;ve made.
                            </p>
                        </div>

                        {/* ── Frame entries ── */}
                        {movies.map((movie, i) => {
                            /*
                             * Zigzag rule:
                             *   Even index (0, 2, 4 …) → text LEFT, poster RIGHT on desktop
                             *   Odd  index (1, 3, 5 …) → poster LEFT, text RIGHT on desktop
                             * Mobile: always stacks as [text → poster] in DOM order (flex-col).
                             */
                            const posterRight = i % 2 === 0;

                            return (
                                <article
                                    key={movie.name}
                                    className={
                                        i < movies.length - 1 ? "border-b border-border" : ""
                                    }
                                >
                                    {/* ── FRAME label row ── */}
                                    <div className="flex items-center justify-between px-5 py-2.5 border-b border-border">
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                                            Frame {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {/* □ marker — matches FIG. convention used in footer */}
                                        <span
                                            className="font-mono text-[11px] text-text-muted/40 select-none"
                                            aria-hidden="true"
                                        >
                                            □
                                        </span>
                                    </div>

                                    {/* ── Content: zigzag layout ── */}
                                    <div
                                        className={[
                                            "flex flex-col px-5 py-8 gap-7",
                                            "sm:flex-row sm:items-start sm:gap-12 sm:py-10 sm:px-8",
                                            !posterRight ? "sm:flex-row-reverse" : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")}
                                    >
                                        {/* ── Text side ── */}
                                        <div className="flex-1 flex flex-col gap-5">

                                            {/* Pull-quote — the single strongest line */}
                                            <p className="font-display font-bold text-text-primary text-lg sm:text-xl leading-snug">
                                                &ldquo;{movie.quote}&rdquo;
                                            </p>

                                            {/* Movie name · Year — small mono meta */}
                                            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                                                {movie.name}&nbsp;&nbsp;·&nbsp;&nbsp;{movie.year}
                                            </p>

                                            {/* Hairline separator */}
                                            <div className="border-t border-border" />

                                            {/* Full personal thought — muted, readable */}
                                            <p className="text-sm text-text-muted leading-relaxed">
                                                {movie.personalThought}
                                            </p>
                                        </div>

                                        {/* ── Poster side ── */}
                                        <div className="shrink-0">
                                            <BlueprintPoster
                                                src={movie.posterUrl}
                                                alt={`${movie.name} poster`}
                                                index={i}
                                                priority={i < 2}
                                            />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Favorites ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">

                        {/* Section header */}
                        <div className="border-b border-border px-5 py-4 flex items-baseline justify-between">
                            <div className="flex items-baseline gap-3">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                                    02 /
                                </span>
                                <h2 className="font-display font-bold text-text-primary text-base sm:text-lg">
                                    Favorites
                                </h2>
                            </div>
                            <span className="font-mono text-[9px] text-text-muted tracking-widest hidden sm:block">
                                {favorites.reduce((acc, curr) => acc + curr.items.length, 0)} films & shows
                            </span>
                        </div>

                        {/* Section description */}
                        <div className="border-b border-border px-5 py-4">
                            <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                                Beyond the ones that shaped how I think, these are just films and shows I&apos;ve genuinely enjoyed — across Hollywood, series, and anime. No essays here, just good stories.
                            </p>
                        </div>

                        {/* ── Categories ── */}
                        {favorites.map((group, groupIdx) => (
                            <div key={group.category} className={groupIdx < favorites.length - 1 ? "border-b border-border" : ""}>
                                {/* Category Header */}
                                <div className="border-b border-border px-5 py-3 bg-(--color-surface-elevated)/40 flex items-center justify-between">
                                    <h3 className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                                        {group.category}
                                    </h3>
                                    <span className="font-mono text-[9px] text-text-muted tracking-widest tabular-nums">
                                        {group.items.length}
                                    </span>
                                </div>
                                
                                {/* ── Movies Grid (Contact Sheet Style) ── */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 px-5 py-8">
                                    {group.items.map((item, itemIdx) => (
                                        <div key={item.name} className="flex flex-col gap-3 group">
                                            {/* Fluid Blueprint Frame */}
                                            <div className="relative w-full aspect- 2/3 p-1.5 border border-border bg-bg-secondary/30">
                                                {/* Tick marks */}
                                                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-text-muted/40" />
                                                <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-text-muted/40" />
                                                <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-text-muted/40" />
                                                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-text-muted/40" />
                                                
                                                <div className="relative w-full h-full border border-border/50 overflow-hidden bg-[--color-surface-elevated]">
                                                    <Image
                                                        src={item.posterUrl}
                                                        alt={`${item.name} poster`}
                                                        fill
                                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                                                        className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                                                        priority={groupIdx === 0 && itemIdx < 4}
                                                    />
                                                </div>
                                            </div>

                                            {/* Info Panel */}
                                            <div className="flex flex-col gap-1.5 px-1 mt-1">
                                                <div className="flex items-baseline justify-between gap-2 border-b border-border/50 pb-1.5">
                                                    <span className="font-mono text-[8px] text-text-muted tracking-widest tabular-nums uppercase">
                                                        FILE · {String(itemIdx + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className="font-mono text-[9px] text-text-muted tracking-widest tabular-nums">
                                                        {item.year}
                                                    </span>
                                                </div>
                                                <h4 className="font-display font-semibold text-text-primary text-xs sm:text-sm leading-snug">
                                                    {item.name}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <SectionDivider />

        </main>
    );
}
