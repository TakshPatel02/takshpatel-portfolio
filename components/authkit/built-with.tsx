import { AuthKitTech, TsAdditions } from "@/lib/data/authkit-tech";

const BuiltWith = () => {
  return (
    <section id="built-with" className="w-full scroll-mt-24">
      {/* Header Box */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-4">
            <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-4xl">
              Built With
            </h2>
          </div>
        </div>
      </div>

      {/* Tech Pills */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card p-5">
            <div className="flex flex-wrap gap-2">
              {AuthKitTech.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center rounded-md border border-border bg-bg-secondary px-2.5 py-1 text-xs font-semibold text-text-primary hover:border-text-muted hover:bg-hover-bg transition-all duration-200 cursor-default"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* TS note */}
            <div className="mt-4 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                TypeScript adds
              </span>
              <div className="flex gap-2">
                {TsAdditions.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center rounded-md border border-border bg-bg-secondary px-2.5 py-1 text-xs font-semibold text-text-secondary cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWith;
