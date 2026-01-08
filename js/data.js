// ============================================
// DATA MANAGEMENT
// ============================================

import { CONFIG } from './config.js';

let writeups = [];

/**
 * Load writeups from JSON file
 */
export async function loadWriteups() {
  try {
    const response = await fetch(CONFIG.dataUrl);
    if (!response.ok) {
      throw new Error('Failed to load writeups');
    }
    const data = await response.json();
    writeups = data.writeups || [];
    return writeups;
  } catch (error) {
    console.error('Error loading writeups:', error);
    throw error;
  }
}

/**
 * Get all writeups
 */
export function getWriteups() {
  return writeups;
}

/**
 * Get unique platforms from writeups
 */
export function getUniquePlatforms() {
  return [...new Set(writeups.map(w => w.platform))];
}

/**
 * Get unique tags from all writeups
 */
export function getUniqueTags() {
  return [...new Set(writeups.flatMap(w => w.tags))];
}
