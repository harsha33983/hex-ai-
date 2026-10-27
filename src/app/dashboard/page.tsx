"use client";

import React, { useState } from "react";
import Link from "next/link";
import FilmUploadModal from "@/components/FilmUploadModal";

interface ChatMessage {
  sender: "coach" | "user";
  text: string;
  timestamp: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("2024-25 Season");
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [activeGameHover, setActiveGameHover] = useState<{
    matchup: string;
    points: number;
    ts: number;
  } | null>(null);

  // Mobile sidebar toggle
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Interactive AI Coach Chat
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "coach",
      text: "Marcus, you converted 5 of 7 pull-ups against Michigan's drop coverage. Ready to prep against Ohio State's switch defense?",
      timestamp: "Just now",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      text: text,
      timestamp: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");

    // AI Coach reply simulation
    setTimeout(() => {
      let reply = "Solid inquiry. When analyzing your telemetry, we noticed your hip alignment on catch-and-shoots creates +0.18s release lag. Try keeping your base squared before catching.";
      if (text.toLowerCase().includes("contested") || text.toLowerCase().includes("missing")) {
        reply = "On contested attempts, your release angle drops from 51.4° down to 44.8°. You are leaning slightly backwards instead of elevating through your vertical center.";
      } else if (text.toLowerCase().includes("last game") || text.toLowerCase().includes("performance")) {
        reply = "Against Michigan you put up 31 PTS on 68.2% True Shooting. Your pick-and-roll passing was elite with 6 assists and only 1 turnover.";
      } else if (text.toLowerCase().includes("work on") || text.toLowerCase().includes("week")) {
        reply = "Priority 1: Baseline counter-cut decision timing against high traps. Priority 2: Left corner 3-point footwork drills.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "coach",
          text: reply,
          timestamp: "Just now",
        },
      ]);
    }, 800);
  };

  const navLinks = [
    { id: "overview", label: "Overview", icon: "grid_view" },
    { id: "my-performance", label: "My Performance", icon: "vital_signs" },
    { id: "game-film", label: "Game Film", icon: "smart_display" },
    { id: "ai-coach", label: "AI Coach", icon: "psychology" },
    { id: "team-plays", label: "Team Plays", icon: "stream" },
    { id: "training-log", label: "Training Log", icon: "fitness_center" },
    { id: "goals", label: "Goals", icon: "flag" },
    { id: "messages", label: "Messages", icon: "forum" },
  ];

  return (
    <div className="bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased min-h-screen selection:bg-primary-container selection:text-white">
      {/* ============================================================== */}
      {/* DESKTOP SIDEBAR (250px)                                        */}
      {/* ============================================================== */}
      <aside
        className={`fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between border-r border-outline-variant transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col">
          {/* Logo Bar */}
          <div className="h-16 px-space-md flex items-center justify-between border-b border-outline-variant/60">
            <Link href="/" className="flex items-center gap-space-sm group">
              <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-primary-container/40 flex items-center justify-center text-primary-container shadow-sm group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[20px]">hexagon</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md tracking-wider text-primary font-bold leading-none">
                  HEX<span className="text-primary-container">AI</span>
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[9px] -mt-1">
                  Telemetry Hub
                </span>
              </div>
            </Link>

            {/* Mobile close button */}
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden text-on-surface-variant hover:text-white"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="px-space-md pt-space-md pb-space-xs">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
              Player Console
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col px-space-xs gap-space-xs">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`flex items-center gap-space-sm px-space-sm py-2 rounded-lg transition-all text-left cursor-pointer ${
                    isActive
                      ? "bg-surface-container text-primary-container border-l-2 border-primary-container font-label-md"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  <span className="font-body-md text-body-md">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-space-sm border-t border-outline-variant/60 flex flex-col gap-space-xs">
          <Link
            href="/"
            className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="font-body-md text-body-md">Exit to Overview</span>
          </Link>

          <button
            onClick={() => alert("Settings panel")}
            className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer text-left"
          >
            <span className="material-symbols-outlined text-[18px]">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </button>

          <div className="flex items-center gap-space-sm px-space-sm py-space-xs mt-space-xs bg-surface-container/50 rounded-lg border border-outline-variant">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#FF5E1E]" />
            <div className="flex flex-col min-w-0">
              <span className="font-label-caps text-label-caps text-primary-container tracking-wider uppercase">
                Telemetry Link
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Courtside Live 120Hz
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop overlay for mobile menu */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* ============================================================== */}
      {/* MAIN CONTENT CONTAINER                                         */}
      {/* ============================================================== */}
      <div className="md:pl-[250px] flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="fixed top-0 left-0 md:left-[250px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant z-40 px-space-md md:px-space-lg flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            {/* Mobile Sidebar Hamburger Toggle */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden p-1.5 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>

            {/* Season Selector */}
            <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1.5 rounded border border-outline-variant">
              <span className="material-symbols-outlined text-outline text-[16px]">calendar_today</span>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="bg-transparent border-none outline-none font-label-md text-label-md text-on-surface cursor-pointer pr-1"
              >
                <option value="2024-25 Season" className="bg-surface-container-lowest text-white">
                  2024-25 Season
                </option>
                <option value="2023-24 Season" className="bg-surface-container-lowest text-white">
                  2023-24 Season
                </option>
                <option value="Tournament Play" className="bg-surface-container-lowest text-white">
                  Tournament Play
                </option>
              </select>
            </div>

            {/* Search Input */}
            <div className="hidden md:flex items-center gap-space-xs bg-surface-container px-space-md py-1.5 rounded border border-outline-variant w-64 focus-within:border-primary-container transition-colors">
              <span className="material-symbols-outlined text-outline text-[16px]">search</span>
              <input
                className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline w-full focus:ring-0"
                placeholder="Search plays, stats, film..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            {/* AI Coach Online Chip */}
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded bg-primary-container/10 border border-primary-container/30">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-caps text-label-caps text-primary-container uppercase">
                AI Coach Online
              </span>
            </div>

            {/* Notification Bell */}
            <button
              onClick={() => alert("No unread alerts. 120 FPS camera telemetry stream synchronized.")}
              className="relative p-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all cursor-pointer"
              aria-label="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface-container-lowest" />
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-space-sm pl-space-sm border-l border-outline-variant">
              <div className="relative">
                <img
                  alt="Marcus Carter Profile"
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-primary-container/60"
                  src="/images/profile-marcus.jpg"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDX1doywKLdqJiZQDbyDEWJfwC3QFeMP58V6ZBU6j9Sgxk1KU130uWdfPCOFRzlNJ1M0szfNdBqLCuqig1AngNrc8SGI8npZM75CdIHFss91UNJzThpGVBhZHqPuF8xa9uArWOExsTGbBzYjsIxiY7JFsX3QQL5QKpsnlET01NpgWuSUSk70Q1BWlsoNRA-jAZOXxM73Gf3_esK4ia2gcH0G4VezL_H-lXSi5dVUmjBfceetxJAyWx1Cg";
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-secondary border border-surface-container-lowest" />
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">
                  Marcus
                </span>
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider leading-tight text-[10px]">
                  #12 State Guard
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="relative pt-16 w-full flex-1 bg-surface-container-lowest">
          <div className="flex flex-col w-full px-space-md md:px-space-xl py-space-lg gap-space-lg text-on-surface">
            {/* ============================================================== */}
            {/* ATHLETE HERO & QUICK ACTIONS                                  */}
            {/* ============================================================== */}
            <section className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg bg-surface-container-low border border-outline-variant/50 rounded-xl p-space-lg shadow-xl relative overflow-hidden">
              {/* Subtle Tactical Radial Aura */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col gap-space-xs relative z-10">
                <div className="flex flex-wrap items-center gap-space-xs mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary-container font-label-caps text-label-caps uppercase tracking-widest flex items-center gap-1.5 shadow-sm border border-primary-container/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                    Telemetry Verified
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps tracking-wider border border-outline-variant/60">
                    6&apos;4&quot; • Guard • #12 • State Bulldogs
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
                  Welcome back, Marcus.
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Here&apos;s your performance snapshot and what to focus on next.{" "}
                  <span className="text-outline">• Demonstration Data (Courtside Sync Active)</span>
                </p>
              </div>

              {/* Quick Action Bar */}
              <div className="flex flex-wrap items-center gap-space-xs relative z-10">
                <button
                  onClick={() => setFilmModalOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary-container text-white font-label-md text-label-md rounded-lg shadow-md hover:bg-surface-tint transition-all active:scale-[0.98] cursor-pointer font-semibold shadow-[0_0_16px_rgba(255,94,30,0.3)]"
                >
                  <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                  + Upload Game Film
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("ai-coach-card");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-high border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-bright transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-primary-container text-[18px]">
                    psychology
                  </span>
                  Ask AI Coach
                </button>
                <button
                  onClick={() => alert("Training log opened: Added 45-min shootaround.")}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container border border-outline-variant/70 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-md text-label-md rounded-lg transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                  Log Training
                </button>
                <button
                  onClick={() => alert("Exporting verified telemetry dossier (PDF/CSV)...")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-surface-container border border-outline-variant/70 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-md text-label-md rounded-lg transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">ios_share</span>
                  Export
                </button>
              </div>
            </section>

            {/* ============================================================== */}
            {/* 6 PERFORMANCE STATISTIC CARDS                                  */}
            {/* ============================================================== */}
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
              {/* Stat 1: PPG */}
              <div className="flex flex-col justify-between bg-surface-container border border-outline-variant/60 p-space-md rounded-lg shadow-md hover:bg-surface-container-high transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Points / GM
                  </span>
                  <span className="flex items-center text-[10px] font-label-caps font-bold text-primary-container bg-primary-container/10 border border-primary-container/20 px-1.5 py-0.5 rounded">
                    +2.1
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-metric-xl text-metric-xl text-primary font-bold tracking-tight">
                    22.4
                  </span>
                  <span className="font-label-caps text-label-caps text-outline ml-1">PPG</span>
                </div>
                <div className="h-6 w-full flex items-end gap-1">
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[65%] group-hover:bg-primary-container/50 transition-colors" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[75%] group-hover:bg-primary-container/50 transition-colors" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[60%] group-hover:bg-primary-container/50 transition-colors" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[85%] group-hover:bg-primary-container/60 transition-colors" />
                  <div className="w-full bg-primary-container rounded-t-sm h-[95%]" />
                </div>
              </div>

              {/* Stat 2: RPG */}
              <div className="flex flex-col justify-between bg-surface-container border border-outline-variant/60 p-space-md rounded-lg shadow-md hover:bg-surface-container-high transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Rebounds
                  </span>
                  <span className="flex items-center text-[10px] font-label-caps font-bold text-secondary bg-secondary/10 border border-secondary/20 px-1.5 py-0.5 rounded">
                    +0.4
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-metric-xl text-metric-xl text-primary font-bold tracking-tight">
                    5.8
                  </span>
                  <span className="font-label-caps text-label-caps text-outline ml-1">RPG</span>
                </div>
                <div className="h-6 w-full flex items-end gap-1">
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[50%]" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[70%]" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[60%]" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[65%]" />
                  <div className="w-full bg-secondary rounded-t-sm h-[80%]" />
                </div>
              </div>

              {/* Stat 3: APG */}
              <div className="flex flex-col justify-between bg-surface-container border border-outline-variant/60 p-space-md rounded-lg shadow-md hover:bg-surface-container-high transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Assists
                  </span>
                  <span className="flex items-center text-[10px] font-label-caps font-bold text-primary-container bg-primary-container/10 border border-primary-container/20 px-1.5 py-0.5 rounded">
                    +1.2
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-metric-xl text-metric-xl text-primary font-bold tracking-tight">
                    6.2
                  </span>
                  <span className="font-label-caps text-label-caps text-outline ml-1">APG</span>
                </div>
                <div className="h-6 w-full flex items-end gap-1">
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[55%]" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[60%]" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[80%]" />
                  <div className="w-full bg-surface-container-highest rounded-t-sm h-[70%]" />
                  <div className="w-full bg-primary-container rounded-t-sm h-[90%]" />
                </div>
              </div>

              {/* Stat 4: FG% */}
              <div className="flex flex-col justify-between bg-surface-container border border-outline-variant/60 p-space-md rounded-lg shadow-md hover:bg-surface-container-high transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Field Goal
                  </span>
                  <span className="flex items-center text-[10px] font-label-caps font-bold text-primary-container bg-primary-container/10 border border-primary-container/20 px-1.5 py-0.5 rounded">
                    +3.2%
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-metric-xl text-metric-xl text-primary font-bold tracking-tight">
                    48.6
                  </span>
                  <span className="font-label-caps text-label-caps text-outline ml-1">%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: "48.6%" }} />
                </div>
              </div>

              {/* Stat 5: 3PT% */}
              <div className="flex flex-col justify-between bg-surface-container border border-outline-variant/60 p-space-md rounded-lg shadow-md hover:bg-surface-container-high transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    3-Point
                  </span>
                  <span className="flex items-center text-[10px] font-label-caps font-bold text-secondary bg-secondary/10 border border-secondary/20 px-1.5 py-0.5 rounded">
                    +1.8%
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-metric-xl text-metric-xl text-primary font-bold tracking-tight">
                    39.4
                  </span>
                  <span className="font-label-caps text-label-caps text-outline ml-1">%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "39.4%" }} />
                </div>
              </div>

              {/* Stat 6: FT% */}
              <div className="flex flex-col justify-between bg-surface-container border border-outline-variant/60 p-space-md rounded-lg shadow-md hover:bg-surface-container-high transition-all group">
                <div className="flex items-start justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Free Throw
                  </span>
                  <span className="flex items-center text-[10px] font-label-caps font-bold text-tertiary bg-tertiary/10 border border-tertiary/20 px-1.5 py-0.5 rounded">
                    +0.5%
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-metric-xl text-metric-xl text-primary font-bold tracking-tight">
                    88.5
                  </span>
                  <span className="font-label-caps text-label-caps text-outline ml-1">%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full" style={{ width: "88.5%" }} />
                </div>
              </div>
            </section>

            {/* ============================================================== */}
            {/* MAIN ANALYTICS SECTION: 2-COLUMN                               */}
            {/* ============================================================== */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* LEFT: SCORING & OFFENSIVE OUTPUT (LAST 10 GAMES) */}
              <div className="lg:col-span-8 bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl shadow-lg flex flex-col justify-between">
                <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
                  <div>
                    <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                      Offensive Analytics
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary mt-0.5 font-bold">
                      Scoring &amp; Offensive Output (Last 10 Games)
                    </h2>
                  </div>

                  {/* Series Legend */}
                  <div className="flex items-center gap-space-md">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-1 bg-primary-container rounded-full" />
                      <span className="font-label-caps text-label-caps text-on-surface">Points Scored</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-1 bg-tertiary rounded-full" />
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        True Shooting % (TS)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Details Popover */}
                {activeGameHover && (
                  <div className="bg-surface-container-lowest/90 border border-primary-container/40 p-2 rounded-lg text-xs flex items-center justify-between mb-2 animate-in fade-in">
                    <span className="font-bold text-white uppercase">{activeGameHover.matchup}</span>
                    <div className="flex gap-4">
                      <span className="text-primary-container font-semibold">
                        Points: {activeGameHover.points} PTS
                      </span>
                      <span className="text-tertiary font-semibold">
                        TS%: {activeGameHover.ts}%
                      </span>
                    </div>
                  </div>
                )}

                {/* Interactive SVG Chart */}
                <div className="relative w-full h-72 flex flex-col justify-end pt-4">
                  <svg className="w-full h-full overflow-visible select-none" preserveAspectRatio="none" viewBox="0 0 700 220">
                    <defs>
                      <linearGradient id="ptsGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#FF5E1E" stopOpacity="0.30" />
                        <stop offset="100%" stopColor="#FF5E1E" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Reference Gridlines */}
                    <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="700" y1="20" y2="20" />
                    <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="700" y1="70" y2="70" />
                    <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="700" y1="120" y2="120" />
                    <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="700" y1="170" y2="170" />
                    <line className="text-surface-container-highest" stroke="currentColor" x1="0" x2="700" y1="210" y2="210" />

                    {/* Shaded Area Under Points */}
                    <polygon fill="url(#ptsGradient)" points="20,130 95,95 170,110 245,60 320,80 395,120 470,65 545,40 620,90 685,30 685,210 20,210" />

                    {/* TS% Line (Tertiary Cyan) */}
                    <polyline
                      fill="none"
                      points="20,110 95,85 170,95 245,75 320,60 395,100 470,70 545,55 620,70 685,45"
                      stroke="#06B6D4"
                      strokeDasharray="4 2"
                      strokeWidth="2"
                    />

                    {/* Points Line (Court Blaze Orange) */}
                    <polyline
                      fill="none"
                      points="20,130 95,95 170,110 245,60 320,80 395,120 470,65 545,40 620,90 685,30"
                      stroke="#FF5E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />

                    {/* Interactive Node Highlights */}
                    {[
                      { cx: 20, cy: 130, m: "vs MEM", pts: 18, ts: 54.2 },
                      { cx: 95, cy: 95, m: "vs TENN", pts: 21, ts: 58.6 },
                      { cx: 170, cy: 110, m: "vs FLA", pts: 19, ts: 56.1 },
                      { cx: 245, cy: 60, m: "vs UK (19)", pts: 26, ts: 63.4 },
                      { cx: 320, cy: 80, m: "vs AUB", pts: 23, ts: 64.8 },
                      { cx: 395, cy: 120, m: "vs ARK", pts: 17, ts: 53.0 },
                      { cx: 470, cy: 65, m: "vs UNC (24)", pts: 25, ts: 62.1 },
                      { cx: 545, cy: 40, m: "vs DUKE (28)", pts: 29, ts: 67.5 },
                      { cx: 620, cy: 90, m: "vs OSU", pts: 22, ts: 59.8 },
                      { cx: 685, cy: 30, m: "vs MICH (31)", pts: 31, ts: 68.2 },
                    ].map((node, i) => (
                      <circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r={i >= 6 ? (i === 9 ? 7 : 5) : 4}
                        strokeWidth={i === 9 ? 3 : 2}
                        className="cursor-pointer transition-transform hover:scale-150 fill-primary-container stroke-white"
                        onMouseEnter={() =>
                          setActiveGameHover({
                            matchup: node.m,
                            points: node.pts,
                            ts: node.ts,
                          })
                        }
                        onMouseLeave={() => setActiveGameHover(null)}
                      />
                    ))}
                  </svg>

                  {/* X-Axis Matchup Labels */}
                  <div className="flex justify-between items-center text-[10px] font-label-caps text-outline mt-2 px-1">
                    <span>vs MEM</span>
                    <span>vs TENN</span>
                    <span>vs FLA</span>
                    <span>vs UK (19)</span>
                    <span>vs AUB</span>
                    <span>vs ARK</span>
                    <span>vs UNC (24)</span>
                    <span>vs DUKE (28)</span>
                    <span>vs OSU</span>
                    <span className="text-primary-container font-bold">vs MICH (31)</span>
                  </div>
                </div>

                {/* Quick Summary Stat Footnote */}
                <div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between bg-surface-container-high/60 border border-outline-variant/40 px-space-md py-2 rounded-lg gap-2">
                  <div className="flex items-center gap-space-sm text-body-sm font-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">
                      insights
                    </span>
                    <span>
                      Marcus scored <strong className="text-white">20+ PTS</strong> in 7 of the last 10
                      contests with <strong className="text-white">61.4% TS</strong> efficiency.
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">
                    Top 4% Division I Guards
                  </span>
                </div>
              </div>

              {/* RIGHT: SHOOTING SPLITS & COURT ZONES */}
              <div className="lg:col-span-4 bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <div>
                      <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                        Shot Profile
                      </span>
                      <h2 className="font-headline-md text-headline-md text-primary font-bold">
                        Splits &amp; Shot Zones
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-highest border border-outline-variant/50 font-label-caps text-label-caps text-on-surface">
                      364 FGA
                    </span>
                  </div>

                  {/* Visual Court Graphic Heatmap */}
                  <div className="relative w-full h-44 bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-2 flex items-center justify-center my-3 overflow-hidden shadow-inner">
                    <svg className="w-full h-full opacity-80" viewBox="0 0 300 200">
                      {/* Basketball Half Court Schematic */}
                      <rect fill="none" height="180" rx="4" stroke="#252C3D" strokeWidth="1.5" width="280" x="10" y="10" />
                      {/* Paint Box */}
                      <rect fill="none" height="95" stroke="#252C3D" strokeWidth="1.5" width="90" x="105" y="10" />
                      <circle cx="150" cy="105" fill="none" r="30" stroke="#252C3D" strokeDasharray="3 2" strokeWidth="1.5" />
                      {/* Backboard & Rim */}
                      <line stroke="#717D96" strokeWidth="2" x1="135" x2="165" y1="20" y2="20" />
                      <circle cx="150" cy="27" fill="none" r="7" stroke="#FF5E1E" strokeWidth="2" />
                      {/* 3-point Arc */}
                      <path d="M 35 10 L 35 45 Q 150 170 265 45 L 265 10" fill="none" stroke="#252C3D" strokeWidth="1.5" />

                      {/* Hot Zones Overlays */}
                      {/* Rim Elite Zone */}
                      <ellipse cx="150" cy="40" fill="#FF5E1E" fillOpacity="0.45" rx="35" ry="25" />
                      <text fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" x="150" y="44">
                        62.8%
                      </text>
                      {/* Left Corner 3 */}
                      <circle cx="30" cy="30" fill="#F59E0B" fillOpacity="0.35" r="14" />
                      <text fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" x="30" y="34">
                        41%
                      </text>
                      {/* Right Corner 3 */}
                      <circle cx="270" cy="30" fill="#F59E0B" fillOpacity="0.35" r="14" />
                      <text fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" x="270" y="34">
                        38%
                      </text>
                      {/* Top of the Key Pull-Up */}
                      <circle cx="150" cy="140" fill="#FF5E1E" fillOpacity="0.4" r="22" />
                      <text fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" x="150" y="143">
                        44.2%
                      </text>
                      {/* Mid-Range Elbows */}
                      <circle cx="95" cy="85" fill="#F59E0B" fillOpacity="0.3" r="15" />
                      <text fill="#FFFFFF" fontSize="9" fontWeight="600" textAnchor="middle" x="95" y="89">
                        46%
                      </text>
                      <circle cx="205" cy="85" fill="#252C3D" fillOpacity="0.6" r="15" />
                      <text fill="#94A3B8" fontSize="9" fontWeight="600" textAnchor="middle" x="205" y="89">
                        34%
                      </text>
                    </svg>
                  </div>

                  {/* Breakdown Progress Bars */}
                  <div className="flex flex-col gap-2.5 mt-2">
                    {/* Paint & Rim */}
                    <div>
                      <div className="flex justify-between font-label-md text-label-md mb-1">
                        <span className="text-on-surface">Paint &amp; Rim Finishing</span>
                        <span className="text-primary-container font-bold">
                          62.8% <span className="text-outline text-body-sm font-normal">(118/188)</span>
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className="bg-primary-container h-full rounded-full" style={{ width: "62.8%" }} />
                      </div>
                    </div>
                    {/* Mid-Range */}
                    <div>
                      <div className="flex justify-between font-label-md text-label-md mb-1">
                        <span className="text-on-surface">Mid-Range Pull-ups</span>
                        <span className="text-secondary font-bold">
                          46.2% <span className="text-outline text-body-sm font-normal">(42/91)</span>
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full" style={{ width: "46.2%" }} />
                      </div>
                    </div>
                    {/* 3-Point */}
                    <div>
                      <div className="flex justify-between font-label-md text-label-md mb-1">
                        <span className="text-on-surface">3-Point Arc</span>
                        <span className="text-tertiary font-bold">
                          39.4% <span className="text-outline text-body-sm font-normal">(33/85)</span>
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className="bg-tertiary h-full rounded-full" style={{ width: "39.4%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-label-caps text-outline pt-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary-container inline-block" /> High Volume + Efficient
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-surface-container-highest inline-block" /> Below Threshold
                  </span>
                </div>
              </div>
            </section>

            {/* ============================================================== */}
            {/* MIDDLE ROW: AI DEVELOPMENT INSIGHTS & ACTIVE GOALS             */}
            {/* ============================================================== */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* AI DEVELOPMENT INSIGHTS */}
              <div className="lg:col-span-7 bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-primary-container/10 border border-primary-container/20 text-primary-container">
                        <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                      </span>
                      <div>
                        <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                          Automated Scouting Feed
                        </span>
                        <h2 className="font-headline-md text-headline-md text-primary font-bold">
                          Your Game, Analyzed
                        </h2>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-surface-container-highest border border-outline-variant/50 rounded text-on-surface-variant font-label-caps text-label-caps">
                      3 New Observations
                    </span>
                  </div>

                  <div className="flex flex-col gap-space-sm">
                    {/* Insight 1 */}
                    <div className="p-space-md bg-surface-container-low border border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-all flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5 shrink-0">
                        trending_up
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-label-md text-label-md text-primary font-semibold">
                            Pick-and-Roll Pull-up Efficiency
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-primary-container/15 border border-primary-container/30 text-primary-container font-label-caps text-[10px]">
                            Positive Momentum
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                          Off-the-dribble 3PT efficiency is up{" "}
                          <strong className="text-primary-container">7.4%</strong> over the last 4 games.
                          Recommended: Increase pick-and-roll pull-up frequency when defenders drop below the level of the screen.
                        </p>
                      </div>
                    </div>

                    {/* Insight 2 */}
                    <div className="p-space-md bg-surface-container-low border border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-all flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                        warning
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-label-md text-label-md text-primary font-semibold">
                            Baseline Trap Vulnerability
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-secondary/15 border border-secondary/30 text-secondary font-label-caps text-[10px]">
                            Action Item
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                          Turnovers spike on baseline trap scenarios (
                          <strong className="text-on-surface">4 TOs in last 2 games</strong>). Suggested action:
                          Review coach play tags for baseline counter-cuts and flash release routes with Coach Vance.
                        </p>
                      </div>
                    </div>

                    {/* Insight 3 */}
                    <div className="p-space-md bg-surface-container-low border border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-all flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5 shrink-0">
                        shield
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-label-md text-label-md text-primary font-semibold">
                            Defensive Perimeter Lockdown
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-tertiary/15 border border-tertiary/30 text-tertiary font-label-caps text-[10px]">
                            Elite Tier
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                          Defensive closeouts rated elite (
                          <strong className="text-tertiary">32.1% allowed EFG%</strong>). You held opponents to 4/16
                          shooting from deep on direct contests. Discuss matchup assignment for Michigan game.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-md pt-space-xs flex items-center justify-between">
                  <button
                    onClick={() => alert("Loading Telemetry Drill Recommendations...")}
                    className="text-primary-container font-label-md text-label-md hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    Open Telemetry Drill Recommendations{" "}
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="font-label-caps text-label-caps text-outline text-xs">
                    Refreshed 28m ago via TrackMan Optical
                  </span>
                </div>
              </div>

              {/* ACTIVE DEVELOPMENT GOALS */}
              <div className="lg:col-span-5 bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-secondary/10 border border-secondary/20 text-secondary">
                        <span className="material-symbols-outlined text-[20px]">flag</span>
                      </span>
                      <div>
                        <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                          Targets
                        </span>
                        <h2 className="font-headline-md text-headline-md text-primary font-bold">
                          Active Development Goals
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Create new target goal")}
                      className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container-high cursor-pointer"
                      aria-label="Add goal"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-space-md">
                    {/* Goal 1 */}
                    <div className="bg-surface-container-low border border-outline-variant/40 p-space-md rounded-lg flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-label-md text-label-md text-primary font-semibold">
                            Corner 3PT Catch-and-Shoot Consistency
                          </h4>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Target: 42.0% • Current: 38.5%
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-outline font-label-caps text-[10px] shrink-0 border border-outline-variant/40">
                          Nov 30
                        </span>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-caps text-label-caps text-outline mb-1 text-xs">
                          <span>Progress Metric</span>
                          <span className="text-primary-container font-bold">85% Complete</span>
                        </div>
                        <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                          <div className="bg-primary-container h-full rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>
                    </div>

                    {/* Goal 2 */}
                    <div className="bg-surface-container-low border border-outline-variant/40 p-space-md rounded-lg flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-label-md text-label-md text-primary font-semibold">
                            Turnover-to-Assist Ratio (&gt; 2.5:1)
                          </h4>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Target: &gt; 2.5:1 • Current: 2.3:1
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-secondary/15 border border-secondary/30 text-secondary font-label-caps text-[10px] shrink-0 font-semibold">
                          In Progress
                        </span>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-caps text-label-caps text-outline mb-1 text-xs">
                          <span>Progress Metric</span>
                          <span className="text-secondary font-bold">90% Complete</span>
                        </div>
                        <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                          <div className="bg-secondary h-full rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>
                    </div>

                    {/* Goal 3 */}
                    <div className="bg-surface-container-low border border-outline-variant/40 p-space-md rounded-lg flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-label-md text-label-md text-primary font-semibold">
                            Free Throw Attempts per 40 Min (&gt; 6.0)
                          </h4>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Target: 6.0+ FTA • Current: 5.4 FTA
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-outline font-label-caps text-[10px] shrink-0 border border-outline-variant/40">
                          Season Long
                        </span>
                      </div>
                      <div>
                        <div className="flex justify-between font-label-caps text-label-caps text-outline mb-1 text-xs">
                          <span>Progress Metric</span>
                          <span className="text-tertiary font-bold">75% Complete</span>
                        </div>
                        <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                          <div className="bg-tertiary h-full rounded-full" style={{ width: "75%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-md pt-space-xs text-right">
                  <button
                    onClick={() => alert("Goal management drawer opened.")}
                    className="text-outline hover:text-primary-container font-label-md text-label-md transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    Manage All Goals <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </section>

            {/* ============================================================== */}
            {/* BOTTOM ROW: RECENT GAME FILM & AI COACH QUICK ASSISTANT        */}
            {/* ============================================================== */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* RECENT GAME FILM */}
              <div className="lg:col-span-7 bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-primary-container/10 border border-primary-container/20 text-primary-container">
                        <span className="material-symbols-outlined text-[20px]">smart_display</span>
                      </span>
                      <div>
                        <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                          Video Hub
                        </span>
                        <h2 className="font-headline-md text-headline-md text-primary font-bold">
                          Recent Game Film
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("All 14 game film recordings loaded.")}
                      className="font-label-md text-label-md text-primary-container hover:underline cursor-pointer font-semibold"
                    >
                      View All Film
                    </button>
                  </div>

                  {/* Video Cards List */}
                  <div className="flex flex-col gap-space-sm">
                    {/* Film 1 */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-space-sm bg-surface-container-low border border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-all gap-space-md">
                      <div className="flex items-center gap-space-md min-w-0">
                        <div className="relative w-28 h-18 sm:w-32 sm:h-20 bg-surface-container-highest rounded-md overflow-hidden shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            alt="State vs Michigan game footage thumbnail"
                            src="/images/film-michigan.jpg"
                          />
                          <span className="absolute bottom-1 right-1 px-1 rounded bg-surface-container-lowest/90 font-label-caps text-[9px] text-primary">
                            28:40
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary truncate font-semibold">
                            State vs Michigan (Nov 18)
                          </span>
                          <div className="flex flex-wrap items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mt-0.5 text-xs">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" /> 18 Tagged Plays
                            </span>
                            <span>•</span>
                            <span className="text-primary-container font-semibold">4 AI Coach Notes</span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="px-1.5 py-0.5 rounded bg-surface-container-highest border border-outline-variant/40 text-outline font-label-caps text-[10px]">
                              Full HD 1080p
                            </span>
                            <span className="text-secondary font-label-caps text-[10px] font-bold">READY</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Opening State vs Michigan film player with 120 FPS timeline scrub...")}
                        className="px-3.5 py-2 bg-surface-container-highest hover:bg-primary-container hover:text-white text-on-surface font-label-md text-label-md rounded-md transition-all shrink-0 flex items-center justify-center gap-1 border border-outline-variant/40 hover:border-transparent cursor-pointer font-medium"
                      >
                        <span>Review Film</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>

                    {/* Film 2 */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-space-sm bg-surface-container-low border border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-all gap-space-md">
                      <div className="flex items-center gap-space-md min-w-0">
                        <div className="relative w-28 h-18 sm:w-32 sm:h-20 bg-surface-container-highest rounded-md overflow-hidden shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            alt="State vs Ohio State game footage thumbnail"
                            src="/images/film-ohiostate.jpg"
                          />
                          <span className="absolute bottom-1 right-1 px-1 rounded bg-surface-container-lowest/90 font-label-caps text-[9px] text-primary">
                            31:15
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary truncate font-semibold">
                            State vs Ohio State (Nov 12)
                          </span>
                          <div className="flex flex-wrap items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mt-0.5 text-xs">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" /> 24 Tagged Plays
                            </span>
                            <span>•</span>
                            <span className="text-primary-container font-semibold">6 AI Coach Notes</span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="px-1.5 py-0.5 rounded bg-surface-container-highest border border-outline-variant/40 text-outline font-label-caps text-[10px]">
                              Tracked Coordinates
                            </span>
                            <span className="text-secondary font-label-caps text-[10px] font-bold">READY</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Opening State vs Ohio State film player...")}
                        className="px-3.5 py-2 bg-surface-container-highest hover:bg-primary-container hover:text-white text-on-surface font-label-md text-label-md rounded-md transition-all shrink-0 flex items-center justify-center gap-1 border border-outline-variant/40 hover:border-transparent cursor-pointer font-medium"
                      >
                        <span>Review Film</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>

                    {/* Film 3 */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-space-sm bg-surface-container-low border border-outline-variant/40 rounded-lg hover:bg-surface-container-high transition-all gap-space-md">
                      <div className="flex items-center gap-space-md min-w-0">
                        <div className="relative w-28 h-18 sm:w-32 sm:h-20 bg-surface-container-highest rounded-md overflow-hidden shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            alt="Pre-Season Scrimmage footage thumbnail"
                            src="/images/film-scrimmage.jpg"
                          />
                          <span className="absolute bottom-1 right-1 px-1 rounded bg-surface-container-lowest/90 font-label-caps text-[9px] text-primary">
                            19:42
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-md text-label-md text-primary truncate font-semibold">
                            Pre-Season Scrimmage (Nov 05)
                          </span>
                          <div className="flex flex-wrap items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mt-0.5 text-xs">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-outline" /> 15 Tagged Plays
                            </span>
                            <span>•</span>
                            <span className="text-outline">Scrimmage Sync</span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="px-1.5 py-0.5 rounded bg-surface-container-highest border border-outline-variant/40 text-outline font-label-caps text-[10px]">
                              Internal Session
                            </span>
                            <span className="text-secondary font-label-caps text-[10px] font-bold">READY</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => alert("Opening Pre-Season Scrimmage session...")}
                        className="px-3.5 py-2 bg-surface-container-highest hover:bg-primary-container hover:text-white text-on-surface font-label-md text-label-md rounded-md transition-all shrink-0 flex items-center justify-center gap-1 border border-outline-variant/40 hover:border-transparent cursor-pointer font-medium"
                      >
                        <span>Review Film</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI COACH QUICK ASSISTANT PREVIEW */}
              <div
                id="ai-coach-card"
                className="lg:col-span-5 bg-surface-container border border-outline-variant/60 p-space-lg rounded-xl shadow-lg flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow Accent Background */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary-container/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* AI Coach Header */}
                  <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/60">
                    <div className="flex items-center gap-space-sm">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-highest border border-outline-variant/60 flex items-center justify-center text-primary-container shadow-sm">
                          <span className="material-symbols-outlined text-[24px]">psychology</span>
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-primary-container ring-2 ring-surface-container animate-pulse" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-headline-md text-headline-md text-primary leading-none font-bold">
                            Coach HEX AI
                          </span>
                          <span className="font-label-caps text-[9px] px-1.5 py-0.5 bg-primary-container/20 border border-primary-container/30 text-primary-container rounded">
                            PRO TACTICAL
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-outline">
                          Real-time Game Model Active
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline cursor-pointer hover:text-on-surface">
                      more_vert
                    </span>
                  </div>

                  {/* Dynamic Chat Messages Stream */}
                  <div className="my-space-md flex flex-col gap-2 max-h-56 overflow-y-auto pr-1">
                    {messages.map((m, idx) => (
                      <div
                        key={idx}
                        className={`p-space-md rounded-lg flex flex-col gap-1 text-sm ${
                          m.sender === "coach"
                            ? "bg-surface-container-low border border-outline-variant/50 border-l-4 border-l-primary-container"
                            : "bg-surface-container-highest border border-outline-variant/40 self-end text-white max-w-[85%]"
                        }`}
                      >
                        {m.sender === "coach" && (
                          <div className="flex items-center gap-1 text-[11px] font-label-caps text-primary-container font-semibold">
                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                            GAME TACTICAL SUMMARY
                          </div>
                        )}
                        <p className="font-body-md text-body-md text-on-surface">{m.text}</p>
                        <span className="font-body-sm text-body-sm text-outline self-end text-[10px]">
                          {m.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Prompt Chips */}
                  <div className="flex flex-col gap-1.5 mb-space-md">
                    <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider text-xs font-semibold">
                      Suggested Inquiries
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Why am I missing contested shots?",
                        "Explain my last game's performance",
                        "What should I work on this week?",
                      ].map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(prompt)}
                          className="px-2.5 py-1.5 bg-surface-container-high border border-outline-variant/50 hover:bg-surface-container-highest hover:border-primary-container/40 text-on-surface rounded-md font-body-sm text-body-sm text-left transition-colors cursor-pointer text-xs"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Input Form */}
                <div className="mt-space-sm pt-space-xs">
                  <form
                    className="relative flex items-center"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                  >
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface placeholder:text-outline font-body-sm text-body-sm px-3.5 py-2.5 rounded-lg pr-10 focus:outline-none focus:ring-1 focus:ring-primary-container shadow-inner"
                      placeholder="Ask HEX Coach anything about plays, metrics..."
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button
                      className="absolute right-1.5 p-1.5 bg-primary-container text-white rounded hover:bg-surface-tint transition-all cursor-pointer"
                      type="submit"
                      aria-label="Send message"
                    >
                      <span className="material-symbols-outlined text-[16px] block">send</span>
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Film Upload Modal for + Upload Game Film action */}
      <FilmUploadModal isOpen={filmModalOpen} onClose={() => setFilmModalOpen(false)} />
    </div>
  );
}
