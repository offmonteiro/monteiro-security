"use client"

import { useMemo } from "react"
import { writeupsData } from "@/lib/writeups-data"
import { useWriteupFilters } from "@/hooks/use-writeup-filters"

export function useFilteredWriteups() {
  const { searchQuery, platform, difficulty } = useWriteupFilters()

  const filteredWriteups = useMemo(() => {
    return writeupsData.filter((writeup) => {
      // Platform filter
      if (platform !== "all" && writeup.platform !== platform) {
        return false
      }

      // Difficulty filter
      if (difficulty !== "all" && writeup.difficulty !== difficulty) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = writeup.title.toLowerCase().includes(query)
        const matchesDescription = writeup.description.toLowerCase().includes(query)
        const matchesTags = writeup.tags.some((tag) => tag.toLowerCase().includes(query))

        if (!matchesTitle && !matchesDescription && !matchesTags) {
          return false
        }
      }

      return true
    })
  }, [searchQuery, platform, difficulty])

  return filteredWriteups
}
