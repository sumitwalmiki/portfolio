"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)

    // Update active section based on scroll position
    const sections = ["home", "about", "skills", "blog", "recommendations", "contact"]
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })

    if (currentSection) {
      setActiveSection(currentSection)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const socialLinks = [
    { icon: Github, href: "https://github.com/sumitwalmiki", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sumitwalmiki", label: "LinkedIn" },
    { icon: Mail, href: "mailto:walmiki240@gmail.com", label: "Email" },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Recommendations", href: "#recommendations" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Sumit Walmiki
              </h1>
              <p className="text-sm text-slate-600">Software Engineer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-xl border-t border-slate-200">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-4 px-4 border-t border-slate-200">
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <Button
                onClick={() => handleNavClick("#contact")}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
