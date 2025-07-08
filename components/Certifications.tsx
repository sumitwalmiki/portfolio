"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Calendar, Building, Award, CheckCircle } from "lucide-react"

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("certifications")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
      year: "2023",
      description: "Comprehensive course covering modern web development technologies and best practices.",
      icon: "🎓",
      certificateUrl: "#",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      solidColor: "bg-indigo-500",
    },
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      year: "2022",
      description: "Intensive bootcamp covering frontend and backend development fundamentals.",
      icon: "💻",
      certificateUrl: "#",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      solidColor: "bg-emerald-500",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                <span className="text-indigo-600">Certifications</span> & Learning
              </h2>
            </div>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Continuous learning and professional development in modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`group ${cert.bgColor} backdrop-blur-sm rounded-3xl p-8 border-2 ${cert.borderColor} hover:border-indigo-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isVisible ? "animate-fade-in-up" : ""} relative overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div
                    className={`w-full h-full ${cert.solidColor} rounded-full transform translate-x-16 -translate-y-16`}
                  ></div>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 ${cert.solidColor} rounded-2xl text-white text-3xl shadow-lg`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-slate-500" />
                        <span className={`${cert.textColor} font-semibold text-sm`}>{cert.provider}</span>
                      </div>
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 bg-white hover:bg-slate-50 rounded-xl shadow-lg hover:shadow-xl border border-slate-200 hover:scale-110"
                    title="View Certificate"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-700" />
                  </a>
                </div>

                {/* Year Badge */}
                <div className="flex items-center space-x-2 mb-4 relative z-10">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="px-4 py-2 bg-white/80 text-slate-700 rounded-full text-sm font-semibold border border-slate-200">
                    Completed {cert.year}
                  </span>
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6 leading-relaxed relative z-10">{cert.description}</p>

                {/* Skills Covered */}
                <div className="space-y-3 relative z-10">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide flex items-center space-x-2">
                    <span>Skills Covered</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/80 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-200 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
