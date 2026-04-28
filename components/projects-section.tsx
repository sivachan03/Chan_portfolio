"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Workflow Generation System",
    description:
      "Automated workflow generation using LLMs and RAG for intelligent task execution",
    image: "/livedemo.png",
    technologies: ["N8N", "LangChain", "ChromaDB", "Docker", "Python", "RAG"],
    liveUrl: "https://agentflow-frontend-production-b537.up.railway.app/", // ← இங்க போடு
    githubUrl: "https://github.com/sivachan03/New_Agent_Automation",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    image: "/task-management-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with location-based forecasts and charts",
    image: "/weather-dashboard.png",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking",
    image: "/social-media-analytics-dashboard.png",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot with natural language processing capabilities",
    image: "/modern-ai-chatbot.png",
    technologies: ["Next.js", "OpenAI API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio website with modern animations and dark mode",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center py-16 sm:py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>

          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex gap-2 p-1 bg-muted rounded-lg flex-wrap justify-center">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => setFilter("all")}
                size="sm"
                className="text-xs sm:text-sm"
              >
                All Projects
              </Button>
              <Button
                variant={filter === "featured" ? "default" : "ghost"}
                onClick={() => setFilter("featured")}
                size="sm"
                className="text-xs sm:text-sm"
              >
                Featured
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-scale animate-delay-${index * 100}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
