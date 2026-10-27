"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-2xl">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-court-blaze/30 flex items-center justify-center text-court-blaze shadow-[0_0_12px_rgba(255,94,30,0.25)]">
                <span className="material-symbols-outlined text-[20px]">hexagon</span>
              </div>
              <span className="font-headline-md text-headline-md tracking-tight text-white font-bold">
                HEXAI
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface/75 max-w-sm text-sm">
              High-performance athletic telemetry and tactical intelligence engineered for elite
              front offices, collegiate scouts, and pro franchises.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <div className="w-2.5 h-2.5 rounded-full bg-court-blaze animate-pulse shadow-[0_0_8px_#ff5e1e]" />
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-court-blaze font-bold">
                Live Telemetry Engines Active
              </span>
              <span className="font-body-sm text-body-sm text-on-surface/60 text-xs">
                (99.98% uptime)
              </span>
            </div>
          </div>

          {/* Product Pillars */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/60 font-bold">
              Product Pillars
            </span>
            <a
              href="#pillars"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Athletes
            </a>
            <a
              href="#pillars"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Coaches
            </a>
            <a
              href="#pillars"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Scouts
            </a>
            <a
              href="#platform-overview"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Film Hub
            </a>
            <a
              href="#platform-overview"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              AI Assistant
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/60 font-bold">
              Company
            </span>
            <a
              href="#compliance"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              About HEXAI
            </a>
            <a
              href="#workflow"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Core Architecture
            </a>
            <a
              href="#platform-overview"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Roadmap
            </a>
            <a
              href="#pillars"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Contact Scouts
            </a>
          </div>

          {/* Security & Legal */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface/60 font-bold">
              Security &amp; Legal
            </span>
            <a
              href="#compliance"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Security &amp; SOC2
            </a>
            <a
              href="#compliance"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              NCAA / Pro Compliance
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body-md text-body-md text-on-surface/75 hover:text-court-blaze transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-surface-container-high/40">
          <p className="font-body-sm text-body-sm text-on-surface/60 text-xs">
            © 2025 HEXAI Telemetry Systems Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-[11px] text-on-surface/60 uppercase font-semibold">
              System Tier: Pro Enterprise
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-court-blaze" />
            <span className="font-label-sm text-[11px] text-court-blaze uppercase font-bold">
              Latency: 12ms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
