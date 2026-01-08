"use client"

import { create } from "zustand"

interface FilterState {
  searchQuery: string
  platform: string
  difficulty: string
  setSearchQuery: (query: string) => void
  setPlatform: (platform: string) => void
  setDifficulty: (difficulty: string) => void
  clearFilters: () => void
}

export const useWriteupFilters = create<FilterState>((set) => ({
  searchQuery: "",
  platform: "all",
  difficulty: "all",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setPlatform: (platform) => set({ platform }),
  setDifficulty: (difficulty) => set({ difficulty }),
  clearFilters: () => set({ searchQuery: "", platform: "all", difficulty: "all" }),
}))
