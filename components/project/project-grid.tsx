import { type Project } from "@/lib/firebase";
import ProjectCard from "./project-card";

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
    // Split projects into rows of 2
    const rows = [];
    for (let i = 0; i < projects.length; i += 2) {
        rows.push(projects.slice(i, i + 2));
    }

    return (
        <div className="w-full">
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
                                <div>
                                    <ProjectCard project={row[1]} />
                                </div>
                            )}

                            {/* Empty cell if odd card in row */}
                            {!row[1] && <div className="hidden sm:block" />}
                        </div>
                    ))}

                    {/* Empty state */}
                    {projects.length === 0 && (
                        <div className="flex items-center justify-center py-16">
                            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
                                No projects found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectGrid;
