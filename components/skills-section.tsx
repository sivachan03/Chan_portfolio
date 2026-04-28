"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Flutter / Dart", level: 78 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Figma", level: 80 },
      { name: "HTML", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 85 },
      { name: "Django", level: 95 },
      { name: "LangChain", level: 85 },
      { name: "N8N Automation", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "MySQL / PostgreSQL", level: 80 },
      { name: "ChromaDB", level: 78 },
      { name: "N8N", level: 78 },

      { name: "Azure / Render", level: 75 },
      { name: "Docker", level: 75 },
    ],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(
                () => {
                  setAnimatedSkills((prev) => new Set([...prev, skill.name]));
                },
                categoryIndex * 200 + skillIndex * 100,
              );
            });
          });
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
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`animate-fade-scale animate-delay-${categoryIndex * 200}`}
              >
                <CardHeader>
                  <CardTitle className="text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={animatedSkills.has(skill.name) ? skill.level : 0}
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
