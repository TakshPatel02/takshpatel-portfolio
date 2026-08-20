export const siteConfig = {
    name: "Taksh Patel",
    bio: [
        "Hi, I'm Taksh Patel. I'm an IT undergrad and full-stack developer.",
        "I've published a few open-source packages — including ComponentLabs, a React component library with 60+ components — and I'm currently building a new project to help with interview prep.",
        "I write about what I learn and ship on my blog. Check out my work below or grab my resume."
    ],

    seo: {
        title: "Taksh Patel | Full Stack Developer",
        description: "Taksh Patel is a full stack developer skilled in React, Next.js, Tailwind, Node.js, MongoDB and PostgreSQL. Building modern, high-performance web applications and open-source tools.",
        url: "https://takshpatel.vercel.app",
        ogImage: "https://res.cloudinary.com/portfolioblog/image/upload/v1772124137/ghibli_by7gu7.webp",
        keywords: [
            "Taksh Patel",
            "Full Stack Developer",
            "Next.js Developer",
            "React Developer",
            "Typescript",
            "Portfolio",
            "Open Source",
            "Web Developer",
        ]
    },

    links: {
        github: "https://github.com/takshpatel02",
        linkedin: "https://linkedin.com/in/taksh-patel20",
        x: "https://x.com/TakshPatel02",
        email: "takshpatel022@gmail.com",
        hashnode: "https://takshpatel02.hashnode.dev/"
    },
    images: {
        avatar: "https://res.cloudinary.com/portfolioblog/image/upload/v1772124137/ghibli_by7gu7.webp",
    },
    githubUsername: "takshpatel02", // for the github-activity component

    features: {
        showIsoMetricLogo: false,
        showComponents: true,
        showNpmPackages: true,
        showAuthkit: true,
        showResources: true,
        showMovies: true,
        showSystem: true,
        showLessons: true,
        showShowcase: true,
        showBlogs: true,
        showVisitorCount: true,
        showNowSection: true,
    },

    isoMetricLogo: {
        firstChar: [
            [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
            [1, 2], [2, 2], [3, 2], [4, 2],
        ],
        secondChar: [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 3],
            [2, 0], [2, 1], [2, 2],
            [3, 0], [4, 0],
        ]
    }
}

export type SiteConfig = typeof siteConfig;