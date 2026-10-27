"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import WorkflowSection from "@/components/WorkflowSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ComplianceSection from "@/components/ComplianceSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import FilmUploadModal from "@/components/FilmUploadModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [authRole, setAuthRole] = useState("athlete");
  const [filmUploadOpen, setFilmUploadOpen] = useState(false);

  const handleOpenAuth = (mode: "signin" | "signup", role: string = "athlete") => {
    setAuthMode(mode);
    setAuthRole(role);
    setAuthModalOpen(true);
  };

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber === 1) {
      handleOpenAuth("signup", "athlete");
    } else if (stepNumber === 2) {
      setFilmUploadOpen(true);
    } else {
      const el = document.getElementById("platform-overview");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectRole = (role: "athlete" | "coach" | "scout") => {
    handleOpenAuth("signup", role);
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased selection:bg-court-blaze selection:text-white flex flex-col w-full">
      {/* Fixed Header */}
      <Navbar
        onOpenAuth={(mode) => handleOpenAuth(mode)}
        onOpenUpload={() => setFilmUploadOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* Section 1: Hero Viewport */}
          <HeroSection
            onStartJourney={() => handleOpenAuth("signup", "athlete")}
            onExplore={() => {
              const el = document.getElementById("platform-overview");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Section 2: Three Stakeholder Pillar Cards */}
          <PillarsSection onSelectRole={handleSelectRole} />

          {/* Section 3: How HEXAI Works (4-Step Architecture) */}
          <WorkflowSection onStepClick={handleStepClick} />

          {/* Section 4: Interactive Product Showcase / 4 Core Modules */}
          <ShowcaseSection />

          {/* Section 5: Enterprise & Athletic Security / Compliance Banner */}
          <ComplianceSection />

          {/* Section 6: Final High-Impact Conversion CTA */}
          <CtaSection
            onStartJourney={() => handleOpenAuth("signup", "athlete")}
            onSignIn={() => handleOpenAuth("signin")}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        initialRole={authRole}
        onClose={() => setAuthModalOpen(false)}
      />

      <FilmUploadModal
        isOpen={filmUploadOpen}
        onClose={() => setFilmUploadOpen(false)}
      />
    </div>
  );
}
