"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Download, Play, Code2, Zap, Star, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTech, setCurrentTech] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % 6)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const techStack = [
    { name: "JavaScript", icon: "🟨", color: "text-yellow-600" },
    { name: "Python", icon: "🐍", color: "text-green-600" },
    { name: "React", icon: "⚛️", color: "text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "text-green-500" },
    { name: "Cloud", icon: "☁️", color: "text-blue-500" },
    { name: "AI/ML", icon: "🤖", color: "text-purple-600" },
  ]

  const quickStats = [
    { icon: Code2, number: "4+", label: "Years", color: "text-blue-600" },
    { icon: Star, number: "50+", label: "Projects", color: "text-yellow-600" },
    { icon: Users, number: "10+", label: "Technologies", color: "text-green-600" },
    { icon: Award, number: "100%", label: "Success Rate", color: "text-purple-600" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-slate-50">
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      {/* Floating Elements - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-20"></div>
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-32 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">Open to opportunities at top tech companies</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Hi, I'm <span className="text-blue-600">Sumit Walmiki</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700">Full-Stack Software Engineer</h2>
              <div className="flex items-center space-x-2 text-lg text-slate-600">
                <span>Passionate about</span>
                <span className={`font-mono font-bold transition-colors duration-500 ${techStack[currentTech].color}`}>
                  {techStack[currentTech].icon} {techStack[currentTech].name}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              I build scalable, high-performance applications using modern technologies. From distributed systems to
              user-facing products, I love solving complex problems and creating impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavClick("#projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 rounded-lg shadow-lg transition-all duration-300 bg-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "Python", "React", "Node.js", "AWS", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-slate-300 hover:shadow-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            {/* Main Profile */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sumit Walmiki - Full-Stack Software Engineer"
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh7tZdZbvqrttZ9VLNpmdOvBBaasdf//Z"
                  />

                  {/* Floating Tech Cards */}
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200 animate-float">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>

                  <div
                    className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
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
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center hover:border-slate-600 transition-colors"
          aria-label="Scroll to about section"
        >
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>
    </section>
  )
}
