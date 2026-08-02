import { ExternalLink, Terminal, Copy, Check, Package } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { NpmPackages as npmPackagesData } from "@/lib/data/npm-packages";
import CopyButton from "../copy-button";

const NpmPackageCard = ({ pkg }: { pkg: any }) => {
    return (
        <div className="flex flex-col sm:flex-row border-b border-border last:border-b-0 group hover:bg-hover-bg transition-colors duration-300">
            {/* Left Column: Package name, badge, install command */}
            <div className="w-full sm:w-65 shrink-0 p-5 border-b border-border sm:border-b-0 sm:border-r sm:border-border flex flex-col justify-between items-start gap-3">
                <div className="w-full">
                    {/* Package number label */}
                    <span className="font-mono text-[10px] text-text-muted tracking-wider block mb-1">
                        PACKAGE {pkg.id}
                    </span>

                    {/* Package name with accent dot */}
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display text-base font-bold text-text-primary group-hover:text-text-primary transition-colors duration-200 break-all">
                            {pkg.name}
                        </h3>
                    </div>

                    {/* npm badge */}
                    <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-3"
                    >
                        <img
                            src={`https://img.shields.io/npm/v/${pkg.name}?style=flat&colorA=0a0a0b&colorB=59d499`}
                            alt={`${pkg.name} npm version`}
                            className="h-4.5"
                            loading="lazy"
                        />
                    </a>
                </div>

                {/* Install command */}
                <div className="group/cmd w-full flex items-center gap-2 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-2 font-mono text-[11px] text-text-secondary relative">
                    <Terminal size={12} className="shrink-0 text-text-muted" />
                    <code className="flex-1 break-all select-all">{pkg.installCmd}</code>
                    <CopyButton text={pkg.installCmd} />
                </div>
            </div>

            {/* Right Column: Description + Links */}
            <div className="flex-1 p-5 flex flex-col justify-between gap-4">
                {/* Description */}
                <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1.5">
                        What It Does
                    </span>
                    <p className="text-sm font-semibold text-text-primary leading-relaxed">
                        {pkg.description}
                    </p>
                </div>

                {/* Links row */}
                <div className="flex flex-wrap gap-3 items-center">
                    <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
                    >
                        <Package size={11} />
                        npm
                        <ExternalLink size={9} className="opacity-50" />
                    </a>
                    <a
                        href={pkg.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
                    >
                        <FaGithub size={11} />
                        GitHub
                        <ExternalLink size={9} className="opacity-50" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const NpmPackages = () => {
    return (
        <>
            <section id="npm-packages" className="w-full scroll-mt-24">
                {/* Header Box */}
                <div className="w-full border-b border-border">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
                            {/* Section Title */}
                            <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary flex items-center gap-2">
                                NPM Packages{" "}
                                <span className="text-xs font-mono font-normal text-text-muted sm:text-sm">
                                    ({npmPackagesData.length})
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Package Cards */}
                <div className="w-full">
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card">
                            {npmPackagesData.map((pkg) => (
                                <NpmPackageCard key={pkg.id} pkg={pkg} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NpmPackages