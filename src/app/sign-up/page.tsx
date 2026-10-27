"use client";

import React, { useState } from "react";
import Link from "next/link";

type RoleType = "athlete" | "coach" | "scout";

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<RoleType>("athlete");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic fields
  const [gradClass, setGradClass] = useState("2026");
  const [jerseyNumber, setJerseyNumber] = useState("");
  const [teamInviteCode, setTeamInviteCode] = useState("");
  const [coachTitle, setCoachTitle] = useState("");
  const [athleticDivision, setAthleticDivision] = useState("NCAA Division I");
  const [scoutingAgency, setScoutingAgency] = useState("");
  const [credentialId, setCredentialId] = useState("");

  // Password rules validation
  const hasLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasLength || !hasNumber || !hasSymbol) {
      alert("Please ensure your passphrase meets all security criteria.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface min-h-screen flex flex-col justify-between selection:bg-court-blaze selection:text-white">
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-container/60 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
        <div className="h-16 w-full px-gutter md:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-lg">
            <Link href="/" className="flex items-center gap-space-sm group">
              <div className="relative flex items-center justify-center w-8 h-8">
                <svg
                  className="w-8 h-8 text-[#FF5E1E] drop-shadow-[0_0_14px_rgba(255,94,30,0.45)] transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="none"
                    points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  />
                  <circle cx="16" cy="16" fill="none" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <line stroke="currentColor" strokeWidth="1.5" x1="16" x2="16" y1="10" y2="22" />
                  <line stroke="currentColor" strokeWidth="1.5" x1="10" x2="22" y1="16" y2="16" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md tracking-wider text-white font-bold leading-none">
                  HEX<span className="text-[#FF5E1E]">AI</span>
                </span>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/70 font-semibold">
                  Athletic Telemetry
                </span>
              </div>
            </Link>

            <div className="hidden sm:block h-4 w-[1px] bg-surface-container-high" />

            <Link
              href="/"
              className="hidden sm:flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-[#FF5E1E] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to Overview
            </Link>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="hidden md:flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low border border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arena-amber opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]" />
              </span>
              <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-medium tracking-wider">
                256-Bit Encrypted • SOC-2 Type II
              </span>
            </div>

            <nav className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-full border border-surface-container">
              <Link
                href="/sign-in"
                className="px-space-md py-1 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <span className="px-space-md py-1 rounded-full transition-colors bg-surface-container-high text-white font-bold font-label-md text-label-md shadow-sm">
                Sign Up
              </span>
            </nav>

            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-[#FF5E1E]/40 flex items-center justify-center shrink-0 text-[#FF5E1E]">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="w-full pt-16 bg-surface-container-lowest flex-1 flex flex-col justify-center">
        <div className="flex flex-col w-full">
          <div className="relative w-full py-space-xl px-gutter md:px-margin-desktop max-w-7xl mx-auto">
            {/* Ambient Telemetry Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] bg-[#FF5E1E]/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Page Header Area */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-high/80 border border-[#FF5E1E]/30 text-[#FF5E1E] font-label-sm uppercase tracking-wider mb-space-md shadow-[0_0_12px_rgba(255,94,30,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E] animate-pulse" />
                Enterprise Athletic Telemetry Platform
              </div>
              <h1 className="font-headline-xl text-3xl md:text-[36px] text-white tracking-tight mb-space-sm font-bold">
                Start Your Journey on <span className="text-[#FF5E1E]">HEXAI</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Choose your athletic persona to configure a personalized high-density basketball analytics workspace.
              </p>
            </div>

            {/* Success Banner if Submitted */}
            {submitted ? (
              <div className="relative z-10 max-w-xl mx-auto bg-surface-container border border-[#FF5E1E] rounded-2xl p-8 text-center shadow-2xl animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FF5E1E]/20 border border-[#FF5E1E] text-[#FF5E1E] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome to HEXAI Telemetry!</h2>
                <p className="text-on-surface-variant text-sm mb-6">
                  Your profile for <strong className="text-white">{fullName || "Athlete"}</strong> has been authenticated with role <strong className="text-[#FF5E1E] uppercase">{selectedRole}</strong>.
                </p>
                <div className="flex gap-3 justify-center">
                  <Link
                    href="/dashboard"
                    className="px-6 py-2.5 rounded-lg bg-[#FF5E1E] text-white font-semibold text-sm hover:bg-[#e04e12] transition-colors shadow-lg"
                  >
                    Enter Workspace Console
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/40 text-on-surface text-sm hover:bg-surface-bright"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              /* Main Registration Grid */
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* Left Column: Role Architecture & System Specs (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  {/* Role Selection Suite */}
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm uppercase text-on-surface-variant/70 tracking-wider">
                        Step 01 • Persona Assignment
                      </span>
                      <span className="font-label-sm uppercase text-[#F59E0B] font-semibold tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                        Active Verification
                      </span>
                    </div>

                    {/* Role Card 1: Athlete */}
                    <div
                      onClick={() => setSelectedRole("athlete")}
                      className={`cursor-pointer group relative p-space-lg rounded-xl transition-all duration-300 ${
                        selectedRole === "athlete"
                          ? "bg-surface-container-high border-2 border-[#FF5E1E] shadow-[0_0_24px_rgba(255,94,30,0.18)] opacity-100"
                          : "bg-surface-container border border-surface-container-high opacity-80 hover:opacity-100 hover:border-surface-variant shadow-sm hover:shadow-xl"
                      }`}
                    >
                      <div
                        className={`role-indicator absolute top-space-md right-space-md w-5 h-5 rounded-full flex items-center justify-center ${
                          selectedRole === "athlete"
                            ? "bg-[#FF5E1E] text-white shadow-[0_0_8px_rgba(255,94,30,0.6)]"
                            : "hidden bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                      <div className="flex items-start gap-space-md mb-space-sm">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                            selectedRole === "athlete"
                              ? "bg-surface-container text-[#FF5E1E] border-[#FF5E1E]/30"
                              : "bg-surface-container-high text-on-surface-variant border-transparent"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[22px]">sports_basketball</span>
                        </div>
                        <div className="flex flex-col pr-space-lg">
                          <div className="flex items-center gap-space-xs">
                            <span className="font-headline-md text-headline-md text-white font-bold">
                              Athlete
                            </span>
                            <span className="px-space-xs py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#FF5E1E]/20 text-[#FF5E1E] border border-[#FF5E1E]/40">
                              Player Hub
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                            Track biomechanics, review multi-angle film, and unlock Vance-LLM tactical drill generation.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-space-xs mt-space-md pt-space-md border-t border-surface-container">
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface font-label-sm uppercase text-[10px]">
                          Film Ingest
                        </span>
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface font-label-sm uppercase text-[10px]">
                          AI Drills
                        </span>
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface font-label-sm uppercase text-[10px]">
                          Shot Zones
                        </span>
                      </div>
                    </div>

                    {/* Role Card 2: Coach / Staff */}
                    <div
                      onClick={() => setSelectedRole("coach")}
                      className={`cursor-pointer group relative p-space-lg rounded-xl transition-all duration-300 ${
                        selectedRole === "coach"
                          ? "bg-surface-container-high border-2 border-[#FF5E1E] shadow-[0_0_24px_rgba(255,94,30,0.18)] opacity-100"
                          : "bg-surface-container border border-surface-container-high opacity-80 hover:opacity-100 hover:border-surface-variant shadow-sm hover:shadow-xl"
                      }`}
                    >
                      <div
                        className={`role-indicator absolute top-space-md right-space-md w-5 h-5 rounded-full flex items-center justify-center ${
                          selectedRole === "coach"
                            ? "bg-[#FF5E1E] text-white shadow-[0_0_8px_rgba(255,94,30,0.6)]"
                            : "hidden bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                      <div className="flex items-start gap-space-md mb-space-sm">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                            selectedRole === "coach"
                              ? "bg-surface-container text-[#FF5E1E] border-[#FF5E1E]/30"
                              : "bg-surface-container-high text-on-surface-variant border-transparent"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[22px]">sports</span>
                        </div>
                        <div className="flex flex-col pr-space-lg">
                          <div className="flex items-center gap-space-xs">
                            <span className="font-headline-md text-headline-md text-white font-bold">
                              Coach / Program Staff
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                            Roster telemetry, tactical film tagging, development tracking, and recruitment visibility.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-space-xs mt-space-md pt-space-md border-t border-surface-container-low">
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface-variant font-label-sm uppercase text-[10px]">
                          Film Tagging
                        </span>
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface-variant font-label-sm uppercase text-[10px]">
                          Roster Hub
                        </span>
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface-variant font-label-sm uppercase text-[10px]">
                          Playbook Matrix
                        </span>
                      </div>
                    </div>

                    {/* Role Card 3: College / Pro Scout */}
                    <div
                      onClick={() => setSelectedRole("scout")}
                      className={`cursor-pointer group relative p-space-lg rounded-xl transition-all duration-300 ${
                        selectedRole === "scout"
                          ? "bg-surface-container-high border-2 border-[#FF5E1E] shadow-[0_0_24px_rgba(255,94,30,0.18)] opacity-100"
                          : "bg-surface-container border border-surface-container-high opacity-80 hover:opacity-100 hover:border-surface-variant shadow-sm hover:shadow-xl"
                      }`}
                    >
                      <div
                        className={`role-indicator absolute top-space-md right-space-md w-5 h-5 rounded-full flex items-center justify-center ${
                          selectedRole === "scout"
                            ? "bg-[#FF5E1E] text-white shadow-[0_0_8px_rgba(255,94,30,0.6)]"
                            : "hidden bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                      <div className="flex items-start gap-space-md mb-space-sm">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                            selectedRole === "scout"
                              ? "bg-surface-container text-[#FF5E1E] border-[#FF5E1E]/30"
                              : "bg-surface-container-high text-on-surface-variant border-transparent"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[22px]">visibility</span>
                        </div>
                        <div className="flex flex-col pr-space-lg">
                          <div className="flex items-center gap-space-xs">
                            <span className="font-headline-md text-headline-md text-white font-bold">
                              College / Pro Scout
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                            Discover verified athletic profiles, run cross-league comparisons, and direct inquiries.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-space-xs mt-space-md pt-space-md border-t border-surface-container-low">
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface-variant font-label-sm uppercase text-[10px]">
                          Verified Data
                        </span>
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface-variant font-label-sm uppercase text-[10px]">
                          NCAA Compliant
                        </span>
                        <span className="px-space-sm py-space-xs rounded bg-surface-container-lowest text-on-surface-variant font-label-sm uppercase text-[10px]">
                          Shot Matrix
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Preview Card */}
                  <div className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm uppercase text-on-surface-variant/70 tracking-wider">
                        Live Console Telemetry
                      </span>
                      <div className="flex items-center gap-space-xs text-[#F59E0B] font-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                        99.98% Latency
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-space-sm">
                      <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container-high flex flex-col">
                        <span className="font-label-sm text-[10px] uppercase text-on-surface-variant">
                          Capture FPS
                        </span>
                        <span className="font-metric-lg text-metric-lg text-white mt-space-xs font-bold">
                          120<span className="text-xs text-[#FF5E1E] font-medium ml-0.5">hz</span>
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container-high flex flex-col">
                        <span className="font-label-sm text-[10px] uppercase text-on-surface-variant">
                          Shot Vector
                        </span>
                        <span className="font-metric-lg text-metric-lg text-white mt-space-xs font-bold">
                          3D<span className="text-xs text-[#F59E0B] font-medium ml-0.5">vol</span>
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container border border-surface-container-high flex flex-col">
                        <span className="font-label-sm text-[10px] uppercase text-on-surface-variant">
                          AI Latency
                        </span>
                        <span className="font-metric-lg text-metric-lg text-white mt-space-xs font-bold">
                          14<span className="text-xs text-[#FF5E1E] font-medium ml-0.5">ms</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Account Configuration Console (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="p-6 md:p-8 rounded-xl bg-surface-container border border-surface-container-high/60 shadow-2xl flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-xl">
                      <div>
                        <span className="font-label-sm uppercase text-[#F59E0B] font-semibold tracking-wider">
                          Step 02 • Profile Credentials
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-white font-bold mt-space-xs">
                          Setup Athletic Credentials
                        </h2>
                      </div>
                      <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        <span>Already registered?</span>
                        <Link
                          href="/sign-in"
                          className="text-[#FF5E1E] hover:underline font-label-md font-semibold"
                        >
                          Sign In
                        </Link>
                      </div>
                    </div>

                    {/* OAuth Quick Connectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-lg">
                      <button
                        className="flex items-center justify-center gap-space-sm py-2.5 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-bright text-white border border-surface-variant/40 transition-all duration-200 cursor-pointer"
                        type="button"
                        onClick={() => alert("Google OAuth connector initiated")}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.24 10.285V13.4h6.887C18.2 16.14 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.47 0 2.812.532 3.86 1.408l2.368-2.368C16.92 3.52 14.73 2.5 12.24 2.5 6.99 2.5 2.74 6.75 2.74 12s4.25 9.5 9.5 9.5c5.495 0 9.15-3.86 9.15-9.325 0-.63-.06-1.24-.175-1.825H12.24z" />
                        </svg>
                        <span className="font-label-md text-label-md font-medium">Continue with Google</span>
                      </button>
                      <button
                        className="flex items-center justify-center gap-space-sm py-2.5 px-space-md rounded-lg bg-surface-container-high hover:bg-surface-bright text-white border border-surface-variant/40 transition-all duration-200 cursor-pointer"
                        type="button"
                        onClick={() => alert("Apple OAuth connector initiated")}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.8c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-.99 1.68-.87 2.7 1 .08 2-.45 2.55-1.19z" />
                        </svg>
                        <span className="font-label-md text-label-md font-medium">Continue with Apple</span>
                      </button>
                    </div>

                    <div className="relative flex items-center justify-center my-space-md">
                      <div className="w-full h-px bg-surface-container-highest" />
                      <span className="absolute px-space-md bg-surface-container font-label-sm uppercase text-[10px] text-on-surface-variant tracking-wider">
                        Or Manual Verification
                      </span>
                    </div>

                    {/* Registration Form */}
                    <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit}>
                      {/* Row: Full Name & Athletic Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                        <div className="flex flex-col gap-space-xs">
                          <label className="font-label-md text-label-md text-on-surface" htmlFor="full-name">
                            Full Athletic Name
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                              badge
                            </span>
                            <input
                              required
                              className="w-full bg-surface-container-lowest text-white font-body-md text-body-md pl-10 pr-space-md py-2.5 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E] focus:bg-surface-container-low transition-colors"
                              id="full-name"
                              placeholder="e.g. Marcus Carter"
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-space-xs">
                          <label className="font-label-md text-label-md text-on-surface" htmlFor="email">
                            Official Athletic Email
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                              alternate_email
                            </span>
                            <input
                              required
                              className="w-full bg-surface-container-lowest text-white font-body-md text-body-md pl-10 pr-space-md py-2.5 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E] focus:bg-surface-container-low transition-colors"
                              id="email"
                              placeholder="marcus@statebasketball.edu"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Program / Institution Field */}
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="institution">
                          Program / High School / Institution
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                            school
                          </span>
                          <input
                            required
                            className="w-full bg-surface-container-lowest text-white font-body-md text-body-md pl-10 pr-space-md py-2.5 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E] focus:bg-surface-container-low transition-colors"
                            id="institution"
                            placeholder="State Bulldogs / Horizon Prep Academy"
                            type="text"
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Dynamic Role-Specific Fields Slot */}
                      <div className="p-space-md rounded-lg bg-surface-container-low border border-surface-container flex flex-col gap-space-md">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm uppercase text-[#FF5E1E] tracking-wider flex items-center gap-space-xs font-semibold">
                            <span className="material-symbols-outlined text-[14px]">tune</span>
                            <span>
                              {selectedRole === "athlete" && "Athlete Configuration"}
                              {selectedRole === "coach" && "Staff & Roster Protocol"}
                              {selectedRole === "scout" && "Scouting Credentials"}
                            </span>
                          </span>
                          <span className="font-label-sm uppercase text-[10px] text-on-surface-variant/70">
                            Profile Attributes
                          </span>
                        </div>

                        {/* Athlete Sub-fields */}
                        {selectedRole === "athlete" && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md animate-in fade-in duration-200">
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Grad Class
                              </label>
                              <select
                                value={gradClass}
                                onChange={(e) => setGradClass(e.target.value)}
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high focus:outline-none focus:border-[#FF5E1E] transition-colors"
                              >
                                <option value="2025">Class of 2025</option>
                                <option value="2026">Class of 2026</option>
                                <option value="2027">Class of 2027</option>
                                <option value="2028">Class of 2028</option>
                              </select>
                            </div>
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Jersey #
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E]"
                                placeholder="#23"
                                type="text"
                                value={jerseyNumber}
                                onChange={(e) => setJerseyNumber(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Team Invite Code
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E]"
                                placeholder="HEX-8831"
                                type="text"
                                value={teamInviteCode}
                                onChange={(e) => setTeamInviteCode(e.target.value)}
                              />
                            </div>
                          </div>
                        )}

                        {/* Coach Sub-fields */}
                        {selectedRole === "coach" && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md animate-in fade-in duration-200">
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Staff Title
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E]"
                                placeholder="Head Coach / Director of Ops"
                                type="text"
                                value={coachTitle}
                                onChange={(e) => setCoachTitle(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Athletic Division
                              </label>
                              <select
                                value={athleticDivision}
                                onChange={(e) => setAthleticDivision(e.target.value)}
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high focus:outline-none focus:border-[#FF5E1E]"
                              >
                                <option>NCAA Division I</option>
                                <option>NCAA Division II / III</option>
                                <option>NAIA / NJCAA</option>
                                <option>National High School Elite</option>
                              </select>
                            </div>
                          </div>
                        )}

                        {/* Scout Sub-fields */}
                        {selectedRole === "scout" && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md animate-in fade-in duration-200">
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Scouting Agency / Org
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E]"
                                placeholder="NBA Global / On3 / 247 Sports"
                                type="text"
                                value={scoutingAgency}
                                onChange={(e) => setScoutingAgency(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-label-sm uppercase text-on-surface-variant text-[10px]">
                                Credential Verification ID
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest text-white font-body-md text-body-md px-space-md py-2 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E]"
                                placeholder="CR-90412-SC"
                                type="text"
                                value={credentialId}
                                onChange={(e) => setCredentialId(e.target.value)}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Password Field with Interactive Requirements */}
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md text-on-surface" htmlFor="passcode">
                          Secure Console Passphrase
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                            key
                          </span>
                          <input
                            required
                            className="w-full bg-surface-container-lowest text-white font-body-md text-body-md pl-10 pr-10 py-2.5 rounded-lg border border-surface-container-high placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#FF5E1E] focus:bg-surface-container-low transition-colors"
                            id="passcode"
                            placeholder="••••••••••••"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            className="absolute right-space-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                            aria-label="Toggle password visibility"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {showPassword ? "visibility_off" : "visibility"}
                            </span>
                          </button>
                        </div>

                        {/* Real-time Passcode Validation Indicators */}
                        <div className="grid grid-cols-3 gap-space-xs mt-space-xs">
                          <div
                            className={`flex items-center gap-1 text-[11px] font-label-sm uppercase transition-colors ${
                              hasLength ? "text-[#FF5E1E]" : "text-on-surface-variant"
                            }`}
                          >
                            <span
                              className="material-symbols-outlined text-[14px]"
                              style={{ fontVariationSettings: hasLength ? "'FILL' 1" : "'FILL' 0" }}
                            >
                              {hasLength ? "check_circle" : "circle"}
                            </span>
                            <span>8+ Characters</span>
                          </div>

                          <div
                            className={`flex items-center gap-1 text-[11px] font-label-sm uppercase transition-colors ${
                              hasNumber ? "text-[#FF5E1E]" : "text-on-surface-variant"
                            }`}
                          >
                            <span
                              className="material-symbols-outlined text-[14px]"
                              style={{ fontVariationSettings: hasNumber ? "'FILL' 1" : "'FILL' 0" }}
                            >
                              {hasNumber ? "check_circle" : "circle"}
                            </span>
                            <span>1+ Number</span>
                          </div>

                          <div
                            className={`flex items-center gap-1 text-[11px] font-label-sm uppercase transition-colors ${
                              hasSymbol ? "text-[#FF5E1E]" : "text-on-surface-variant"
                            }`}
                          >
                            <span
                              className="material-symbols-outlined text-[14px]"
                              style={{ fontVariationSettings: hasSymbol ? "'FILL' 1" : "'FILL' 0" }}
                            >
                              {hasSymbol ? "check_circle" : "circle"}
                            </span>
                            <span>1+ Symbol</span>
                          </div>
                        </div>
                      </div>

                      {/* Terms & FERPA / COPPA Compliance */}
                      <div className="flex items-start gap-space-sm pt-space-xs">
                        <input
                          checked={agreedTerms}
                          onChange={(e) => setAgreedTerms(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded bg-surface-container-lowest accent-[#FF5E1E] cursor-pointer"
                          id="terms"
                          type="checkbox"
                        />
                        <label
                          className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed cursor-pointer select-none"
                          htmlFor="terms"
                        >
                          I agree to the{" "}
                          <a className="text-white hover:underline" href="#">
                            Terms of Service
                          </a>
                          , Student-Athlete Privacy Protocol (
                          <span className="text-[#F59E0B] font-medium">FERPA / COPPA Compliant</span>
                          ), and NCAA Recruiting Contact Guidelines.
                        </label>
                      </div>

                      {/* Primary Action Button */}
                      <button
                        className="w-full py-3.5 px-space-xl rounded-xl bg-[#FF5E1E] text-white font-headline-md text-headline-md font-bold tracking-tight hover:bg-[#ff6f34] active:scale-[0.99] transition-all flex items-center justify-center gap-space-sm shadow-[0_0_28px_rgba(255,94,30,0.45)] hover:shadow-[0_0_36px_rgba(255,94,30,0.6)] cursor-pointer"
                        type="submit"
                      >
                        <span>Create Account &amp; Enter Console</span>
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Trust & Verification Authority Strip */}
            <div className="relative z-10 mt-12 pt-space-xl text-center flex flex-col items-center">
              <div className="flex items-center gap-space-md flex-wrap justify-center mb-space-md">
                <span className="px-space-md py-1.5 rounded-full bg-surface-container-high/80 border border-[#F59E0B]/30 text-on-surface font-label-sm uppercase tracking-wider flex items-center gap-space-xs shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                  <span className="material-symbols-outlined text-[16px] text-[#F59E0B]">verified</span>
                  Verified NIL Ready
                </span>
                <span className="px-space-md py-1.5 rounded-full bg-surface-container-high/80 border border-[#FF5E1E]/30 text-on-surface font-label-sm uppercase tracking-wider flex items-center gap-space-xs shadow-[0_0_10px_rgba(255,94,30,0.1)]">
                  <span className="material-symbols-outlined text-[16px] text-[#FF5E1E]">shield</span>
                  256-Bit Roster Vault
                </span>
                <span className="px-space-md py-1.5 rounded-full bg-surface-container-high/80 border border-[#F59E0B]/30 text-on-surface font-label-sm uppercase tracking-wider flex items-center gap-space-xs shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                  <span className="material-symbols-outlined text-[16px] text-[#F59E0B]">database</span>
                  Zero-Leak Architecture
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Trusted by collegiate athletic departments, elite prep academies, and verified professional scouts nationwide.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest/90 backdrop-blur-md border-t border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.4)] py-space-lg">
        <div className="w-full px-gutter md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-space-md text-on-surface-variant font-label-sm uppercase tracking-wider text-[11px]">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#F59E0B] text-[15px]">verified_user</span>
              <span>FERPA / COPPA Compliant</span>
            </div>
            <span className="hidden sm:inline text-surface-container-highest">•</span>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#FF5E1E] text-[15px]">sports_basketball</span>
              <span>NCAA Recruiting Compliant</span>
            </div>
            <span className="hidden sm:inline text-surface-container-highest">•</span>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#F59E0B] text-[15px]">lock</span>
              <span>Zero-Knowledge Data Vault</span>
            </div>
          </div>
          <div className="text-on-surface-variant/80 font-body-sm text-body-sm text-center md:text-right">
            © 2025 HEXAI Sports Analytics Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
