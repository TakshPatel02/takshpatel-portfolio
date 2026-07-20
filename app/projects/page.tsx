import ProjectPageClient from "@/components/project/project-page-client";
import { getProjects } from "@/lib/firebase";

const ProjectsPage = async () => {
    const allProjects = await getProjects();
    const projects = [...allProjects];

    return <ProjectPageClient projects={projects} />;
};

export default ProjectsPage;
