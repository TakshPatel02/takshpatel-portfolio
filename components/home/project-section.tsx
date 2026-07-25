import { getProjects } from "@/lib/firebase";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../project/project-card";

const ProjectSection = async () => {
    const allProjects = await getProjects();
    const projectsData = [...allProjects].slice(0, 3);

    return (
        <section id="projects" className="w-full scroll-mt-24">
            {/* Header Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-4 flex items-center justify-between">
                        <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl flex items-center gap-2.5">
                            Projects{" "}
                            <span className="align-super text-xs font-normal text-text-muted sm:text-sm">
                                ({allProjects.length})
                            </span>
                        </h2>
                        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-text-muted uppercase tracking-wider">
                            <Layers size={13} className="text-accent-blue" />
                            App Showcase
                        </span>
                    </div>
                </div>
            </div>

            {/* Alternating Equal-Attention Project Rows */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card divide-y divide-border">
                        {projectsData.map((project, idx) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={idx + 1}
                                isReversed={idx % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* All Projects Footer */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <Link
                            href="/projects"
                            className="font-mono group flex w-full items-center justify-center gap-2 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-text-muted hover:text-text-primary hover:bg-hover-bg transition-all duration-200"
                        >
                            <span>All Projects</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
