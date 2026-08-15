import Link from "next/link";
import { getNowData } from "@/lib/firebase";

export default async function NowTeaser() {
    const data = await getNowData();
    const items = (data?.currentlyDoing ?? []).slice(0, 2);

    if (items.length === 0) return null;

    return (
        <div className="w-full border-b border-border">
            <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                <div className="border-x border-border bg-bg-card px-5 pt-6 pb-4">

                    {/* Label row */}
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-3">
                        Currently
                    </p>

                    {/* Up to 2 items */}
                    <ul className="space-y-2 mb-4">
                        {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="font-mono text-text-muted select-none shrink-0 leading-relaxed">›</span>
                                <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Link */}
                    <Link
                        href="/now"
                        className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-text-muted hover:text-text-primary hover:underline underline-offset-2 transition-all group"
                    >
                        <span>See what I&apos;m working on</span>
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}
