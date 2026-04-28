"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "./icons"

const navItems = [
  { name: "Home", key: "home" },
  { name: "About", key: "about" },
  { name: "Skills", key: "skills" },
  { name: "Projects", key: "projects" },
  { name: "Experience", key: "experience" },
  { name: "Contact", key: "contact" },
]

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionChange = (sectionKey: string) => {
    setActiveSection(sectionKey)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 px-4 w-full ${
          isScrolled
            ? "sm:top-4 max-w-2xl sm:max-w-4xl lg:max-w-6xl bg-background/90 backdrop-blur-xl border border-border shadow-2xl rounded-2xl"
            : "sm:top-4 max-w-2xl sm:max-w-4xl lg:max-w-6xl bg-background/70 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl"
        }`}
      >
        <div className="px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer flex-shrink-0">
              <div className="relative">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Icons.Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary-foreground" />
                </div>
                <div className="absolute -inset-1 bg-primary rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="flex flex-col hidden sm:block">
                <span className="text-base sm:text-xl font-bold text-primary">Portfolio</span>
                <span className="text-xs text-muted-foreground -mt-1">Developer</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-muted/50 rounded-full px-2 py-1 border border-border/30 flex-wrap justify-center">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSectionChange(item.key)}
                  className={`relative px-2 sm:px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 group ${
                    activeSection === item.key
                      ? "text-primary-foreground bg-primary shadow-lg"
                      : "text-foreground hover:text-primary-foreground hover:bg-primary/80"
                  }`}
                >
                  {item.name}
                  {activeSection === item.key && (
                    <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <Button
                onClick={() => handleSectionChange("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0"
              >
                Let's Talk
                <Icons.ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full hover:bg-primary/10 bg-muted/30 border border-border/50 h-9 w-9 sm:h-10 sm:w-10"
              >
                {isMobileMenuOpen ? (
                  <Icons.X className="h-5 w-5 text-primary" />
                ) : (
                  <Icons.Menu className="h-5 w-5 text-primary" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-card/95 backdrop-blur-xl border-l border-border shadow-2xl">
            <div className="flex flex-col h-full pt-20 pb-6 px-4 sm:px-6">
              <div className="flex-1 space-y-2 sm:space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleSectionChange(item.key)}
                    className={`block w-full text-left py-3 px-4 sm:py-4 sm:px-6 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.key
                        ? "text-primary-foreground bg-primary shadow-lg"
                        : "text-foreground hover:text-primary-foreground hover:bg-primary/80 hover:translate-x-2"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `slideInRight 0.5s ease-out ${index * 100}ms both`,
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="pt-4 sm:pt-6 border-t border-border">
                <Button
                  onClick={() => handleSectionChange("contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-3 sm:py-4 font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Let's Talk
                  <Icons.ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
