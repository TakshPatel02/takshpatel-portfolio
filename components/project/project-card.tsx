"use client";

import { type Project } from "@/lib/firebase";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group relative flex flex-col h-full p-3 sm:p-4 transition-colors duration-300 hover:bg-hover-bg">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden rounded-md bg-bg-secondary border border-border">
                <img
                    src={project.previewImage}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/3 dark:group-hover:bg-white/2" />
            </div>

            {/* Content Row — Title + Live Status */}
            <div className="mt-2.5 flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm sm:text-[15px] font-semibold text-text-primary leading-snug tracking-[0.01em]">
                        {project.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-text-muted leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>

                {/* Live status indicator */}
                {project.isLive && (
                    <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                            live
                        </span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="mt-2.5 flex flex-wrap gap-2">
                {project.isLive && project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
                    >
                        <ExternalLink size={11} />
                        View Live
                    </a>
                )}

                {project.isGithub && project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
                    >
                        <FaGithub size={12} />
                        Github
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
