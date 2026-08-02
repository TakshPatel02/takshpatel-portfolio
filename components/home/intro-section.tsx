import React from "react";
import Link from "next/link";
import { Paperclip, ArrowUpRight } from "lucide-react";
import GithubActivity from "./github-activity";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { siteConfig } from "@/lib/config/site-config";

const contactLinks = [
  {
    label: "GitHub",
    url: siteConfig.links.github,
    icon: <FaGithub className="h-4 w-4" />,
    external: true,
  },
  {
    label: "LinkedIn",
    url: siteConfig.links.linkedin,
    icon: <FaLinkedin className="h-4 w-4" />,
    external: true,
  },
  {
    label: "Twitter",
    url: siteConfig.links.x,
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "Hashnode",
    url: siteConfig.links.hashnode,
    icon: <SiHashnode className="h-4 w-4" />,
    external: true,
  },
  {
    label: "Resume",
    url: "/resume",
    icon: <Paperclip className="h-4 w-4" />,
    external: false,
  },
];

const IntroSection = () => {
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

      {/* ── Social Links Box: No outer card boxes, only icon badge + visible label + arrow ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-4">
            <div className="flex items-center justify-between w-full gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-0.5">
              {contactLinks.map((link) => {
                const linkContent = (
                  <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0">
                    {/* Square Icon Badge */}
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-primary group-hover:border-text-muted transition-colors">
                      {link.icon}
                    </div>
                    {/* Label Text */}
                    <span className="font-semibold text-xs sm:text-sm text-text-primary group-hover:text-text-primary">
                      {link.label}
                    </span>
                  </div>
                );

                return link.external ? (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {linkContent}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.url}
                    aria-label={link.label}
                  >
                    {linkContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <GithubActivity />
    </section>
  );
};

export default IntroSection;
