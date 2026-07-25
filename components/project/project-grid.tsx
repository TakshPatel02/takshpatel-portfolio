import { type Project } from "@/lib/firebase";
import ProjectCard from "./project-card";

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                <div className="border-x border-border bg-bg-card divide-y divide-border">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={idx + 1}
                            isReversed={idx % 2 !== 0}
                        />
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
