'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { devThoughts } from "@/lib/data/dev-thoughts"

interface BridgeIllustrationProps {
  lightSrc?: string
  darkSrc?: string
}

const BridgeIllustration = ({
  lightSrc = "https://res.cloudinary.com/portfolioblog/image/upload/v1784978033/light-easter-egg_x5os5k.webp",
  darkSrc = "https://res.cloudinary.com/portfolioblog/image/upload/v1784978033/dark-easter-egg_is6kot.webp",
}: BridgeIllustrationProps) => {
  const [index, setIndex] = useState(0)
  const [showBubble, setShowBubble] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showBubble) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowBubble(false)
      }
    }

    document.addEventListener("pointerdown", handleClickOutside)
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside)
    }
  }, [showBubble])

  const handleClick = () => {
    if (!showBubble) {
      setShowBubble(true)
    } else {
      setIndex((prev) => (prev + 1) % devThoughts.length)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer select-none group pointer-events-auto"
      onClick={handleClick}
      title="Click for a dev thought!"
    >
      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-4 z-30 rounded-lg border border-border bg-bg-secondary/95 backdrop-blur-xs px-3 py-1.5 text-xs font-mono text-text-primary whitespace-nowrap shadow-md transition-all animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center gap-1.5">
            <span>{devThoughts[index]}</span>
            <span className="text-[10px] text-text-muted opacity-70">({index + 1}/{devThoughts.length})</span>
          </div>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 w-3 h-3 rotate-45 border-b border-r border-border bg-bg-secondary" />
        </div>
      )}

      {/* Light Mode Easter Egg */}
      <Image
        src={lightSrc}
        alt="Easter egg illustration"
        width={360}
        height={240}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{ WebkitUserDrag: "none", userSelect: "none" } as React.CSSProperties}
        className="w-70 md:w-[320px] lg:w-90 h-auto object-contain select-none dark:hidden transition-transform duration-200"
        loading="eager"
      />

      {/* Dark Mode Easter Egg */}
      <Image
        src={darkSrc}
        alt="Easter egg illustration"
        width={360}
        height={240}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{ WebkitUserDrag: "none", userSelect: "none" } as React.CSSProperties}
        className="w-70 md:w-[320px] lg:w-90 h-auto object-contain select-none hidden dark:block transition-transform duration-200 "
        loading="eager"
      />
    </div>
  )
}

export default BridgeIllustration
