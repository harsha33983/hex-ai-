"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenAuth?: (mode: "signin" | "signup", role?: string) => void;
  onOpenUpload?: () => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("product");

  const navLinks = [
    { label: "Product", href: "#platform-overview", id: "product" },
    { label: "Athletes", href: "#pillars", id: "athletes" },
    { label: "Coaches", href: "#pillars", id: "coaches" },
    { label: "Scouts", href: "#pillars", id: "scouts" },
    { label: "Technology", href: "#workflow", id: "technology" },
    { label: "About", href: "#compliance", id: "about" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
        <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-desktop flex items-center justify-between gap-gutter">
          {/* Logo & Brand */}
          <div className="flex items-center gap-space-xl">
            <Link
              href="/"
              className="flex items-center gap-space-sm group"
              onClick={() => setActivePath("product")}
            >
              <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-court-blaze transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(255,94,30,0.25)] border border-court-blaze/30">
                <span className="material-symbols-outlined text-[22px]">hexagon</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md tracking-tight text-white font-bold leading-none">
                  HEXAI
                </span>
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-court-blaze leading-none mt-space-xs font-semibold">
                  Telemetry
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-space-lg">
              {navLinks.map((link) => {
                const isActive = activePath === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActivePath(link.id)}
                    className={`transition-colors font-label-md text-label-md ${
                      isActive
                        ? "text-court-blaze font-semibold drop-shadow-[0_0_8px_rgba(255,94,30,0.3)]"
                        : "text-on-surface/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-space-md">
            <Link
              href="/sign-in"
              className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg font-label-md text-label-md text-on-surface/80 hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center px-space-lg py-2.5 rounded-lg bg-court-blaze text-white font-label-md text-label-md font-semibold hover:bg-[#e04e12] transition-all duration-150 shadow-[0_0_20px_-2px_rgba(255,94,30,0.45)] hover:shadow-[0_0_26px_0px_rgba(255,94,30,0.6)] active:scale-95 cursor-pointer"
            >
              Start Your Journey
            </Link>
            <Link
              href="/dashboard"
              aria-label="Player Console"
              className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-court-blaze hover:border-court-blaze transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-on-surface/80 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container border-b border-surface-container-high/60 px-margin py-4 animate-in fade-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActivePath(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    activePath === link.id
                      ? "bg-court-blaze/15 text-court-blaze font-semibold"
                      : "text-on-surface/80 hover:bg-surface-container-high hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-outline-variant/30 flex flex-col gap-2">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg border border-outline-variant/40 text-on-surface font-medium hover:bg-surface-container-high"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-court-blaze text-white font-semibold shadow-md hover:bg-[#e04e12]"
                >
                  Start Your Journey
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
