export type ResourceStatus = "completed" | "in-progress" | "ongoing";

export interface ExternalLink {
    label: string;
    url: string;
}

export interface LearningResource {
    id: number;
    creator: string;
    handle: string;
    platform: "YouTube";
    channelUrl: string;
    status: ResourceStatus;
    topics: string[];
    whatILearned: string;
    whyIRecommend: string;
    caveat?: string;
    links?: ExternalLink[];
}

export const learningResources: LearningResource[] = [
    {
        id: 1,
        creator: "Hitesh Choudhary",
        handle: "Chai aur Code",
        platform: "YouTube",
        channelUrl: "https://www.youtube.com/@chaiaurcode",
        status: "completed",
        topics: ["React", "TypeScript", "Redis", "Networking"],
        whatILearned:
            "Completed the full React course, going well beyond the basics — topics like how React renders JSX, building a custom mini-renderer to understand React internals, hooks, state management, and real-world projects. Also finished the TypeScript course and made personal notes from it.",
        whyIRecommend:
            "This is the channel for people who want to understand React, not just use it. Every topic is explained from a technical and conceptual angle, so you come away knowing the 'why' behind the API, not just the 'how'. The course library is also constantly growing — Redis, Networking (ongoing), and more.",
        caveat:
            "The React course can feel overwhelming if you're a complete beginner picking React up for the very first time — it assumes you're ready to go deep from day one.",
        links: [
            {
                label: "TypeScript Notes (my repo)",
                url: "https://github.com/TakshPatel02/TypeScript-Decoded",
            },
        ],
    },
    {
        id: 2,
        creator: "Sheryians Coding School",
        handle: "Sheryians",
        platform: "YouTube",
        channelUrl: "https://www.youtube.com/@sheryians",
        status: "completed",
        topics: ["GSAP", "Scroll Animations", "React Basics", "Email Auth"],
        whatILearned:
            "Learned GSAP-driven scroll-based animations and design-first thinking, got my first proper introduction to React through beginner-friendly mini projects, and picked up email authentication — all from the same channel.",
        whyIRecommend:
            "Perfect starting point if you're new to React and don't want to be thrown into the deep end immediately. The GSAP content in particular is some of the best free animation education available — it teaches you to think visually and design-first, not just code-first.",
        links: [
            {
                label: "React Mini Projects (my repo)",
                url: "https://github.com/TakshPatel02/React-Mini-Projects",
            },
        ],
    },
    {
        id: 3,
        creator: "Piyush Garg",
        handle: "piyushgargdev",
        platform: "YouTube",
        channelUrl: "https://www.youtube.com/@piyushgargdev",
        status: "completed",
        topics: ["Node.js", "Backend", "Express", "System Design"],
        whatILearned:
            "Learned backend fundamentals through the collaborative course with Hitesh Choudhary and through standalone Node.js / Express content. It solidified how to think about server-side logic, APIs, and backend architecture from scratch.",
        whyIRecommend:
            "Great for getting unstuck on the backend side of things. The content is practical and teaches you to think like a backend engineer. The 'Dead' series is also a hidden gem — it surfaces lesser-known alternatives to popular tools (think Sapling as a Git alternative), which broadens your technical perspective.",
    },
    {
        id: 4,
        creator: "JS Mastery",
        handle: "JavaScript Mastery",
        platform: "YouTube",
        channelUrl: "https://www.youtube.com/@javascriptmastery",
        status: "in-progress",
        topics: ["NestJS", "TypeScript Backend", "Full-Stack Projects"],
        whatILearned:
            "Currently following their NestJS content to learn TypeScript-first backend development. The one-shot tutorials are remarkably thorough for free content.",
        whyIRecommend:
            "If you learn best by building full projects rather than isolated concepts, this channel delivers. The one-shot format means you get end-to-end context in a single sitting, and the production quality keeps up with the depth.",
    },
    {
        id: 5,
        creator: "Manu Arora",
        handle: "manuarora",
        platform: "YouTube",
        channelUrl: "https://www.youtube.com/@manuarora",
        status: "completed",
        topics: ["Tailwind CSS", "Framer Motion", "UI Design", "Animation"],
        whatILearned:
            "Learned Tailwind CSS and Framer Motion, but more importantly learned how to think about UI design — how to look at any website, deconstruct it, and recreate the animations and layout decisions behind it.",
        whyIRecommend:
            "No other channel taught me design thinking the way Manu's videos did. It's not about memorising classes or APIs — it's about developing an eye for detail and understanding the reasoning behind visual choices. This portfolio was directly inspired by watching his content.",
        links: [
            {
                label: "Tailwind and Motion Notes (Manu arora's Website)",
                url: "https://www.acelearn.dev/"
            }
        ]
    },
    {
        id: 6,
        creator: "Code Ki Pathshala",
        handle: "Codekipathshala",
        platform: "YouTube",
        channelUrl: "https://www.youtube.com/@CodeKiPathshala73",
        status: "ongoing",
        topics: ["React", "Performance", "Lazy Loading", "Advanced Patterns"],
        whatILearned:
            "Currently following the React Bootcamp series. Picked up concepts like lazy loading and code splitting that go beyond what most beginner courses cover. The free Notion notes that accompany the series are exceptionally well-structured.",
        whyIRecommend:
            "The teaching style is clear and paced well — neither too slow nor too rushed. The accompanying free Notion notes are genuinely one of the best React reference sets I've come across, and they're freely available to everyone.",
        links: [
            {
                label: "Free React Bootcamp Notes (Notion)",
                url: "https://sand-opal-9d4.notion.site/ReactJS-Bootcamp-19c3fe27a9d583da88c981a3d2972a7f",
            },
        ],
    },
];

