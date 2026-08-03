"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function loadCount() {
            const res = await fetch("/api/visitor");
            const data = await res.json();

            setCount(data.count);
        }

        loadCount();
    }, []);

    return (
        <div className="flex items-baseline gap-2 whitespace-nowrap">
            <span className="font-mono text-sm font-bold text-text-primary tabular-nums">
                {String(count).padStart(3, "0")}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
                Live
            </span>
        </div>
    );
}