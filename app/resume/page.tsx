"use client";
import { Download, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/section-divider";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumePage = () => {
  const [scale, setScale] = useState(1.0);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.6));

  return (
    <div className="w-full">
      {/* Header */}
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

      {/* Resume Viewer */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-secondary/50 p-4 sm:p-6">
            
            <div className="relative w-full rounded-lg border border-border bg-bg-primary shadow-sm overflow-hidden group h-[80vh] min-h-150 max-h-250">
              
              <div 
                className="w-full h-full overflow-auto flex items-start justify-center p-4 custom-scrollbar"
                data-lenis-prevent="true"
              >
                <Document 
                  file="/Taksh_Patel_Resume.pdf"
                  className="flex justify-center"
                  loading={<div className="flex h-full items-center justify-center text-text-secondary">Loading PDF...</div>}
                  error={<div className="flex h-full items-center justify-center text-red-500">Failed to load PDF. Please make sure Taksh_Patel_Resume.pdf is in the public folder.</div>}
                >
                  <Page 
                    pageNumber={1} 
                    scale={scale} 
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-lg transition-transform duration-200"
                  />
                </Document>
              </div>

              {/* Hover Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex items-center gap-4 rounded-full bg-bg-secondary/90 border border-border px-5 py-2.5 shadow-xl backdrop-blur">
                  <span className="text-sm font-medium text-text-primary whitespace-nowrap">Page 1 / 1</span>
                  <div className="h-4 w-px bg-border"></div>
                  <button 
                    onClick={zoomOut}
                    className="p-1.5 text-text-secondary hover:text-text-primary transition bg-bg-primary rounded-md border border-border hover:border-text-muted"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-mono text-text-primary w-12 text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button 
                    onClick={zoomIn}
                    className="p-1.5 text-text-secondary hover:text-text-primary transition bg-bg-primary rounded-md border border-border hover:border-text-muted"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <SectionDivider />
    </div>
  );
};

export default ResumePage;
