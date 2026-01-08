"use client"

import { useMemo } from "react"
import { writeupsData } from "@/lib/writeups-data"

export function useWriteups() {
  const writeups = writeupsData

  const platforms = useMemo(() => {
    return new Set(writeups.map((w) => w.platform)).size
  }, [writeups])

  const techniques = useMemo(() => {
    const allTags = writeups.flatMap((w) => w.tags)
    return new Set(allTags).size
  }, [writeups])

  const hardCount = useMemo(() => {
    return writeups.filter((w) => w.difficulty === "hard" || w.difficulty === "insane").length
  }, [writeups])

  return {
    writeups,
    platforms,
    techniques,
    hardCount,
  }
}
