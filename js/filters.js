// ============================================
// FILTER STATE & LOGIC
// ============================================

const state = {
  platform: 'all',
  difficulty: 'all',
  search: ''
};

/**
 * Get current filter state
 */
export function getFilters() {
  return { ...state };
}

/**
 * Set a filter value
 */
export function setFilter(key, value) {
  if (key in state) {
    state[key] = value;
  }
}

/**
 * Filter writeups based on current state
 */
export function filterWriteups(writeups) {
  return writeups.filter(w => {
    // Platform filter
    const platformMatch = state.platform === 'all' || w.platform === state.platform;

    // Difficulty filter
    const difficultyMatch = state.difficulty === 'all' || w.difficulty === state.difficulty;

    // Search filter
    const searchTerm = state.search.toLowerCase().trim();
    const searchMatch = !searchTerm ||
      w.title.toLowerCase().includes(searchTerm) ||
      w.description.toLowerCase().includes(searchTerm) ||
      w.tags.some(tag => tag.toLowerCase().includes(searchTerm));

    return platformMatch && difficultyMatch && searchMatch;
  });
}
