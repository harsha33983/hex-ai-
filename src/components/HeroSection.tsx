"use client";

import React, { useState } from "react";
import Link from "next/link";

interface HeroSectionProps {
  onStartJourney?: () => void;
  onExplore?: () => void;
}

export default function HeroSection({ onStartJourney, onExplore }: HeroSectionProps) {
  const [hudActive, setHudActive] = useState(true);
  const [selectedApex, setSelectedApex] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-surface -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Ambient Telemetry Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ff5e1e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Hero Backdrop Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-court-blaze/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-margin md:px-margin-desktop">
        {/* Top Status Chip */}
        <div className="flex items-center gap-space-sm mb-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high border border-outline-variant/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-court-blaze animate-pulse shadow-[0_0_8px_#ff5e1e]" />
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-court-blaze font-bold">
              Engine v4.2 Active
            </span>
            <span className="text-on-surface/40 font-body-sm text-body-sm">•</span>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-arena-amber font-semibold">
              Optical Telemetry • 120 FPS Sync
            </span>
          </div>
        </div>

        {/* Main Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col z-10">
            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-[56px] tracking-tight text-white font-extrabold leading-[1.08] mb-space-md">
              Your Game.
              <br />
              <span className="text-court-blaze drop-shadow-[0_0_28px_rgba(255,94,30,0.45)]">
                Your Growth.
              </span>
              <br />
              Your Next Level.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface/85 max-w-xl mb-space-xl leading-relaxed">
              Turn basketball performance into a clearer path forward. HEXAI connects athletes,
              coaches, and scouts through game film, performance analytics, and personalized
              development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-space-sm px-space-xl py-3.5 rounded-lg bg-court-blaze text-white font-label-md text-label-md font-bold hover:bg-[#e04e12] transition-all duration-200 shadow-[0_0_24px_-4px_rgba(255,94,30,0.45)] hover:shadow-[0_0_32px_0px_rgba(255,94,30,0.65)] active:scale-95 cursor-pointer"
              >
                <span>Start Your Journey</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>

              <a
                href="#platform-overview"
                onClick={onExplore}
                className="inline-flex items-center gap-space-sm px-space-lg py-3.5 rounded-lg bg-surface-container-high border border-outline-variant/40 text-white font-label-md text-label-md hover:bg-surface-bright transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-court-blaze text-[18px]">
                  play_circle
                </span>
                <span>Explore Platform</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-space-md pt-space-lg bg-surface-container-low/80 backdrop-blur-md rounded-xl p-space-md border border-outline-variant/30 shadow-sm">
              <div className="flex flex-col">
                <span className="font-metric-lg text-metric-lg text-white tracking-tight font-bold">
                  1080p
                  <span className="text-arena-amber text-body-sm font-normal ml-0.5">60</span>
                </span>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/70 mt-1">
                  Frame Precision
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-metric-lg text-metric-lg text-court-blaze tracking-tight font-bold">
                  0.68
                  <span className="text-on-surface/70 text-body-sm font-normal">s</span>
                </span>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/70 mt-1">
                  Avg Shot Release
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-metric-lg text-metric-lg text-arena-amber tracking-tight font-bold">
                  100%
                </span>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/70 mt-1">
                  Verified Film
                </span>
              </div>
            </div>
          </div>

          {/* Visual Column with Hero Composition & Overlays */}
          <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/40 shadow-2xl group">
              {/* Hero Action Basketball Image */}
              <img
                alt="Basketball player executing an explosive mid-air drive to rim"
                className="w-full h-[460px] lg:h-[540px] object-cover object-center scale-[1.02] group-hover:scale-100 transition-transform duration-700"
                src="/images/hero-player.jpg"
                onError={(e) => {
                  // Fallback to remote URL if local load fails
                  (e.currentTarget as HTMLImageElement).src =
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHaHWl_0tOiPLGAIIsMcjH1Cdz0BthllCv0oJdPmoKaCBmCU8Lzk9SOZyz9VyXDdbaH-nvnyLm_MMVsX6KACxURcALTw9KC-OG72RXyfzJOY9FpdLGW2nVvP5R8eO3QpfmG6C9oUnv1hgKtmkYlqCR4MZZ1yXJKcztpuXE_TOeuzO39A9rhDsNK1K2FLM0Ex4NUk6Xz63XncfF9X62Id-z8q81EE9OfJwzlnOPBb6u7AttT_jR35Do3A";
                }}
              />

              {/* Atmospheric Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-transparent pointer-events-none" />

              {/* Optical Tracking HUD Geometry Overlay */}
              <div className="absolute inset-0 p-space-md flex flex-col justify-between">
                {/* Top HUD Trackline */}
                <div className="flex items-center justify-between z-10">
                  <button
                    onClick={() => setHudActive(!hudActive)}
                    className="flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-lowest/85 backdrop-blur-md border border-court-blaze/30 hover:border-court-blaze cursor-pointer transition-colors"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-court-blaze ${
                        hudActive ? "animate-ping" : "opacity-40"
                      }`}
                    />
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-white font-bold">
                      LIVE HUD • TARGET #08
                    </span>
                  </button>

                  <div className="px-2.5 py-1 rounded bg-surface-container-lowest/85 backdrop-blur-md font-label-sm text-[10px] uppercase tracking-wider text-arena-amber border border-outline-variant/30">
                    ISO: 800 • POSS ID: #4819
                  </div>
                </div>

                {/* Mid-Air Vector Point Node (Court Blaze Overlay) */}
                <div
                  className="absolute top-[28%] right-[32%] flex flex-col items-center cursor-pointer group/node"
                  onClick={() => setSelectedApex(!selectedApex)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-court-blaze/50 animate-ping absolute" />
                    <div className="w-6 h-6 rounded-full bg-court-blaze/20 flex items-center justify-center transition-transform group-hover/node:scale-125">
                      <div className="w-2.5 h-2.5 rounded-full bg-court-blaze shadow-[0_0_10px_#ff5e1e]" />
                    </div>
                  </div>
                  <div className="mt-1 px-2.5 py-1 rounded bg-surface-container-highest/95 border border-court-blaze/40 backdrop-blur-sm text-center shadow-lg transition-transform group-hover/node:scale-105">
                    <p className="font-label-sm text-[11px] text-court-blaze font-bold uppercase tracking-wider">
                      Apex: 10.42 ft
                    </p>
                    <p className="font-body-sm text-[10px] text-on-surface/80 leading-none mt-0.5">
                      Angle: 51.4°
                    </p>
                    {selectedApex && (
                      <p className="text-[9px] text-arena-amber uppercase font-semibold mt-1">
                        Release: 0.64s • In-Flight: 1.18s
                      </p>
                    )}
                  </div>
                </div>

                {/* Lower Floating HUD Badge: Player Telemetry Snapshot */}
                <div className="relative bg-surface-container-highest/95 border border-outline-variant/40 backdrop-blur-xl rounded-xl p-space-md shadow-xl max-w-sm z-10 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center justify-between pb-space-xs mb-space-xs border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-court-blaze border border-court-blaze/30 shadow-[0_0_8px_rgba(255,94,30,0.2)]">
                        <span className="material-symbols-outlined text-[18px]">
                          sports_basketball
                        </span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-white leading-tight font-semibold">
                          T. Henderson (G)
                        </p>
                        <p className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface/70">
                          Horizon Prep • Class of &apos;26
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-court-blaze/20 border border-court-blaze/40 text-court-blaze font-label-sm text-[10px] font-bold uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-space-xs pt-space-xs text-center">
                    <div className="bg-surface-container-low/90 rounded p-1.5 border border-outline-variant/20">
                      <p className="font-metric-lg text-[20px] text-white leading-none font-bold">
                        22.4
                      </p>
                      <p className="font-label-sm text-[10px] text-on-surface/70 uppercase mt-1">
                        PPG Output
                      </p>
                    </div>
                    <div className="bg-surface-container-low/90 rounded p-1.5 border border-outline-variant/20">
                      <p className="font-metric-lg text-[20px] text-arena-amber leading-none font-bold">
                        +3.2%
                      </p>
                      <p className="font-label-sm text-[10px] text-on-surface/70 uppercase mt-1">
                        FG Trend
                      </p>
                    </div>
                    <div className="bg-surface-container-low/90 rounded p-1.5 border border-outline-variant/20">
                      <p className="font-metric-lg text-[20px] text-court-blaze leading-none font-bold">
                        38%
                      </p>
                      <p className="font-label-sm text-[10px] text-on-surface/70 uppercase mt-1">
                        PnR Freq
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
