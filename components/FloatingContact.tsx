"use client"

import { useState } from "react"
import { MessageCircle, X, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:walmiki240@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sumitwalmiki",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sumitwalmiki",
      color: "bg-gray-700 hover:bg-gray-800",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div
        className={`flex flex-col space-y-3 mb-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        {contactOptions.map((option) => (
          <a
            key={option.label}
            href={option.href}
            className={`p-3 rounded-full ${option.color} text-white shadow-lg hover:scale-110 transition-all duration-200 group`}
            aria-label={option.label}
          >
            <option.icon className="w-5 h-5" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {option.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:scale-110 transition-all duration-200 ${isOpen ? "rotate-45" : ""}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
