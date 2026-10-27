"use client";

import React, { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  initialMode: "signin" | "signup";
  initialRole?: string;
  onClose: () => void;
}

export default function AuthModal({
  isOpen,
  initialMode,
  initialRole = "athlete",
  onClose,
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-surface-container border border-outline-variant/40 rounded-2xl p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface/60 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-court-blaze/30 flex items-center justify-center text-court-blaze shadow-[0_0_12px_rgba(255,94,30,0.25)]">
            <span className="material-symbols-outlined text-[18px]">hexagon</span>
          </div>
          <span className="font-headline-md text-white font-bold tracking-tight">HEXAI Access</span>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-court-blaze/20 border border-court-blaze flex items-center justify-center text-court-blaze mb-3 animate-bounce">
              <span className="material-symbols-outlined text-[24px]">check</span>
            </div>
            <h4 className="text-white font-bold text-lg">
              {mode === "signin" ? "Authenticated Successfully" : "Account Verified"}
            </h4>
            <p className="text-on-surface/70 text-sm mt-1">
              Synchronizing telemetry workspace...
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-headline-lg text-white font-bold text-xl mb-1">
              {mode === "signin" ? "Sign In to Telemetry Console" : "Start Your Telemetry Journey"}
            </h3>
            <p className="text-on-surface/70 text-sm mb-5">
              {mode === "signin"
                ? "Enter your credentials to access game film and telemetry."
                : "Choose your primary role to configure tailored analytical models."}
            </p>

            {mode === "signup" && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-on-surface/80 uppercase tracking-wider mb-2">
                  Select Role
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "athlete", label: "Athlete", icon: "fitness_center" },
                    { id: "coach", label: "Coach", icon: "sports" },
                    { id: "scout", label: "Scout", icon: "manage_search" },
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id)}
                      className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        role === r.id
                          ? "bg-court-blaze/15 border-court-blaze text-court-blaze font-semibold shadow-sm"
                          : "bg-surface-container-low border-outline-variant/30 text-on-surface/70 hover:border-outline-variant"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{r.icon}</span>
                      <span className="text-xs">{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="block text-xs font-semibold text-on-surface/80 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="coach.henderson@program.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 text-white placeholder:text-on-surface/40 focus:outline-none focus:border-court-blaze text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface/80 uppercase tracking-wider mb-1">
                  Access Key / Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 text-white placeholder:text-on-surface/40 focus:outline-none focus:border-court-blaze text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-lg bg-court-blaze text-white font-semibold text-sm hover:bg-[#e04e12] transition-colors shadow-[0_0_16px_rgba(255,94,30,0.4)] cursor-pointer"
              >
                {mode === "signin" ? "Enter Telemetry Hub" : "Create Verified Profile"}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface/70">
              <span>
                {mode === "signin" ? "New to HEXAI?" : "Already registered?"}
              </span>
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-court-blaze font-semibold hover:underline cursor-pointer"
              >
                {mode === "signin" ? "Create an account" : "Sign in here"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
