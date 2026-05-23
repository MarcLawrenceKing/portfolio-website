export type Theme = "light" | "dark";

export function toggleTheme() {
  const root = document.documentElement;
  const currentTheme =
    root.dataset.theme === "dark" || root.dataset.theme === "light"
      ? root.dataset.theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  root.dataset.theme = nextTheme;
  window.localStorage.setItem("theme", nextTheme);
}

export function initializeTheme() {
  const storedTheme = window.localStorage.getItem("theme");
  const preferredTheme =
    storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  document.documentElement.dataset.theme = preferredTheme;
}