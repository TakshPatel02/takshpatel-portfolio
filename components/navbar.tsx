'use client'
import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { useTheme } from "./theme-provider";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site-config";
import { AnimatePresence, motion } from "framer-motion";

// Main navigation items shown directly in the top bar
const mainNavItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog", flag: "showBlogs" as const },
];

// Additional items shown inside the "More" dropdown menu
const allMoreNavItems = [
    { label: "AuthKit", to: "/authkit", flag: "showAuthkit" as const },
    { label: "Resources", to: "/resources", flag: "showResources" as const },
    { label: "Resume", to:"/resume"},
    { label: "Showcase", to:"/showcase", flag:"showShowcase" as const }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    const moreRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    // Filter main nav items based on feature flags in site-config
    const mainNavItemsFiltered = mainNavItems.filter(
        (item) => !item.flag || siteConfig.features[item.flag]
    );

    // Filter "More" items based on feature flags in site-config
    const moreNavItems = allMoreNavItems.filter(
        (item) => !item.flag || siteConfig.features[item.flag]
    );

    const isMoreActive = moreNavItems.some((item) => pathname === item.to);

    // Close dropdowns and mobile menu on outside click, scroll, or Escape key
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
            const target = e.target as Node;
            if (moreRef.current && !moreRef.current.contains(target)) {
                setIsMoreOpen(false);
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                mobileButtonRef.current &&
                !mobileButtonRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsMoreOpen(false);
            setIsOpen(false);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMoreOpen(false);
                setIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Automatically close dropdowns on route change
    useEffect(() => {
        setIsMoreOpen(false);
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur transition-colors duration-300">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="grid h-12 grid-cols-2 items-center border-x border-border px-4">
                        <Link
                            href="/"
                            className="tiny5-font font-bold tracking-tight text-text-primary text-5xl"
                            aria-label="Go to homepage"
                        >
                            TP
                        </Link>

                        <div className="flex items-center justify-end gap-5">
                            <nav
                                className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex"
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {/* Main Nav Links */}
                                {mainNavItemsFiltered.map((item) => {
                                    const isActive = pathname === item.to;
                                    const showDot = hoveredItem
                                        ? hoveredItem === item.to
                                        : isActive;

                                    return (
                                        <Link
                                            key={item.to}
                                            href={item.to}
                                            onMouseEnter={() => setHoveredItem(item.to)}
                                            onFocus={() => setHoveredItem(item.to)}
                                            className={`relative font-semibold transition-colors py-1 ${
                                                isActive || (hoveredItem === item.to)
                                                    ? "text-text-primary"
                                                    : "text-text-muted dark:text-text-secondary hover:text-text-primary"
                                            }`}
                                        >
                                            {item.label}
                                            {showDot && (
                                                <motion.span
                                                    layoutId="nav-dot"
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-text-primary"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 35,
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}

                                {/* More Dropdown Menu */}
                                {moreNavItems.length > 0 && (
                                    <div
                                        ref={moreRef}
                                        className="relative inline-block"
                                        onMouseEnter={() => {
                                            setHoveredItem("more");
                                            setIsMoreOpen(true);
                                        }}
                                        onMouseLeave={() => {
                                            setIsMoreOpen(false);
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setIsMoreOpen((prev) => !prev)}
                                            onFocus={() => setHoveredItem("more")}
                                            className={`relative flex items-center gap-1 font-semibold transition-colors py-1 ${
                                                isMoreActive || isMoreOpen || hoveredItem === "more"
                                                    ? "text-text-primary"
                                                    : "text-text-muted dark:text-text-secondary hover:text-text-primary"
                                            }`}
                                            aria-expanded={isMoreOpen}
                                            aria-haspopup="true"
                                        >
                                            <span>More</span>
                                            <ChevronDown
                                                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                                    isMoreOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                            {(hoveredItem ? hoveredItem === "more" : (isMoreActive || isMoreOpen)) && (
                                                <motion.span
                                                    layoutId="nav-dot"
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-text-primary"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 35,
                                                    }}
                                                />
                                            )}
                                        </button>

                                        {/* Dropdown Popover */}
                                        <AnimatePresence>
                                            {isMoreOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                                    className="absolute right-0 top-full mt-2 w-44 origin-top-right rounded-xl border border-border bg-bg-card/95 p-1.5 shadow-xl backdrop-blur-lg z-50"
                                                >
                                                    <div className="flex flex-col gap-0.5">
                                                        {moreNavItems.map((item) => {
                                                            const isActive = pathname === item.to;
                                                            return (
                                                                <Link
                                                                    key={item.to}
                                                                    href={item.to}
                                                                    onClick={() => setIsMoreOpen(false)}
                                                                    className={`flex items-center justify-between rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                                                                        isActive
                                                                            ? "bg-btn-bg text-text-primary"
                                                                            : "text-text-muted hover:bg-hover-bg hover:text-text-primary"
                                                                    }`}
                                                                >
                                                                    <span>{item.label}</span>
                                                                    {isActive && (
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-text-primary" />
                                                                    )}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </nav>

                            {/* Theme Toggle Button */}
                            <button
                                type="button"
                                className="group flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-all duration-200 hover:text-text-primary focus:outline-none"
                                aria-label="Toggle theme"
                                onClick={toggleTheme}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                                ) : (
                                    <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
                                )}
                            </button>
                            {/* Mobile Hamburger Button */}
                            <button
                                ref={mobileButtonRef}
                                type="button"
                                className="flex items-center rounded-full border border-border bg-btn-bg p-2 text-text-secondary transition hover:border-border hover:text-text-primary md:hidden cursor-pointer"
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

                {/* Mobile Menu Drawer & Backdrop */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 top-12 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
                                aria-hidden="true"
                            />

                            {/* Mobile Menu Drawer */}
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                                className="absolute left-0 right-0 top-full mt-2 px-4 md:hidden z-50"
                            >
                                <div ref={mobileMenuRef} className="mx-auto w-full max-w-200">
                                <div className="rounded-2xl border border-border bg-bg-secondary/95 p-4 shadow-xl backdrop-blur-lg">
                                    <div className="flex flex-col gap-2 text-sm font-medium text-text-secondary">
                                        {/* Main Nav Items on Mobile */}
                                        {mainNavItemsFiltered.map((item, i) => {
                                            const isActive = pathname === item.to;
                                            return (
                                                <motion.div
                                                    key={item.to}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.04 + 0.05, type: "spring", bounce: 0 }}
                                                >
                                                    <Link
                                                        href={item.to}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block rounded-xl px-4 py-3 font-semibold transition-colors ${
                                                            isActive
                                                                ? "bg-btn-bg text-text-primary"
                                                                : "text-text-muted dark:text-text-secondary hover:bg-hover-bg hover:text-text-primary"
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}

                                        {/* Divider for More items on Mobile */}
                                        {moreNavItems.length > 0 && (
                                            <>
                                                <div className="my-1 border-t border-border/60 px-4 pt-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                                                    More Pages
                                                </div>
                                                {moreNavItems.map((item, i) => {
                                                    const isActive = pathname === item.to;
                                                    return (
                                                        <motion.div
                                                            key={item.to}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{
                                                                delay: (mainNavItems.length + i) * 0.04 + 0.05,
                                                                type: "spring",
                                                                bounce: 0,
                                                            }}
                                                        >
                                                            <Link
                                                                href={item.to}
                                                                onClick={() => setIsOpen(false)}
                                                                className={`block rounded-xl px-4 py-3 font-semibold transition-colors ${
                                                                    isActive
                                                                        ? "bg-btn-bg text-text-primary"
                                                                        : "text-text-muted dark:text-text-secondary hover:bg-hover-bg hover:text-text-primary"
                                                                }`}
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        </motion.div>
                                                    );
                                                })}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;