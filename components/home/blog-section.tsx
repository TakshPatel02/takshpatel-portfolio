import { getBlogs } from "@/lib/firebase";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "../blog/blog-card";

const BlogSection = async () => {
    const allBlogs = await getBlogs();
    const blogsData = [...allBlogs].reverse().slice(0, 4);
    const rows = [];
    for (let i = 0; i < blogsData.length; i += 2) {
        rows.push(blogsData.slice(i, i + 2));
    }

    return (
        <section id="blog" className="w-full scroll-mt-24">
            {/* Header */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
                        {/* Technical Drawing Reference Line */}
                        <div className="flex items-center gap-2.5 w-full font-mono text-[11px] text-text-muted mb-2.5 select-none">
                            <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-text-muted opacity-60">
                                <path d="M 0 10 L 0 0 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                            </svg>
                            <span className="shrink-0 px-1.5 py-0.5 rounded border border-border bg-(--color-surface-elevated) font-mono text-[10px] font-semibold text-text-primary tracking-wider">
                                06
                            </span>
                            <div className="flex-1 h-px border-b border-dashed border-border" />
                            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                                // WRITINGS
                            </span>
                        </div>

                        {/* Section Title */}
                        <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary flex items-center gap-2">
                            Blog{" "}
                            <span className="text-xs font-mono font-normal text-text-muted sm:text-sm">
                                ({allBlogs.length})
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        {rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`grid grid-cols-1 sm:grid-cols-2 ${rowIndex < rows.length - 1 ? "border-b border-border" : ""
                                    }`}
                            >
                                {/* First card */}
                                {row[0] && (
                                    <div className="border-b border-border sm:border-b-0 sm:border-r">
                                        <BlogCard post={row[0]} />
                                    </div>
                                )}

                                {/* Second card */}
                                {row[1] && (
                                    <div className={row.length === 1 ? "sm:border-r border-border" : ""}>
                                        <BlogCard post={row[1]} />
                                    </div>
                                )}

                                {/* Empty cell if odd card in row */}
                                {!row[1] && (
                                    <div className="hidden sm:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* All Posts Footer */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <Link
                            href="/blog"
                            className="font-mono group flex w-full items-center justify-center gap-2 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-text-muted hover:text-text-primary hover:bg-hover-bg transition-all duration-200"
                        >
                            <span>All Posts</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
