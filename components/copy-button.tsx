'use client'
import { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* silently fail */
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="shrink-0 p-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer opacity-0 group-hover/cmd:opacity-100"
            aria-label="Copy code"
        >
            {copied ? (
                <Check size={12} className="text-[#59d499]" />
            ) : (
                <Copy size={12} className="text-text-muted" />
            )}
        </button>
    );
};

export default CopyButton;