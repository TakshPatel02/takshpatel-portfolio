export interface Skill {
    name: string
    icon: string
    invertInDark: boolean
}

export interface TechCategory {
    id: string
    name: string
    skills: Skill[]
}

export const techCategories : TechCategory[] = [
    {
        id: "01",
        name: "languages",
        skills: [
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                invertInDark: false,
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                invertInDark: false,
            },
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                invertInDark: false,
            },
        ],
    },
    {
        id: "02",
        name: "frontend",
        skills: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                invertInDark: false,
            },
            {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                invertInDark: false,
            },
            {
                name: "Redux Toolkit",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redux.svg",
                invertInDark: true,
            },
            {
                name: "Motion",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg",
                invertInDark: true,
            },
            {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                invertInDark: true,
            },
            {
                name: "Component-Labs",
                icon: "Boxes",
                invertInDark: false,
            },
        ],
    },
    {
        id: "03",
        name: "backend",
        skills: [
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                invertInDark: false,
            },
            {
                name: "Postgres",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                invertInDark: true,
            },
            {
                name: "Prisma",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg",
                invertInDark: true,
            },
            {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                invertInDark: false,
            },
        ],
    },
    {
        id: "04",
        name: "tools & ai",
        skills: [
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                invertInDark: false,
            },
            {
                name: "Claude",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg",
                invertInDark: true,
            },
            {
                name: "Gemini",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlegemini.svg",
                invertInDark: true,
            },
            {
                name: "ChatGPT",
                icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
                invertInDark: true,
            },
        ],
    },
];