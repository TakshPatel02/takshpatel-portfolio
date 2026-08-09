import BlogPageClient from "@/components/blog/blog-page-client";
import { siteConfig } from "@/lib/config/site-config";
import { getBlogs } from "@/lib/firebase";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Blogs`,
    description: `Read the latest blogs and articles on ${siteConfig.name}. Stay updated with our insights, tips, and stories.`,
}

const BlogPage = async () => {
    const allBlogs = await getBlogs();
    const blogs = [...allBlogs].reverse();

    return <BlogPageClient blogs={blogs} />;
};

export default BlogPage;
