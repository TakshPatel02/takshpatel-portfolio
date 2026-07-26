import { firebaseConfig } from "./config/firebase-config";
import type { Project } from "./data/projects";
import type { Blog } from "./data/blogs";
import { staticProjects } from "./data/projects";
import { staticBlogs } from "./data/blogs";
import { readFile } from "fs/promises";
import path from "path";

export async function getBlogs(): Promise<Blog[]> {
    const useFirebase = !!process.env.FIREBASE_DATABASE_URL;

    if (!useFirebase) {
        return staticBlogs;
    }

    try {
        const response = await fetch(`${firebaseConfig.databaseURL}/blogs.json`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) throw new Error("Failed to fetch data from Firebase");

        const data = await response.json();

        if (!data) return [];

        let rawItems: any[] = [];
        if (Array.isArray(data)) {
            rawItems = data;
        } else if (typeof data === "object" && data !== null) {
            if (Array.isArray(data.data)) {
                rawItems = data.data;
            } else if (typeof data.data === "object" && data.data !== null) {
                rawItems = Object.values(data.data);
            } else {
                rawItems = Object.values(data).flat();
            }
        }

        const blogs: Blog[] = rawItems.filter(
            (item): item is Blog =>
                item !== null &&
                typeof item === "object" &&
                typeof item.title === "string" &&
                typeof item.slug === "string"
        );

        return blogs;

    } catch (err) {
        return staticBlogs;
    }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
    const blogs = await getBlogs();

    const normalize = (s: string) => {
        try {
            return decodeURIComponent(s).replace(/\+/g, ' ');
        } catch {
            return s.replace(/\+/g, ' ');
        }
    };

    const targetSlug = normalize(slug);
    return blogs.find((b) => b && b.slug && normalize(b.slug) === targetSlug) ?? null;
}

export async function getBlogMarkdown(post: Blog): Promise<string> {
    if (!post.markdownUrl) {
        return "# Content Coming Soon\n\nThis blog post is currently being written.";
    }

    try {
        // Local file (starts with /) → read from public/ directly
        if (post.markdownUrl.startsWith("/")) {
            const filePath = path.join(process.cwd(), "public", post.markdownUrl);
            return await readFile(filePath, "utf-8");
        }

        // Remote URL → fetch normally
        const res = await fetch(post.markdownUrl, { next: { revalidate: 3600 } });
        if (!res.ok) throw new Error("Failed to fetch markdown content");
        return await res.text();
    } catch {
        return "# Content Unavailable\n\nCouldn't load this post's content right now.";
    }
}

export async function getProjects(): Promise<Project[]> {
    const useFirebase = !!process.env.FIREBASE_DATABASE_URL;

    if (!useFirebase) {
        return staticProjects;
    }

    try {
        const response = await fetch(`${firebaseConfig.databaseURL}/project.json`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) throw new Error("Failed to fetch data from Firebase");

        const data = await response.json();

        if (!data) return [];

        let rawItems: any[] = [];
        if (Array.isArray(data)) {
            rawItems = data;
        } else if (typeof data === "object" && data !== null) {
            if (Array.isArray(data.data)) {
                rawItems = data.data;
            } else if (typeof data.data === "object" && data.data !== null) {
                rawItems = Object.values(data.data);
            } else {
                rawItems = Object.values(data).flat();
            }
        }

        const projects: Project[] = rawItems.filter(
            (item): item is Project =>
                item !== null &&
                typeof item === "object" &&
                typeof item.title === "string"
        );

        return projects;

    } catch (err) {
        return staticProjects;
    }
}