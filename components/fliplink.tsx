'use client'
import { motion } from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }: { children: string }) => (
    <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-xl font-bold sm:text-2xl lg:text-3xl"
        style={{ lineHeight: 1 }}
    >
        <div className="select-none">
            {children.split("").map((l, i) => (
                <motion.span
                    key={i}
                    variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                    transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
                    className="inline-block"
                >
                    {l === " " ? "\u00A0" : l}
                </motion.span>
            ))}
        </div>
        <div className="absolute inset-0 select-none">
            {children.split("").map((l, i) => (
                <motion.span
                    key={i}
                    variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                    transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
                    className="inline-block"
                >
                    {l === " " ? "\u00A0" : l}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

export default FlipLink;