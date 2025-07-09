"use client"

import { useEffect, useState } from "react"
import { Code, Users, Award, Zap, Target, Coffee, Lightbulb, TrendingUp } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("journey")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code,
      title: "4+ Years",
      subtitle: "Software Development",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Users,
      title: "50+ Projects",
      subtitle: "Successfully Delivered",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Award,
      title: "Full-Stack",
      subtitle: "End-to-End Solutions",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Zap,
      title: "Scalable",
      subtitle: "High-Performance Apps",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  const tabs = [
    { id: "journey", label: "My Journey", icon: Target },
    { id: "approach", label: "Engineering Philosophy", icon: Lightbulb },
    { id: "growth", label: "Continuous Learning", icon: TrendingUp },
  ]

  const tabContent = {
    journey: {
      title: "From Curiosity to Expertise",
      content:
        "Started as a curious developer fascinated by the power of technology to solve real-world problems. Over 4+ years, I've evolved from building simple applications to architecting complex, scalable systems. My experience spans from startups to enterprise-level projects.",
      points: [
        "🎓 Strong foundation in computer science fundamentals",
        "🚀 Expertise in modern web technologies and cloud platforms",
        "🏆 Track record of delivering high-impact projects",
        "📈 Passionate about emerging technologies and best practices",
      ],
    },
    approach: {
      title: "Building for Scale and Impact",
      content:
        "I believe in writing clean, maintainable code and designing systems that can grow with business needs. My approach combines technical excellence with user-centric thinking, ensuring solutions that are both robust and delightful to use.",
      points: [
        "🔍 Data-driven decision making and performance optimization",
        "🧪 Test-driven development and continuous integration",
        "📱 Mobile-first, accessible design principles",
        "🔄 Agile methodologies and collaborative development",
      ],
    },
    growth: {
      title: "Always Learning, Always Growing",
      content:
        "Technology evolves rapidly, and I'm committed to staying at the forefront. I actively explore new frameworks, contribute to open source, and share knowledge with the developer community. Currently diving deep into AI/ML and distributed systems.",
      points: [
        "💡 Exploring AI/ML integration in web applications",
        "⚡ Learning advanced system design patterns",
        "🤝 Contributing to open source projects",
        "🎯 Mentoring junior developers and sharing knowledge",
      ],
    },
  }

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
              <Coffee className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-slate-700">Driven by curiosity & innovation</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Passionate software engineer focused on building scalable solutions and creating exceptional user
              experiences through innovative technology and clean code.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`${highlight.bgColor} ${highlight.borderColor} border-2 rounded-2xl p-6 text-center card-hover ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-white shadow-professional mb-4`}>
                  <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <h3 className={`text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2`}>{highlight.title}</h3>
                <p className="text-slate-600 font-medium">{highlight.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Tabbed Content */}
          <div className="max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "gradient-primary text-white shadow-professional-lg"
                      : "bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-professional"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-professional-xl border border-slate-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {tabContent[activeTab as keyof typeof tabContent].content}
                  </p>
                </div>

                <div className="space-y-4">
                  {tabContent[activeTab as keyof typeof tabContent].points.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-200 card-hover ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-2xl flex-shrink-0">{point.split(" ")[0]}</div>
                      <p className="text-slate-700 font-medium">{point.substring(point.indexOf(" ") + 1)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
