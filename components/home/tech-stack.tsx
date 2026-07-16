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
                <div className="w-full border-y border-border">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card px-5 py-4">
                            <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl">
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
                                                        onError={(e : React.SyntheticEvent<HTMLImageElement>) => {
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