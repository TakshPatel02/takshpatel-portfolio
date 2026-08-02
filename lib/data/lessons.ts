export interface LessonItem {
    id: string;
    title: string;
    description: string;
    lesson: string;
}

export const lessons: LessonItem[] = [
    {
        id: "01",
        title: "Watched tutorials. Never practiced alone.",
        description: "Started web dev by copying instructor code line-by-line, never building anything on my own after. Wasted months thinking I was learning, when I was really just transcribing.",
        lesson: "watching isn't learning. Build something yourself, even badly, before moving to the next video.",
    },
    {
        id: "02",
        title: "Ported and redesigned in the same session.",
        description: "Tried improving the architecture while migrating components 1:1 at the same time. Broke things in ways I couldn't easily bisect or roll back.",
        lesson: "port first, improve second. Never both at once.",
    },
    {
        id: "03",
        title: "Built a portfolio from inspiration. Shipped something that looked copied.",
        description: "Took visual cues from someone else's site and, without realizing how far it drifted, ended up with something people read as a copy, not an homage.",
        lesson: "inspiration needs its own execution, not borrowed execution with different colors.",
    },
    {
        id: "04",
        title: "Trusted only myself. Ignored feedback.",
        description: "Dismissed early reviews instead of taking them seriously, assuming I already knew best. Everything changed the moment I started listening — but only to people with real experience in the area, not just anyone with an opinion.",
        lesson: "seek feedback from people who've actually done the thing. Take it seriously. Filter the source, not the act of listening.",
    },
];
