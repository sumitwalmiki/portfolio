import React, { useRef, useEffect } from "react";

interface Milestone {
  year: string;
  title: string;
  icon: React.ReactNode;
  iconBg: string; // Tailwind class for background
  summary: string;
  tech: string;
}

interface JourneyTimelineProps {
  milestones: Milestone[];
}

export default function JourneyTimeline({ milestones }: JourneyTimelineProps) {
  const currentYearRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (currentYearRef.current) {
      currentYearRef.current.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="flex w-full justify-start items-start gap-8 relative overflow-x-auto snap-x snap-mandatory hide-scrollbar overflow-visible p-4"
        style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Timeline Line with shimmer animation */}
        <div
          className="absolute top-12 h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 z-0 overflow-hidden"
          style={{ left: '120px', right: '-715px', top: '64px' }}
        >
          <div className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" style={{ backgroundSize: '200% 100%' }} />
        </div>
        {/* Cards */}
        {milestones.map((m, i) => (
          <div
            key={m.year}
            ref={m.year === "2024–2025" ? currentYearRef : undefined}
            className={`relative z-10 flex-1 max-w-xs group snap-center outline-none`}
            style={{ minWidth: 220 }}
            tabIndex={0}
            aria-label={`${m.year} - ${m.title}: ${m.summary}`}
          >
            {/* Icon with colored background */}
            <div className="flex flex-col items-center mb-4">
              <span className={`text-3xl rounded-full border-2 border-blue-200 shadow p-2 mb-2 group-hover:scale-110 transition-transform ${m.iconBg}`}>
                {m.icon}
              </span>
              {/* Timeline dot */}
              <span className="w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow absolute" style={{ top: 44, left: '50%', transform: 'translateX(-50%)' }} />
            </div>
            {/* Card */}
            <div className={`bg-gradient-to-br from-white via-slate-50 to-blue-50 border rounded-2xl shadow-lg p-6 transition min-w-[220px] 
              hover:shadow-2xl hover:scale-105 hover:border-blue-400
              ${i === milestones.length - 1 ? 'border-pink-400 bg-pink-50/60 shadow-pink-200' : 'border-slate-200'}
            `}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-lg text-blue-700">{m.year}</span>
                <span className="font-semibold text-slate-900">{m.title}</span>
              </div>
              <div className="text-slate-700 text-sm mb-2 whitespace-pre-line">{m.summary}</div>
              <div className="text-xs text-slate-500 italic">{m.tech}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 