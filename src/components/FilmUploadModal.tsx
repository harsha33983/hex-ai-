"use client";

import React, { useState } from "react";

interface FilmUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilmUploadModal({ isOpen, onClose }: FilmUploadModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<string>("Ready to ingest");

  if (!isOpen) return null;

  const handleSimulate = () => {
    setIsProcessing(true);
    setProgress(15);
    setStage("Synchronizing 120 FPS optical timecodes...");

    setTimeout(() => {
      setProgress(45);
      setStage("Extracting player coordinate vectors & jersey tags (#08, #14, #23)...");
    }, 1000);

    setTimeout(() => {
      setProgress(80);
      setStage("Segmenting 48 offensive & defensive possessions...");
    }, 2200);

    setTimeout(() => {
      setProgress(100);
      setStage("Telemetry ingest complete. Indexed Possession Timeline generated.");
    }, 3400);
  };

  const handleReset = () => {
    setIsProcessing(false);
    setProgress(0);
    setStage("Ready to ingest");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-surface-container border border-outline-variant/40 rounded-2xl p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface/60 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-court-blaze/30 flex items-center justify-center text-court-blaze">
            <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
          </div>
          <span className="font-headline-md text-white font-bold tracking-tight">
            Game Film Ingest Terminal
          </span>
        </div>

        <p className="text-on-surface/70 text-xs mb-5">
          Step 02 Ingest: Multi-angle 1080p60 courtside film with automatic possession segmentation
          and optical jersey recognition.
        </p>

        {/* Dropzone Area */}
        {!isProcessing ? (
          <div
            onClick={handleSimulate}
            className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 text-center bg-surface-container-low hover:border-court-blaze/60 hover:bg-surface-container transition-all cursor-pointer flex flex-col items-center group"
          >
            <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-court-blaze group-hover:scale-110 transition-transform mb-3 border border-court-blaze/30">
              <span className="material-symbols-outlined text-[28px]">movie</span>
            </div>
            <p className="text-white font-semibold text-sm">
              Click to Simulate 1080p60 Film Ingest
            </p>
            <p className="text-on-surface/60 text-xs mt-1">
              Supports .MP4, .MOV, .MKV (Courtside, Endzone, or Broadcast feed)
            </p>
            <span className="mt-4 px-3 py-1 rounded bg-court-blaze/15 text-court-blaze text-[11px] font-semibold border border-court-blaze/30">
              Sample: Q3_HorizonPrep_vs_Metro.mp4 (4.2 GB)
            </span>
          </div>
        ) : (
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/30 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-court-blaze animate-ping" />
                Optical Processing Engine Active
              </span>
              <span className="text-court-blaze font-bold">{progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div
                className="h-full bg-court-blaze transition-all duration-300 shadow-[0_0_8px_#ff5e1e]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-xs text-arena-amber font-mono bg-surface-container-lowest p-2.5 rounded border border-outline-variant/20">
              &gt; {stage}
            </p>

            {progress === 100 && (
              <div className="pt-2 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-surface-container-high p-2 rounded">
                    <span className="text-on-surface/70 block">Possessions Tagged</span>
                    <span className="text-white font-bold text-sm">48 Plays</span>
                  </div>
                  <div className="bg-surface-container-high p-2 rounded">
                    <span className="text-on-surface/70 block">Jerseys Tracked</span>
                    <span className="text-court-blaze font-bold text-sm">10 Players</span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-2 py-2 rounded-lg bg-court-blaze text-white font-semibold text-xs hover:bg-[#e04e12] transition-colors"
                >
                  Upload Another Film
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface/80 hover:text-white bg-surface-container-high border border-outline-variant/30 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
