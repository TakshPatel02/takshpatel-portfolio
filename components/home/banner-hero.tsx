'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BANNERS, SLOT_END_HOURS } from "@/lib/data/banner-hero";
import VisitorCount from "@/components/visitor-count";

// ── Slot names (matched to BANNERS index order) ──────────────────────
const SLOT_NAMES = ["Morning", "Afternoon", "Evening", "Night", "Late Night"] as const;

// ── Pure helpers ───────────────────────────────────────────────────────

/** Returns a Date whose H/M/S reflects the current IST time */
function getISTNow(): Date {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

/** Maps an IST hour (0–23) to the banner index that should be showing */
function indexForHour(h: number): number {
    if (h >= 5 && h < 11) return 0;  // Morning
    if (h >= 11 && h < 16) return 1; // Afternoon
    if (h >= 16 && h < 20) return 2; // Evening
    if (h >= 20) return 3;            // Night   (20:00 – 23:59)
    return 4;                          // Late Night (00:00 – 04:59)
}

/** Milliseconds from `istNow` until the end of `slotIdx`'s time window */
function msUntilNextSlot(slotIdx: number, istNow: Date): number {
    const endHour = SLOT_END_HOURS[slotIdx];
    const target = new Date(istNow);
    target.setHours(endHour, 0, 0, 0);
    // Night slot ends at 05:00 the *next* day when we're already past midnight
    if (target <= istNow) target.setDate(target.getDate() + 1);
    return target.getTime() - istNow.getTime();
}

/** Format ms as "Xh YYm" or "Ym" */
function fmtCountdown(ms: number): string {
    const totalMin = Math.max(0, Math.floor(ms / 60_000));
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
    return `${m}m`;
}

// ── Component ──────────────────────────────────────────────────────────
const BannerHero = () => {
    // Initialise with the correct time-based banner (no flash)
    const [current, setCurrent] = useState<number>(() =>
        indexForHour(getISTNow().getHours())
    );
    const [countdown, setCountdown] = useState<string>("");
    const [showThought, setShowThought] = useState(false);

    const slotTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    // Ref for outside-click dismissal of the thought bubble
    const imageWrapRef = useRef<HTMLDivElement>(null);

    // ── Auto-switch exactly at each slot boundary ──────────────────────
    useEffect(() => {
        const arm = () => {
            const istNow = getISTNow();
            const idx = indexForHour(istNow.getHours());
            const delay = msUntilNextSlot(idx, istNow);

            slotTimerRef.current = setTimeout(() => {
                setCurrent(indexForHour(getISTNow().getHours()));
                arm(); // re-arm for the following slot
            }, delay);
        };

        arm();
        return () => {
            if (slotTimerRef.current) clearTimeout(slotTimerRef.current);
        };
    }, []);

    // ── Dismiss thought bubble when the banner changes ─────────────────
    useEffect(() => {
        setShowThought(false);
    }, [current]);

    // ── Outside-click dismissal ────────────────────────────────────────
    useEffect(() => {
        if (!showThought) return;

        const handleOutside = (e: MouseEvent | TouchEvent) => {
            if (imageWrapRef.current && !imageWrapRef.current.contains(e.target as Node)) {
                setShowThought(false);
            }
        };

        document.addEventListener("pointerdown", handleOutside);
        return () => document.removeEventListener("pointerdown", handleOutside);
    }, [showThought]);

    // ── Countdown — refreshes every minute ────────────────────────────
    useEffect(() => {
        const tick = () => {
            const istNow = getISTNow();
            setCountdown(fmtCountdown(msUntilNextSlot(indexForHour(istNow.getHours()), istNow)));
        };
        tick();
        const iv = setInterval(tick, 60_000);
        return () => clearInterval(iv);
    }, []);

    // ── Render ────────────────────────────────────────────────────────
    return (
        <section className="mx-auto w-full max-w-200 px-4 sm:px-6 relative z-10">
            <div className="border-x border-border bg-bg-card">

                {/* Padding shell keeps the image from touching the border-x walls */}
                <div className="p-4">
                    {/*
                      Outer wrapper — sets the aspect-ratio and is `relative`
                      so the thought bubble can be positioned inside it WITHOUT
                      being clipped by the inner overflow-hidden mask container.
                      It's also the click target and outside-click ref root.
                    */}
                    <div
                        ref={imageWrapRef}
                        className="relative w-full cursor-pointer"
                        style={{ aspectRatio: "16 / 7" }}
                        onClick={() => setShowThought((p) => !p)}
                        role="button"
                        tabIndex={0}
                        aria-label="Click to see a thought about this scene"
                        onKeyDown={(e) => { if (e.key === "Enter") setShowThought((p) => !p); }}
                    >
                        {/*
                          Masked image layer — `absolute inset-0` so it fills
                          the aspect-ratio parent. overflow-hidden stays here
                          so it doesn't clip the bubble above.
                        */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{
                                maskImage: "radial-gradient(ellipse 90% 88% at 50% 50%, black 48%, transparent 100%)",
                                WebkitMaskImage: "radial-gradient(ellipse 90% 88% at 50% 50%, black 48%, transparent 100%)",
                            }}
                        >
                            {BANNERS.map((banner, i) => (
                                <Image
                                    key={banner.src}
                                    src={banner.src}
                                    alt={banner.alt}
                                    fill
                                    priority={i === 0}
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    draggable={false}
                                    onDragStart={(e) => e.preventDefault()}
                                    className={[
                                        "object-cover select-none pointer-events-none",
                                        "transition-opacity duration-700 ease-in-out",
                                        i === current ? "opacity-100" : "opacity-0",
                                    ].join(" ")}
                                    loading="eager"
                                />
                            ))}

                            {/*
                              Edge overlay — paints var(--color-bg-card) only on the outer 30%
                              of the ellipse (starts at 70%), so light-mode white-wash is
                              minimal while dark-mode edge-to-black dissolve still works.
                            */}
                            <div
                                className="absolute inset-0 pointer-events-none z-10"
                                style={{
                                    background: "radial-gradient(ellipse 90% 88% at 50% 50%, transparent 70%, var(--color-bg-card) 100%)",
                                }}
                            />
                        </div>

                        {/*
                          ── Thought bubble ──────────────────────────────────
                          Sibling of the masked layer — lives outside overflow-hidden
                          so it's never clipped. Matches the footer character's
                          speech-bubble style exactly (same border, bg, mono font,
                          down-pointing arrow).
                          Dismisses on outside click or when the banner changes.
                        */}
                        {showThought && (
                            <div
                                className={[
                                    "absolute bottom-5 left-1/2 -translate-x-1/2 z-20",
                                    "rounded-lg border border-border bg-bg-secondary/95",
                                    "backdrop-blur-sm px-3 py-1.5 shadow-md",
                                    "pointer-events-none select-none",
                                    "animate-in fade-in zoom-in-95 duration-150",
                                ].join(" ")}
                            >
                                <div className="flex items-center gap-1.5">
                                    <p className="font-mono text-xs text-text-primary whitespace-nowrap">
                                        {BANNERS[current].thought}
                                    </p>
                                </div>
                                {/* Arrow — points down toward the info strip, same as footer character */}
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-b border-r border-border bg-bg-secondary" />
                            </div>
                        )}
                    </div>
                </div>


                {/* ── Info strip ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-border select-none">

                    {/* Left — current frame */}
                    <div className="col-span-1 border-r border-b sm:border-b-0 border-border px-3 sm:px-5 py-3 sm:py-3.5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted whitespace-nowrap">
                            // Current Frame
                        </span>
                        <div className="flex items-baseline gap-2 whitespace-nowrap">
                            <span className="font-display text-sm font-bold text-text-primary">
                                {String(current + 1).padStart(2, "0")}
                            </span>
                            <span className="font-mono text-[10px] text-text-muted">
                                · {SLOT_NAMES[current]}
                            </span>
                        </div>
                    </div>

                    {/* Right — next frame countdown */}
                    <div className="col-span-2 sm:col-span-1 order-3 sm:order-2 sm:border-r border-border px-3 sm:px-5 py-3 sm:py-3.5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted whitespace-nowrap">
                            // Next Frame In
                        </span>
                        <div className="flex items-baseline gap-2 whitespace-nowrap">
                            {countdown ? (
                                <>
                                    <span className="font-mono text-sm font-bold text-text-primary tabular-nums">
                                        {countdown}
                                    </span>
                                    <span className="font-mono text-[10px] text-text-muted">
                                        · {SLOT_NAMES[(current + 1) % SLOT_NAMES.length]}
                                    </span>
                                </>
                            ) : (
                                <span className="font-mono text-[10px] text-text-muted">—</span>
                            )}
                        </div>
                    </div>

                    {/* Visitors */}
                    <div className="col-span-1 order-2 sm:order-3 border-b sm:border-b-0 border-border px-3 sm:px-5 py-3 sm:py-3.5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted whitespace-nowrap">
                            // Visitors
                        </span>
                        <VisitorCount />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BannerHero;