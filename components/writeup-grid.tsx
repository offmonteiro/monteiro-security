"use client"

import { FileX } from "lucide-react"
import { WriteupCard } from "@/components/writeup-card"
import { useFilteredWriteups } from "@/hooks/use-filtered-writeups"

export function WriteupGrid() {
  const writeups = useFilteredWriteups()

  if (writeups.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
          <FileX className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-base font-semibold text-foreground mb-1">No writeups found</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Try adjusting your search query or filter criteria to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {writeups.map((writeup, index) => (
        <WriteupCard key={`${writeup.title}-${index}`} writeup={writeup} />
      ))}
    </div>
  )
}
