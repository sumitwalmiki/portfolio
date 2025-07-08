"use client"

import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
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

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "HealthTech Solutions",
      content:
        "Worked with Sumit on the Alpha Copilot dashboard. His attention to detail and ability to translate complex requirements into intuitive UI components was exceptional. The analytics dashboard he built significantly improved our data exploration capabilities.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      project: "Alpha Copilot",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "EduTech Innovations",
      content:
        "Sumit delivered our educational platform ahead of schedule with seamless CRM integration. His technical expertise in Firebase and attention to user experience made our admin panel incredibly efficient. Highly recommend for any web development project.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      project: "Educational Platform",
      color: "bg-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Alex Rodriguez",
      role: "Tech Lead",
      company: "Digital Agency",
      content:
        "Collaborated with Sumit on multiple e-commerce projects. His React and Node.js skills are top-notch, and he consistently delivers clean, maintainable code. Great communicator and reliable team player.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      project: "E-commerce Solutions",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Client <span className="text-indigo-600">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              What clients and collaborators say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`${testimonial.bgColor} backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isVisible ? "animate-fade-in-up" : ""} group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon and Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 ${testimonial.color} rounded-2xl shadow-lg`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-slate-700 mb-6 leading-relaxed italic text-sm">"{testimonial.content}"</p>

                {/* Project Tag */}
                <div className="mb-6">
                  <span className="px-3 py-1 bg-white/80 text-slate-700 rounded-full text-xs font-medium border border-slate-200">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-white shadow-md"
                      loading="lazy"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 ${testimonial.color} rounded-full border-2 border-white`}
                    ></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
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
