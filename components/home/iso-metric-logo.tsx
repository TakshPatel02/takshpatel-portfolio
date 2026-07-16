import { useState, useCallback, useRef } from "react";
import { motion, animate } from "framer-motion";
import type { AnimationPlaybackControlsWithThen } from "framer-motion";

// ── Isometric projection constants ──
const CELL = 52;
const DEPTH = 32;
const COS30 = Math.cos(Math.PI / 6);
const SIN30 = 0.5;

// Grid (col, row) → Screen (x, y)
// col-axis → upper-right, row-axis → lower-right
const px = (c: number, r: number) => (c + r) * CELL * COS30;
const py = (c: number, r: number) => (r - c) * CELL * SIN30;
const pt = (c: number, r: number) => ({ x: px(c, r), y: py(c, r) });

// ── Letter grids [row, col] 0-indexed ──
const T_CELLS: [number, number][] = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2], [2, 2], [3, 2], [4, 2],
];

const P_CELLS: [number, number][] = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 3],
    [2, 0], [2, 1], [2, 2],
    [3, 0], [4, 0],
];

const P_OFF = 6;

const has = (cells: [number, number][], r: number, c: number) => cells.some(([row, col]) => row === r && col === c);

// ── Combine all cells for complete scene-wide occlusion checking ──
const getActiveBlocks = () => {
    const blocks = [];
    for (const [r, c] of T_CELLS) {
        blocks.push([r, c]);
    }
    for (const [r, c] of P_CELLS) {
        blocks.push([r, c + P_OFF]);
    }
    return blocks;
};

const activeBlocks = getActiveBlocks();

// ── Occlusion detection: returns true if the grid point (gc, gr, gz) is blocked by any solid cell ──
const isPointBlocked = (gc: number, gr: number, gz: number, zTop: number = 0) => {
    for (const [cr, cc] of activeBlocks) {
        // Intersect the ray from the point towards the camera with the cell C.
        // Ray(t) = (gc - t, gr + t, gz - t * CELL)
        // Cell covers: [cc, cc + 1] x [cr, cr + 1] x [zTop, DEPTH]
        const t_min = Math.max(gc - cc - 1, cr - gr, (gz - DEPTH) / CELL);
        const t_max = Math.min(gc - cc, cr - gr + 1, (gz - zTop) / CELL);
        if (t_min + 0.001 < t_max && t_max > 0.001) {
            return true;
        }
    }
    return false;
};

// ── Segmented line rendering to handle partial occlusion ──
const renderSegmentedLine = (gc1: number, gr1: number, gz1: number, gc2: number, gr2: number, gz2: number, className: string, keyPrefix: string, zTop: number = 0) => {
    const segments = [];
    const steps = 4;
    for (let i = 0; i < steps; i++) {
        const t1 = i / steps;
        const t2 = (i + 1) / steps;

        const c1 = gc1 + (gc2 - gc1) * t1;
        const r1 = gr1 + (gr2 - gr1) * t1;
        const z1 = gz1 + (gz2 - gz1) * t1;

        const c2 = gc1 + (gc2 - gc1) * t2;
        const r2 = gr1 + (gr2 - gr1) * t2;
        const z2 = gz1 + (gz2 - gz1) * t2;

        const midC = (c1 + c2) / 2;
        const midR = (r1 + r2) / 2;
        const midZ = (z1 + z2) / 2;

        if (!isPointBlocked(midC, midR, midZ, zTop)) {
            const p1 = pt(c1, r1);
            const p2 = pt(c2, r2);
            segments.push(
                <line
                    key={`${keyPrefix}-${i}`}
                    x1={p1.x}
                    y1={p1.y + z1}
                    x2={p2.x}
                    y2={p2.y + z2}
                    className={className}
                />
            );
        }
    }
    return segments;
};

