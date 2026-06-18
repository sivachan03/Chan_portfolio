"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const developerTitles = useMemo(
    () => ["Software Developer", "Flutter Developer", "Java Developer"],
    [],
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const startTypingAnimation = useCallback(() => {
    const currentTitle = developerTitles[currentTitleIndex];
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % developerTitles.length);
        }, 1500);
      }
    }, 80); // Slightly faster typing for better UX

    return () => clearInterval(typingInterval);
  }, [currentTitleIndex, developerTitles]);

  useEffect(() => {
    const cleanup = startTypingAnimation();
    return cleanup;
  }, [startTypingAnimation]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 py-20 pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={`text-left transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Hello{"\n"}
              I'm{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                Sivachandran S
              </span>
            </h1>

            <div className="inline-block px-4 sm:px-6 py-3 bg-blue-600/20 border border-cyan-400/30 rounded-lg mb-6 sm:mb-8 min-w-max">
              <p className="text-cyan-400 text-base sm:text-lg font-medium font-mono">
                {displayedText}
                <span
                  className={`inline-block w-0.5 h-5 bg-cyan-400 ml-1 ${isTyping ? "animate-pulse" : "animate-pulse"}`}
                >
                  |
                </span>
              </p>
            </div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Passionate Full Stack Developer with 1.5+ years of experience,
              specializing in AI automation, MERN stack, Django, Flutter, and
              building intelligent workflow pipelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm sm:text-base"
              >
                Learn More
              </Button>
              <a href="/sivachandran.pdf" download>
                <Button
                  size="lg"
                  className="bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 text-sm sm:text-base"
                >
                  Get Resume
                </Button>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0"}`}
          >
            <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-left">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">profile</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">name</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'Sivachan S'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">role</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">
                    'Full Stack Developer / AI Automation Developer'
                  </span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">qualification</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'BSc (CS)'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">batch</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">'2019 - 2022'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">skills</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'Java'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'JavaScript'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'TypeScript'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Python'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'HTML5'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'CSS3'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'TailwindCSS'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Figma'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'ReactJS'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'NextJS'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'Django'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'LLM'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Automation'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'Node.js'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'N8N'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'Express.js'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Web Services'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'MongoDB'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'MySQL'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Postgres'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Firebase'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'VS Code'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'Eclipse'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'Git'</span>
                  <span className="text-white">,</span>
                  <span className="text-green-400">'Git Hub'</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">'Azure'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'RestAPI'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'Linux'</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-green-400">'Rag arc'</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">hardWorker</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-blue-400">true</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">quickLearner</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-blue-400">true</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">problemSolver</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-blue-400">true</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">yearsOfExperience</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-400">1</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-orange-400">hireable</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-white">() {"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-white">(</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">this</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">hardWorker</span>{" "}
                  <span className="text-white">&&</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">this</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">problemSolver</span>{" "}
                  <span className="text-white">&&</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">this</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">skills</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">length</span>{" "}
                  <span className="text-white">{">="}</span>{" "}
                  <span className="text-yellow-400">5</span>{" "}
                  <span className="text-white">&&</span>
                  {"\n"}
                  {"      "}
                  <span className="text-blue-400">this</span>
                  <span className="text-white">.</span>
                  <span className="text-cyan-400">yearsOfExperience</span>{" "}
                  <span className="text-white">{">="}</span>{" "}
                  <span className="text-yellow-400">1</span>
                  {"\n"}
                  {"    "}
                  <span className="text-white">);</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white">{"}"}</span>
                  {"\n"}
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
