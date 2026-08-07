# ⚡ Taksh Patel — Personal Portfolio & Reusable Template

[![Live Portfolio](https://img.shields.io/badge/Live_Site-07080a?style=for-the-badge&logo=vercel&logoColor=white)](https://takshpatel.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

> **"Creating with code. Shipping the honest version."**  
> A high-precision, technical developer portfolio and fully reusable template built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Firebase. Designed around Raycast's restrained dark/light surface aesthetics, hairline border grids, and technical blueprint drawing references.

---

## 🚀 Reusable Template Notice

> [!TIP]
> **Complete Portfolio Template**: This codebase is structured to be completely modular and reusable as a production-ready developer portfolio template.  
> 📖 **For detailed setup, configuration, data customization, and deployment instructions, refer to [`Template.md`](Template.md).**

---

## 🌐 Live Demo & Deployment

- **Production URL**: [https://takshpatel.vercel.app](https://takshpatel.vercel.app)
- **Deployment Platform**: Vercel

---

## ✨ Design System & Aesthetic Highlights

- **Raycast-Inspired Dark/Light Polarity**:
  - **Dark Mode**: `#0a0a0b` canvas with `#141516` elevated surfaces and `#232425` hairline borders.
  - **Light Mode**: `#ffffff` canvas with `#f7f7f8` secondary surfaces and `#d8d8da` borders.
  - **Hairline Border Grid System**: Zero drop shadows — card boundaries and structure are defined purely by clean border hairlines.
  - **View Transitions API**: Smooth circle-wipe theme switching via `document.startViewTransition`.
- **Technical Drawing Blueprint Header System**:
  - Section headings designed like technical drawing reference callouts with inline SVG dashed L-corner ticks matching isometric drawing guides:
    - `01 // BIO` — Overview & Bio (`Where I'm at`)
    - `02 // LANGUAGES` — Tech Stack & Skills (`Stack`)
    - `03 // BUILDS` — Projects Showcase (`Projects`)
    - `04 // MODULES` — NPM Packages (`NPM Packages`)
    - `05 // UI LAB` — Component Labs (`Components`)
    - `06 // WRITINGS` — Blog Articles & Insights (`Blog`)
    - `07 // LEARNINGS` — How I Learned / Curated Resources (`How I Learned`)
- **3D Isometric TP Logo**: Interactive 3D blueprint logo built with SVG isometric grid geometry (`iso-metric-logo.tsx`).
- **Interactive Easter Egg**: Clickable bridge character illustration in the footer featuring cycling developer thoughts (`devThoughts`) with click-outside auto-dismissal.

---

## 🛠️ Complete Page & Component Breakdown

### 🏠 Home Page (`/`)
1. **Hero Panel (`hero-panel.tsx`)**: Avatar badge, live status beacon, local live clock (`live-clock.tsx`), 3D Isometric TP logo (`iso-metric-logo.tsx`), and tagline.
2. **Banner Hero (`banner-hero.tsx`)**: Time-of-day dynamic banner image with an info strip showing current frame, next frame countdown, and optional visitor count.
3. **01 // BIO (`intro-section.tsx`)**: Bio bullet points, social media links, PDF resume CTA, and live GitHub contribution activity graph (`github-activity.tsx`).
4. **02 // LANGUAGES (`tech-stack.tsx`)**: Categorized tech stack (Frontend, Backend, Databases, Tools) with dark-invert asset support.
5. **03 // BUILDS (`project-section.tsx`)**: App Window Showcase featuring `projectType` tags, live preview mockups (`● ● ●`), live URLs, and GitHub links.
6. **04 // MODULES (`npm-packages.tsx`)**: Open-source npm packages with live shields.io badges and one-click copy install commands (`copy-button.tsx`).
7. **05 // UI LAB (`component-labs.tsx`)**: Curated slice of 60+ open-source React components with category color tagging.
8. **06 // WRITINGS (`blog-section.tsx`)**: Latest blog posts fetched dynamically from Firebase Realtime Database. Controlled by `showBlogs` flag.
9. **07 // LEARNINGS (`tech-resources.tsx`)**: Curated list of educators, courses, and key learning references with honest takeaways.

### 📁 Projects (`/projects`)
- Client search & filtering (`project-page-client.tsx`, `project-header.tsx`).
- Alternating full-width app window cards (`project-card.tsx`, `project-grid.tsx`) displaying `projectType` (e.g. `FULL STACK APP`, `CLI TOOL`), preview screenshots inside `● ● ●` browser frames, live links, and source code.

### 📝 Blog (`/blog` & `/blog/[slug]`)
- Dynamic blog listing (`blog-page-client.tsx`, `blog-header.tsx`, `blog-grid.tsx`, `blog-card.tsx`).
- Real-time search filtering and markdown reader (`blog-detail-client.tsx`) supporting code syntax highlighting (`react-markdown`, `rehype-highlight`, `remark-gfm`).

### 🔑 AuthKit Documentation (`/authkit`)
- Complete technical showcase for AuthKit authentication workflows:
  - `authkit-hero.tsx` & `why-authkit.tsx`: Intro & value proposition.
  - `quick-start.tsx`, `env-variables.tsx`, `project-structure.tsx`: Setup guide & env specs.
  - `api-example.tsx`, `api-reference.tsx`, `scripts.tsx`: Code examples & reference scripts.
  - `rate-limiting.tsx`, `security-highlights.tsx`: Security specs & rate limit rules.
  - `authkit-links.tsx` & `built-with.tsx`: Resources & tech stack breakdown.

### 📄 Resume (`/resume`)
- Standalone hero header (`Curriculum Vitae // Resume`).
- PDF Viewer (`resume-viewer.tsx`) powered by `react-pdf` with dynamic client loading and one-click download (`Taksh_Patel_Resume.pdf`).

### 📚 Resources (`/resources`)
- Full list of learning resources, creators, topics, status tags (`Completed`, `In Progress`, `Ongoing`), takeaways, and caveats.

### 💻 System / Setup (`/system`)
- Hardware specs, software tools, developer setup, and build environment details.

### 🎬 Movies (`/movies`)
- Personal list of films and stories with key takeaways.

---

## 📂 Exhaustive Project Directory Structure

```
takshpatel-portfolio/
├── app/                        # Next.js 16 App Router Pages
│   ├── authkit/                # AuthKit documentation page
│   ├── blog/                   # Blog listing page
│   │   └── [slug]/             # Markdown blog detail post page
│   ├── movies/                 # Movies page
│   ├── projects/               # Projects page
│   ├── resources/              # Resources page
│   ├── resume/                 # Resume page
│   ├── system/                 # System setup page
│   ├── globals.css             # Tailwind v4 bridge & CSS design system tokens
│   ├── layout.tsx              # Root layout & global providers
│   └── page.tsx                # Home page
├── components/                 # Component Library
│   ├── authkit/                # AuthKit Documentation Components
│   │   ├── api-example.tsx
│   │   ├── api-reference.tsx
│   │   ├── authkit-hero.tsx
│   │   ├── authkit-links.tsx
│   │   ├── built-with.tsx
│   │   ├── env-variables.tsx
│   │   ├── project-structure.tsx
│   │   ├── quick-start.tsx
│   │   ├── rate-limiting.tsx
│   │   ├── scripts.tsx
│   │   ├── security-highlights.tsx
│   │   └── why-authkit.tsx
│   ├── blog/                   # Blog Components
│   │   ├── blog-card.tsx
│   │   ├── blog-detail-client.tsx
│   │   ├── blog-grid.tsx
│   │   ├── blog-header.tsx
│   │   └── blog-page-client.tsx
│   ├── home/                   # Home Section Components
│   │   ├── banner-hero.tsx
│   │   ├── blog-section.tsx
│   │   ├── component-labs.tsx
│   │   ├── github-activity.tsx
│   │   ├── hero-panel.tsx
│   │   ├── intro-section.tsx
│   │   ├── iso-metric-logo.tsx
│   │   ├── live-clock.tsx
│   │   ├── npm-packages.tsx
│   │   ├── project-section.tsx
│   │   ├── tech-resources.tsx
│   │   └── tech-stack.tsx
│   ├── project/                # Project Components
│   │   ├── project-card.tsx
│   │   ├── project-grid.tsx
│   │   ├── project-header.tsx
│   │   └── project-page-client.tsx
│   ├── resume/                 # Resume Component
│   │   └── resume-viewer.tsx
│   ├── bridge-illustration.tsx # Interactive devThoughts speech bubble easter egg
│   ├── copy-button.tsx         # One-click copy utility button
│   ├── fliplink.tsx            # Animated flip text link component
│   ├── footer.tsx              # Footer layout & bridge illustration host
│   ├── navbar.tsx              # Navigation bar with feature-flag-driven links
│   ├── scroll-to-top.tsx       # Floating scroll-to-top button
│   ├── section-divider.tsx     # Hairline section divider bar
│   ├── smooth-scroll-provider.tsx # Lenis smooth scrolling provider
│   ├── theme-provider.tsx      # Theme context & view transition handler
│   ├── visitor-count.tsx       # Displays total visitor count from Redis
│   └── visitor-tracker.tsx     # Fires POST to /api/visitor on page load (Redis INCR)
├── lib/                        # Utilities & Data Specifications
│   ├── config/                 # Site configuration & Firebase options
│   │   ├── firebase-config.ts
│   │   └── site-config.ts
│   ├── data/                   # Data Store (15 data files)
│   │   ├── api-examples.ts
│   │   ├── api-references.ts
│   │   ├── authkit-links.ts
│   │   ├── authkit-scripts.ts
│   │   ├── authkit-tech.ts
│   │   ├── blogs.ts
│   │   ├── component-labs.ts
│   │   ├── dev-thoughts.ts
│   │   ├── movies.ts
│   │   ├── npm-packages.ts
│   │   ├── projects.ts
│   │   ├── rate-limit.ts
│   │   ├── security-highlights.ts
│   │   ├── tech-resources.ts
│   │   └── tech-stack.ts
│   ├── soundcn/                # Sound effect assets & handlers
│   ├── firebase.ts             # Firebase Realtime Database API getters
│   └── redis.ts                # Upstash Redis client (visitor counter)
├── public/                     # Static assets, fonts, & PDF resume
├── package.json                # Project dependencies & scripts
├── README.md                   # Project documentation
└── Template.md                 # Template customization guide
```

---

## 🧰 Tech Stack Summary

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server Components) |
| **Library** | [React 19](https://react.dev/) / React DOM 19 |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), Vanilla CSS Tokens |
| **Database & CMS** | [Firebase Realtime Database](https://firebase.google.com/) |
| **Cache / Counter** | [Upstash Redis](https://upstash.com/) (visitor counter — optional via `showVisitorCount` flag) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/), [Lenis Scroll](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Markdown & Syntax**| `react-markdown`, `rehype-highlight`, `remark-gfm`, `highlight.js` |
| **PDF Viewer** | `react-pdf` |
| **Analytics** | `@vercel/analytics` |

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/takshpatel02/takshpatel-portfolio.git
   cd takshpatel-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 👤 Author

**Taksh Patel**
- **Website**: [https://takshpatel.vercel.app](https://takshpatel.vercel.app)
- **GitHub**: [@takshpatel02](https://github.com/takshpatel02)
- **LinkedIn**: [taksh-patel20](https://linkedin.com/in/taksh-patel20)
- **X (Twitter)**: [@TakshPatel02](https://x.com/TakshPatel02)
- **Email**: `takshpatel022@gmail.com`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
