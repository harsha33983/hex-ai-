"use client";

import React, { useState, useEffect } from "react";

type ModuleType = "dashboard" | "video" | "ai" | "scout";
type DispositionType = "Supportive" | "Balanced" | "Direct" | "Demanding";

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<ModuleType>("dashboard");
  const [activeZone, setActiveZone] = useState<string | null>(null);

  // Video Workspace state
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35);
  const [telestrationActive, setTelestrationActive] = useState(true);

  // Vance-LLM state
  const [disposition, setDisposition] = useState<DispositionType>("Direct");

  // Scout Comparison state
  const [comparisonPair, setComparisonPair] = useState<"pair1" | "pair2">("pair1");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const vanceFeedback: Record<
    DispositionType,
    { text: string; drill: string; focus: string }
  > = {
    Direct: {
      text: "“You held the ball 1.2s too long on that high drop coverage. Notice the weak-side wing rotated early at the 03:42 mark. Next rep, hit the skip pass to the corner before the help defender establishes balance.”",
      drill: "Skip Pass Decision Timing",
      focus: "Passing Velocity & Early Read",
    },
    Supportive: {
      text: "“Great rhythm on the initial hesitation move. You forced the drop big to commit downward. When the help rotates early at 03:42, your easiest assist is waiting in the weak-side corner.”",
      drill: "Weak-Side Tag Recognition",
      focus: "Court Vision & Spatial Awareness",
    },
    Balanced: {
      text: "“Solid offensive possession creating an advantage out of the high screen. You had two viable options: a pull-up jumper at the elbow or the skip pass. At 03:42, the skip was the higher expected-value play.”",
      drill: "Pick-and-Roll Read Matrix",
      focus: "Shot Quality vs Pass Valuation",
    },
    Demanding: {
      text: "“Unacceptable hesitation. That drop defender gave you two full seconds of daylight at 03:42. A collegiate-level guard makes the corner skip in one fluid motion. Do not allow the recovery defender to recover.”",
      drill: "One-Motion Live Dribble Skip",
      focus: "Zero-Latency Decision Making",
    },
  };

  return (
    <section
      className="w-full bg-surface-dim py-space-2xl border-t border-b border-surface-container-high/40"
      id="platform-overview"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-court-blaze font-bold">
              Core Modules
            </span>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white font-bold tracking-tight mt-1">
              Platform Architecture Deep Dive
            </h2>
          </div>

          {/* Module Switcher Tabs */}
          <div className="inline-flex p-1 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "dashboard"
                  ? "text-white bg-court-blaze font-semibold shadow-[0_0_12px_rgba(255,94,30,0.35)]"
                  : "text-on-surface/70 hover:text-white font-medium"
              }`}
            >
              Player Dashboard
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "video"
                  ? "text-white bg-court-blaze font-semibold shadow-[0_0_12px_rgba(255,94,30,0.35)]"
                  : "text-on-surface/70 hover:text-white font-medium"
              }`}
            >
              Video Workspace
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "ai"
                  ? "text-white bg-court-blaze font-semibold shadow-[0_0_12px_rgba(255,94,30,0.35)]"
                  : "text-on-surface/70 hover:text-white font-medium"
              }`}
            >
              Vance-LLM
            </button>
            <button
              onClick={() => setActiveTab("scout")}
              className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "scout"
                  ? "text-white bg-court-blaze font-semibold shadow-[0_0_12px_rgba(255,94,30,0.35)]"
                  : "text-on-surface/70 hover:text-white font-medium"
              }`}
            >
              Scout Compare
            </button>
          </div>
        </div>

        {/* Module Content Container */}
        <div className="relative bg-surface-container border border-outline-variant/30 rounded-2xl p-space-xl shadow-xl overflow-hidden min-h-[460px]">
          {/* ============================================================== */}
          {/* MODULE A: PLAYER DASHBOARD & SHOT MATRIX                      */}
          {/* ============================================================== */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs text-court-blaze font-label-sm text-[11px] uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">grid_view</span>
                  <span>Module 01</span>
                </div>
                <h3 className="font-headline-xl text-3xl text-white font-bold">
                  Player Dashboard &amp; Shot Matrix
                </h3>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed">
                  Every offensive possession cataloged into five primary court zones. Real-time true
                  shooting percentage (TS%), effective field goal metrics, and turnover rates
                  calculated automatically against collegiate benchmark percentiles.
                </p>

                <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                  <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-space-md">
                    <span className="font-label-sm text-[10px] uppercase text-on-surface/70 font-semibold">
                      Paint Efficiency
                    </span>
                    <p className="font-metric-lg text-metric-lg text-court-blaze font-bold mt-1">
                      68.4%
                    </p>
                    <span className="font-body-sm text-body-sm text-arena-amber">
                      Top 9% Regionally
                    </span>
                  </div>
                  <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-space-md">
                    <span className="font-label-sm text-[10px] uppercase text-on-surface/70 font-semibold">
                      True Shooting
                    </span>
                    <p className="font-metric-lg text-metric-lg text-white font-bold mt-1">
                      61.2%
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface/70">
                      +4.8% vs Conf. Avg
                    </span>
                  </div>
                </div>

                {activeZone && (
                  <div className="bg-surface-container-lowest/80 border border-court-blaze/40 rounded-lg p-2.5 text-xs text-white">
                    <span className="text-court-blaze font-bold uppercase mr-1">Zone Telemetry:</span>
                    {activeZone}
                  </div>
                )}
              </div>

              {/* Shot Chart SVG Mockup */}
              <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-lg flex flex-col justify-between">
                <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline-variant/20">
                  <span className="font-label-sm text-[11px] uppercase text-white font-semibold">
                    Half-Court Shot Matrix (Last 12 Games)
                  </span>
                  <span className="font-label-sm text-[11px] text-court-blaze uppercase font-bold">
                    184 Attempts Logged
                  </span>
                </div>

                {/* SVG Court */}
                <div className="relative w-full h-[260px] bg-surface-container-low/50 rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant/20">
                  <svg
                    className="w-full h-full text-surface-variant stroke-current fill-none select-none"
                    viewBox="0 0 500 300"
                  >
                    {/* Half court perimeter */}
                    <rect
                      x="20"
                      y="20"
                      width="460"
                      height="260"
                      rx="6"
                      stroke="#33353a"
                      strokeWidth="2"
                    />
                    {/* Key */}
                    <rect
                      x="190"
                      y="20"
                      width="120"
                      height="150"
                      stroke="#33353a"
                      strokeWidth="2"
                    />
                    {/* Restricted area arc */}
                    <path
                      d="M 230,20 A 20,20 0 0,0 270,20"
                      stroke="#33353a"
                      strokeWidth="2"
                    />
                    {/* Free throw circle */}
                    <circle cx="250" cy="170" r="50" stroke="#33353a" strokeWidth="2" />
                    {/* Three point arc */}
                    <path
                      d="M 60,20 L 60,70 A 200,200 0 0,0 440,70 L 440,20"
                      stroke="#33353a"
                      strokeWidth="2"
                    />
                    {/* Rim & Backboard */}
                    <line x1="230" y1="35" x2="270" y2="35" stroke="#e2e2e9" strokeWidth="3" />
                    <circle cx="250" cy="45" r="10" stroke="#ff5e1e" strokeWidth="2" />

                    {/* Left Corner 3 */}
                    <circle
                      cx="50"
                      cy="50"
                      r="16"
                      fill="#ff5e1e"
                      fillOpacity="0.45"
                      stroke="#ff5e1e"
                      strokeWidth="2"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onMouseEnter={() =>
                        setActiveZone("Left Corner 3: 47.1% (8/17) • Efficient catch-and-shoot hub")
                      }
                      onMouseLeave={() => setActiveZone(null)}
                    />

                    {/* Paint Cluster */}
                    <circle
                      cx="245"
                      cy="70"
                      r="22"
                      fill="#ff5e1e"
                      fillOpacity="0.55"
                      stroke="#ff5e1e"
                      strokeWidth="2"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onMouseEnter={() =>
                        setActiveZone("Paint at Rim: 68.4% (54/79) • Elite high-finishing percentile")
                      }
                      onMouseLeave={() => setActiveZone(null)}
                    />
                    <circle
                      cx="260"
                      cy="110"
                      r="16"
                      fill="#f59e0b"
                      fillOpacity="0.45"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onMouseEnter={() =>
                        setActiveZone("Short Mid-Range Floater: 48.0% (12/25) • Consistent soft touch")
                      }
                      onMouseLeave={() => setActiveZone(null)}
                    />

                    {/* Top of the Key 3 */}
                    <circle
                      cx="250"
                      cy="240"
                      r="18"
                      fill="#f59e0b"
                      fillOpacity="0.4"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onMouseEnter={() =>
                        setActiveZone("Top of Key 3: 41.2% (14/34) • On-ball pull-up consistency")
                      }
                      onMouseLeave={() => setActiveZone(null)}
                    />

                    {/* Right Wing 3 */}
                    <circle
                      cx="410"
                      cy="130"
                      r="16"
                      fill="#33353a"
                      fillOpacity="0.6"
                      stroke="#5b4138"
                      strokeWidth="1.5"
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onMouseEnter={() =>
                        setActiveZone("Right Wing 3: 36.4% (8/22) • Cold sector vs heavy contests")
                      }
                      onMouseLeave={() => setActiveZone(null)}
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between pt-space-sm text-body-sm font-body-sm text-on-surface/70 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-court-blaze shadow-[0_0_6px_#ff5e1e]" />
                    High Efficiency (&gt;55%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-arena-amber" />
                    Mid Range Avg (42-55%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
                    Cold Zone (&lt;42%)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* MODULE B: VIDEO WORKSPACE                                      */}
          {/* ============================================================== */}
          {activeTab === "video" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs text-arena-amber font-label-sm text-[11px] uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">videocam</span>
                  <span>Module 02</span>
                </div>
                <h3 className="font-headline-xl text-3xl text-white font-bold">
                  Video Analysis Workspace
                </h3>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed">
                  Court-level telestration toolkit with synchronized clip markers. Scrub
                  frame-by-frame with zero latency, insert freeze-frame tactical arrows, and share
                  tagged possessions directly to athlete study queues.
                </p>

                <div className="flex items-center gap-space-sm pt-space-xs flex-wrap">
                  <button
                    onClick={() => setTelestrationActive(!telestrationActive)}
                    className={`px-space-md py-1.5 rounded-lg border text-white font-label-md text-label-md flex items-center gap-1.5 cursor-pointer transition-colors ${
                      telestrationActive
                        ? "bg-surface-container-high border-court-blaze/60 text-court-blaze shadow-sm"
                        : "bg-surface-container-low border-outline-variant/30 text-on-surface/70"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px] text-court-blaze">
                      draw
                    </span>
                    Telestration Tools {telestrationActive ? "(On)" : "(Off)"}
                  </button>

                  <button
                    onClick={() => setVideoProgress(35)}
                    className="px-space-md py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-white font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:border-arena-amber transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px] text-arena-amber">
                      bookmark
                    </span>
                    Jump to Marker 04
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-md flex flex-col gap-space-md">
                {/* Mock Player Window */}
                <div className="relative w-full h-[220px] bg-surface-container-high rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant/20">
                  <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[96px] text-on-surface">
                      sports_basketball
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-full bg-court-blaze text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,94,30,0.5)] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {isPlaying ? "pause" : "play_arrow"}
                      </span>
                    </button>
                    <span className="font-label-sm text-[11px] text-court-blaze font-bold uppercase mt-2">
                      Q3 • 04:12 • Transition Offense
                    </span>
                  </div>

                  {/* Simulated Telestration Path */}
                  {telestrationActive && (
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none stroke-court-blaze fill-none"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    >
                      <path d="M 80,180 Q 200,60 380,110" />
                      <circle cx="380" cy="110" r="4" fill="#ff5e1e" />
                    </svg>
                  )}
                </div>

                {/* Timeline Scrub bar */}
                <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5 border border-outline-variant/20">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface/70 text-xs">
                    <span>
                      {Math.floor((videoProgress / 100) * 6)}:
                      {String(Math.floor(((videoProgress / 100) * 40) % 60)).padStart(2, "0")}{" "}
                      / 06:40
                    </span>
                    <span className="text-court-blaze font-label-sm text-[10px] uppercase font-bold">
                      Marker 04: Screen Roll Read
                    </span>
                  </div>

                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      setVideoProgress(Math.max(0, Math.min(100, (x / rect.width) * 100)));
                    }}
                    className="relative w-full h-3 bg-surface-container-highest rounded-full overflow-hidden cursor-pointer flex items-center"
                  >
                    <div
                      className="h-full bg-court-blaze rounded-full shadow-[0_0_8px_#ff5e1e] transition-all"
                      style={{ width: `${videoProgress}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md transition-all -ml-1.5"
                      style={{ left: `${videoProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* MODULE C: VANCE-LLM AI COACH                                    */}
          {/* ============================================================== */}
          {activeTab === "ai" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs text-court-blaze font-label-sm text-[11px] uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">psychology</span>
                  <span>Module 03</span>
                </div>
                <h3 className="font-headline-xl text-3xl text-white font-bold">
                  Vance-LLM AI Coach
                </h3>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed">
                  Trained on thousands of collegiate possessions and pro development
                  methodologies. Select your preferred coaching disposition to receive personalized
                  tactical critique linked directly to timestamps.
                </p>

                {/* Disposition Pills */}
                <div className="flex items-center gap-2 pt-space-xs flex-wrap">
                  {(["Supportive", "Balanced", "Direct", "Demanding"] as DispositionType[]).map(
                    (disp) => {
                      const isSelected = disposition === disp;
                      return (
                        <button
                          key={disp}
                          onClick={() => setDisposition(disp)}
                          className={`px-2.5 py-1 rounded text-[11px] font-label-sm uppercase transition-all cursor-pointer ${
                            isSelected
                              ? "bg-court-blaze text-white font-bold shadow-[0_0_12px_rgba(255,94,30,0.35)]"
                              : "bg-surface-container-high border border-outline-variant/30 text-on-surface hover:text-white"
                          }`}
                        >
                          {disp}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-court-blaze text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      V
                    </div>
                    <span className="font-label-md text-label-md text-white font-semibold">
                      Vance AI Feedback • Disposition: {disposition}
                    </span>
                  </div>
                  <span className="text-court-blaze font-label-sm text-[10px] uppercase font-bold">
                    Possession 38
                  </span>
                </div>

                <div className="bg-surface-container-high border border-outline-variant/30 rounded-xl p-space-md min-h-[100px] flex items-center">
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                    {vanceFeedback[disposition].text}
                  </p>
                </div>

                <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface/70 text-xs flex-wrap gap-2">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-arena-amber">
                      check_circle
                    </span>
                    Drill Prescribed: {vanceFeedback[disposition].drill}
                  </span>
                  <button
                    onClick={() => setActiveTab("video")}
                    className="text-court-blaze font-label-sm text-[10px] uppercase font-bold hover:underline cursor-pointer"
                  >
                    View Clip (03:42)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* MODULE D: SCOUT COMPARISON ENGINE                             */}
          {/* ============================================================== */}
          {activeTab === "scout" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs text-arena-amber font-label-sm text-[11px] uppercase font-bold">
                  <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                  <span>Module 04</span>
                </div>
                <h3 className="font-headline-xl text-3xl text-white font-bold">
                  Scout Comparison Engine
                </h3>
                <p className="font-body-md text-body-md text-on-surface/80 leading-relaxed">
                  Side-by-side evaluation of prospects across identical defensive matchups and
                  possession volume. Certified metrics authenticated via coach upload protocols.
                </p>

                <div className="flex items-center gap-space-sm text-arena-amber font-label-sm text-[11px] uppercase font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-court-blaze">
                    lock
                  </span>
                  <span>Compliant with NCAA Division I/II/III Direct Contact Guidelines</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setComparisonPair("pair1")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border ${
                      comparisonPair === "pair1"
                        ? "bg-court-blaze text-white border-court-blaze"
                        : "bg-surface-container-high border-outline-variant/30 text-on-surface"
                    }`}
                  >
                    Henderson vs Miller
                  </button>
                  <button
                    onClick={() => setComparisonPair("pair2")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border ${
                      comparisonPair === "pair2"
                        ? "bg-court-blaze text-white border-court-blaze"
                        : "bg-surface-container-high border-outline-variant/30 text-on-surface"
                    }`}
                  >
                    Henderson vs Brooks
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-space-md">
                <div className="grid grid-cols-3 gap-space-sm text-center pb-space-sm">
                  <div />
                  <div className="bg-surface-container-high border border-court-blaze/30 rounded-lg p-2">
                    <span className="font-label-md text-label-md text-white font-semibold block">
                      Henderson, T.
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface/70 text-xs">
                      Horizon Prep (PG)
                    </span>
                  </div>
                  <div className="bg-surface-container-high border border-outline-variant/30 rounded-lg p-2">
                    <span className="font-label-md text-label-md text-white font-semibold block">
                      {comparisonPair === "pair1" ? "Miller, K." : "Brooks, D."}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface/70 text-xs">
                      {comparisonPair === "pair1" ? "Metro Academy (SG)" : "Oakridge High (SF)"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="grid grid-cols-3 gap-space-sm items-center py-2 bg-surface-container-low rounded-lg px-space-md text-center border border-outline-variant/20">
                    <span className="text-left font-label-sm text-[11px] uppercase text-on-surface/70 font-semibold">
                      True Shooting %
                    </span>
                    <span className="font-label-md text-label-md text-court-blaze font-bold">
                      61.2%
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {comparisonPair === "pair1" ? "57.4%" : "54.8%"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-space-sm items-center py-2 bg-surface-container-low rounded-lg px-space-md text-center border border-outline-variant/20">
                    <span className="text-left font-label-sm text-[11px] uppercase text-on-surface/70 font-semibold">
                      Assist / TO Ratio
                    </span>
                    <span className="font-label-md text-label-md text-white font-bold">2.8</span>
                    <span className="font-label-md text-label-md text-arena-amber font-bold">
                      {comparisonPair === "pair1" ? "3.1" : "2.2"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-space-sm items-center py-2 bg-surface-container-low rounded-lg px-space-md text-center border border-outline-variant/20">
                    <span className="text-left font-label-sm text-[11px] uppercase text-on-surface/70 font-semibold">
                      Possessions Evaluated
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">640</span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {comparisonPair === "pair1" ? "590" : "610"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-space-sm items-center py-2 bg-surface-container-low rounded-lg px-space-md text-center border border-outline-variant/20">
                    <span className="text-left font-label-sm text-[11px] uppercase text-on-surface/70 font-semibold">
                      Defensive Rating
                    </span>
                    <span className="font-label-md text-label-md text-court-blaze font-bold">
                      104.2
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {comparisonPair === "pair1" ? "108.6" : "106.1"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
