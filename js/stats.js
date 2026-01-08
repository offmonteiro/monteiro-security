// ============================================
// STATISTICS CALCULATIONS
// ============================================

/**
 * Calculate statistics from writeups
 */
export function calculateStats(writeups) {
  const platforms = new Set(writeups.map(w => w.platform));
  const techniques = new Set(writeups.flatMap(w => w.tags));
  const hardCount = writeups.filter(
    w => w.difficulty === 'hard' || w.difficulty === 'insane'
  ).length;

  return {
    total: writeups.length,
    platforms: platforms.size,
    techniques: techniques.size,
    hardPlus: hardCount
  };
}
