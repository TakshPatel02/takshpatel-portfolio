"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { FavoriteGroup, FavoriteEntry } from "@/lib/data/movies";

/* ── Star Rating display ──────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
    const full = Math.floor(rating / 2);          // out of 5 visual stars
    const hasHalf = (rating / 2 - full) >= 0.4;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    return (
        <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
                {Array.from({ length: full }).map((_, i) => (
                    <svg key={`f-${i}`} className="w-3.5 h-3.5 text-(--color-accent-yellow)" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
                {hasHalf && (
                    <svg key="half" className="w-3.5 h-3.5 text-(--color-accent-yellow)" viewBox="0 0 24 24" fill="currentColor">
                        <defs>
                            <linearGradient id="half-grad">
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half-grad)" stroke="var(--color-accent-yellow)" strokeWidth="0.5" />
                    </svg>
                )}
                {Array.from({ length: empty }).map((_, i) => (
                    <svg key={`e-${i}`} className="w-3.5 h-3.5 text-border)" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
            <span className="font-mono text-[10px] text-text-muted tabular-nums tracking-widest">
                {rating.toFixed(1)}<span className="text-text-muted/50">/10</span>
            </span>
        </div>
    );
}

/* ── Movie Detail Modal ──────────────────────────────────────── */
function MovieModal({
    item,
    category,
    onClose,
}: {
    item: FavoriteEntry;
    category: string;
    onClose: () => void;
}) {
    /* Close on Escape key */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onClose]);

    /* Lock body scroll while modal is open */
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        /* ── Backdrop ── */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${item.name} details`}
        >
            {/* Dim overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* ── Modal Panel ── */}
            <div
                className="relative z-10 w-full max-w-lg bg-bg-card border border-border shadow-2xl"
                style={{
                    animation: "modalIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
            >
                {/* ── Blueprint corner ticks ── */}
                <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-text-muted/40 pointer-events-none" />
                <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-text-muted/40 pointer-events-none" />
                <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-text-muted/40 pointer-events-none" />
                <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-text-muted/40 pointer-events-none" />

                {/* ── Modal Header bar ── */}
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted/60 select-none">
                        {category} · Detail View
                    </span>
                    <button
                        onClick={onClose}
                        id="movie-modal-close-btn"
                        aria-label="Close modal"
                        className="w-5 h-5 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-150 cursor-pointer"
                    >
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                            <path d="M2 2l12 12M14 2L2 14" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* ── Poster + Info row ── */}
                <div className="flex items-stretch gap-0 p-5">
                    {/* Poster with blueprint frame */}
                    <div className="shrink-0 relative p-2.5 mr-2">
                        {/* Corner ticks on poster frame */}
                        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-text-muted/40" />
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-text-muted/40" />
                        <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-text-muted/40" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-text-muted/40" />

                        {/* w-36 = 144px → height = 216px for 2:3 aspect ratio */}
                        <div
                            className="relative border border-border overflow-hidden bg-(--color-surface-elevated) shadow-md"
                            style={{ width: 144, height: 216 }}
                        >
                            <Image
                                src={item.posterUrl}
                                alt={`${item.name} poster`}
                                fill
                                sizes="144px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Info side */}
                    <div className="flex-1 flex flex-col gap-3 min-w-0">
                        {/* Title + year */}
                        <div className="flex flex-col gap-1">
                            <h3 className="font-display font-bold text-text-primary text-xl leading-tight">
                                {item.name}
                            </h3>
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted/60">
                                {item.year}
                            </p>
                        </div>

                        {/* Hairline divider */}
                        <div className="border-t border-border/60" />

                        {/* Description */}
                        <p className="text-sm text-text-muted leading-relaxed">
                            {item.description}
                        </p>

                        {/* Spacer pushes rating to bottom */}
                        <div className="flex-1" />

                        {/* Rating section */}
                        <div className="border-t border-border/60 pt-3 flex flex-col gap-1.5">
                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted/60 select-none">
                                Personal Rating
                            </span>
                            <StarRating rating={item.rating} />
                        </div>
                    </div>
                </div>

                {/* ── Blueprint footer ── */}
                <div className="border-t border-border px-4 py-2 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-text-muted/40 tracking-[0.18em] select-none">
                        □ FIG. FAVE
                    </span>
                    <span className="font-mono text-[9px] text-text-muted/40 tracking-[0.18em] select-none">
                        SCALE 1:1
                    </span>
                </div>
            </div>

            {/* Keyframe injected inline so no global CSS needed */}
            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.94) translateY(6px); }
                    to   { opacity: 1; transform: scale(1)    translateY(0);    }
                }
            `}</style>
        </div>
    );
}

