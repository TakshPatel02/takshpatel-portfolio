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

    return <span>{count.toLocaleString()} visitor</span>
}