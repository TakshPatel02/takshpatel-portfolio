"use client";
import BlogHeader from "@/components/blog/blog-header";
import BlogGrid from "@/components/blog/blog-grid";
import { type Blog } from "@/lib/data/blogs";
import { useState } from "react";
import SectionDivider from "../section-divider";

const BlogPageClient = ({ blogs }: { blogs: Blog[] }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter blogs based on search query
    const filteredPosts = blogs.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="w-full">
            <BlogHeader
                postCount={blogs.length}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <BlogGrid posts={filteredPosts} />
            <SectionDivider />
        </div>
    );
};

export default BlogPageClient;
