"use client";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";

const ResumeViewer = dynamic(() => import("@/components/resume/resume-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[80vh] min-h-150 max-h-250 items-center justify-center text-text-secondary">
      Loading PDF viewer...
    </div>
  ),
});

const ResumePage = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                Curriculum Vitae
              </span>
              <motion.h1
                className="font-display text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl mb-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Resume
              </motion.h1>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                My official resume detailing professional experience, software engineering skills, and technical background.
              </p>
            </div>
            <a
              href="/Taksh_Patel_Resume.pdf"
              download
              className="flex items-center gap-2 shrink-0 rounded-md bg-text-primary px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-bg-primary transition hover:opacity-90 self-start sm:self-auto"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-secondary/50 p-4 sm:p-6">
            <ResumeViewer />
          </div>
        </div>
      </div>

      <SectionDivider />
    </div>
  );
};

export default ResumePage;