import { getProjects } from "@/lib/firebase";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../project/project-card";

const ProjectSection = async () => {
    const allProjects = await getProjects();
    const projectsData = [...allProjects].reverse().slice(0, 4);
    const rows = [];
    for (let i = 0; i < projectsData.length; i += 2) {
        rows.push(projectsData.slice(i, i + 2));
    }

    return (
        <section id="projects" className="w-full scroll-mt-24">
            {/* Header */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-4">
                        <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl">
                            Projects{" "}
                            <span className="align-super text-xs font-normal text-text-muted sm:text-sm">
                                ({allProjects.length})
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Project Grid */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        {rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`grid grid-cols-1 sm:grid-cols-2 ${rowIndex < rows.length - 1 ? "border-b border-border" : ""
                                    }`}
                            >
                                {/* First card */}
                                {row[0] && (
                                    <div className="border-b border-border sm:border-b-0 sm:border-r">
                                        <ProjectCard project={row[0]} />
                                    </div>
                                )}

                                {/* Second card */}
                                {row[1] && (
                                    <div className={row.length === 1 ? "sm:border-r border-border" : ""}>
                                        <ProjectCard project={row[1]} />
                                    </div>
                                )}

                                {/* Empty cell if odd card in row */}
                                {!row[1] && (
                                    <div className="hidden sm:block" />
                                )}
                            </div>
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