// ── Outline: only boundary edges classified as visible/hidden side faces ──
const getOutline = (cells: [number, number][], off: number = 0) => {
    const edges = [];
    for (const [r, c] of cells) {
        const gc = c + off;
        // Top-left
        if (!has(cells, r - 1, c))
            edges.push({ a: pt(gc, r), b: pt(gc + 1, r), ga: [gc, r] as [number, number], gb: [gc + 1, r] as [number, number], d: "c", visible: false });
        // Top-right
        if (!has(cells, r, c + 1))
            edges.push({ a: pt(gc + 1, r), b: pt(gc + 1, r + 1), ga: [gc + 1, r] as [number, number], gb: [gc + 1, r + 1] as [number, number], d: "r", visible: false });
        // Bottom-right
        if (!has(cells, r + 1, c))
            edges.push({ a: pt(gc, r + 1), b: pt(gc + 1, r + 1), ga: [gc, r + 1] as [number, number], gb: [gc + 1, r + 1] as [number, number], d: "c", visible: true });
        // Bottom-left
        if (!has(cells, r, c - 1))
            edges.push({ a: pt(gc, r), b: pt(gc, r + 1), ga: [gc, r] as [number, number], gb: [gc, r + 1] as [number, number], d: "r", visible: true });
    }
    return edges;
};

// ── Corner vertices: only where outline changes direction and is connected to a visible edge ──
const getVisibleCorners = (edges: { ga: [number, number], gb: [number, number], d: string, visible: boolean }[]) => {
    const m = new Map();
    for (const { ga, gb, d } of edges) {
        const k1 = ga.join(","), k2 = gb.join(",");
        if (!m.has(k1)) m.set(k1, { dirs: new Set(), g: ga, key: k1 });
        if (!m.has(k2)) m.set(k2, { dirs: new Set(), g: gb, key: k2 });
        m.get(k1).dirs.add(d);
        m.get(k2).dirs.add(d);
    }
    const corners = [...m.values()].filter((v) => v.dirs.size > 1);

    // We only want corner vertices that are connected to at least one visible edge
    const visibleEdges = edges.filter(e => e.visible);
    const visibleKeys = new Set();
    for (const { ga, gb } of visibleEdges) {
        visibleKeys.add(ga.join(","));
        visibleKeys.add(gb.join(","));
    }

    return corners.filter(c => visibleKeys.has(c.key)).map(c => c.g);
};

// ── Hatching per cell (merges visually across same-row cells) ──
const Hatch = ({ r, c, off = 0 }: { r: number, c: number, off: number }) => {
    const gc = c + off;
    const tl = pt(gc, r), tr = pt(gc + 1, r);
    const bl = pt(gc, r + 1), br = pt(gc + 1, r + 1);
    const N = 6;
    return Array.from({ length: N }, (_, i) => {
        const t = (i + 1) / (N + 1);
        return (
            <line key={i}
                x1={tl.x + (bl.x - tl.x) * t} y1={tl.y + (bl.y - tl.y) * t}
                x2={tr.x + (br.x - tr.x) * t} y2={tr.y + (br.y - tr.y) * t}
                className="iso-hatch"
            />
        );
    });
};

// ── Wireframe letter (no page load animation, only visible 3D lines) ──
const Letter = ({ cells, off = 0, zTop = 0 }: { cells: [number, number][], off: number, zTop: number }) => {
    const edges = getOutline(cells, off);
    const verts = getVisibleCorners(edges);

    return (
        <g>
            {/* Floor outline (bottom of extrusion for visible sides only) */}
            {edges.filter(e => e.visible).map(({ ga, gb }, i) => (
                renderSegmentedLine(ga[0], ga[1], DEPTH, gb[0], gb[1], DEPTH, "iso-face-left", `f-${i}`, zTop)
            ))}
            {/* Vertical drops at visible corners only */}
            {verts.map(([gc, gr], i) => (
                renderSegmentedLine(gc, gr, zTop, gc, gr, DEPTH, "iso-face-right", `d-${i}`, zTop)
            ))}
            {/* Top face outlines & hatching translated down by zTop */}
            <g transform={`translate(0, ${zTop})`}>
                {/* Top face outline (all outer edges of top faces are visible and same color) */}
                {edges.map(({ a, b }, i) => (
                    <line key={`t${i}`}
                        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                        className="iso-face-top"
                    />
                ))}
                {/* Top face hatching */}
                {cells.map(([r, c], i) => (
                    <Hatch key={`h${i}`} r={r} c={c} off={off} />
                ))}
            </g>
        </g>
    );
};

