"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Automation Developer",
    company: "Gotoz Technology ",
    location: "Erode , TamilNadu",
    period: "Dec 2024 – Apr 2026",
    description:
      "Built AI-powered workflow generation system using N8N + LLM integration. Implemented RAG-based approach using ChromaDB. Improved LLM output accuracy by 5x through context filtering and semantic search. Deployed using Docker and cloud platforms.",
    technologies: [
      "N8N",
      "LangChain",
      "ChromaDB",
      "Docker",
      "Python",
      "RAG",
      "Azure",
      "Render",
      "N8N Automation",
      "Rag based architecture",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "AtoZerv",
    location: "Tirupur, TamilNadu",
    period: "Feb 2023 – Oct 2024",
    description:
      "Developed end-to-end eCommerce platform with secure authentication and real-time order tracking. Built School Management & Bus Tracking system using Flutter and Django with real-time location sync.",
    technologies: ["Python", "Django", "MySQL", "Flutter", "Dart", "REST API"],
  },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen mt-6 flex items-center py-16 sm:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="container mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto w-full">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-4 sm:space-y-6">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.title}
                    className={`relative animate-fade-scale animate-delay-${index * 200}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 bg-primary rounded-full border-4 border-background"></div>

                    <div className="ml-8 sm:ml-16">
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                            <div className="min-w-0">
                              <CardTitle className="text-base sm:text-lg">
                                {experience.title}
                              </CardTitle>
                              <CardDescription className="text-sm sm:text-base font-medium text-primary">
                                {experience.company}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm">
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                                {experience.period}
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                                {experience.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 pb-4 px-4 sm:px-6">
                          <p className="text-muted-foreground mb-3 text-xs sm:text-sm leading-relaxed">
                            {experience.description}
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
