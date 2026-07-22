'use client'
import { useState } from "react";
import Link from 'next/link';
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site-config";

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
                            className="tiny5-font text-lg font-bold tracking-tight text-text-primary sm:text-5xl"
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
                                            className={`font-semibold hover:text-text-primary ${pathname === item.to ? "text-text-primary" : ""}`}
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

                {isOpen ? (
                    <div className="md:hidden">
                        <div className="mx-4 mb-4 rounded-2xl border border-border bg-bg-secondary/90 p-4 backdrop-blur">
                            <div className="flex flex-col gap-3 text-sm font-medium text-text-secondary">
                                {navItems.map((item) => {
                                    return (
                                        <Link
                                            key={item.to}
                                            href={item.to}
                                            onClick={() => setIsOpen(false)}
                                            className={`rounded-lg px-3 py-2 transitionbg-hover-bg font-semibold hover:bg-hover-bg hover:text-text-primary ${pathname === item.to ? "text-text-primary" : ""}`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ) : null}
            </header>
        </>
    )
}

export default Navbar;