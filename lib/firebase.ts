import { firebaseConfig } from "./config/firebase-config";

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    image: string;
    isNew?: boolean;
    readTime?: string;
    markdownUrl?: string;
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

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  
  const normalize = (s: string) => {
      try {
          return decodeURIComponent(s).replace(/\+/g, ' ');
      } catch {
          return s.replace(/\+/g, ' ');
      }
  };

  const targetSlug = normalize(slug);
  return blogs.find((b) => normalize(b.slug) === targetSlug) ?? null;
}

export async function getBlogMarkdown(post: BlogPost): Promise<string> {
  if (!post.markdownUrl) {
    return "# Content Coming Soon\n\nThis blog post is currently being written.";
  }

  const res = await fetch(post.markdownUrl, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch markdown content");

  return res.text();
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