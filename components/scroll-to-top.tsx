'use client'
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const handleScroll = () => {
        setShowScrollTop(window.scrollY > 400);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            {showScrollTop && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed bottom-10 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg-primary/90 backdrop-blur-sm text-text-muted transition-colors hover:bg-hover-bg hover:text-text-primary cursor-pointer"
                    title="Back to Top"
                >
                    <ArrowUp className="h-3.5 w-3.5" />
                </motion.button>
            )}
        </>
    )
}

export default ScrollToTop