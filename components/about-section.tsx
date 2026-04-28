"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const interests = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable code" },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Finding elegant solutions",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring new technologies",
  },
  { icon: Users, title: "Collaboration", description: "Working in teams" },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">Hi there! 👋</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm a passionate Full Stack Developer with 1.5+ years of
                hands-on experience building web and mobile applications. I
                specialize in AI automation systems, RAG-based architectures,
                and intelligent workflow pipelines using LangChain, N8N, and
                ChromaDB.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                When I'm not coding, I enjoy exploring new AI technologies,
                building automation tools, and mentoring aspiring developers to
                turn ideas into real-world solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">LLM</Badge>
                <Badge variant="secondary">N8N</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">LangChain</Badge>
                <Badge variant="secondary">N8N</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">ChromaDB</Badge>
                <Badge variant="secondary">Postgres</Badge>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-36 sm:w-40 h-36 sm:h-40 bg-card rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src="/me.jpeg"
                    alt="Siva Chandran"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {interests.map((interest, index) => (
              <Card
                key={interest.title}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-scale animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-4 text-center">
                  <interest.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-1 text-sm">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
