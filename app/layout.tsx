import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Tiny5 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";
import { cookies } from "next/headers";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { Analytics } from '@vercel/analytics/next';
import VisitorTracker from "@/components/visitor-tracker";

const inter = Inter({
  weight: ['400', '500', '600'],
  variable: "--font-inter",
  subsets: ["latin"],
})

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  weight: "400",
  variable: "--font-tiny5",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taksh Patel | Full Stack Developer",
  description: "Taksh Patel is a full stack developer skilled in React, Tailwind, GSAP, Node.js, MongoDB and PostgreSQL. Building modern, high-performance web applications.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html
      lang="en"
      className={`${theme === "dark" ? "dark" : ""} ${inter.variable} ${mono.variable} ${tiny5.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider initialTheme={theme}>
          <SmoothScrollProvider>
            <Navbar />
            <VisitorTracker />
            {children}
            <Analytics />
            <Footer />
            <ScrollToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

