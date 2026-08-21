import Link from "next/link";
import SectionDivider from "@/components/section-divider";
import { FolderGit2, BookOpen, FileText, Home, Link2, ExternalLink } from "lucide-react";

export default function PageNotFound() {
  const routes = [
    {
      title: "Home",
      subtitle: "Overview, bio, tech stack & featured work",
      href: "/",
      icon: <Home size={16} />,
      label: "HOME",
    },
    {
      title: "Projects",
      subtitle: "All applications, tools, and open-source packages",
      href: "/projects",
      icon: <FolderGit2 size={16} />,
      label: "WORK",
    },
    {
      title: "Blog",
      subtitle: "Technical articles, guides, and engineering learnings",
      href: "/blog",
      icon: <BookOpen size={16} />,
      label: "POSTS",
    },
    {
      title: "Resume",
      subtitle: "Official curriculum vitae and technical experience",
      href: "/resume",
      icon: <FileText size={16} />,
      label: "CV",
    },
    {
      title: "All Links",
      subtitle: "Social profiles, GitHub, LinkedIn, and contact",
      href: "/links",
      icon: <Link2 size={16} />,
      label: "LINKS",
    },
  ];

  return (
    <main className="w-full">
      {/* ── Page Header ── */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
              Error 404
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-text-primary mb-3">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
              The route you requested doesn't exist, was moved, or is temporarily unavailable. Check the URL or pick one of the active pages below.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ── Diagnostics & Active Routes ── */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card">
            {/* ── Diagnostics Section Strip ── */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-border bg-(--color-surface-elevated)">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                // SYSTEM DIAGNOSTICS
              </span>
              <span
                className="font-mono text-[11px] text-text-muted/40 select-none"
                aria-hidden="true"
              >
                □
              </span>
            </div>

            {/* Diagnostics Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border-b border-border">
              <div className="p-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1.5">
                  Status Code
                </span>
                <p className="font-display font-semibold text-text-primary text-base">
                  404
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Resource not found
                </p>
              </div>

              <div className="p-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1.5">
                  Resolution
                </span>
                <p className="font-display font-semibold text-text-primary text-base flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f56] inline-block" />
                  Unresolved Route
                </p>
                <p className="text-xs text-text-muted mt-1">
                  No matching endpoint
                </p>
              </div>

              <div className="p-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1.5">
                  Recommended Action
                </span>
                <p className="font-display font-semibold text-text-primary text-base">
                  Navigate
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Explore active pages below
                </p>
              </div>
            </div>

            {/* ── Active Pages Section Strip ── */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-border bg-(--color-surface-elevated)">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                // ACTIVE DESTINATIONS
              </span>
              <span
                className="font-mono text-[11px] text-text-muted/40 select-none"
                aria-hidden="true"
              >
                □
              </span>
            </div>

            {/* ── Routes List ── */}
            {routes.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className="flex items-center justify-between px-5 py-4 sm:py-5 border-b border-border hover:bg-hover-bg transition-colors group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-primary group-hover:border-text-muted transition-colors">
                    {route.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-text-primary text-base sm:text-lg leading-snug truncate">
                      {route.title}
                    </p>
                    <p className="font-mono text-[11px] sm:text-xs text-text-muted truncate mt-0.5">
                      {route.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted hidden sm:block group-hover:text-text-primary transition-colors">
                    Visit
                  </span>
                  <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
            ))}

            {/* ── Bottom Return Strip ── */}
            <div className="px-5 py-6 text-center">
              <p className="font-mono text-xs text-text-muted mb-2">
                No dead ends. Just explore what's live.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-text-primary hover:underline transition-all"
              >
                <span>←</span>
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </main>
  );
}
