import type { Metadata } from "next";
import Link from "next/link";
import SectionDivider from "@/components/section-divider";
import { siteConfig } from "@/lib/config/site-config";
import { Mail, ExternalLink, FileText, BookOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export const metadata: Metadata = {
    title: `Links · ${siteConfig.name}`,
    description: "Building for the web, learning every layer, shipping what matters.",
};

interface LinkItem {
    title: string;
    subtitle: string;
    url: string;
    icon: React.ReactNode;
    external: boolean;
}

interface Category {
    name: string;
    items: LinkItem[];
}

const linkCategories: Category[] = [
    {
        name: "CONNECT",
        items: [
            {
                title: "Email",
                subtitle: siteConfig.links.email,
                url: `mailto:${siteConfig.links.email}`,
                icon: <Mail size={16} />,
                external: false,
            },
            {
                title: "Twitter / X",
                subtitle: "@TakshPatel02",
                url: siteConfig.links.x,
                icon: (
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                ),
                external: true,
            },
        ],
    },
    {
        name: "PROFESSIONAL",
        items: [
            {
                title: "Resume",
                subtitle: "Download my latest resume",
                url: "/resume",
                icon: <FileText size={16} />,
                external: false,
            },
            {
                title: "LinkedIn",
                subtitle: "Professional network",
                url: siteConfig.links.linkedin,
                icon: <FaLinkedin className="h-4 w-4" />,
                external: true,
            },
            {
                title: "GitHub",
                subtitle: "Code & projects",
                url: siteConfig.links.github,
                icon: <FaGithub className="h-4 w-4" />,
                external: true,
            },
        ],
    },
    {
        name: "CONTENT",
        items: [
            {
                title: "Blog",
                subtitle: "Deep dives on technical topics",
                url: "/blog",
                icon: <BookOpen size={16} />,
                external: false,
            },
            {
                title: "Hashnode",
                subtitle: "takshpatel02.hashnode.dev",
                url: siteConfig.links.hashnode,
                icon: <SiHashnode className="h-4 w-4" />,
                external: true,
            },
        ],
    },
];

export default function LinksPage() {
    return (
        <main className="w-full">
            {/* ── Header ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            Links
                        </span>
                        <h1 className="font-display text-2xl sm:text-4xl font-bold text-text-primary mb-3">
                            All Links & Socials
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            This site is the main thing, but it's not the only thing. Here's everywhere else you can find what I'm building, writing, and thinking about.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Categories & Links List ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        {linkCategories.map((category) => (
                            <section key={category.name}>
                                {/* ── Category Section Strip ── */}
                                <div className="flex items-center justify-between px-5 py-2.5 border-b border-border bg-(--color-surface-elevated)">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                                        // {category.name}
                                    </span>
                                    <span
                                        className="font-mono text-[11px] text-text-muted/40 select-none"
                                        aria-hidden="true"
                                    >
                                        □
                                    </span>
                                </div>

                                {/* ── Links in Category ── */}
                                {category.items.map((item) => {
                                    const content = (
                                        <>
                                            <div className="flex items-center gap-4 min-w-0">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-primary group-hover:border-text-muted transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="font-display font-bold text-text-primary text-base sm:text-lg leading-snug truncate">
                                                        {item.title}
                                                    </p>
                                                    <p className="font-mono text-[11px] sm:text-xs text-text-muted truncate mt-0.5">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0 ml-4">
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted hidden sm:block group-hover:text-text-primary transition-colors">
                                                    Open
                                                </span>
                                                <ExternalLink
                                                    size={14}
                                                    className="text-text-muted group-hover:text-text-primary transition-colors"
                                                />
                                            </div>
                                        </>
                                    );

                                    return item.external ? (
                                        <a
                                            key={item.title}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-5 py-4 sm:py-5 border-b border-border hover:bg-hover-bg transition-colors group"
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.title}
                                            href={item.url}
                                            className="flex items-center justify-between px-5 py-4 sm:py-5 border-b border-border hover:bg-hover-bg transition-colors group"
                                        >
                                            {content}
                                        </Link>
                                    );
                                })}
                            </section>
                        ))}

                        {/* ── Bottom Return Strip ── */}
                        <div className="px-5 py-6 text-center">
                            <p className="font-mono text-xs text-text-muted mb-2">
                                No unnecessary clutter. Just what matters.
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
