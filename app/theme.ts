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
  window.dispatchEvent(new Event("themechange"));
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


export function subscribeThemeChange(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback as EventListener);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback as EventListener);
  };
}

export function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function getServerThemeSnapshot() {
  return "light";
}