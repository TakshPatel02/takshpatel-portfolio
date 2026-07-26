# 🛠️ Portfolio Template Guide & Customization Manual

Welcome to the **Portfolio Template Guide**! This repository is not just a standard project and blog showcase — it includes unique personal engineering sections that most developer portfolios omit, such as **Curated Resources**, **System & Hardware Setup**, **NPM Package Releases**, **Component Labs**, and **Media/Movie Takeaways**.

This document will guide you step-by-step through setting up, configuring, and personalizing this template for your own developer brand.

---

## 📑 Table of Contents

- [1. Quick Start & Prerequisites](#1-quick-start--prerequisites)
- [2. Data Storage Mode: Firebase vs. Local Static Data](#2-data-storage-mode-firebase-vs-local-static-data)
  - [Option A: Firebase Realtime Database (Dynamic CMS)](#option-a-firebase-realtime-database-dynamic-cms)
  - [Option B: Local Static Files (Zero Database)](#option-b-local-static-files-zero-database)
- [3. Site Configuration (`site-config.ts`)](#3-site-configuration-site-configts)
- [4. Feature Toggles (Enable / Disable Pages)](#4-feature-toggles-enable--disable-pages)
- [5. 3D Isometric Logo Customization](#5-3d-isometric-logo-customization)
- [6. Customizing Data Stores (`lib/data/`)](#6-customizing-data-stores-libdata)
- [7. Asset & Markdown Storage Guidelines](#7-asset--markdown-storage-guidelines)
- [8. Deployment Guide](#8-deployment-guide)

---

## 1. Quick Start & Prerequisites

### Prerequisites

- **Node.js**: `v18.x` or higher
- **npm / pnpm / yarn / bun**: `v9.x` or higher

### Initial Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/takshpatel02/takshpatel-portfolio.git
   cd takshpatel-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Copy environment variables**:

   ```bash
   cp .env.example .env
   ```

4. **Start the local server**:
   ```bash
   npm run dev
   ```

---

## 2. Data Storage Mode: Firebase vs. Local Static Data

You can run this portfolio in one of two modes depending on your preference:

### Option A: Firebase Realtime Database (Dynamic CMS)

If you want to manage your projects and blogs dynamically without re-deploying code:

1. **Create a Firebase Project**:
   - Head over to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. **Enable Realtime Database**:
   - In your Firebase console, navigate to **Build** → **Realtime Database** and click **Create Database**.
   - Set Database Rules to allow public reading:
     ```json
     {
       "rules": {
         ".read": true,
         ".write": false
       }
     }
     ```

3. **Configure Environment Variables**:
   - Copy your database URL from the Firebase console (e.g. `https://your-project-default-rtdb.firebaseio.com`).
   - Paste it into your `.env` file:
     ```env
     FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
     ```

4. **Database JSON Structure (`blogs` & `project-next`)**:
   In your Realtime Database, export or insert JSON data under the **`blogs`** and **`project-next`** top-level keys (matching the structure in `new-portfolio-data.json`):

   ```json
   {
     "blogs": {
       "data": [
         {
           "id": 1,
           "title": "JavaScript Part 1: Introduction to JavaScript",
           "slug": "javascript-part-1-introduction-to-javascript",
           "date": "20.12.2025",
           "readTime": "1 hour read",
           "image": "https://res.cloudinary.com/portfolioblog/image/upload/v1772124139/js-part-1_teto1t.webp",
           "markdownUrl": "https://res.cloudinary.com/portfolioblog/raw/upload/v1771564417/01_Blog_bxwykj.md",
           "isNew": false
         }
       ]
     },
     "project-next": {
       "data": [
         {
           "id": 1,
           "title": "ComponentLabs",
           "description": "A modern React component library with 60+ ready-to-use, animated UI components built with Tailwind CSS and Motion.",
           "previewImage": "https://res.cloudinary.com/portfolioblog/image/upload/v1780062590/component-labs-portfolio_csfcc3.webp",
           "projectType": "Component Library",
           "isLive": true,
           "isGithub": true,
           "liveLink": "https://component-labs.vercel.app/",
           "githubLink": "https://github.com/TakshPatel02/ComponentLabs",
           "status": "operational",
           "bgColor": "from-violet-200 via-purple-200 to-indigo-200",
         }
       ]
     }
   }
   ```

---

### Option B: Local Static Files (Zero Database)

If you prefer keeping all data static in the codebase:

1. **Skip Firebase setup** (leave `FIREBASE_DATABASE_URL` empty).
2. **Edit Static Data Stores**:
   - Add your blog posts in [`lib/data/blogs.ts`](lib/data/blogs.ts).
   - Add your projects in [`lib/data/projects.ts`](lib/data/projects.ts).
3. **Store Assets Locally in `public/`**:
   - Place project preview images inside `public/images/projects/`.
   - Place blog cover images inside `public/images/blogs/`.
   - Place markdown blog posts inside `public/blogs/01_introduction.md`.
4. **Reference Local Paths**:
   ```typescript
   // Example local blog entry in lib/data/blogs.ts
   export const staticBlogs: BlogPost[] = [
     {
       id: 1,
       title: "Getting Started with Next.js 16",
       slug: "getting-started-with-nextjs-16",
       date: "26.07.2026",
       readTime: "4 min read",
       image: "/images/blogs/nextjs-cover.png",
       markdownUrl: "/blogs/01_nextjs.md",
       isNew: true,
     },
   ];
   ```

---

## 3. Site Configuration (`site-config.ts`)

All global personal branding, bio bullet points, social media handles, and avatar images are centralized in **[`lib/config/site-config.ts`](lib/config/site-config.ts)**:

```typescript
export const siteConfig = {
  name: "Your Name",
  tagline: "Building software that matters.",
  bio: [
    "Software Engineer specializing in React, Next.js, and TypeScript.",
    "Passionate about open-source components and high-performance Web APIs.",
    "Computer Science student building production-ready web platforms.",
  ],
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    x: "https://x.com/yourusername",
    email: "your.email@example.com",
  },
  images: {
    avatar: "/images/avatar.png", // or Cloudinary / CDN URL
  },
  githubUsername: "yourusername", // Powers the live GitHub contribution graph
};
```

---

## 4. Feature Toggles (Enable / Disable Pages)

If you don't need certain sections (such as AuthKit documentation, Component Labs, or Movies page), you can toggle them **on or off** in `site-config.ts` without touching page components:

```typescript
features: {
    showComponents: true,  // Toggle Component Labs section
    showNpmPackages: true, // Toggle NPM Packages section
    showAuthkit: false,    // Set to false to disable AuthKit page
    showResources: true,   // Toggle How I Learned / Resources page
    showMovies: true,      // Toggle Movies page
    showSystem: true,      // Toggle System setup page
}
```

Setting a feature flag to `false` automatically hides it from the navigation bar, home page, and redirects the page route cleanly.

---

## 5. 3D Isometric Logo Customization

The portfolio features an interactive 3D Isometric SVG logo (`iso-metric-logo.tsx`). You can customize the initials drawn on the 3D isometric grid directly in `site-config.ts`:

```typescript
isoMetricLogo: {
    firstChar: [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
        [1, 2], [2, 2], [3, 2], [4, 2], // Grid coordinates for 1st letter
    ],
    secondChar: [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 3],
        [2, 0], [2, 1], [2, 2],
        [3, 0], [4, 0],                 // Grid coordinates for 2nd letter
    ]
}
```

---

## 6. Customizing Data Stores (`lib/data/`)

Every section has a corresponding TypeScript data file located under **`lib/data/`**:

| Section / Page         | Target Data File                                           | Description                                                                                         |
| :--------------------- | :--------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| **Tech Stack**         | [`lib/data/tech-stack.ts`](lib/data/tech-stack.ts)         | Skill categories (Frontend, Backend, DB, Tools), skill names, icons, and `invertInDark` flags.      |
| **NPM Packages**       | [`lib/data/npm-packages.ts`](lib/data/npm-packages.ts)     | Published npm packages, install commands, shields.io badges, and repository URLs.                   |
| **Component Labs**     | [`lib/data/component-labs.ts`](lib/data/component-labs.ts) | Open-source React component showcases and category color tokens.                                    |
| **Tech Resources**     | [`lib/data/tech-resources.ts`](lib/data/tech-resources.ts) | Curated channels/courses, status pills (`completed`, `in-progress`, `ongoing`), takeaways, caveats. |
| **Movies & Media**     | [`lib/data/movies.ts`](lib/data/movies.ts)                 | Media entries, directors, ratings, quotes, and engineering takeaways.                               |
| **Developer Thoughts** | [`lib/data/dev-thoughts.ts`](lib/data/dev-thoughts.ts)     | Array of funny/honest quotes for the footer bridge illustration easter egg.                         |

> ⚠️ **Type Safety Rule**: Always ensure every record has a unique `id` (e.g. `1`, `2`, `3`) and matches the TypeScript interface contracts defined in each data file.

---

## 7. Asset & Markdown Storage Guidelines

### Storing Local Images

- Place images in `public/images/`.
- Reference them with absolute paths: `/images/your-image.png`.

### Writing Blog Posts in Markdown

- Write blog posts in standard GitHub Flavored Markdown (`.md`).
- Place markdown files in `public/blogs/01_my_post.md`.
- In your blog data, set `markdownUrl: "/blogs/01_my_post.md"`.

---

## 8. Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your portfolio repository.
4. Add Environment Variables (if using Firebase):
   - Key: `FIREBASE_DATABASE_URL`
   - Value: `https://your-firebase-database-url.firebaseio.com`
5. Click **Deploy**.

---

## 📄 License

This template is open-source under the [MIT License](LICENSE). Feel free to customize, modify, and build your personal developer website!
