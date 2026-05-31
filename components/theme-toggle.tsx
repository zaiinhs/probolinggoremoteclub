"use client";

import { LaptopMinimal, MoonStar, SunMedium } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import type { LucideIcon } from "lucide-react";

import { siteConfig } from "@/data/site";

type ThemeMode = "light" | "dark" | "system";

const storageKey = `${siteConfig.shortName.toLowerCase()}-theme`;
const themeEvent = "prc-theme-change";

const themeOptions: { mode: ThemeMode; icon: LucideIcon; label: string }[] = [
  { mode: "light", icon: SunMedium, label: "Terang" },
  { mode: "dark", icon: MoonStar, label: "Gelap" },
  { mode: "system", icon: LaptopMinimal, label: "Sistem" },
];

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const resolved =
    mode === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : mode;

  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.dataset.themeMode = mode;
  window.localStorage.setItem(storageKey, mode);
  window.dispatchEvent(new Event(themeEvent));
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(themeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeEvent, callback);
  };
}

function getSnapshot(): ThemeMode {
  return (window.localStorage.getItem(storageKey) as ThemeMode | null) || "system";
}

function getServerSnapshot(): ThemeMode {
  return "system";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep "system" mode in sync when the OS preference changes.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const currentMode = (document.documentElement.dataset.themeMode as ThemeMode | undefined) || "system";
      if (currentMode === "system") {
        applyTheme("system");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="theme-seg" role="group" aria-label="Pilih tema">
      {themeOptions.map(({ mode, icon: Icon, label }) => {
        const active = theme === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={() => applyTheme(mode)}
            className={`theme-seg-btn ${active ? "theme-seg-btn-active" : ""}`}
            aria-pressed={active}
            aria-label={`Tema ${label}`}
            title={label}
          >
            <Icon size={16} strokeWidth={2.3} />
          </button>
        );
      })}
    </div>
  );
}
