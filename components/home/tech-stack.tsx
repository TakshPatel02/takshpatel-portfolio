'use client'
import { Boxes } from "lucide-react";
import { useTheme } from "../theme-provider";
import { techCategories } from "@/lib/data/tech-stack";

const TechStack = () => {
    const { theme } = useTheme();
    return (
        <>
            <section className="w-full">
                {/* Header Box */}
                <div className="w-full border-b border-border">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
                            {/* Technical Drawing Reference Line */}
                            <div className="flex items-center gap-2.5 w-full font-mono text-[11px] text-text-muted mb-2.5 select-none">
                                <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-text-muted opacity-60">
                                    <path d="M 0 10 L 0 0 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                                </svg>
                                <span className="shrink-0 px-1.5 py-0.5 rounded border border-border bg-(--color-surface-elevated) font-mono text-[10px] font-semibold text-text-primary tracking-wider">
                                    02
                                </span>
                                <div className="flex-1 h-px border-b border-dashed border-border" />
                                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                                    // LANGUAGES
                                </span>
                            </div>

                            {/* Section Title */}
                            <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary">
                                Stack
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Content Box */}
                <div className="w-full">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card">
                            {techCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="flex flex-col md:flex-row border-b border-border last:border-b-0"
                                >
                                    {/* Left Column: Category ID & Name */}
                                    <div className="w-full md:w-50 shrink-0 p-4 border-b border-border md:border-b-0 md:border-r md:border-border bg-bg-card flex items-center">
                                        <span className="font-mono text-sm text-text-muted mr-3">
                                            {category.id}
                                        </span>
                                        <span className="font-display text-sm font-semibold text-text-secondary sm:text-base">
                                            {category.name}
                                        </span>
                                    </div>

                                    {/* Right Column: Skill Pills */}
                                    <div className="flex-1 p-4 flex flex-wrap items-center gap-2 bg-bg-card">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-secondary px-2.5 py-1 text-xs font-semibold text-text-primary hover:border-text-muted hover:bg-hover-bg transition-all duration-200"
                                            >
                                                {skill.icon === "Boxes" ? (
                                                    <Boxes className="h-3.5 w-3.5 text-text-secondary" />
                                                ) : skill.icon ? (
                                                    <img
                                                        src={skill.icon}
                                                        alt=""
                                                        className={`h-3.5 w-3.5 object-contain ${skill.invertInDark && theme === "dark" ? "invert" : ""
                                                            }`}
                                                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                                            e.currentTarget.style.display = "none";
                                                        }}
                                                    />
                                                ) : null}
                                                <span>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack;