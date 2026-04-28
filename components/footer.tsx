"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground">
              Ready to bring your ideas to life? Let's connect and create something extraordinary together.
            </p>
          </div>

          <div className="flex space-x-6">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="w-full border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 Your Name. All rights reserved.</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 hover:scale-110 transition-transform"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
