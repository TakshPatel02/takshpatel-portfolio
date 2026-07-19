import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogMarkdown, getBlogs } from "@/lib/firebase";
import BlogDetailClient from "@/components/blog/blog-detail-client";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ blogSlug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogSlug } = await params;
  const post = await getBlogBySlug(blogSlug);
  if (!post) return {};

  return {
    title: post.title,
    openGraph: { title: post.title, images: post.image ? [post.image] : [] },
  };
}

export default async function BlogPage({ params }: Props) {
    const { blogSlug } = await params;
    const post = await getBlogBySlug(blogSlug);

    if (!post) {
        notFound();
    }
    const markdownContent = await getBlogMarkdown(post);

    return <BlogDetailClient post={post} markdownContent={markdownContent} />;
}