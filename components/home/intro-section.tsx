import React from "react";
import { FileText } from "lucide-react";
import GithubActivity from "./github-activity";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '@/lib/config/site-config'

const IntroSection = () => {

  return (
    <section className="w-full">
      {/* Header Box */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-4">
            <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl">
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

      {/* Social Links Box */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card p-4 px-3 flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-secondary hover:bg-hover-bg hover:text-text-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-secondary hover:bg-hover-bg hover:text-text-primary transition-all duration-200"
              aria-label="Twitter / X"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-secondary text-text-secondary hover:bg-hover-bg hover:text-text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="/Taksh_Patel_Resume.pdf"
              download
              className="flex h-9 px-4 items-center justify-center gap-2 rounded-md border border-border bg-bg-secondary text-xs font-semibold uppercase tracking-widest text-text-secondary hover:bg-hover-bg hover:text-text-primary transition-all duration-200"
              aria-label="Resume"
            >
              <FileText className="h-4 w-4 shrink-0" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
      <GithubActivity />
    </section>
  );
};

export default IntroSection;
