"use client";

import React from "react";
import Link from "next/link";

interface CtaSectionProps {
  onStartJourney?: () => void;
  onSignIn?: () => void;
}

export default function CtaSection({ onStartJourney, onSignIn }: CtaSectionProps) {
  return (
    <section className="relative w-full bg-surface py-space-2xl overflow-hidden border-t border-surface-container-high/40">
      {/* Ambient Backdrop Highlight in Court Blaze */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-court-blaze/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-margin md:px-margin-desktop text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-court-blaze/40 flex items-center justify-center text-court-blaze mb-space-md shadow-[0_0_20px_rgba(255,94,30,0.3)]">
          <span className="material-symbols-outlined text-[26px]">hexagon</span>
        </div>

        <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-[56px] text-white font-extrabold tracking-tight mb-space-sm leading-tight">
          Build Your Game With HEXAI.
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface/85 max-w-2xl mb-space-xl leading-relaxed">
          Join collegiate and elite prep programs already elevating player intelligence,
          streamlining scout discovery, and sharpening court performance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-space-md w-full">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-space-sm px-space-xl py-4 rounded-lg bg-court-blaze text-white font-label-md text-label-md font-bold hover:bg-[#e04e12] transition-all shadow-[0_0_24px_-4px_rgba(255,94,30,0.45)] hover:shadow-[0_0_36px_0px_rgba(255,94,30,0.7)] active:scale-95 cursor-pointer"
          >
            <span>Get Started Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>

          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center px-space-xl py-4 rounded-lg bg-surface-container-high border border-outline-variant/40 text-white font-label-md text-label-md font-semibold hover:bg-surface-bright transition-colors shadow-sm cursor-pointer"
          >
            <span>Sign In to Console</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-space-lg mt-space-2xl text-on-surface/75 font-label-sm text-[11px] uppercase tracking-wider font-semibold flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-court-blaze shadow-[0_0_6px_#ff5e1e]" />
            Instant Ingest
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-arena-amber" />
            Multi-Angle HD
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-court-blaze" />
            Zero Fluff Analytics
          </span>
        </div>
      </div>
    </section>
  );
}
