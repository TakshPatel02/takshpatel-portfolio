'use client'
import { useState } from "react";
import Link from 'next/link';
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site-config";
import { AnimatePresence, motion } from "framer-motion";

const allNavItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog" },
    { label: "AuthKit", to: "/authkit", flag: "showAuthkit" as const },
    { label: "Resume", to: "/resume" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    const navItems = allNavItems.filter((item) => !item.flag || siteConfig.features[item.flag]);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur transition-colors duration-300">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="grid h-16 grid-cols-2 items-center border-x border-border px-4">
                        <Link
                            href="/"
                            className="tiny5-font font-bold tracking-tight text-text-primary text-5xl"
                            aria-label="Go to homepage"
                        >
                            TP
                        </Link>

                        <div className="flex items-center justify-end gap-3">
                            <nav className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex">
                                {navItems.map((item) => {
                                    return (
                                        <Link
                                            key={item.to}
                                            href={item.to}
                                            className={`font-semibold hover:text-text-primary ${pathname === item.to ? "text-text-primary font-semibold" : "hover:text-text-primary text-text-secondary"}`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <button
                                type="button"
                                className="rounded-full border border-border bg-btn-bg p-2 text-text-secondary transition hover:border-border hover:text-text-primary"
                                aria-label="Toggle theme"
                                onClick={toggleTheme}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                            </button>

                            <button
                                type="button"
                                className="flex items-center rounded-full border border-border bg-btn-bg p-2 text-text-secondary transition hover:border-border hover:text-text-primary md:hidden"
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                            >
                                {isOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                            className="absolute left-0 right-0 top-full mt-2 px-4 md:hidden"
                        >
                            <div className="mx-auto w-full max-w-200">
                                <div className="rounded-2xl border border-border bg-bg-secondary/95 p-4 shadow-xl backdrop-blur-lg">
                                    <div className="flex flex-col gap-2 text-sm font-medium text-text-secondary">
                                        {navItems.map((item, i) => {
                                            return (
                                                <motion.div
                                                    key={item.to}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05 + 0.1, type: "spring", bounce: 0 }}
                                                >
                                                    <Link
                                                        href={item.to}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block rounded-xl px-4 py-3 transition-colors font-semibold ${pathname === item.to ? "bg-btn-bg text-text-primary" : "hover:bg-hover-bg hover:text-text-primary"}`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Navbar;