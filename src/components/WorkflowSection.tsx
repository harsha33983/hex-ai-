"use client";

import React from "react";

interface WorkflowSectionProps {
  onStepClick?: (stepNumber: number) => void;
}

export default function WorkflowSection({ onStepClick }: WorkflowSectionProps) {
  const steps = [
    {
      number: "01",
      icon: "badge",
      title: "Build Your Profile",
      description:
        "Role-based verified identity, academic grade level, wingspan measurements, and collegiate/prep roster details.",
      outputLabel: "Step 01 Output",
      outputValue: "Verified Roster Node",
    },
    {
      number: "02",
      icon: "cloud_upload",
      title: "Upload Game Film",
      description:
        "Multi-angle 1080p60 courtside ingest with automatic possession segmentation and optical jersey recognition.",
      outputLabel: "Step 02 Output",
      outputValue: "Indexed Possession Timeline",
    },
    {
      number: "03",
      icon: "insights",
      title: "Analyze Performance",
      description:
        "Neural telemetry, shot chart zone efficiency, true shooting percentages, and automated defensive rating extraction.",
      outputLabel: "Step 03 Output",
      outputValue: "Full Telemetry Report",
    },
    {
      number: "04",
      icon: "smart_toy",
      title: "Improve with Purpose",
      description:
        "Targeted development milestones and conversational AI coach breakdowns connected to individual video plays.",
      outputLabel: "Step 04 Output",
      outputValue: "Vance-LLM Prescriptions",
    },
  ];

  return (
    <section className="w-full bg-surface py-space-2xl" id="workflow">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-court-blaze font-bold">
            Workflow Architecture
          </span>
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white font-bold tracking-tight mt-1 mb-space-sm">
            How HEXAI Works
          </h2>
          <p className="font-body-md text-body-md text-on-surface/80">
            From multi-angle courtside cameras to precise coach-level interventions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => onStepClick?.(idx + 1)}
              className="relative bg-surface-container-low border border-outline-variant/30 rounded-2xl p-space-lg flex flex-col justify-between shadow-sm hover:border-court-blaze/40 transition-all duration-200 group cursor-pointer hover:bg-surface-container/80"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-metric-xl text-metric-xl text-court-blaze font-extrabold group-hover:drop-shadow-[0_0_12px_rgba(255,94,30,0.5)] transition-all">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-court-blaze/30 flex items-center justify-center text-court-blaze group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                  </div>
                </div>

                <h3 className="font-headline-md text-headline-md text-white font-semibold mb-space-xs">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              <div className="mt-space-lg pt-space-md bg-surface-container-lowest/60 border border-outline-variant/20 rounded-lg p-2.5">
                <span className="font-label-sm text-[10px] uppercase text-arena-amber font-bold block">
                  {step.outputLabel}
                </span>
                <span className="font-body-sm text-body-sm text-white font-medium flex items-center justify-between">
                  <span>{step.outputValue}</span>
                  <span className="material-symbols-outlined text-[14px] text-court-blaze opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
