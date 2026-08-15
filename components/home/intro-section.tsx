import React from "react";
import Link from "next/link";
import GithubActivity from "./github-activity";
import { siteConfig } from "@/lib/config/site-config";
import NowTeaser from "./now-teaser";

const IntroSection = async () => {
  return (
    <section className="w-full">
      {/* ── 01 // BIO Header Box ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
            {/* Section Title */}
            <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary">
              Where I'm at
            </h2>
          </div>
        </div>
      </div>

      {/* Bullets List Box */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card p-3">
            <ul className="space-y-4">
              {siteConfig.bio.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted opacity-80" />
                  <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Now Teaser ── */}
      <NowTeaser />

      {/* ── All Links Route Box (Replaces socials on homepage) ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-4 flex items-center justify-between">
            <span className="font-mono text-xs sm:text-sm text-text-muted">
              Social profiles & references
            </span>
            <Link
              href="/links"
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-[#00a8e8] dark:text-[#57c1ff] hover:underline transition-all group"
            >
              <span>All links</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </div>

      <GithubActivity />
    </section>
  );
};

export default IntroSection;
