"use client"

import { Calendar, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Writeup } from "@/lib/writeups-data"

const platformConfig: Record<string, { label: string; className: string }> = {
  htb: {
    label: "HackTheBox",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  thm: {
    label: "TryHackMe",
    className: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  ctf: {
    label: "CTF",
    className: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  bugbounty: {
    label: "Bug Bounty",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
}

const difficultyConfig: Record<string, { label: string; className: string; animate?: boolean }> = {
  easy: {
    label: "Easy",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  medium: {
    label: "Medium",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  hard: {
    label: "Hard",
    className: "bg-primary/15 text-primary border-primary/25",
    animate: true,
  },
  insane: {
    label: "Insane",
    className: "bg-primary/20 text-primary border-primary/30 animate-border-glow",
    animate: true,
  },
}

interface WriteupCardProps {
  writeup: Writeup
}

export function WriteupCard({ writeup }: WriteupCardProps) {
  const handleClick = () => {
    if (writeup.pdf) {
      window.open(writeup.pdf, "_blank")
    }
  }

  const platform = platformConfig[writeup.platform]
  const difficulty = difficultyConfig[writeup.difficulty]

  return (
    <article
      onClick={handleClick}
      className="group relative p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
    >
      {/* Header Row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 text-base">
          {writeup.title}
        </h3>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
      </div>

      {/* Badges */}
      <div className="flex gap-2 mb-3">
        <Badge variant="outline" className={`text-xs ${platform?.className}`}>
          {platform?.label}
        </Badge>
        <Badge
          variant="outline"
          className={`text-xs ${difficulty?.className} ${difficulty?.animate ? "animate-pulse-subtle" : ""}`}
        >
          {difficulty?.label}
        </Badge>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{writeup.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {writeup.tags.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs bg-secondary/50 text-muted-foreground border-0 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {tag}
          </Badge>
        ))}
        {writeup.tags.length > 3 && (
          <Badge variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground border-0">
            +{writeup.tags.length - 3}
          </Badge>
        )}
      </div>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={writeup.date}>
          {new Date(writeup.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>

      {/* Subtle highlight indicator for hard+ */}
      {difficulty?.animate && (
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" />
      )}
    </article>
  )
}
