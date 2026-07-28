'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BANNERS, SLOT_END_HOURS } from "@/lib/data/banner-hero";

// ── Slot names (matched to BANNERS index order) ──────────────────────
const SLOT_NAMES = ["Morning", "Afternoon", "Evening", "Night"] as const;

// ── Pure helpers ───────────────────────────────────────────────────────

/** Returns a Date whose H/M/S reflects the current IST time */
function getISTNow(): Date {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

/** Maps an IST hour (0–23) to the banner index that should be showing */
function indexForHour(h: number): number {
    if (h >= 5 && h < 11) return 0;
    if (h >= 11 && h < 16) return 1;
    if (h >= 16 && h < 20) return 2;
    return 3;
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

    // Keep a ref to the boundary timer so we can cancel it on unmount
    const slotTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
                    <div
                        className="relative w-full overflow-hidden"
                        style={{
                            aspectRatio: "16 / 7",
                            maskImage: [
                                "radial-gradient(ellipse 90% 88% at 50% 50%,",
                                "  black 35%, transparent 100%)",
                            ].join(" "),
                            WebkitMaskImage: [
                                "radial-gradient(ellipse 90% 88% at 50% 50%,",
                                "  black 35%, transparent 100%)",
                            ].join(" "),
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
                          Edge overlay — actively paints var(--color-bg-card) at the image
                          edges so the dissolve is visible in BOTH themes:
                          · Light mode → #ffffff painted at edges (bright dissolve)
                          · Dark mode  → #0a0a0b painted at edges (pushes warm image
                            pixels to black, making the fade visible on dark backgrounds)
                        */}
                        <div
                            className="absolute inset-0 pointer-events-none z-10"
                            style={{
                                background: [
                                    "radial-gradient(ellipse 88% 84% at 50% 50%,",
                                    "  transparent 38%, var(--color-bg-card) 100%)",
                                ].join(" "),
                            }}
                        />
                    </div>
                </div>

                {/* ── Info strip ── */}
                <div className="flex items-stretch divide-x divide-border border-t border-border select-none">

                    {/* Left — current frame */}
                    <div className="flex-1 px-5 py-3.5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
                            // Current Frame
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="font-display text-sm font-bold text-text-primary">
                                {String(current + 1).padStart(2, "0")}
                            </span>
                            <span className="font-mono text-[10px] text-text-muted">
                                · {SLOT_NAMES[current]}
                            </span>
                        </div>
                    </div>

                    {/* Right — next frame countdown */}
                    <div className="flex-1 px-5 py-3.5 flex flex-col gap-1">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
                            // Next Frame In
                        </span>
                        <div className="flex items-baseline gap-2">
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

                </div>
            </div>
        </section>
    );
};

export default BannerHero;