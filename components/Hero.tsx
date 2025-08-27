"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  Zap,
  Award,
  Terminal,
  Cpu,
  Database,
  Globe,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadResumeButton from "@/ui/components/DownloadResumeButton";

export default function Hero() {

  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "React Specialist",
    "Next.js Specialist",
    "API Developer",
    "Front end Engineer",
    "Backend Engineer",
    "Software Engineer",
    "Web Developer",
    "Problem Solver",
  ];

  const techStack = [
    {
      name: "JavaScript",
      icon: "🟨",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    { name: "Next.JS", icon: "🖥️", color: "text-pink-600", bg: "bg-pink-100" },
    { name: "React", icon: "⚛️", color: "text-blue-600", bg: "bg-blue-100" },
    {
      name: "API Development",
      icon: "🟢",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      name: "AI/ML",
      icon: "🤖",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    // Tech stack rotation
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);

    // Role typing effect
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Typing effect for current role
    const currentRoleText = roles[currentRole];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (i > 0) {
              setTypedText(currentRoleText.slice(0, i - 1));
              i--;
            } else {
              clearInterval(deleteInterval);
            }
          }, 50);
        }, 1500);
      }
    }, 100);

    return () => {
      clearInterval(techInterval);
      clearInterval(roleInterval);
      clearInterval(typingInterval);
    };
  }, [currentRole]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-slate-50"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_24px,_rgba(0,0,0,0.05)_25px,_rgba(0,0,0,0.05)_26px,_transparent_27px),_linear-gradient(rgba(0,0,0,0.05)_24px,_transparent_25px,_transparent_26px,_rgba(0,0,0,0.05)_27px)] bg-[length:25px_25px]"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[26%] w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-float opacity-60">
          <Code2 className="w-6 h-6 text-blue-600" />
        </div>
        <div
          className="absolute top-32 right-[20%] w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center animate-float opacity-60"
          style={{ animationDelay: "1s" }}
        >
          <Database className="w-6 h-6 text-green-600" />
        </div>
        <div
          className="absolute bottom-32 left-[30%] w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center animate-float opacity-60"
          style={{ animationDelay: "2s" }}
        >
          <Cpu className="w-6 h-6 text-purple-600" />
        </div>
        <div
          className="absolute bottom-20 right-[25%] w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center animate-float opacity-60"
          style={{ animationDelay: "0.5s" }}
        >
          <Globe className="w-6 h-6 text-orange-600" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">
                Available for immediate opportunities
              </span>
            </div>

            {/* Main Heading with Typing Effect */}
            <div className="space-y-4">
              <h1 className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Hi, I'm <span className="text-blue-600">Sumit Walmiki</span>
              </h1>
              <div className="flex items-center min-h-[2.2rem] xxs:min-h-[2rem]">
                <h2 className="text-sm xxs:text-base xs:text-md sm:text-xl md:text-2xl font-semibold text-slate-700">
									<span className="text-blue-600">Exploring AI Integration | </span>
									{typedText}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base xxs:text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              I build scalable, high-performance web applications and experiment with AI-powered features. I love solving complex problems and creating impactful solutions.
            </p>

            {/* Current Tech Focus */}
            <div className="flex flex-wrap items-center space-x-2 xxs:space-x-2 sm:space-x-4">
              <span className="text-slate-600 font-medium text-xs xxs:text-sm sm:text-base">
                Passionate about
              </span>
              <div
                className={`flex items-center space-x-1 xxs:space-x-2 px-2 xxs:px-3 py-1 xxs:py-2 ${techStack[currentTech].bg} rounded-lg transition-all duration-500`}
              >
                <span className="text-xl xxs:text-2xl">{techStack[currentTech].icon}</span>
                <span
                  className={`font-semibold text-xs xxs:text-base ${techStack[currentTech].color}`}
                >
                  {techStack[currentTech].name}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 xxs:gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://calendly.com/walmiki240/30min", "_blank")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 xxs:px-8 py-3 xxs:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group text-sm xxs:text-base"
              >
                <Calendar className="w-4 xxs:w-5 h-4 xxs:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Let's Talk
                <ArrowRight className="w-4 xxs:w-5 h-4 xxs:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <DownloadResumeButton />
            </div>
          </div>

          {/* Right Content - Code Showcase */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {/* Code Terminal */}
            <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 xxs:text-xs">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-2 xxs:px-4 py-2 xxs:py-3 bg-slate-800 border-b border-slate-700">
                <div className="flex items-center space-x-1 xxs:space-x-2">
                  <div className="w-2 xxs:w-3 h-2 xxs:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 xxs:w-3 h-2 xxs:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 xxs:w-3 h-2 xxs:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1 xxs:space-x-2 text-slate-400 text-xs xxs:text-sm">
                  <Terminal className="w-3 xxs:w-4 h-3 xxs:h-4" />
                  <span>developer-profile.js</span>
                </div>
                <div className="w-10 xxs:w-16"></div>
              </div>

              {/* Code Content */}
              <div className="p-3 xxs:p-6 font-mono text-xs xxs:text-sm">
                <pre className="text-slate-300 leading-relaxed">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = {"{"}
                    {"\n"} <span className="text-green-400">name</span>:{" "}
                    <span className="text-yellow-400">"Sumit Walmiki"</span>,
                    {"\n"} <span className="text-green-400">role</span>:{" "}
                    <span className="text-yellow-400">
                      "Software Developer"
                    </span>
                    ,{"\n"} <span className="text-green-400">experience</span>:{" "}
                    <span className="text-yellow-400">"5+ years"</span>,{"\n"}{" "}
                    <span className="text-green-400">specialties</span>: [{"\n"}{" "}
                    <span className="text-yellow-400">"React"</span>,{" "}
                    <span className="text-yellow-400">"Next.js"</span>,{" "}
                    <span className="text-yellow-400">"API Development"</span>
                    {"\n"} ],
                    {"\n"} <span className="text-green-400">passion</span>:{" "}
                    <span className="text-yellow-400">
                      "Building scalable solutions"
                    </span>
                    ,{"\n"} <span className="text-green-400">availability</span>
                    :{" "}
                    <span className="text-yellow-400">
                      "Open to opportunities"
                    </span>
                    {"\n"}
                    {"}"};{"\n"}
                    {"\n"}
                    <span className="text-slate-500">
                      // Ready to contribute to your team! 🚀
                    </span>
                  </code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-slate-800 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                <span>✓ No syntax errors</span>
                <span>Ready to deploy</span>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Top Performer
                  </div>
                  <div className="text-xs text-slate-600">
                    100% Success Rate
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Fast Delivery
                  </div>
                  <div className="text-xs text-slate-600">On-time Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleNavClick("#about")}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center hover:border-slate-600 transition-colors group"
          aria-label="Scroll to about section"
        >
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse group-hover:bg-slate-600"></div>
        </button>
      </div>
    </section>
  );
}
