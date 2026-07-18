import { ChevronRight } from "lucide-react";
import CopyButton from "../copy-button";
import { ApiExamples as examples } from "@/lib/data/api-examples";

const JsonBlock = ({
    label,
    statusColor,
    code,
    copyText
}: {
    label?: string;
    statusColor?: string;
    code: string;
    copyText?: string
}) => (
    <div className="group/code relative rounded-lg border border-border bg-(--color-surface-elevated) overflow-hidden">
        {label && (
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                {statusColor && (
                    <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: statusColor }}
                    />
                )}
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    {label}
                </span>
            </div>
        )}
        <div className="px-4 py-3 font-mono text-[11px] sm:text-xs text-text-secondary overflow-x-auto leading-relaxed">
            <pre className="whitespace-pre">{code}</pre>
        </div>
        <CopyButton text={copyText || code} />
    </div>
);

const ApiExamples = () => {
    return (
        <section id="api-examples" className="w-full scroll-mt-24">
            {/* Header Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-4">
                        <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl">
                            Examples
                        </h2>
                    </div>
                </div>
            </div>

            {examples.map((example) => (
                <div key={example.id} className={`w-full ${example.id === "forgot-password" ? "border-b-0" : "border-b border-border"}`}>
                    <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                        <div className="border-x border-border bg-bg-card">
                            {/* Example Title */}
                            <div className="px-5 py-3 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <ChevronRight size={12} className="text-text-muted" />
                                    <h3 className="font-display text-sm font-bold text-text-primary sm:text-base">
                                        {example.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Simple request/response example */}
                            {example.request && (
                                <div className="px-5 py-4 flex flex-col gap-3">
                                    <JsonBlock
                                        label={example.request.label}
                                        code={example.request.code}
                                    />
                                    <JsonBlock
                                        label={example.response?.label}
                                        statusColor={example.response?.statusColor}
                                        code={example.response?.code ?? ""}
                                    />
                                    {example.note && (
                                        <p className="text-xs text-text-muted font-mono mt-1">
                                            {example.note}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Multi-step flow (Forgot Password) */}
                            {example.steps &&
                                example.steps.map((step, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="px-5 py-4 border-b border-border last:border-b-0"
                                    >
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-3">
                                            {step.stepLabel}
                                        </span>
                                        <div className="flex flex-col gap-3">
                                            <JsonBlock
                                                label={step.request.label}
                                                code={step.request.code}
                                            />
                                            <JsonBlock
                                                label={step.response?.label}
                                                statusColor={step.response?.statusColor}
                                                code={step.response?.code ?? ""}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ApiExamples;
