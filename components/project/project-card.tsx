"use client";

import { type Project } from "@/lib/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    project: Project;
    index?: number;
    isReversed?: boolean;
}

const ProjectCard = ({ project, index, isReversed = false }: ProjectCardProps) => {
    const formattedIndex = index ? (index < 10 ? `0${index}` : `${index}`) : null;
    const mockDomain = project.title
        ? `${project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.app`
        : "project.app";

    return (
        <div className="group relative w-full p-5 sm:p-7 transition-all duration-300 hover:bg-hover-bg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                {/* Text Content Column */}
                <div
                    className={`md:col-span-5 flex flex-col justify-between ${
                        isReversed ? "md:order-2" : "md:order-1"
                    }`}
                >
                    <div>
                        {/* Top Metadata Header */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-mono text-[11px] font-semibold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue inline-block" />
                                {formattedIndex
                                    ? `[${formattedIndex} // ${project.projectType ? project.projectType.toUpperCase() : "PROJECT"}]`
                                    : `[${project.projectType ? project.projectType.toUpperCase() : "PROJECT SHOWCASE"}]`}
                            </span>

                            {/* Status badge */}
                            {project.status && (
                                <span className="font-mono text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-(--color-surface-elevated) text-text-secondary">
                                    {project.status}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-text-primary leading-tight tracking-[0.01em] group-hover:text-text-primary transition-colors">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-xs sm:text-sm text-text-muted leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Action Links & Live Badge */}
                    <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2 flex-1">
                            {project.isLive && project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
                                >
                                    <ExternalLink size={12} />
                                    View Live
                                </a>
                            )}

                            {project.isGithub && project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
                                >
                                    <FaGithub size={13} />
                                    Github
                                </a>
                            )}
                        </div>

                        {/* Live indicator */}
                        {project.isLive && (
                            <div className="flex items-center gap-1.5 shrink-0">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                </span>
                                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                                    LIVE
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* App Browser Frame Mockup Column */}
                <div
                    className={`md:col-span-7 ${
                        isReversed ? "md:order-1" : "md:order-2"
                    }`}
                >
                    <div className="relative overflow-hidden rounded-lg bg-bg-secondary border border-border shadow-xs transition-all duration-500 group-hover:border-text-muted/40">
                        {/* Browser Top Window Bar */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-(--color-surface-elevated) select-none">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
                            </div>
                            <div className="font-mono text-[10px] text-text-muted truncate max-w-45 sm:max-w-65 px-2.5 py-0.5 rounded bg-bg-primary/50 border border-border/40">
                                https://{mockDomain}
                            </div>
                            <div className="w-10" />
                        </div>

                        {/* Preview Image */}
                        <div className="relative aspect-16/10 overflow-hidden bg-bg-primary">
                            <img
                                src={project.previewImage}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
