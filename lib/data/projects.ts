export interface Project {
    id: number;
    title: string;
    description: string;
    status: string;
    previewImage: string;
    isGithub: boolean;
    isLive: boolean;
    githubLink?: string;
    liveLink?: string;
    bgColor?: string;
    projectType: string;
}

// Optional: You can add your projects here as static data if you want to avoid fetching from Firebase for some reason.
export const staticProjects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        status: "Completed",
        previewImage: "/images/projects/image.png", // this are the images that are stored in the public/images/projects folder
        isGithub: true,
        isLive: true,
        githubLink: "https://github.com/takshpatel02/portfolio",
        liveLink: "https://takshpatel02.github.io/portfolio",
        bgColor: "#f0f0f0",
        projectType: "Web Development",
    },
]