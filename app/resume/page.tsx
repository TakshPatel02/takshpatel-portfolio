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
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card py-6 px-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <motion.h1
              className="font-display text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Resume
            </motion.h1>
            <a
              href="/Taksh_Patel_Resume.pdf"
              download
              className="flex items-center gap-2 rounded-md bg-text-primary px-4 py-2 text-sm font-medium text-bg-primary transition hover:opacity-90"
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