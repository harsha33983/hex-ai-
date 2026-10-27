"use client";

import React, { useState } from "react";

interface PillarsSectionProps {
  onSelectRole?: (role: "athlete" | "coach" | "scout") => void;
}

export default function PillarsSection({ onSelectRole }: PillarsSectionProps) {
  const [activeTags, setActiveTags] = useState<string[]>([
    "PnR Defense",
    "Corner 3 C&S",
    "Box Out",
  ]);

  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <section
      className="w-full bg-surface-dim py-space-2xl border-t border-b border-surface-container-high/40"
      id="pillars"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="material-symbols-outlined text-court-blaze text-[18px]">hub</span>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-court-blaze font-bold">
                Ecosystem Alignment
              </span>
            </div>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white font-bold tracking-tight">
              Built for Basketball&apos;s Crucial Triumvirate
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface/80 max-w-md">
            A single telemetry-backed ecosystem closing the communications gap between player
            development and collegiate recruitment.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {/* Pillar 1: Athletes */}
          <div
            onClick={() => onSelectRole?.("athlete")}
            className="relative bg-surface-container-low border border-outline-variant/30 rounded-2xl p-space-xl flex flex-col justify-between hover:bg-surface-container hover:border-court-blaze/40 transition-all duration-200 group shadow-md cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-court-blaze mb-space-lg group-hover:scale-105 transition-transform border border-outline-variant/40 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">fitness_center</span>
              </div>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-arena-amber font-bold">
                Player Trajectory
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white font-semibold mt-1 mb-space-sm">
                For Athletes
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80 mb-space-lg leading-relaxed">
                Understand your performance, study game footage, track development goals, and
                receive personalized AI coaching assistance tailored directly to your film clips.
              </p>
            </div>

            <div className="bg-surface-container-highest/60 border border-outline-variant/20 rounded-xl p-space-md">
              <div className="flex items-center justify-between font-label-sm text-[11px] text-on-surface/70 mb-2 uppercase font-semibold">
                <span>Shot Arc Consistency</span>
                <span className="text-court-blaze font-bold">92.4%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                <div
                  className="h-full bg-court-blaze rounded-full shadow-[0_0_8px_#ff5e1e]"
                  style={{ width: "92.4%" }}
                />
              </div>
              <div className="flex items-center gap-space-xs mt-3 text-arena-amber font-label-sm text-[11px] uppercase font-semibold">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span>Telemetry Drills Linked</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Coaches */}
          <div
            onClick={() => onSelectRole?.("coach")}
            className="relative bg-surface-container border border-court-blaze/30 rounded-2xl p-space-xl flex flex-col justify-between hover:bg-surface-container-high hover:border-court-blaze/60 transition-all duration-200 group shadow-lg cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-court-blaze mb-space-lg group-hover:scale-105 transition-transform border border-court-blaze/40 shadow-[0_0_12px_rgba(255,94,30,0.2)]">
                <span className="material-symbols-outlined text-[26px]">sports</span>
              </div>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-court-blaze font-bold">
                Tactical Ingest
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white font-semibold mt-1 mb-space-sm">
                For Coaches
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80 mb-space-lg leading-relaxed">
                Review film, tag plays in 1-click, provide evidence-backed feedback, and manage roster
                development with live video timeline controls and tactical drawing tools.
              </p>
            </div>

            <div className="bg-surface-container-highest/80 border border-outline-variant/30 rounded-xl p-space-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-md text-label-md text-white font-semibold">
                  1-Click Film Tagging
                </span>
                <span className="px-2 py-0.5 rounded bg-court-blaze/20 text-court-blaze font-label-sm text-[10px] uppercase font-bold">
                  Synced
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {["PnR Defense", "Corner 3 C&S", "Box Out", "+ Transition"].map((tag) => {
                  const isSelected = activeTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTag(tag);
                      }}
                      className={`px-2 py-1 rounded text-[11px] font-label-sm uppercase transition-colors cursor-pointer border ${
                        isSelected
                          ? "bg-court-blaze text-white border-court-blaze"
                          : "bg-surface-container-low text-on-surface border-outline-variant/30 hover:border-court-blaze/40"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-space-xs mt-3 text-on-surface/70 font-label-sm text-[11px] uppercase">
                <span className="material-symbols-outlined text-[14px] text-arena-amber">
                  history
                </span>
                <span>18 Possessions Tagged Today</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Scouts */}
          <div
            onClick={() => onSelectRole?.("scout")}
            className="relative bg-surface-container-low border border-outline-variant/30 rounded-2xl p-space-xl flex flex-col justify-between hover:bg-surface-container hover:border-arena-amber/40 transition-all duration-200 group shadow-md cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-arena-amber mb-space-lg group-hover:scale-105 transition-transform border border-outline-variant/40 shadow-sm">
                <span className="material-symbols-outlined text-[26px]">manage_search</span>
              </div>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-arena-amber font-bold">
                Recruitment Intelligence
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white font-semibold mt-1 mb-space-sm">
                For Scouts
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80 mb-space-lg leading-relaxed">
                Discover approved athlete profiles, compare verified multi-game performance data, and
                coordinate recruitment inquiries through verified coach channels.
              </p>
            </div>

            <div className="bg-surface-container-highest/60 border border-outline-variant/20 rounded-xl p-space-md">
              <div className="flex items-center justify-between font-label-sm text-[11px] text-on-surface/70 mb-2 uppercase font-semibold">
                <span>Recruiter Verification</span>
                <span className="text-court-blaze font-bold">NCAA Compliant</span>
              </div>
              <div className="flex items-center gap-space-sm text-white font-label-md text-label-md">
                <span className="material-symbols-outlined text-arena-amber text-[18px]">
                  verified_user
                </span>
                <span>Coach-Mediated Messaging</span>
              </div>
              <div className="flex items-center gap-space-xs mt-3 text-on-surface/70 font-label-sm text-[11px] uppercase">
                <span className="material-symbols-outlined text-[14px] text-court-blaze">
                  security
                </span>
                <span>Zero Unsolicited Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
