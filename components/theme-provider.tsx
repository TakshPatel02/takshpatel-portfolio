'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialTheme = "light",
}: {
  children: React.ReactNode;
  initialTheme?: string;
}) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

