import BlogPageClient from "@/components/blog/blog-page-client";
import { getBlogs } from "@/lib/firebase";

const BlogPage = async () => {
    const allBlogs = await getBlogs();
    const blogs = [...allBlogs].reverse();

    return <BlogPageClient blogs={blogs} />;
};

export default BlogPage;
