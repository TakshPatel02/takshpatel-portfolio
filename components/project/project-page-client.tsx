"use client";

import ProjectHeader from "@/components/project/project-header";
import ProjectGrid from "@/components/project/project-grid";
import { type Project } from "@/lib/firebase";
import { useState } from "react";
import SectionDivider from "../section-divider";

const ProjectPageClient = ({ projects }: { projects: Project[] }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter projects based on search query
    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );

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
