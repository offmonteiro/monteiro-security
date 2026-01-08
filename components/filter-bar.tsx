"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWriteupFilters } from "@/hooks/use-writeup-filters"

export function FilterBar() {
  const { searchQuery, setSearchQuery, platform, setPlatform, difficulty, setDifficulty, clearFilters } =
    useWriteupFilters()

  const hasActiveFilters = searchQuery || platform !== "all" || difficulty !== "all"

  return (
    <div id="writeups" className="mb-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Recent Writeups</h2>
          <p className="text-sm text-muted-foreground mt-1">Browse and filter security research documentation</p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search writeups, tags, techniques..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border/50 focus:border-primary/50 h-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Dropdowns */}
        <div className="flex gap-2">
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="w-[130px] bg-card border-border/50 h-10">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="htb">HackTheBox</SelectItem>
              <SelectItem value="thm">TryHackMe</SelectItem>
              <SelectItem value="ctf">CTF</SelectItem>
              <SelectItem value="bugbounty">Bug Bounty</SelectItem>
            </SelectContent>
          </Select>

          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="w-[120px] bg-card border-border/50 h-10">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
              <SelectItem value="insane">Insane</SelectItem>
            </SelectContent>
          </Select>

          {/* Clear Filters Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={clearFilters}
            className={`
              h-10 w-10 border-border/50 bg-card
              ${hasActiveFilters ? "border-primary/30 text-primary hover:bg-primary/10" : "hover:bg-secondary"}
            `}
            disabled={!hasActiveFilters}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
