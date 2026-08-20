export interface RecentlyCompletedItem {
    title: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface NowData {
    currentlyDoing: string[];
    lastUpdated: string;
    recentlyCompleted: RecentlyCompletedItem[];
}

// Optional: You can add your now section data here as static data if you want to avoid fetching from Firebase.
export const staticNowData: NowData = {
    currentlyDoing: [
        "Grinding DSA and system design for placements",
        "Building PrepDeck — interview prep question bank",
        "Reading System Design Interview vol. 2",
    ],
    lastUpdated: "2026-08-20",
    recentlyCompleted: [
        {
            title: "Shipyard",
            description:
                "A cozy, time-aware developer workspace that shifts scenes through the day, paired with a minimal YouTube-playlist music player.",
            githubUrl: "https://github.com/TakshPatel02/shipyard-fm",
            liveUrl: "https://shipyard-fm.vercel.app",
        },
    ],
};