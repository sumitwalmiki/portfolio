"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  Code2,
  User,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle", message: "" })
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ type: "loading", message: "Sending your message..." })

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setFormStatus({ type: "success", message: "Message sent successfully! I'll get back to you within 24-48 hours." })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setShowToast(true)
      setTimeout(() => setShowToast(false), 5000)
    } catch (error) {
      setFormStatus({ type: "error", message: "Failed to send message. Please try again or email me directly." })
    }
  }

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email Me",
      subtitle: "Direct communication",
      value: "walmiki240@gmail.com",
      href: "mailto:walmiki240@gmail.com",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      description: "I reply to all emails within 24–48 hours",
      primary: true,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Professional networking",
      value: "Connect with me",
      href: "https://linkedin.com/in/sumitwalmiki",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Let's connect professionally",
      primary: true,
    },
    {
      id: "schedule",
      icon: Calendar,
      title: "Book a 15-min Call",
      subtitle: "Quick consultation",
      value: "Schedule now",
      href: "https://calendly.com/walmiki240/30min",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Free consultation about your project",
    },
    {
      id: "collaborate",
      title: "Let's Collaborate",
      subtitle: "Write me an email",
      value: "Start Collaboration",
      href: "mailto:walmiki240@gmail.com?subject=Collaboration Opportunity&body=Hi Sumit, I'd like to collaborate on...",      
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: User,
      description: "Ready to work together ?",
    },
  ]

  const quickInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Available Remotely",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24-48 hours",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: MessageSquare,
      label: "Preferred Contact",
      value: "Email or LinkedIn",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-professional">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Available for new opportunities</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Contact <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore opportunities? I'd love to hear from you!
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quickInfo.map((info, index) => (
              <div
                key={info.label}
                className={`${info.bgColor} ${info.borderColor} border-2 rounded-xl p-6 text-center card-hover ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-3 rounded-xl shadow-professional mb-4 inline-flex">
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <p className="text-slate-600 text-sm font-medium mb-2">{info.label}</p>
                <p className="text-slate-900 font-bold text-lg">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={method.id}
                href={method.href}
                target={method.id === "schedule" ? "_blank" : undefined}
                rel={method.id === "schedule" ? "noopener noreferrer" : undefined}
                className={`group ${method.bgColor} ${method.borderColor} border-2 rounded-xl p-6 card-hover ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <div className="bg-white p-3 rounded-xl shadow-professional mb-4 inline-flex group-hover:scale-110 transition-transform">
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{method.title}</h3>
                <p className="text-slate-600 text-sm mb-2">{method.subtitle}</p>
                <p className={`${method.color} font-semibold text-sm mb-3`}>{method.value}</p>
                <p className="text-slate-600 text-xs mb-4">{method.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${method.color} opacity-70`}>
                    {method.primary ? "Recommended" : "Available"}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1 ${method.color}`}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Chat Widget CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-professional-xl border border-slate-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Prefer to chat directly?</h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Click the chat button in the bottom right corner to start a conversation with my AI assistant. Get
                instant answers about my work, experience, and availability!
              </p>
              <div className="flex items-center justify-center space-x-3 text-slate-600">
                <MessageSquare className="w-6 h-6" />
                <span className="font-semibold text-lg">Chat widget available 24/7</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-white text-slate-900 px-6 py-4 rounded-xl shadow-professional-xl border border-slate-200 animate-slide-in-right">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm text-slate-600">I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}