"use client"

import { FileText, Globe, Zap, Skull } from "lucide-react"
import { useWriteups } from "@/hooks/use-writeups"

export function StatsBar() {
  const { writeups, platforms, techniques, hardCount } = useWriteups()

  const stats = [
    {
      label: "Total Writeups",
      value: writeups.length,
      icon: FileText,
      pulse: true,
    },
    {
      label: "Platforms",
      value: platforms,
      icon: Globe,
      pulse: false,
    },
    {
      label: "Techniques",
      value: techniques,
      icon: Zap,
      pulse: false,
    },
    {
      label: "Hard+",
      value: hardCount,
      icon: Skull,
      pulse: true,
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md bg-secondary ${stat.pulse ? "animate-glow-red" : ""}`}>
              <stat.icon className={`h-5 w-5 ${stat.pulse ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
