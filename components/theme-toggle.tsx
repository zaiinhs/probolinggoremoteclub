"use client";

import { LaptopMinimal, MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";

type ThemeMode = "light" | "dark" | "system";

const themeOptions: ThemeMode[] = ["light", "dark", "system"];

function getThemeMeta(mode: ThemeMode) {
  if (mode === "light") {
    return { icon: SunMedium, label: "Light" };
  }

  if (mode === "dark") {
    return { icon: MoonStar, label: "Dark" };
  }

  return { icon: LaptopMinimal, label: "System" };
}

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
  window.localStorage.setItem(`${siteConfig.shortName.toLowerCase()}-theme`, mode);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    return (
      (window.localStorage.getItem(`${siteConfig.shortName.toLowerCase()}-theme`) as ThemeMode | null) ||
      "system"
    );
  });

  useEffect(() => {
    applyTheme(theme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const currentMode = (document.documentElement.dataset.themeMode as ThemeMode | undefined) || "system";
      if (currentMode === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const currentTheme = getThemeMeta(theme);
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="theme-toggle-wrap" aria-label="Theme switcher">
      <span className="theme-toggle-label">Theme</span>
      <label className="theme-select-shell">
        <span className="theme-select-icon" aria-hidden="true">
          <CurrentIcon size={14} strokeWidth={2.1} />
        </span>
        <span className="theme-select-current" aria-hidden="true">
          {currentTheme.label}
        </span>
        <select
          aria-label="Pilih tema"
          value={theme}
          onChange={(event) => {
            const nextTheme = event.target.value as ThemeMode;
            setTheme(nextTheme);
            applyTheme(nextTheme);
          }}
          className="theme-select"
        >
          {themeOptions.map((option) => (
            <option key={option} value={option}>
              {option === "light" ? "Light" : option === "dark" ? "Dark" : "System"}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
