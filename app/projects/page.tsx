import ProjectPageClient from "@/components/project/project-page-client";
import { siteConfig } from "@/lib/config/site-config";
import { getProjects } from "@/lib/firebase";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Projects · ${siteConfig.name}`,
    description: "A collection of my personal and professional projects, showcasing my skills and experience in software development."
}

const ProjectsPage = async () => {
    const allProjects = await getProjects();
    const projects = [...allProjects];

    return <ProjectPageClient projects={projects} />;
};

export default ProjectsPage;
