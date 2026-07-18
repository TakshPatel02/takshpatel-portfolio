import { ShieldCheck } from "lucide-react";
import { SecurityHighlights as highlights } from "@/lib/data/security-highlights";

const renderText = (text: string) => {
  // Simple bold marker: **text** → <strong>text</strong>
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-text-primary font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const SecurityHighlights = () => {
  return (
    <section id="security" className="w-full scroll-mt-24">
      {/* Header Box */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-4">
            <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl flex items-center gap-2.5">
              <ShieldCheck size={22} className="text-text-muted" />
              Security Highlights
            </h2>
          </div>
        </div>
      </div>

      {/* Bullet List */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card p-5">
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted opacity-80" />
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {renderText(item.text)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHighlights;
