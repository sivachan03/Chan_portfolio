"use client"

import type React from "react"

import { createContext, useContext, useEffect } from "react"

type Theme = "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme: Theme = "dark"

  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  }, [])

  const setTheme = () => {
    // Theme switching disabled - dark mode only
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
