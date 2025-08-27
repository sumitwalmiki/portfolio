"use client"

import { useEffect, useState } from "react"
import { Code, Award, Zap, Target, Coffee, Lightbulb, TrendingUp, Cable, Thermometer, Rocket, BarChart2, Puzzle, Sparkles, BrainCog } from "lucide-react"
import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("journey")
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      title: "5+ Years",
      subtitle: "Software Development",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Cable,
      title: "Real Time",
      subtitle: "Live Chat, Notifications",
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
      title: null,
      content:
        null,
      points: [
        "📍 2015 – The Beginning\nWrote my first Python program during the first year of my Computer Science degree.\nThat small script sparked my curiosity and introduced me to the world of problem solving through code",
        "📍 2015–2020 – Learning & Freelancing\n While pursuing my B.Sc. in Computer Science (graduated in 2018), explored full-stack development via online courses like Angela Yu’s full stack development bootcamp.\nBuilt personal project for educational institute.\nTook freelance gigs to gain real-world experience",
        "📍 2020 – First Professional Experience\nStarted as a Junior Web Developer at Diginnovators.\nWorked on projects like Customer 360, Health Score, and onboarding flows using HTML, CSS, Bootstrap, and Node.js.\n→ Gained hands-on experience in API development, MongoDB, Socket.io, and Zoho CRM integration.",
        "📍 2021 – Real-Time Systems & Product Thinking\nBuilt real-time chat systems and profile matching logic for matrimonial and social platforms.\n→ Developed key modules in WAP: War Against Pollution.",
        "📍 2022 – Scaling Up at HumaneBITS\nJoined Humane Business Intelligence Technology Solutions.\nLed frontend team for Alpha Copilot, building scalable dashboards with Next.js, Highcharts, and Amazon QuickSight.\n→ Focused on performance optimization, SEO, and analytics with Google Tag Manager.",
        "📍 2023 – System Design & UI/UX Maturity\nExpanded into SSR/SSG, improved code review culture, collaborated across teams.\n→ Built HealthTech Alpha website, applying best practices in responsive design and modular architecture.",
        "📍 2024–2025 – Vision Forward\nCurrently exploring AI integrations, building full-stack apps with clean architecture, writing blogs, and mentoring others.\n→ Goal: Build user-first, scalable, production-grade applications and grow into a Tech Lead role."
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
	

  const journeyMilestones = [
    {
      year: "2015",
      title: "The Beginning",
      icon: <Thermometer className="w-7 h-7 text-blue-600" aria-label="First Python Program" />,
      iconBg: "bg-blue-100",
      summary: "Wrote my first Python program during the first year of my Computer Science degree. That small script sparked my curiosity and introduced me to the world of problem solving through code.",
      tech: "Python, Logic",
		},
		{
      year: "2015 - 2020",
      title: " Learning & Freelancing",
      icon: <BrainCog className="w-7 h-7 text-blue-600" aria-label="First Python Program" />,
      iconBg: "bg-green-100",
      summary: "Completed CS Degree, explored full stack development via bootcamp, youtube and freecodecamp.com program. Took freelance gig of creating educational institute website, and practiced by creating small web applications.",
      tech: "Python, Logic, DSA, OOP, HTML, CSS, JS",
    },
    {
      year: "2020",
      title: "First Professional Experience",
      icon: <Rocket className="w-7 h-7 text-orange-500" aria-label="First Job" />,
      iconBg: "bg-orange-100",
      summary: "Started as a Junior Web Developer at Diginnovators. Worked on Customer 360, Health Score, and API Development with Node.js & MongoDB.",
      tech: "Node.js, MongoDB, CRM, HTML, CSS, JS",
    },
    {
      year: "2021",
      title: "Real-Time Systems & Product Thinking",
      icon: <Lightbulb className="w-7 h-7 text-yellow-500" aria-label="Real-Time Systems" />,
      iconBg: "bg-yellow-100",
      summary: "Built real-time chat systems and profile matching logic for Sthal matrimonial and social platforms like WAP: War Against Pollution.",
      tech: "Socket.io, Real-time",
    },
    {
      year: "2022",
      title: "Scaling Up at HumaneBITS",
      icon: <BarChart2 className="w-7 h-7 text-purple-600" aria-label="Scaling Up" />,
      iconBg: "bg-purple-100",
      summary: "Joined HumaneBITS. Led frontend team for Alpha Copilot, building scalable dashboards with Next.js, Highcharts, and Amazon QuickSight. Focused on performance optimization, SEO, and analytics.",
      tech: "Next.js, React",
    },
    {
      year: "2023",
      title: "System Design & UI/UX Maturity",
      icon: <Puzzle className="w-7 h-7 text-green-600" aria-label="System Design" />,
      iconBg: "bg-green-100",
      summary: "Expanded into SSR/SSG, improved code review culture, collaborated across teams. Built website applying best practices in responsive design, modular architecture and performance optimization.",
      tech: "SSR, SSG, UI/UX",
    },
    {
      year: "2024–2025",
      title: "Vision Forward",
      icon: <Sparkles className="w-7 h-7 text-pink-500" aria-label="Vision Forward" />,
      iconBg: "bg-pink-100",
      summary: "Exploring AI integrations, building full-stack apps with clean architecture, writing blogs, and mentoring others. Goal: Build user-first, scalable, production-grade applications and grow into a Tech Lead role.",
      tech: "AI, OpenAI, Mentoring",
    },
  ];

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
          <div className="mx-auto">
            {/* Enhanced Tab Navigation - Horizontal Scrollable */}
            <div className="mb-10">
              {/* Mobile View - Horizontal Scrollable */}
              <div className="sm:flex justify-center flex-col items-center">
                <div className="flex space-x-3 overflow-x-auto pb-2 px-1 hide-scrollbar">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                        activeTab === tab.id
                          ? "gradient-primary text-white shadow-professional-lg"
                          : "bg-white border border-slate-200 text-slate-700 shadow-professional"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Scroll Indicator */}
                <div className="flex sm:hidden justify-center mt-2">
                  <div className="flex space-x-1">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeTab === tab.id ? "bg-blue-600" : "bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {activeTab === "journey" ? (
                    <div className="col-span-2 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-professional-xl border border-slate-200 overflow-hidden">
                      <JourneyTimeline milestones={journeyMilestones} />
                    </div>
                  ) : (
                    <div className="col-span-2  bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-professional-xl border border-slate-200">
                      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  {tabContent[activeTab as keyof typeof tabContent]?.title &&
                    tabContent[activeTab as keyof typeof tabContent]?.content && (
                      <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                          {tabContent[activeTab as keyof typeof tabContent]?.title}
                        </h3>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                          {tabContent[activeTab as keyof typeof tabContent]?.content}
                        </p>
                      </div>
                    )}
                  <div className="space-y-4">
                    {tabContent[activeTab as keyof typeof tabContent]?.points.map((point, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-200 card-hover ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-xl md:text-2xl flex-shrink-0">{point.split(" ")[0]}</div>
                        <p className="text-sm md:text-base text-slate-700 font-medium">
                          {point.substring(point.indexOf(" ") + 1)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                    </div>
                  )}
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}
