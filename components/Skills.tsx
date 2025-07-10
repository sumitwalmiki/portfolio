"use client"

import { useEffect, useState } from "react"
import { Code2, Server, Cloud, Brain, Globe, Zap } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: Code2,
      description: "Modern User Interfaces",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      skills: [
        { name: "JavaScript/TypeScript", level: "Expert", icon: "🟨", experience: "4+ years" },
        { name: "React.js & Next.js", level: "Expert", icon: "⚛️", experience: "4+ years" },
        { name: "HTML5 & CSS3", level: "Expert", icon: "🎨", experience: "4+ years" },
        { name: "Tailwind CSS", level: "Proficient", icon: "💨", experience: "3+ years" },
        { name: "Redux & State Management", level: "Proficient", icon: "🔄", experience: "3+ years" },
        { name: "Responsive Design", level: "Expert", icon: "📱", experience: "4+ years" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      description: "Scalable Server Solutions",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      skills: [
        { name: "Node.js & Express", level: "Expert", icon: "🟢", experience: "4+ years" },
        { name: "Python & Django", level: "Proficient", icon: "🐍", experience: "2+ years" },
        { name: "RESTful APIs", level: "Expert", icon: "🔗", experience: "4+ years" },
        { name: "GraphQL", level: "Learning", icon: "🚀", experience: "6+ months" },
        { name: "Microservices", level: "Proficient", icon: "🏗️", experience: "2+ years" },
        { name: "API Security", level: "Proficient", icon: "🔒", experience: "3+ years" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Modern Infrastructure",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      skills: [
        { name: "AWS Services", level: "Proficient", icon: "☁️", experience: "2+ years" },
        { name: "Docker & Containers", level: "Proficient", icon: "🐳", experience: "2+ years" },
        { name: "CI/CD Pipelines", level: "Proficient", icon: "🔄", experience: "2+ years" },
        { name: "Git & Version Control", level: "Expert", icon: "🐙", experience: "4+ years" },
        { name: "Linux/Unix", level: "Proficient", icon: "🐧", experience: "3+ years" },
        { name: "Monitoring & Logging", level: "Learning", icon: "📊", experience: "1+ year" },
      ],
    },
    {
      title: "Data & Databases",
      icon: Brain,
      description: "Data Management & Analytics",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      skills: [
        { name: "MongoDB", level: "Expert", icon: "🍃", experience: "4+ years" },
        { name: "PostgreSQL", level: "Proficient", icon: "🐘", experience: "2+ years" },
        { name: "Redis", level: "Proficient", icon: "🔴", experience: "2+ years" },
        { name: "Data Modeling", level: "Proficient", icon: "🗄️", experience: "3+ years" },
        { name: "SQL Optimization", level: "Proficient", icon: "⚡", experience: "2+ years" },
        { name: "Data Analytics", level: "Learning", icon: "📈", experience: "1+ year" },
      ],
    },
  ]

  const currentlyExploring = [
    { name: "Machine Learning", icon: "🤖", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { name: "Kubernetes", icon: "☸️", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { name: "Rust", icon: "🦀", color: "bg-orange-50 border-orange-200 text-orange-700" },
    { name: "WebAssembly", icon: "🕸️", color: "bg-green-50 border-green-200 text-green-700" },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500"
      case "Proficient":
        return "bg-blue-500"
      case "Learning":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Expert":
        return "90%"
      case "Proficient":
        return "75%"
      case "Learning":
        return "50%"
      default:
        return "30%"
    }
  }

  return (
    <section id="skills" className="py-20 bg-slate-50 relative overflow-x-hidden w-full">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 xxs:px-4 py-2 rounded-full mb-6 shadow-professional">
              <Zap className="w-4 xxs:w-5 h-4 xxs:h-5 text-slate-600" />
              <span className="text-xs xxs:text-sm font-medium text-slate-700">Technical Expertise & Growth</span>
            </div>
            <h2 className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Skills & <span className="text-gradient-primary">Technologies</span>
            </h2>
            <p className="text-base xxs:text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the full technology stack, with a focus on modern, scalable solutions.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 xxs:gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 xxs:space-x-3 px-4 xxs:px-6 py-3 xxs:py-4 rounded-xl font-medium transition-all duration-300 card-hover ${
                  activeCategory === index
                    ? `${category.bgColor} ${category.borderColor} border-2 shadow-professional-lg`
                    : "bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-professional"
                }`}
              >
                <category.icon className={`w-5 xxs:w-6 h-5 xxs:h-6 ${activeCategory === index ? category.color : "text-slate-600"}`} />
                <div className="text-left">
                  <div className={`font-semibold text-xs xxs:text-base ${activeCategory === index ? category.color : "text-slate-900"}`}>
                    {category.title}
                  </div>
                  <div className="text-xs text-slate-600">{category.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Category Skills */}
          <div className="max-w-6xl mx-auto mb-16">
            <div
              className={`bg-white rounded-2xl p-4 xxs:p-8 lg:p-12 shadow-professional-xl border-2 ${skillCategories[activeCategory].borderColor}`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 xxs:gap-6 w-full max-w-full">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-slate-50 rounded-xl p-3 xxs:p-4 sm:p-6 border border-slate-200 card-hover w-full max-w-full ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3 xxs:mb-4">
                      <div className="flex items-center space-x-2 xxs:space-x-3">
                        <span className="text-xl xxs:text-2xl">{skill.icon}</span>
                        <div>
                          <h3 className="text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">{skill.name}</h3>
                          <p className="text-xs xxs:text-sm text-slate-600">{skill.experience}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs xxs:text-sm font-bold ${skillCategories[activeCategory].color}`}>
                          {skill.level}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? getLevelWidth(skill.level) : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Exploring */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 xxs:px-4 py-2 rounded-full mb-8 shadow-professional">
              <Globe className="w-4 xxs:w-5 h-4 xxs:h-5 text-green-600" />
              <span className="text-xs xxs:text-sm font-medium text-slate-700">Currently Exploring</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 xxs:gap-6">
              {currentlyExploring.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`${tech.color} border-2 rounded-xl px-4 xxs:px-6 py-3 xxs:py-4 card-hover ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2 xxs:space-x-3">
                    <span className="text-xl xxs:text-2xl">{tech.icon}</span>
                    <span className="font-semibold text-xs xxs:text-base">{tech.name}</span>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
