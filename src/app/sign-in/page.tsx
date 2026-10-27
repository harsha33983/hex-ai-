"use client";

import React, { useState } from "react";
import Link from "next/link";

type OperatingRole = "athlete" | "coach" | "scout";

export default function SignInPage() {
  const [selectedRole, setSelectedRole] = useState<OperatingRole>("athlete");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [ssoMessage, setSsoMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSsoClick = (provider: string) => {
    setSsoMessage(`Authenticating with ${provider}...`);
    setTimeout(() => {
      setSsoMessage(null);
      setSubmitted(true);
    }, 1200);
  };

  const roleConfig: Record<
    OperatingRole,
    {
      title: string;
      buttonText: string;
      placeholderEmail: string;
      playerProfileTitle: string;
      playerName: string;
      playerSubtitle: string;
      trueShooting: string;
      ppg: string;
      releaseSpeed: string;
    }
  > = {
    athlete: {
      title: "Athlete",
      buttonText: "Initialize Athlete Console",
      placeholderEmail: "athlete@hexai.pro",
      playerProfileTitle: "Active Player Profile",
      playerName: "Marcus Carter",
      playerSubtitle: "Guard • #12 • St. Jude Prep",
      trueShooting: "64.8",
      ppg: "24.2",
      releaseSpeed: "0.42",
    },
    coach: {
      title: "Coach / Staff",
      buttonText: "Initialize Coaching Console",
      placeholderEmail: "coach.henderson@program.edu",
      playerProfileTitle: "Active Program Roster",
      playerName: "Horizon Prep Bulldogs",
      playerSubtitle: "Head Coach T. Henderson • 15 Athletes",
      trueShooting: "61.2",
      ppg: "78.4",
      releaseSpeed: "0.48",
    },
    scout: {
      title: "Verified Scout",
      buttonText: "Initialize Scouting Console",
      placeholderEmail: "scout.eval@agency.org",
      playerProfileTitle: "Target Evaluation Hub",
      playerName: "NCAA Regional Watchlist",
      playerSubtitle: "Division I / II Direct Pipeline • 48 Prospects",
      trueShooting: "59.4",
      ppg: "21.6",
      releaseSpeed: "0.44",
    },
  };

  const currentRole = roleConfig[selectedRole];

  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface min-h-screen flex flex-col justify-between selection:bg-primary-container selection:text-white">
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 w-full px-gutter md:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-lg">
            <Link href="/" className="flex items-center gap-space-sm group">
              <div className="relative flex items-center justify-center w-8 h-8">
                <svg
                  className="w-8 h-8 text-[#FF5E1E] drop-shadow-[0_0_12px_rgba(255,94,30,0.45)] transition-transform duration-300 group-hover:scale-105"
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
                <span className="font-headline-md text-headline-md tracking-wider text-on-surface font-bold leading-none">
                  HEX<span className="text-[#FF5E1E]">AI</span>
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#aa897f]">
                  Athletic Telemetry
                </span>
              </div>
            </Link>

            <div className="hidden sm:block h-4 w-[1px] bg-surface-container-high" />

            <Link
              href="/"
              className="hidden sm:flex items-center gap-space-xs font-label-md text-label-md text-on-surface/70 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to Overview
            </Link>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="hidden md:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low border border-surface-container-high shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]" />
              </span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface/80 font-medium tracking-wider">
                256-Bit Encrypted • SOC-2 Type II
              </span>
            </div>

            <nav className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-full">
              <span className="px-space-md py-space-xs rounded-full transition-colors bg-surface-container-high text-white font-bold font-label-md text-label-md shadow-sm">
                Sign In
              </span>
              <Link
                href="/sign-up"
                className="px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface/70 hover:text-on-surface transition-colors"
              >
                Sign Up
              </Link>
            </nav>

            <div className="w-8 h-8 rounded-full bg-[#FF5E1E] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,94,30,0.3)] text-white">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-surface-container-lowest flex-1 flex flex-col justify-center">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-[1440px] mx-auto px-gutter md:px-margin-desktop py-space-xl flex flex-col justify-center min-h-[calc(100vh-8rem)]">
            {/* Top System Telemetry Bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg text-on-surface/70">
              <div className="flex items-center gap-space-md">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-[#F59E0B]">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  Telemetry Engine v4.8 Active
                </div>
                <span className="text-surface-container-high hidden sm:inline">|</span>
                <div className="hidden sm:flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-on-surface/60">
                  <span className="material-symbols-outlined text-[14px]">videocam</span>
                  Sync: 120 FPS Multi-Cam Optical
                </div>
              </div>

              <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-wider">
                <span className="text-on-surface/70">Vault Latency</span>
                <span className="text-[#FF5E1E] font-bold">14ms Courtside Edge</span>
              </div>
            </div>

            {/* SSO / Authentication Feedback Banner */}
            {ssoMessage && (
              <div className="mb-4 p-3 rounded-lg bg-surface-container border border-[#FF5E1E]/50 text-center text-xs text-[#FF5E1E] flex items-center justify-center gap-2 animate-pulse">
                <span className="material-symbols-outlined text-[16px]">sync</span>
                {ssoMessage}
              </div>
            )}

            {/* Submitted State View */}
            {submitted ? (
              <div className="max-w-md mx-auto bg-surface-container border border-[#FF5E1E] rounded-2xl p-8 text-center shadow-2xl my-8 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FF5E1E]/20 border border-[#FF5E1E] text-[#FF5E1E] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <span className="material-symbols-outlined text-[32px]">sports_basketball</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                <p className="text-on-surface/70 text-sm mb-6">
                  Successfully initialized session as <strong className="text-white uppercase">{selectedRole}</strong> for{" "}
                  <span className="text-[#FF5E1E]">{email || currentRole.placeholderEmail}</span>.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/dashboard"
                    className="w-full py-3 rounded-lg bg-[#FF5E1E] text-white font-semibold text-sm hover:bg-[#e04e12] transition-colors shadow-lg"
                  >
                    Enter Operating Console
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full py-2.5 rounded-lg bg-surface-container-high border border-surface-container-highest text-on-surface text-xs hover:bg-surface-bright"
                  >
                    Sign In with Different Account
                  </button>
                </div>
              </div>
            ) : (
              /* Main Grid Layout */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
                {/* Left Column: Authentication Console (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container p-space-xl rounded-xl shadow-xl relative overflow-hidden border border-surface-container-high/60">
                  {/* Subtle Vector Mesh Glow */}
                  <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FF5E1E]/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    {/* Header & Title */}
                    <div className="flex items-start justify-between gap-space-md mb-space-lg">
                      <div>
                        <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low border border-[#FF5E1E]/20 mb-space-sm">
                          <span className="material-symbols-outlined text-[#FF5E1E] text-[14px]">bolt</span>
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#FF5E1E] font-semibold">
                            Single Sign-On • Biometric Ready
                          </span>
                        </div>
                        <h1 className="font-headline-xl text-headline-xl text-white tracking-tight font-bold">
                          Welcome Back
                        </h1>
                        <p className="font-body-md text-body-md text-on-surface/70 mt-space-xs">
                          Access your athletic telemetry, game film breakdown, and spatial shot charts.
                        </p>
                      </div>

                      <div className="hidden md:flex flex-col items-end">
                        <span className="font-label-sm text-label-sm uppercase text-on-surface/60">
                          Portal Status
                        </span>
                        <span className="font-label-md text-label-md text-[#F59E0B] flex items-center gap-1 font-semibold">
                          <span className="material-symbols-outlined text-[14px]">verified</span> Encrypted
                        </span>
                      </div>
                    </div>

                    {/* Role Selector Segmented Switch */}
                    <div className="mb-space-lg">
                      <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface/70 mb-space-xs font-semibold">
                        Select Operating Console
                      </label>
                      <div className="grid grid-cols-3 gap-space-xs bg-surface-container-lowest p-space-xs rounded-lg border border-surface-container-high/40">
                        {/* Athlete */}
                        <button
                          type="button"
                          onClick={() => setSelectedRole("athlete")}
                          className={`relative py-space-sm px-space-md rounded text-center transition-all font-label-md text-label-md flex items-center justify-center gap-space-xs cursor-pointer ${
                            selectedRole === "athlete"
                              ? "bg-surface-container-high border border-[#FF5E1E] text-white shadow-sm shadow-[#FF5E1E]/20"
                              : "text-on-surface/70 hover:text-white"
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[16px] ${
                              selectedRole === "athlete" ? "text-[#FF5E1E]" : ""
                            }`}
                          >
                            directions_run
                          </span>
                          <span className="font-semibold">Athlete</span>
                          {selectedRole === "athlete" && (
                            <>
                              <span className="material-symbols-outlined text-[14px] text-[#FF5E1E] font-bold">
                                check_circle
                              </span>
                              <span className="absolute -top-1.5 -right-1 px-1 py-0.2 bg-[#FF5E1E] text-white text-[9px] font-bold rounded uppercase tracking-wider leading-none shadow-sm">
                                ACTIVE
                              </span>
                            </>
                          )}
                        </button>

                        {/* Coach */}
                        <button
                          type="button"
                          onClick={() => setSelectedRole("coach")}
                          className={`relative py-space-sm px-space-md rounded text-center transition-all font-label-md text-label-md flex items-center justify-center gap-space-xs cursor-pointer ${
                            selectedRole === "coach"
                              ? "bg-surface-container-high border border-[#FF5E1E] text-white shadow-sm shadow-[#FF5E1E]/20"
                              : "text-on-surface/70 hover:text-white"
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[16px] ${
                              selectedRole === "coach" ? "text-[#FF5E1E]" : ""
                            }`}
                          >
                            sports
                          </span>
                          <span className="font-semibold">Coach / Staff</span>
                          {selectedRole === "coach" && (
                            <>
                              <span className="material-symbols-outlined text-[14px] text-[#FF5E1E] font-bold">
                                check_circle
                              </span>
                              <span className="absolute -top-1.5 -right-1 px-1 py-0.2 bg-[#FF5E1E] text-white text-[9px] font-bold rounded uppercase tracking-wider leading-none shadow-sm">
                                ACTIVE
                              </span>
                            </>
                          )}
                        </button>

                        {/* Scout */}
                        <button
                          type="button"
                          onClick={() => setSelectedRole("scout")}
                          className={`relative py-space-sm px-space-md rounded text-center transition-all font-label-md text-label-md flex items-center justify-center gap-space-xs cursor-pointer ${
                            selectedRole === "scout"
                              ? "bg-surface-container-high border border-[#FF5E1E] text-white shadow-sm shadow-[#FF5E1E]/20"
                              : "text-on-surface/70 hover:text-white"
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[16px] ${
                              selectedRole === "scout" ? "text-[#FF5E1E]" : ""
                            }`}
                          >
                            travel_explore
                          </span>
                          <span className="font-semibold">Verified Scout</span>
                          {selectedRole === "scout" && (
                            <>
                              <span className="material-symbols-outlined text-[14px] text-[#FF5E1E] font-bold">
                                check_circle
                              </span>
                              <span className="absolute -top-1.5 -right-1 px-1 py-0.2 bg-[#FF5E1E] text-white text-[9px] font-bold rounded uppercase tracking-wider leading-none shadow-sm">
                                ACTIVE
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Quick SSO Actions */}
                    <div className="space-y-space-sm mb-space-lg">
                      {/* Hudl / Synergy Enterprise Button */}
                      <button
                        onClick={() => handleSsoClick("Hudl • Synergy SSO")}
                        className="w-full flex items-center justify-between px-space-md py-space-sm bg-surface-container-high hover:bg-surface-bright text-white rounded transition-all group shadow-sm border border-surface-container-highest/60 hover:border-[#FF5E1E]/40 cursor-pointer"
                        type="button"
                      >
                        <div className="flex items-center gap-space-sm">
                          <div className="w-7 h-7 rounded bg-surface-container-lowest flex items-center justify-center text-[#FF5E1E] group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[18px]">sports_volleyball</span>
                          </div>
                          <div className="text-left">
                            <span className="font-label-md text-label-md block text-white font-medium">
                              Sign in with Hudl • Synergy SSO
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface/60 block">
                              Institutional and collegiate team sync
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-on-surface/60 group-hover:text-[#FF5E1E] transition-colors text-[18px]">
                          arrow_forward
                        </span>
                      </button>

                      {/* Social Providers Dual Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <button
                          onClick={() => handleSsoClick("Google Workspace")}
                          className="flex items-center justify-center gap-space-sm px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container-high text-white rounded transition-colors shadow-sm border border-surface-container-high cursor-pointer"
                          type="button"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V13.4h6.887C18.2 16.14 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.625 0 3.01.625 4.095 1.635l2.42-2.42C17.135 3.655 14.85 2.7 12.24 2.7 7.14 2.7 3 6.84 3 11.94s4.14 9.24 9.24 9.24c5.34 0 8.895-3.755 8.895-9.06 0-.61-.065-1.07-.15-1.535H12.24z" />
                          </svg>
                          <span className="font-label-md text-label-md">Google Workspace</span>
                        </button>
                        <button
                          onClick={() => handleSsoClick("Apple ID")}
                          className="flex items-center justify-center gap-space-sm px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container-high text-white rounded transition-colors shadow-sm border border-surface-container-high cursor-pointer"
                          type="button"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.88-1.01.04-2.19.68-2.86 1.47-.58.67-1.09 1.74-1.03 2.79 1.13.09 2.26-.63 2.88-1.38z" />
                          </svg>
                          <span className="font-label-md text-label-md">Apple ID</span>
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center my-space-lg">
                      <div className="w-full h-px bg-surface-container-highest" />
                      <span className="absolute px-space-md bg-surface-container font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50">
                        or credentials
                      </span>
                    </div>

                    {/* Credentials Form */}
                    <form className="space-y-space-md" onSubmit={handleSubmit}>
                      {/* Email Input */}
                      <div>
                        <label
                          className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface/70 mb-space-xs font-semibold"
                          htmlFor="email"
                        >
                          Roster / Academy Email
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-space-md material-symbols-outlined text-on-surface/50 text-[20px] pointer-events-none">
                            mail
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest text-white placeholder:text-outline/60 py-space-sm pl-11 pr-space-md rounded font-body-md text-body-md border border-surface-container-high shadow-inner focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] transition-colors"
                            id="email"
                            name="email"
                            placeholder={currentRole.placeholderEmail}
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Password Input */}
                      <div>
                        <div className="flex items-center justify-between mb-space-xs">
                          <label
                            className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface/70 font-semibold"
                            htmlFor="password"
                          >
                            Access Key / Password
                          </label>
                          <a
                            className="font-label-md text-label-md text-[#FF5E1E] hover:text-[#ffb59d] hover:underline transition-colors font-medium"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              alert("A secure passphrase reset link has been dispatched to your roster administrator.");
                            }}
                          >
                            Forgot key?
                          </a>
                        </div>
                        <div className="relative flex items-center">
                          <span className="absolute left-space-md material-symbols-outlined text-on-surface/50 text-[20px] pointer-events-none">
                            lock
                          </span>
                          <input
                            className="w-full bg-surface-container-lowest text-white placeholder:text-outline/60 py-space-sm pl-11 pr-11 rounded font-body-md text-body-md border border-surface-container-high shadow-inner focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] transition-colors"
                            id="password"
                            name="password"
                            placeholder="••••••••••••"
                            required
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            aria-label="Toggle password visibility"
                            className="absolute right-space-md text-on-surface/60 hover:text-white transition-colors flex items-center justify-center p-1 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {showPassword ? "visibility_off" : "visibility"}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Remember Device Checkbox */}
                      <div className="flex items-center justify-between pt-space-xs">
                        <label className="flex items-center gap-space-sm cursor-pointer select-none group">
                          <input
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 rounded bg-surface-container-lowest text-[#FF5E1E] accent-[#FF5E1E] focus:ring-[#FF5E1E] cursor-pointer"
                            id="remember-me"
                            type="checkbox"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface/70 group-hover:text-white transition-colors">
                            Retain biometric session for 30 days
                          </span>
                        </label>
                        <span className="font-label-sm text-label-sm text-[#F59E0B] uppercase tracking-widest hidden sm:inline font-semibold">
                          Edge Cached
                        </span>
                      </div>

                      {/* Primary Athletic CTA */}
                      <button
                        className="w-full flex items-center justify-center gap-space-sm py-space-md px-space-lg bg-[#FF5E1E] hover:bg-[#ff753e] text-white font-label-md text-label-md font-bold rounded shadow-lg shadow-[#FF5E1E]/25 transition-all active:scale-[0.99] group mt-space-md cursor-pointer"
                        type="submit"
                      >
                        <span>{currentRole.buttonText}</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </form>
                  </div>

                  {/* Footer Callout */}
                  <div className="mt-space-xl pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low p-space-md rounded-lg border border-surface-container-high/40">
                    <div className="text-left">
                      <p className="font-body-sm text-body-sm text-on-surface/70">
                        Unregistered athlete or scout?
                      </p>
                      <p className="font-label-md text-label-md text-white font-semibold">
                        Join your university or team roster
                      </p>
                    </div>
                    <Link
                      className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-bright text-white font-label-md text-label-md rounded transition-colors whitespace-nowrap shadow-sm border border-surface-container-highest font-medium"
                      href="/sign-up"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>

                {/* Right Column: Visual Telemetry Showcase & Real-Time Context (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
                  {/* Live Visual Feed Card with Media */}
                  <div className="bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col border border-surface-container-high/60">
                    <div className="relative w-full h-56 bg-surface-container-lowest overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{
                          backgroundImage:
                            "url('/images/signin-telemetry.jpg'), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCufe3xzZ3RddCaevL5xKq5_NBUnA3wflqdY47uMRwutECeprMWCKPR0NDc1EK9dYFaSuPgJBtGzEANod2Lwo2uvpZD4AZch_ZVuhwwvP2CAo2jZFTfgWCbC1a9fgYn0oEWsbDR9qP3_90BCENqi2d6duoR0qyKV6kEJXudtxvHxuzceOnEmUwhDhO-f5VUBnSTgQmQJXJatYcd7i_OPiZ7eXTXxmPqGtUPgswVVb_WEnb9AyTn_nYaVg')",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />

                      {/* Floating Live Pill */}
                      <div className="absolute top-space-md left-space-md flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-[#FF5E1E]/30 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#FF5E1E] animate-pulse shadow-[0_0_8px_#FF5E1E]" />
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#FF5E1E] font-bold">
                          Optical Telemetry Hub
                        </span>
                      </div>

                      {/* Top Right HUD FPS Badge */}
                      <div className="absolute top-space-md right-space-md font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-lowest/90 px-space-sm py-space-xs rounded text-[#F59E0B] font-mono border border-[#F59E0B]/30">
                        120 FPS • LOW LATENCY
                      </div>

                      {/* Overlaid Player Card Snapshot */}
                      <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between">
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#FF5E1E] block font-semibold">
                            {currentRole.playerProfileTitle}
                          </span>
                          <span className="font-headline-md text-headline-md text-white font-bold block">
                            {currentRole.playerName}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface/70 block">
                            {currentRole.playerSubtitle}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface/70 block">
                            True Shooting
                          </span>
                          <span className="font-metric-lg text-metric-lg text-white font-bold">
                            {currentRole.trueShooting}
                            <span className="text-[#FF5E1E] text-body-md">%</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tactical Telemetry Data Strip */}
                    <div className="p-space-lg space-y-space-md">
                      {/* Live Session Metric Blocks */}
                      <div className="grid grid-cols-3 gap-space-sm">
                        <div className="bg-surface-container-low p-space-sm rounded border border-surface-container-high/40">
                          <span className="font-label-sm text-label-sm uppercase text-on-surface/60 block">
                            PPG Avg
                          </span>
                          <span className="font-headline-md text-headline-md text-white font-bold">
                            {currentRole.ppg}
                          </span>
                          <span className="font-body-sm text-body-sm text-[#F59E0B] flex items-center text-[10px] mt-0.5 font-medium">
                            <span className="material-symbols-outlined text-[12px]">trending_up</span> +3.1 vs conf
                          </span>
                        </div>
                        <div className="bg-surface-container-low p-space-sm rounded border border-surface-container-high/40">
                          <span className="font-label-sm text-label-sm uppercase text-on-surface/60 block">
                            Release Speed
                          </span>
                          <span className="font-headline-md text-headline-md text-white font-bold">
                            {currentRole.releaseSpeed}
                            <span className="text-body-sm font-normal text-on-surface/60">s</span>
                          </span>
                          <span className="font-body-sm text-body-sm text-[#FF5E1E] text-[10px] mt-0.5 font-semibold">
                            Apex 98th %tile
                          </span>
                        </div>
                        <div className="bg-surface-container-low p-space-sm rounded border border-surface-container-high/40">
                          <span className="font-label-sm text-label-sm uppercase text-on-surface/60 block">
                            Vault Sync
                          </span>
                          <span className="font-headline-md text-headline-md text-white font-bold">100%</span>
                          <span className="font-body-sm text-body-sm text-on-surface/60 text-[10px] mt-0.5">
                            Cloud Mirror
                          </span>
                        </div>
                      </div>

                      {/* Recent Ingest Activity Notification */}
                      <div className="flex items-center gap-space-md p-space-sm bg-surface-container-high rounded border border-surface-container-highest/60">
                        <div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center shrink-0 text-[#FF5E1E] border border-surface-container-high">
                          <span className="material-symbols-outlined text-[20px]">analytics</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-label-md text-label-md text-white font-semibold truncate">
                              State Semifinal Breakdown
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface/50 text-xs">
                              Just now
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface/60 truncate text-xs">
                            48 defensive transitions &amp; pick-and-roll coverage indexed
                          </p>
                        </div>
                      </div>

                      {/* Court Shot Cluster Inline Visualizer */}
                      <div className="bg-surface-container-low p-space-md rounded border border-surface-container-high/40">
                        <div className="flex items-center justify-between mb-space-xs">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface/70 text-xs">
                            Field Spatial Hotzones (Last 5 Games)
                          </span>
                          <span className="font-label-sm text-label-sm uppercase text-[#FF5E1E] font-bold text-xs">
                            Elite Efficiency
                          </span>
                        </div>

                        {/* Inline Mini Shot Chart Graphic (SVG) with Court Blaze Orange & Arena Amber Hotzones */}
                        <div className="relative w-full h-24 bg-surface-container-lowest rounded overflow-hidden flex items-center justify-center border border-surface-container-high/40">
                          <svg
                            className="w-full h-full text-surface-container-highest select-none"
                            fill="none"
                            viewBox="0 0 300 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Half court schematic lines */}
                            <path d="M 0,90 L 300,90" stroke="currentColor" strokeWidth="1" />
                            <path
                              d="M 110,90 L 110,20 L 190,20 L 190,90"
                              stroke="currentColor"
                              strokeWidth="1"
                            />
                            <circle
                              cx="150"
                              cy="20"
                              r="22"
                              stroke="currentColor"
                              strokeDasharray="3 3"
                              strokeWidth="1"
                            />
                            <path d="M 40,90 C 40,30 260,30 260,90" stroke="currentColor" strokeWidth="1.5" />

                            {/* Hotspot Clusters: Court Blaze Orange (#FF5E1E) & Arena Amber (#F59E0B) */}
                            {/* Left Corner 3 */}
                            <circle cx="48" cy="78" fill="#F59E0B" fillOpacity="0.35" r="8" />
                            <circle cx="48" cy="78" fill="#F59E0B" r="4" />

                            {/* Top of the Key */}
                            <circle cx="150" cy="36" fill="#FF5E1E" fillOpacity="0.38" r="14" />
                            <circle cx="150" cy="36" fill="#FF5E1E" r="7" />

                            {/* Right Wing 3 */}
                            <circle cx="230" cy="65" fill="#F59E0B" fillOpacity="0.35" r="10" />
                            <circle cx="230" cy="65" fill="#F59E0B" r="5" />

                            {/* Paint / Rim */}
                            <circle cx="150" cy="80" fill="#FF5E1E" fillOpacity="0.45" r="12" />
                            <circle cx="150" cy="80" fill="#FF5E1E" r="6" />
                          </svg>

                          <div className="absolute bottom-1 right-2 font-label-sm text-label-sm text-[10px] text-on-surface/60 font-mono">
                            SHOT PROFILE: PERIMETER 42.1%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Security & Protocol Badge Card */}
                  <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between gap-space-md shadow-md border border-surface-container-high/60">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-[#F59E0B] shrink-0 border border-surface-container-highest">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      </div>
                      <div>
                        <span className="font-label-md text-label-md text-white font-semibold block">
                          NCAA Roster Compliance Verified
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface/60 block text-xs">
                          Zero-knowledge identity vault • SOC-2 Type II audit pass
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline text-[20px] shrink-0">
                      shield
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-space-lg border-t border-surface-container-high/40">
        <div className="w-full px-gutter md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-space-md text-on-surface/70 font-label-sm text-label-sm uppercase tracking-wider text-[11px]">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">verified_user</span>
              <span>FERPA / COPPA Compliant</span>
            </div>
            <span className="hidden sm:inline text-surface-container-highest">•</span>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">sports_basketball</span>
              <span>NCAA Recruiting Compliant</span>
            </div>
            <span className="hidden sm:inline text-surface-container-highest">•</span>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">lock</span>
              <span>Zero-Knowledge Data Vault</span>
            </div>
          </div>
          <div className="text-on-surface/60 font-body-sm text-body-sm text-center md:text-right text-xs">
            © 2025 HEXAI Sports Analytics Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
