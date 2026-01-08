"use client"

import { FileText, Target, Zap, TrendingUp } from "lucide-react"
import { useWriteups } from "@/hooks/use-writeups"

export function HeroSection() {
  const { writeups, platforms, techniques, hardCount } = useWriteups()

  const stats = [
    { label: "Writeups", value: writeups.length, icon: FileText },
    { label: "Platforms", value: platforms, icon: Target },
    { label: "Techniques", value: techniques, icon: Zap },
    { label: "Hard+", value: hardCount, icon: TrendingUp, highlight: true },
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4 text-balance">
            Security Research
            <span className="block text-primary">Writeups</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-pretty">
            Detailed walkthroughs and technical analysis of penetration tests, CTF challenges, and security research
            findings.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`
                relative p-4 rounded-xl bg-card border transition-all duration-300
                ${stat.highlight ? "border-primary/30 animate-border-glow" : "border-border/50 hover:border-border"}
              `}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div
                  className={`
                  p-2 rounded-lg 
                  ${stat.highlight ? "bg-primary/15" : "bg-secondary"}
                `}
                >
                  <stat.icon
                    className={`
                    h-4 w-4 
                    ${stat.highlight ? "text-primary animate-pulse-subtle" : "text-muted-foreground"}
                  `}
                  />
                </div>
                <div>
                  <p
                    className={`
                    text-2xl font-bold 
                    ${stat.highlight ? "text-primary" : "text-foreground"}
                  `}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
