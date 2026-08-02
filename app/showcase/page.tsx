'use client'
import React, { useState } from "react";
import Link from "next/link";
import SectionDivider from "@/components/section-divider";
import IsoMetricLogo from "@/components/home/iso-metric-logo";
import { siteConfig } from "@/lib/config/site-config";
import { Check, Copy, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function IsometricPage() {
    const [copied, setCopied] = useState(false);

    const configSnippet = `// In lib/config/site-config.ts:
features: {
  showIsoMetricLogo: false, // Set to true to enable isometric hero
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(configSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="w-full">
            {/* ── Header ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                                FIG. 00 · TEMPLATE
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded border border-border bg-bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-text-secondary">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc533]" />
                                Archived · available as template
                            </span>
                        </div>
                        <h1 className="font-display text-2xl sm:text-4xl font-bold text-text-primary mb-3">
                            Isometric Hero (v1)
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            An earlier hero concept for this portfolio — isometric line-art wordmark,
                            technical blueprint styling. Not currently in use as my own hero, but kept
                            here as a template component for anyone who wants it.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Live Component Preview ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <div className="flex items-center justify-between px-5 py-2.5 border-b border-border bg-(--color-surface-elevated)">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                                // LIVE PREVIEW · INTERACTIVE ISOMETRIC WORDMARK
                            </span>
                            <span
                                className="font-mono text-[11px] text-text-muted/40 select-none"
                                aria-hidden="true"
                            >
                                □
                            </span>
                        </div>

                        {/* Interactive Isometric Wordmark */}
                        <div className="py-8 sm:py-12 overflow-hidden flex items-center justify-center bg-bg-primary">
                            <IsoMetricLogo />
                        </div>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Technical Specs Grid ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
                            {/* Left Col: STATUS & STYLE */}
                            <div className="p-5 sm:p-6 space-y-5">
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-1.5">
                                        STATUS
                                    </span>
                                    <p className="font-mono text-xs sm:text-sm text-text-primary font-semibold">
                                        Archived · available as template
                                    </p>
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-1.5">
                                        STYLE
                                    </span>
                                    <p className="font-mono text-xs sm:text-sm text-text-secondary">
                                        Isometric line-art, blueprint aesthetic
                                    </p>
                                </div>
                            </div>

                            {/* Right Col: STACK & INSPIRED BY */}
                            <div className="p-5 sm:p-6 space-y-5">
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-1.5">
                                        STACK
                                    </span>
                                    <p className="font-mono text-xs sm:text-sm text-text-primary font-semibold">
                                        Next JS, Tailwind CSS, Motion
                                    </p>
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-1.5">
                                        INSPIRED BY
                                    </span>
                                    <p className="font-mono text-xs sm:text-sm text-text-secondary">
                                        chanh dai
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── WHY IT'S HERE ── */}
                        <div className="px-5 py-7 sm:p-8 border-b border-border">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-3">
                                // WHY IT&apos;S HERE
                            </h2>
                            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
                                This was my original hero design. A reviewer pointed out it read as too close
                                to an existing site&apos;s style — fair feedback. Rather than throw the work
                                away, I built a flag so it&apos;s still usable as an opt-in template, while my
                                actual hero moved to something built from my own material.
                            </p>
                        </div>

                        {/* ── USE IT SECTION ── */}
                        <div className="px-5 py-7 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <h2 className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                                    // USE IT
                                </h2>
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <a
                                        href="https://github.com/takshpatel02/takshpatel-portfolio/blob/main/components/home/iso-metric-logo.tsx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-primary hover:border-text-muted transition-colors"
                                    >
                                        <Code2 size={13} />
                                        <span>View Component</span>
                                    </a>
                                    <button
                                        onClick={handleCopy}
                                        className="inline-flex items-center gap-1.5 rounded border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-primary hover:border-text-muted transition-colors cursor-pointer"
                                    >
                                        {copied ? (
                                            <>
                                                <Check size={13} className="text-[#1a7a4a] dark:text-[#59d499]" />
                                                <span>Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={13} />
                                                <span>Copy Code</span>
                                            </>
                                        )}
                                    </button>
                                    <a
                                        href={siteConfig.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded border border-border bg-bg-secondary px-3 py-1.5 font-mono text-xs text-text-primary hover:border-text-muted transition-colors"
                                    >
                                        <FaGithub className="h-3 w-3" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                If you fork this portfolio template, you can enable this hero via the config flag:
                            </p>

                            <div className="border border-border bg-bg-primary rounded-md p-4 overflow-x-auto">
                                <pre className="font-mono text-xs sm:text-sm text-text-primary leading-relaxed">
{`features: {
  showIsoMetricLogo: false, // Set to true to enable isometric hero
}`}
                                </pre>
                            </div>
                        </div>

                        {/* ── Bottom Return Strip ── */}
                        <div className="px-5 py-6 text-center border-t border-border">
                            <p className="font-mono text-xs text-text-muted mb-2">
                                Archived template component
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-text-primary hover:underline transition-all"
                            >
                                ← View Full Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <SectionDivider />
        </main>
    );
}
