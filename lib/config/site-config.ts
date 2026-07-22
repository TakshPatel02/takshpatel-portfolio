export const siteConfig = {
    name: "Taksh Patel",
    tagline: "Creating with code.Shipping the honest version.",
    bio: [
        "Ship real products, not portfolio filler — ComponentLabs (60+ open-source React components) is out and in use",
        "Deep in Next.js and Redis right now — App Router, Server Actions, Server Components, no shortcuts",
        "IT undergrad at GTU, building toward placements with things I've actually shipped, not just studied",
    ],
    links: {
        github: "https://github.com/takshpatel02",
        linkedin: "https://linkedin.com/in/taksh-patel20",
        x: "https://x.com/TakshPatel02",
        email: "takshpatel022@gmail.com",
    },
    images: {
        avatar: "https://res.cloudinary.com/portfolioblog/image/upload/v1772124137/ghibli_by7gu7.webp",
    },
    githubUsername: "takshpatel02", // for the github-activity component

    features: {
        showComponents: true,
        showNpmPackages: true,
        showAuthkit: true,
        showResources: true,
        showMovies: true,
        showSystem: true,
    }
}

export type SiteConfig = typeof siteConfig;