/* ── Favorites Grid — Client Component ───────────────────────── */
export default function FavoritesGrid({ groups }: { groups: FavoriteGroup[] }) {
    const [selected, setSelected] = useState<{ item: FavoriteEntry; category: string } | null>(null);

    const handleClose = useCallback(() => setSelected(null), []);

    return (
        <>
            {groups.map((group, groupIdx) => (
                <div
                    key={group.category}
                    className={groupIdx < groups.length - 1 ? "border-b border-border" : ""}
                >
                    {/* Category Header */}
                    <div className="border-b border-border px-5 py-3 bg-(--color-surface-elevated)/40 flex items-center justify-between">
                        <h3 className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                            {group.category}
                        </h3>
                        <span className="font-mono text-[9px] text-text-muted tracking-widest tabular-nums">
                            {group.items.length}
                        </span>
                    </div>

                    {/* Movies Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-10 px-5 py-8 sm:px-8">
                        {group.items.map((item, itemIdx) => (
                            <button
                                key={item.name}
                                id={`favorite-${group.category.toLowerCase()}-${itemIdx}`}
                                className="flex flex-col gap-3 group text-left cursor-pointer"
                                onClick={() => setSelected({ item, category: group.category })}
                                aria-label={`Open details for ${item.name}`}
                            >
                                {/* Fluid Blueprint Frame */}
                                <div className="relative w-full aspect-2/3 p-2 border border-border bg-bg-secondary/30 transition-colors duration-200 group-hover:border-text-muted/40">
                                    {/* Tick marks */}
                                    <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-text-muted/40" />
                                    <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-text-muted/40" />
                                    <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-text-muted/40" />
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-text-muted/40" />

                                    <div className="relative w-full h-full border border-border/60 overflow-hidden bg-(--color-surface-elevated) shadow-sm">
                                        <Image
                                            src={item.posterUrl}
                                            alt={`${item.name} poster`}
                                            fill
                                            sizes="(max-width: 640px) 50vw, 33vw"
                                            className="object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                            priority={groupIdx === 0 && itemIdx < 3}
                                        />

                                        {/* Hover overlay hint */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg-card/90 border border-border px-2.5 py-1.5 flex items-center gap-1.5 shadow-lg">
                                                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-text-primary">
                                                    <circle cx="8" cy="8" r="6" />
                                                    <path d="M8 5v3M8 11h.01" strokeLinecap="round" />
                                                </svg>
                                                <span className="font-mono text-[8px] uppercase tracking-widest text-text-primary select-none">
                                                    View
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Panel */}
                                <div className="flex flex-col gap-1.5 px-1 mt-1">
                                    <div className="flex items-baseline justify-between gap-2 border-b border-border/50 pb-1.5">
                                        <span className="font-mono text-[9px] text-text-muted tracking-widest tabular-nums uppercase">
                                            FILE · {String(itemIdx + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-mono text-[9px] text-text-muted tracking-widest tabular-nums">
                                            {item.year}
                                        </span>
                                    </div>
                                    <h4 className="font-display font-semibold text-text-primary text-sm sm:text-base leading-snug">
                                        {item.name}
                                    </h4>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            {/* Modal — rendered outside the grid so it overlays everything */}
            {selected && (
                <MovieModal
                    item={selected.item}
                    category={selected.category}
                    onClose={handleClose}
                />
            )}
        </>
    );
}
