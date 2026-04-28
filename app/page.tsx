"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Toaster } from "@/components/ui/toaster"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection />
      case "about":
        return <AboutSection />
      case "skills":
        return <SkillsSection />
      case "projects":
        return <ProjectsSection />
      case "experience":
        return <ExperienceSection />
      case "contact":
        return <ContactSection />
      default:
        return <HeroSection />
    }
  }

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-80px)] transition-all duration-500 ease-in-out">
          {renderActiveSection()}
        </div>
        <Toaster />
      </div>
    </main>
  )
}
