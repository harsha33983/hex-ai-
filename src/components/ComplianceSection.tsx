"use client";

import React from "react";

export default function ComplianceSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl" id="compliance">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <div className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-space-xl flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg shadow-sm">
          <div className="flex items-start gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-arena-amber/40 flex items-center justify-center text-arena-amber shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">gavel</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs mb-1">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-arena-amber font-bold">
                  Integrity &amp; Compliance Protocols
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-court-blaze" />
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/70 font-semibold">
                  SOC-2 Type II
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-white font-bold">
                Protected Recruitment, Verified Telemetry
              </h3>
              <p className="font-body-md text-body-md text-on-surface/80 max-w-2xl mt-1 leading-relaxed text-sm">
                Student-athlete safety and recruiting regulations come first. HEXAI strictly
                enforces coach-mediated scout communication, end-to-end film encryption, and
                tamper-proof verification of all game data.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-md shrink-0">
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] uppercase text-on-surface/70 font-semibold">
                Data Privacy Standard
              </span>
              <span className="font-label-md text-label-md text-white font-bold">
                FERPA / COPPA Compliant
              </span>
            </div>
            <div className="h-8 w-[1px] bg-surface-variant hidden sm:block" />
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] uppercase text-on-surface/70 font-semibold">
                Recruiter Inquiries
              </span>
              <span className="font-label-md text-label-md text-court-blaze font-bold">
                Coach Mediated Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
