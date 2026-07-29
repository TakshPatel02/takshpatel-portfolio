'use client'

import { useState, useEffect } from "react";
import { TAGLINES } from "@/lib/data/taglines";

type Phase = "entering" | "visible" | "leaving";

const TRANSITION_MS = 300;
const HOLD_MS       = 3000;

interface Props {
    className?: string;
}

/**
 * Displays TAGLINES one at a time, cycling with a smooth slide-up-and-fade
 * animation. Each tagline is visible for ~3 s, transitions take ~380 ms.
 * Mount this inside a parent with `overflow-hidden` to clip the slide.
 */
const RotatingTagline = ({ className = "" }: Props) => {
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState<Phase>("entering");

    useEffect(() => {
        let t: ReturnType<typeof setTimeout>;

        if (phase === "entering") {
            // Entrance animation completes → hold
            t = setTimeout(() => setPhase("visible"), TRANSITION_MS);
        } else if (phase === "visible") {
            // Hold fully visible → start exit
            t = setTimeout(() => setPhase("leaving"), HOLD_MS);
        } else {
            // Exit animation completes → advance, restart
            t = setTimeout(() => {
                setIndex((i) => (i + 1) % TAGLINES.length);
                setPhase("entering");
            }, TRANSITION_MS);
        }

        return () => clearTimeout(t);
    }, [phase]);

    // ── Derived animation values ──────────────────────────────────────
    const opacity   = phase === "visible" ? 1 : 0;
    const translateY =
        phase === "entering"  ? "6px"  :  // slides up into view
        phase === "leaving"   ? "-6px" :  // slides up out of view
        "0px";

    return (
        <span
            className={className}
            style={{
                display      : "inline-block",
                opacity,
                transform    : `translateY(${translateY})`,
                transition   : `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
                willChange   : "opacity, transform",
            }}
        >
            {TAGLINES[index]}
        </span>
    );
};

export default RotatingTagline;
