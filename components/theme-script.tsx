import { siteConfig } from "@/data/site";

const script = `
(() => {
  const storageKey = '${siteConfig.shortName.toLowerCase()}-theme';
  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (mode) => {
    const resolved = mode === 'system' ? (systemDark.matches ? 'dark' : 'light') : mode;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
    root.dataset.themeMode = mode;
  };

  const savedTheme = localStorage.getItem(storageKey) || 'system';
  applyTheme(savedTheme);
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
