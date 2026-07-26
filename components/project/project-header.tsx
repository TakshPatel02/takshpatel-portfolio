"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

const ProjectHeader = ({
    projectCount,
    searchQuery,
    setSearchQuery,
}: {
    projectCount: number;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}) => {
    return (
        <div className="w-full">
            {/* Title + Count */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            My Work
                        </span>
                        <motion.h1
                            className="font-display text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl mb-3"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Projects{" "}
                            <span className="align-super text-xs font-normal text-text-muted sm:text-sm">
                                ({projectCount})
                            </span>
                        </motion.h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            A collection of my personal and professional projects, showcasing software engineering, interactive web applications, and open-source software.
                        </p>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card p-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-md border border-border bg-bg-secondary px-10 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-text-muted focus:outline-none focus:ring-0 cursor-text font-body"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
