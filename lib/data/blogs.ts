export interface Blog {
    id: number;
    title: string;
    slug: string;
    date: string;
    image: string;
    isNew?: boolean;
    readTime?: string;
    markdownUrl?: string;
}

export const staticBlogs: Blog[] = [
    {
        id: 1,
        title: "My Journey into Web Development",
        slug: "my-journey-into-web-development",
        date: "2023-08-15",
        image: "/images/blogs/redux-blog.webp", // this are the images that are stored in the public/images/projects folder
        isNew: true,
        readTime: "5 min read",
        markdownUrl: "/blogs/ReduxBlog.md", // this is the path to the markdown file that is stored in the public/blogs folder
    }
]