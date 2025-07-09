"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  Database,
  Globe,
  ShoppingCart,
  Play,
  Camera,
  Star,
  Eye,
  ArrowUpRight,
  Filter,
  Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: "alpha-copilot",
      title: "Alpha Copilot",
      description:
        "Advanced healthcare analytics dashboard with real-time data visualization and interactive exploration.",
      longDescription:
        "A comprehensive healthcare analytics platform featuring dynamic dashboards, real-time data processing, and advanced visualization tools.",
      image: "/placeholder.svg?height=300&width=500",
      category: "healthcare",
      tags: ["React", "AG Grid", "Next.js", "QuickSight"],
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      featured: true,
      hasLive: true,
      hasCode: false,
      liveUrl: "#",
      githubUrl: "",
      stars: null,
      views: "2.5k+",
      year: "2024",
    },
    {
      id: "healthtech-website",
      title: "HealthTech Marketing Site",
      description: "High-performance marketing website with 95+ Lighthouse score and advanced SEO optimization.",
      longDescription:
        "A blazing-fast marketing website built with Next.js, featuring advanced SEO and perfect accessibility scores.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      tags: ["Next.js", "Tailwind", "SEO"],
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      featured: false,
      hasLive: true,
      hasCode: true,
      liveUrl: "#",
      githubUrl: "#",
      stars: 24,
      views: "1.8k+",
      year: "2024",
    },
    {
      id: "amazon-clone",
      title: "Amazon Clone",
      description: "Full-featured e-commerce platform with complete shopping experience and payment integration.",
      longDescription:
        "A comprehensive e-commerce solution featuring user authentication, shopping cart, and payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ecommerce",
      tags: ["React", "Firebase", "Stripe", "Context API"],
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      featured: true,
      hasLive: true,
      hasCode: true,
      liveUrl: "#",
      githubUrl: "#",
      stars: 156,
      views: "5.2k+",
      year: "2023",
    },
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      description: "Streaming platform UI with movie browsing, user authentication, and TMDB API integration.",
      longDescription: "A Netflix-inspired streaming interface with movie discovery and user profiles.",
      image: "/placeholder.svg?height=300&width=500",
      category: "entertainment",
      tags: ["React", "Firebase", "TMDB API", "CSS3"],
      icon: Play,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      featured: false,
      hasLive: true,
      hasCode: true,
      liveUrl: "#",
      githubUrl: "#",
      stars: 89,
      views: "3.1k+",
      year: "2023",
    },
    {
      id: "instagram-clone",
      title: "Instagram Clone",
      description: "Social media platform with photo sharing, real-time interactions, and user engagement features.",
      longDescription: "A full-featured social media application with photo uploads, likes, and comments.",
      image: "/placeholder.svg?height=300&width=500",
      category: "social",
      tags: ["React", "Firebase", "Storage", "Auth"],
      icon: Camera,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      featured: false,
      hasLive: false,
      hasCode: true,
      liveUrl: "",
      githubUrl: "#",
      stars: 67,
      views: null,
      year: "2023",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "healthcare", label: "Healthcare", count: projects.filter((p) => p.category === "healthcare").length },
    { id: "ecommerce", label: "E-commerce", count: projects.filter((p) => p.category === "ecommerce").length },
    { id: "web", label: "Web Apps", count: projects.filter((p) => p.category === "web").length },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Portfolio Showcase</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work spanning healthcare, e-commerce, entertainment, and web applications.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "gradient-primary text-white shadow-professional-lg"
                    : "bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-professional"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${filter === category.id ? "bg-white/20" : "bg-slate-100"}`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {filter === "all" && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">⭐ Featured Work</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group card-hover ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`bg-white rounded-2xl overflow-hidden shadow-professional-xl border-2 ${project.borderColor}`}
                    >
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.hasLive && (
                            <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                          {project.hasCode && (
                            <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white">
                              <Github className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        {/* Stats */}
                        <div className="absolute bottom-4 left-4 flex space-x-4">
                          {project.stars && (
                            <div className="flex items-center space-x-1 bg-white/90 px-3 py-1 rounded-full text-slate-900 text-sm">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{project.stars}</span>
                            </div>
                          )}
                          {project.views && (
                            <div className="flex items-center space-x-1 bg-white/90 px-3 py-1 rounded-full text-slate-900 text-sm">
                              <Eye className="w-4 h-4" />
                              <span>{project.views}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-xl ${project.bgColor} border ${project.borderColor}`}>
                            <project.icon className={`w-6 h-6 ${project.color}`} />
                          </div>
                          <span className="text-sm text-slate-500 font-medium">{project.year}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{project.longDescription}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-4">
                          {project.hasLive && (
                            <a
                              href={project.liveUrl}
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                          {project.hasCode && (
                            <a
                              href={project.githubUrl}
                              className="flex items-center space-x-2 text-slate-600 hover:text-slate-700 font-medium transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              <span>Source Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter((p) => !p.featured || filter !== "all")
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`group card-hover ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-professional-lg border border-slate-200">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 px-3 py-1 rounded-full text-slate-900 text-xs font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="absolute bottom-4 left-4 flex space-x-3">
                        {project.stars && (
                          <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full text-slate-900 text-xs">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{project.stars}</span>
                          </div>
                        )}
                        {project.views && (
                          <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full text-slate-900 text-xs">
                            <Eye className="w-3 h-3" />
                            <span>{project.views}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg ${project.bgColor} border ${project.borderColor}`}>
                          <project.icon className={`w-5 h-5 ${project.color}`} />
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{project.year}</span>
                      </div>

                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 line-clamp-2">{project.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded-lg border border-slate-200">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          {project.hasLive && (
                            <a
                              href={project.liveUrl}
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Demo</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          {project.hasCode && (
                            <a
                              href={project.githubUrl}
                              className="flex items-center space-x-1 text-slate-600 hover:text-slate-700 text-sm font-medium transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3 h-3" />
                              <span>Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-professional-xl border border-slate-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to start your <span className="text-gradient-primary">next project</span>?
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with modern web technologies and clean code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary text-white px-8 py-4 rounded-lg shadow-professional-lg"
                  asChild
                >
                  <Link href="#contact">
                    <Code2 className="w-5 h-5 mr-2" />
                    Start a Project
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 rounded-lg shadow-professional bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/sumitwalmiki" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
