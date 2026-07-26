"use client";
import { type Blog } from "@/lib/data/blogs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    className="h-full w-full object-cover"
    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      (e.target as HTMLImageElement).style.display = "none";
    }}
  />
);

export const BlogCard = ({ post }: { post: Blog }) => (
    <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="group relative flex flex-col h-full p-3 sm:p-4 transition-colors duration-300 hover:bg-hover-bg">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden rounded-md bg-bg-secondary border border-border">
                <BlogImage src={post.image} alt={post.title} />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/3 dark:group-hover:bg-white/2" />
            </div>

            {/* Content */}
            <div className="mt-2.5 flex flex-col flex-1 gap-1">
                <div className="flex items-start gap-2">
                    <h3 className="font-display text-sm font-semibold text-text-primary leading-snug sm:text-[15px] tracking-[0.01em]">
                        {post.title}
                    </h3>
                    {post.isNew && (
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                    )}
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                    {post.date}
                </p>
            </div>

            {/* Hover arrow indicator */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-3.5 w-3.5 text-text-muted" />
            </div>
        </div>
    </Link>
);