import { endpoints } from "@/lib/data/api-references";

const MethodBadge = ({ method }: { method: string }) => {
    const colors: { [key: string]: string } = {
        GET: "text-text-secondary border-border bg-bg-secondary",
        POST: "text-text-secondary border-border bg-bg-secondary",
        DELETE: "text-text-secondary border-border bg-bg-secondary",
    };

    return (
        <span
            className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider border ${colors[method] || "text-text-muted border-border"}`}
        >
            {method}
        </span>
    );
};

const ApiReference = () => {
    return (
        <section id="api-reference" className="w-full scroll-mt-24">
            {/* Header Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-4">
                        <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl">
                            API Reference
                        </h2>
                    </div>
                </div>
            </div>

            {/* Base Path */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mr-2">
                            Base Path
                        </span>
                        <code className="font-mono text-xs sm:text-sm text-text-primary font-semibold">
                            /api/v1/users
                        </code>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="w-full">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        {/* Table Header */}
                        <div className="hidden sm:grid grid-cols-[70px_1fr_50px_90px_1fr] gap-0 border-b border-border px-5 py-2.5">
                            {["Method", "Endpoint", "Auth", "Rate Limited", "Description"].map(
                                (h) => (
                                    <span
                                        key={h}
                                        className="font-mono text-[9px] uppercase tracking-wider text-text-muted"
                                    >
                                        {h}
                                    </span>
                                )
                            )}
                        </div>

                        {/* Table Rows */}
                        {endpoints.map((ep) => (
                            <div
                                key={ep.path + ep.method}
                                className="flex flex-col gap-2 sm:grid sm:grid-cols-[70px_1fr_50px_90px_1fr] sm:gap-0 px-5 py-3 border-b border-border last:border-b-0 hover:bg-hover-bg transition-colors duration-200"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="sm:hidden font-mono text-[9px] uppercase tracking-wider text-text-muted w-24 shrink-0">Method</span>
                                    <MethodBadge method={ep.method} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="sm:hidden font-mono text-[9px] uppercase tracking-wider text-text-muted w-24 shrink-0">Endpoint</span>
                                    <code className="font-mono text-xs text-text-primary font-medium">
                                        {ep.path}
                                    </code>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="sm:hidden font-mono text-[9px] uppercase tracking-wider text-text-muted w-24 shrink-0">Auth</span>
                                    <span className="text-xs text-text-muted">
                                        {ep.auth ? "✓" : "✗"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="sm:hidden font-mono text-[9px] uppercase tracking-wider text-text-muted w-24 shrink-0">Rate Limited</span>
                                    <span className="font-mono text-[10px] text-text-secondary">
                                        {ep.rateLimit}
                                    </span>
                                </div>
                                <div className="flex items-start sm:items-center gap-2">
                                    <span className="sm:hidden font-mono text-[9px] uppercase tracking-wider text-text-muted w-24 shrink-0 mt-0.5">Description</span>
                                    <span className="text-xs text-text-secondary">{ep.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApiReference;
