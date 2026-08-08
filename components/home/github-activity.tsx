'use client'
import dynamic from "next/dynamic";
import { useTheme } from "../theme-provider";
import { siteConfig } from "@/lib/config/site-config";

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    { ssr: false }
);

const GithubActivity = () => {
    const { theme } = useTheme();

    const calendarTheme = {
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#141516", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    return (
        <>
            <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                <div className="border-x border-border bg-bg-card px-5 py-4">
                    {/*
                      blockSize={10} blockMargin={2} → each column = 12px
                      53 weeks × 12px = 636px, fits comfortably in the ~720px content area.
                      No scrollbar needed — the full year is always visible.
                    */}
                    <div className="flex justify-center w-full">
                        <GitHubCalendar
                            username={siteConfig.githubUsername}
                            colorScheme={theme === "dark" ? "dark" : "light"}
                            theme={calendarTheme}
                            fontSize={14}
                            blockSize={11}
                            blockMargin={2}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GithubActivity;