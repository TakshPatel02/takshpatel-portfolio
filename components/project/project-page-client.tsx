"use client";

import ProjectHeader from "@/components/project/project-header";
import ProjectGrid from "@/components/project/project-grid";
import { type Project } from "@/lib/data/projects";
import { useState } from "react";
import SectionDivider from "../section-divider";

const ProjectPageClient = ({ projects }: { projects: Project[] }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter projects based on search query
    const filteredProjects = projects.filter((project) => {
        if (!project) return false;
        const q = (searchQuery || "").toLowerCase();
        const titleMatch = project.title ? project.title.toLowerCase().includes(q) : false;
        const descMatch = project.description ? project.description.toLowerCase().includes(q) : false;
        return titleMatch || descMatch;
    });

    return (
        <div className="w-full">
            <ProjectHeader
                projectCount={projects.length}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ProjectGrid projects={filteredProjects} />
            <SectionDivider />
        </div>
    );
};

export default ProjectPageClient;
