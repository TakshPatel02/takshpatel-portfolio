import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CATEGORY_COLORS, components, ComponentItem } from "@/lib/data/component-labs";

const ComponentCard = ({ component }: { component: ComponentItem }) => {
    const colorClass = CATEGORY_COLORS[component.category] ?? "text-[#0077b6] dark:text-[#57c1ff]";

    return (
        <Link
            href={component.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 px-5 py-4 hover:bg-hover-bg transition-colors duration-200 border-b border-border last:border-b-0"
        >
            {/* Text */}
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-text-primary transition-colors duration-150">
                    {component.name}
                </p>
                <p className={`mt-0.5 font-mono text-[10px] uppercase tracking-wider ${colorClass}`}>
                    {component.category}
                </p>
            </div>

            {/* Arrow */}
            <ArrowRight
                size={13}
                className="shrink-0 text-text-muted opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
            />
        </Link>
    );
};

const ComponentLabs = () => {
    // Split into 3 columns of 4
    const columns = [
        components.slice(0, 4),
        components.slice(4, 8),
        components.slice(8, 12),
    ];

    return (
        <section id="component-labs" className="w-full scroll-mt-24">
            {/* ── Header ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
                        {/* Technical Drawing Reference Line */}
                        <div className="flex items-center gap-2.5 w-full font-mono text-[11px] text-text-muted mb-2.5 select-none">
                            <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-text-muted opacity-60">
                                <path d="M 0 10 L 0 0 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                            </svg>
                            <span className="shrink-0 px-1.5 py-0.5 rounded border border-border bg-(--color-surface-elevated) font-mono text-[10px] font-semibold text-text-primary tracking-wider">
                                05
                            </span>
                            <div className="flex-1 h-px border-b border-dashed border-border" />
                            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                                // UI LAB
                            </span>
                        </div>

                        {/* Section Title */}
                        <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary flex items-center gap-2">
                            Components{" "}
                            <span className="text-xs font-mono font-normal text-text-muted sm:text-sm">
                                (68)
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* ── Subtitle ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-3.5">
                        <p className="text-sm sm:text-base text-text-muted font-body leading-relaxed">
                            A curated slice of the library — 12 components spanning hero sections, forms, cards, and more.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── 3-column grid ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {columns.map((col, colIdx) => (
                                <div
                                    key={colIdx}
                                    className={`flex flex-col ${colIdx < columns.length - 1
                                            ? "border-b border-border lg:border-b-0 lg:border-r sm:border-r-0 sm:border-b"
                                            : ""
                                        }`}
                                >
                                    {col.map((component) => (
                                        <ComponentCard key={component.id} component={component} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── "All Components" footer link ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <Link
                            href="https://component-labs.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono group flex w-full items-center justify-center gap-2 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-text-muted hover:text-text-primary hover:bg-hover-bg transition-all duration-200"
                        >
                            <span>All Components</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComponentLabs;