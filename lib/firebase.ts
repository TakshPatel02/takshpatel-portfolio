import { firebaseConfig } from "./config/firebase-config";

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    image: string;
    isNew?: boolean;
}

export async function getBlogs(): Promise<BlogPost[]> {
    const response = await fetch(`${firebaseConfig.databaseURL}/blogs.json`, {
        next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch data from Firebase");

    const data = await response.json();

    if (!data) return [];

    const blogs: BlogPost[] = Object.values(data).flat() as BlogPost[];

    return blogs;
}

export async function getProjects(): Promise<any[]> {
    const response = await fetch(`${firebaseConfig.databaseURL}/projects.json`, {
        next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch data from Firebase");

    const data = await response.json();

    if (!data) return [];

    const projects: any[] = Object.values(data).flat();

    return projects;
}