// ── Guide / construction lines ──
const Guides = ({ cx, cy, span }: { cx: number, cy: number, span: number }) => {
    const len = span * 0.55;
    const lines = [];

    for (let i = -3; i <= 3; i++) {
        const oy = i * 70;
        lines.push(
            <line key={`a${i}`}
                x1={cx - len * COS30} y1={cy + oy + len * SIN30}
                x2={cx + len * COS30} y2={cy + oy - len * SIN30}
                className="iso-guide"
            />
        );
        lines.push(
            <line key={`b${i}`}
                x1={cx - len * COS30} y1={cy + oy - len * SIN30}
                x2={cx + len * COS30} y2={cy + oy + len * SIN30}
                className="iso-guide"
            />
        );
    }

    for (let i = -2; i <= 2; i++) {
        lines.push(
            <line key={`v${i}`}
                x1={cx + i * 160} y1={cy - len * 0.7}
                x2={cx + i * 160} y2={cy + len * 0.7}
                className="iso-guide"
            />
        );
    }

    return <g opacity="0.15">{lines}</g>;
};

// ── Compute viewBox from letter bounds ──
const computeBounds = () => {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    const scan = (cells: [number, number][], off: number) => {
        for (const [r, c] of cells) {
            for (const [dc, dr] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
                const x = px(c + off + dc, r + dr);
                const y = py(c + off + dc, r + dr);
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y + DEPTH > maxY) maxY = y + DEPTH;
            }
        }
    };
    scan(T_CELLS, 0);
    scan(P_CELLS, P_OFF);
    return { minX, maxX, minY, maxY };
};

const { minX, maxX, minY, maxY } = computeBounds();
const PAD_TOP = 25;
const PAD_BOTTOM = -15; // Padding below letters so they do not overlap
const PAD_LEFT = 40;
const PAD_RIGHT = 40;

const VBX = minX - PAD_LEFT;
const VBY = minY - PAD_TOP;
const VBW = maxX - minX + PAD_LEFT + PAD_RIGHT;
const VBH = maxY - minY + PAD_TOP + PAD_BOTTOM;
const CX = (minX + maxX) / 2;
const CY = (minY + maxY) / 2;

const IsoMetricLogo = () => {
    const [zTop, setZTop] = useState(0);
    const [isPressed, setIsPressed] = useState(false);
    const animRef = useRef<AnimationPlaybackControlsWithThen | null>(null);

    const handlePress = useCallback(() => {
        if (isPressed) return; // Prevent re-trigger while animating
        setIsPressed(true);

        if (animRef.current) {
            animRef.current.stop();
        }

        // Animate zTop from 0 to DEPTH * 0.5 (sinks 50% down, height shrinks by 50%)
        animRef.current = animate(0, DEPTH * 0.5, {
            type: "tween",
            duration: 0.18,
            ease: "easeOut",
            onUpdate: (latest) => setZTop(latest),
            onComplete: () => {
                // Hold briefly and animate back up
                setTimeout(() => {
                    animRef.current = animate(DEPTH * 0.5, 0, {
                        type: "tween",
                        duration: 0.3,
                        ease: [0.25, 1, 0.5, 1],
                        onUpdate: (latest) => setZTop(latest),
                        onComplete: () => {
                            setIsPressed(false);
                            animRef.current = null;
                        }
                    });
                }, 120);
            }
        });
    }, [isPressed]);
    return (
        <>
            <section className="mx-auto w-full max-w-200 px-4 sm:px-6 relative z-10">
                <div className="border-x border-border bg-bg-card">

                    {/* Hero area with isometric TP logo */}
                    <div
                        className="relative flex flex-col items-center justify-start z-10 w-full"
                        style={{ aspectRatio: `${VBW} / ${VBH}`, maxHeight: "330px", padding: 0, margin: 0 }}
                    >
                        <svg
                            viewBox={`${VBX} ${VBY} ${VBW} ${VBH}`}
                            className="w-full h-full overflow-visible"
                            style={{ overflow: "visible", cursor: "pointer" }}
                            preserveAspectRatio="xMidYMin meet"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handlePress}
                        >
                            <Guides cx={CX} cy={CY} span={Math.max(VBW, VBH)} />
                            <g transform="translate(0, 10)">
                                <Letter cells={T_CELLS} off={0} zTop={zTop} />
                                <Letter cells={P_CELLS} off={P_OFF} zTop={zTop} />
                            </g>
                            <text
                                x={maxX - 20}
                                y={maxY - 43}
                                className="iso-fig-label"
                                opacity="0.6"
                            >
                                FIG. 01
                            </text>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IsoMetricLogo;