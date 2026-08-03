"use client"

import { useEffect } from "react"

export default function VisitorTracker() {
    useEffect(() => {
        const visited = localStorage.getItem("visited");

        if(!visited){
            fetch("/api/visitor", {
                method: "POST"
            });

            localStorage.setItem("visited", "true");
        }
    }, []);

    return null;
}