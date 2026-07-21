import type { Metadata } from "next";
import SectionDivider from "@/components/section-divider";

export const metadata: Metadata = {
    title: "System · Taksh Patel",
    description: "The hardware, tools, and setup behind how I build.",
};

export default function SystemPage() {
    return (
        <main className="w-full">

            {/* ── Page header ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            My Setup
                        </span>
                        <h1 className="font-display font-bold text-text-primary mb-3">
                            System
                        </h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            The hardware, tools, and setup behind how I build.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            {/* ── Bento grid ── */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <div className="grid grid-cols-1 sm:grid-cols-3">

                            {/* ─ Row 1: Laptop (2/3) + OS (1/3) ─ */}

                            <div className="sm:col-span-2 border-b border-border sm:border-r p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    Laptop
                                </span>
                                <p className="font-display font-semibold text-text-primary text-xl mb-2">
                                    ASUS Vivobook S16 OLED
                                </p>
                                <p className="font-mono text-[10px] text-text-muted tracking-wide mb-6 leading-loose">
                                    Intel Ultra 5 125H · 16 GB LPDDR5X · 1 TB Gen 5 SSD · Intel Arc · 3.2K OLED
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Wasn&apos;t my first pick — I was set on the Vivobook S15 OLED (i5 13500H, Iris Xe,
                                    16/512, ₹76k). But it was ₹80k anyway, so for ₹4k more I got a newer chip,
                                    faster storage, and a bigger/better display. Not the most powerful machine out
                                    there, but the OLED panel makes up for it.
                                </p>
                            </div>

                            <div className="border-b border-border p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    OS
                                </span>
                                <p className="font-display font-semibold text-text-primary text-xl mb-4">
                                    Windows
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    No real story here — just comfortable to work in, and didn&apos;t want to
                                    spend time learning a new OS instead of building.
                                </p>
                            </div>

                            {/* ─ Row 2: Peripherals (full width) ─ */}

                            <div className="sm:col-span-3 border-b border-border p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    Peripherals
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                                    <div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1.5">
                                            Mouse
                                        </span>
                                        <p className="font-mono text-[10px] text-text-muted tracking-wide mb-3">
                                            Wired · 7 buttons
                                        </p>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            Two thumb buttons mapped to Ctrl+C / Ctrl+V for faster copy-paste,
                                            plus dedicated DPI and RGB toggle buttons.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1.5">
                                            Keyboard
                                        </span>
                                        <p className="font-mono text-[10px] text-text-muted tracking-wide mb-3">
                                            Mechanical · Red switches
                                        </p>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            Wanted the mechanical feel without the loud click of blue switches.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-text-muted italic leading-relaxed">
                                    Small tweaks that compound into hours saved.
                                </p>
                            </div>

                            {/* ─ Row 3: Browser (1/3) + Theme & Font (2/3) ─ */}

                            <div className="border-b border-border sm:border-r p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    Browser
                                </span>
                                <p className="font-display font-semibold text-text-primary text-xl mb-4">
                                    Brave
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Ad-free browsing, privacy-focused by default.
                                </p>
                            </div>

                            <div className="sm:col-span-2 border-b border-border p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    Theme &amp; Font
                                </span>
                                <div className="flex gap-8 mb-5">
                                    <div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-2">
                                            Theme
                                        </span>
                                        <p className="font-display font-semibold text-text-primary text-base">
                                            Min Dark
                                        </p>
                                    </div>
                                    <div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-2">
                                            Font
                                        </span>
                                        <p className="font-display font-semibold text-text-primary text-base">
                                            Victor Mono
                                            <span className="font-mono text-[10px] text-text-muted font-normal ml-2">
                                                6–7 months
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Tried Ayu, Dracula, One Monokai, and Chai Theme before landing on Min Dark —
                                    the contrast and syntax highlighting hold up best at low brightness during
                                    late-night sessions, especially on this OLED panel where colors render true
                                    rather than washed out. Victor Mono&apos;s cursive italics make comments
                                    visually distinct from code at a glance.
                                </p>
                            </div>

                            {/* ─ Row 4: Code Editors (full width, 3-col internal) ─ */}

                            <div className="sm:col-span-3 border-b border-border p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    Code Editors
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-5">
                                    {[
                                        {
                                            name: "VS Code",
                                            note: "Daily driver — can't fully leave it. This is where the journey started.",
                                        },
                                        {
                                            name: "Zed",
                                            note: "Distraction-free, no AI, minimal and fast.",
                                        },
                                        {
                                            name: "Antigravity",
                                            note: "For AI-assisted coding.",
                                        },
                                    ].map(({ name, note }) => (
                                        <div key={name}>
                                            <p className="font-display font-semibold text-sm text-text-primary mb-2">
                                                {name}
                                            </p>
                                            <p className="text-sm text-text-muted leading-relaxed">{note}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-text-muted italic leading-relaxed">
                                    The right tool depends on the work, not habit.
                                </p>
                            </div>

                            {/* ─ Row 5: AI Assistants (full width, 3-col internal) ─ */}

                            <div className="sm:col-span-3 border-b border-border p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    AI Assistants
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-5">
                                    {[
                                        {
                                            name: "Claude",
                                            note: "Idea discussions, and coding inside Antigravity.",
                                        },
                                        {
                                            name: "ChatGPT",
                                            note: "System design and general learning.",
                                        },
                                        {
                                            name: "Gemini",
                                            note: "YouTube video summarization, image generation, college study work.",
                                        },
                                    ].map(({ name, note }) => (
                                        <div key={name}>
                                            <p className="font-display font-semibold text-sm text-text-primary mb-2">
                                                {name}
                                            </p>
                                            <p className="text-sm text-text-muted leading-relaxed">{note}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-text-muted italic leading-relaxed">
                                    Different assistants for different jobs, not just picking one and using it for
                                    everything.
                                </p>
                            </div>

                            {/* ─ Row 6: Terminal (full width) ─ */}

                            <div className="sm:col-span-3 p-6">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-5">
                                    Terminal
                                </span>
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center rounded border border-[#8a5c00]/25 dark:border-[#ffc533]/25 bg-[#8a5c00]/6 dark:bg-[#ffc533]/8 px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider text-[#8a5c00] dark:text-[#ffc533]">
                                        WIP
                                    </span>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        Currently transitioning from Command Prompt to WSL — more to come.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <SectionDivider />

        </main>
    );
}
