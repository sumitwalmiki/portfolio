"use client"

import type React from "react"
import { useRef, useEffect, useState, useLayoutEffect } from "react"

interface Milestone {
  year: string
  title: string
  icon: React.ReactNode
  iconBg: string
  summary: string
  tech: string
}

interface JourneyTimelineProps {
  milestones: Milestone[]
}

export default function JourneyTimeline({ milestones }: JourneyTimelineProps) {
  const currentYearRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
  if (containerRef.current && currentYearRef.current) {
    const container = containerRef.current;
    const current = currentYearRef.current;

    // Calculate scroll position to center the current year
    const offset =
      current.offsetLeft - container.offsetWidth / 2 + current.offsetWidth / 2;

    container.scrollLeft = offset; // <-- set initial position
  }
}, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) {
    // Mobile: Vertical Timeline
    return (
      <div className="w-full">
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                ref={milestone.year === "2024–2025" ? currentYearRef : undefined}
                className="relative flex items-start space-x-4"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl border-3 border-white shadow-lg flex items-center justify-center ${milestone.iconBg} ${
                      milestone.year === "2024–2025" ? "ring-2 ring-pink-300 ring-offset-2" : ""
                    }`}
                  >
                    {milestone.icon}
                  </div>
                  {milestone.year === "2024–2025" && (
                    <div className="absolute inset-0 rounded-xl border-2 border-pink-400 animate-ping opacity-30"></div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 bg-white/90 backdrop-blur-sm border-2 rounded-2xl shadow-lg p-4 ${
                    milestone.year === "2024–2025"
                      ? "border-pink-300 bg-gradient-to-br from-pink-50/80 to-purple-50/80"
                      : "border-slate-200"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block font-bold text-sm px-3 py-1 rounded-full text-white shadow-sm ${
                        milestone.year === "2024–2025"
                          ? "bg-gradient-to-r from-pink-500 to-purple-500"
                          : "bg-gradient-to-r from-blue-500 to-purple-500"
                      }`}
                    >
                      {milestone.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{milestone.title}</h4>

                  {/* Summary */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">{milestone.summary}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {milestone.tech.split(", ").map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-500 text-xs">
            <span>↑</span>
            <span>Scroll to explore my journey</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    )
  }

  // Desktop: Horizontal Timeline
  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className="flex w-full justify-start items-start gap-8 relative overflow-x-auto snap-x snap-mandatory hide-scrollbar overflow-visible p-6"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Enhanced Timeline Line */}
        <div
          className="absolute top-16 h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-0 overflow-hidden rounded-full shadow-sm"
          style={{ left: "160px", right: "-915px", top: "103px" }}
        >
          <div
            className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-blue-300/60 to-transparent rounded-full"
            style={{ backgroundSize: "200% 100%" }}
          />
        </div>

        {/* Enhanced Cards */}
        {milestones.map((m, i) => (
          <div
            key={m.year}
            ref={m.year === "2024–2025" ? currentYearRef : undefined}
            className={`relative z-10 flex-1 max-w-sm group snap-center outline-none`}
            style={{ minWidth: 280 }}
            tabIndex={0}
            aria-label={`${m.year} - ${m.title}: ${m.summary}`}
          >
            {/* Enhanced Icon with Animation */}
            <div className="flex flex-col items-center mb-6">
              <div
                className={`relative p-4 rounded-2xl border-4 border-white shadow-lg mb-4 group-hover:scale-110 transition-all duration-300 ${m.iconBg}`}
              >
                <div className="text-4xl">{m.icon}</div>
                {/* Pulse Ring for Current Year */}
                {m.year === "2024–2025" && (
                  <div className="absolute inset-0 rounded-2xl border-4 border-pink-400 animate-ping opacity-30"></div>
                )}
              </div>

              {/* Enhanced Timeline Dot */}
              <div className="relative">
                <span
                  className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg absolute"
                  style={{ top: -8, left: "50%", transform: "translateX(-50%)" }}
                />
                {m.year === "2024–2025" && (
                  <span
                    className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg animate-pulse absolute"
                    style={{ top: -8, left: "50%", transform: "translateX(-50%)" }}
                  />
                )}
              </div>
            </div>

            {/* Enhanced Card */}
            <div
              className={`bg-white/90 backdrop-blur-sm border-2 rounded-3xl shadow-xl p-8 transition-all duration-300 min-w-[280px] hover:shadow-2xl hover:scale-105 hover:-translate-y-2
              ${i === milestones.length - 1 ? "border-pink-300 bg-gradient-to-br from-pink-50/80 to-purple-50/80 shadow-pink-200" : "border-slate-200 hover:border-blue-300"}
            `}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`font-bold text-xl px-3 py-1 rounded-full text-white shadow-sm ${i === milestones.length - 1 ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gradient-to-r from-blue-500 to-purple-500"}`}
                >
                  {m.year}
                </span>
              </div>

              <h4 className="font-bold text-xl text-slate-900 mb-3">{m.title}</h4>
              <div className="text-slate-700 text-sm mb-4 leading-relaxed whitespace-pre-line">{m.summary}</div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {m.tech.split(", ").map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Navigation Hint */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 text-slate-500 text-sm">
          <span>←</span>
          <span>Scroll horizontally to explore the timeline</span>
          <span>→</span>
        </div>
      </div>
    </div>
  )
}