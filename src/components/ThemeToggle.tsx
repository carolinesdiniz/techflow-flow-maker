import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      /* ignore */
    }
    const prefers =
      stored === "dark" ||
      (stored === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(prefers);
    applyTheme(prefers);
    setReady(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={dark ? "Modo claro" : "Modo escuro"}
      onClick={() => {
        const next = !dark;
        setDark(next);
        applyTheme(next);
      }}
      className={`grid size-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      {ready && dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
